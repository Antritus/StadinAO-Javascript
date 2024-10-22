async function fetchPages() {
  const elements = [];
  let stop = false;
  for (var i = 1; i < 15 && !stop; i++) {
    try {
      const response = await fetch("../page" + i + ".html");
      if (!response.ok) {
        stop = true;
        break;
      }
      const content = await response.text();

      if (!content) {
        stop = true;
        break;
      }
      const fileExists = await fetch("../page" + i + ".html", {
        method: "HEAD",
        cache: "no-store",
      })
        .then((response) => response.status === 200)
        .catch(() => false);

      if (fileExists) {
        const a = document.createElement("a");
        a.setAttribute("href", "../page" + i + ".html");

        const li = document.createElement("li");
        li.textContent = "Sivu " + i;
        a.appendChild(li);

        elements.push(a);
      }
    } catch (error) {
      console.error("Error fetching page:", error);
      stop = true;
    }

    const ul = document.getElementById("pages");
    elements.forEach((element) => ul.appendChild(element));
  }
}

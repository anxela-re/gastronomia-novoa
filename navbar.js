export function createNavbar() {
  let enlace = document.createElement("a");
  enlace.href = "index.html";

  let svgLogo = document.createElement("div");
  svgLogo.innerHTML = createSVG();

  let pageTitle = document.createElement("h1");
  pageTitle.textContent = "Gastronomia Novoa";

  let nav = document.createElement("nav");

  let input = document.createElement("input");
  input.type = "checkbox";
  input.id = "menu-mobile";
  let enlaceMenu = document.createElement("a");
  enlaceMenu.onclick = () => {
    document.querySelector("#menu-mobile").checked =
      !document.querySelector("#menu-mobile").checked;
  };

  let lista = document.createElement("ul");

  lista.appendChild(createItemList("category-mar.html", "Protege el mar"));
  lista.appendChild(createItemList("category-tierra.html", "Cuida la tierra"));
  lista.appendChild(createItemList("conocenos.html", "Conócenos"));

  enlace.append(svgLogo);
  enlace.append(pageTitle);

  nav.appendChild(input);
  nav.appendChild(enlaceMenu);
  nav.appendChild(lista);

  document.getElementById("header").append(enlace);
  document.getElementById("header").append(nav);
}

function createItemList(ref, name) {
  let item = document.createElement("li");
  let enlace = document.createElement("a");
  enlace.href = ref;
  enlace.textContent = name;
  if (
    ref.includes("-")
      ? document.documentURI.includes(ref.split("-")[1])
      : document.documentURI.includes(ref)
  ) {
    item.classList.add("selected");
  }
  item.appendChild(enlace);
  return item;
}

function createSVG() {
  return `<svg viewBox="-1 -1 85 75" height="50" class="logo">
      <g stroke="#fff" stroke-width="3" fill="transparent">
        <line x1="10" y1="30" x2="0" y2="20"></line>
        <line x1="10" y1="37.5" x2="0" y2="27.5"></line>
        <line x1="10" y1="30" x2="20" y2="20"></line>
        <line x1="10" y1="42.5" x2="20" y2="32.5"></line>
        <polyline points="10,50 0,40 0,20 10,10 20,20 20,40 10,50 10,60 10,10"></polyline>

        <line x1="30" y1="15" x2="22.25" y2="7.5"></line>
        <line x1="30" y1="32.5" x2="20" y2="22.5"></line>
        <line x1="30" y1="32.5" x2="20" y2="22.5"></line>
        <line x1="30" y1="20" x2="40" y2="10"></line>
        <line x1="30" y1="32.5" x2="40" y2="22.5"></line>
        <polyline points="30,40 20,30 20,10 30,0 40,10 40,30 30,40 30,50 30,0"></polyline>

        <line x1="50" y1="30" x2="45" y2="25"></line>
        <line x1="50" y1="40" x2="40" y2="30"></line>
        <line x1="50" y1="50" x2="40" y2="40"></line>
        <line x1="50" y1="35" x2="57.5" y2="27.5"></line>
        <line x1="50" y1="50" x2="60" y2="40"></line>
        <polyline points="50,60 40,50 40,30 50,20 60,30 60,50 50,60 50,70 50,20"></polyline>

        <line x1="70" y1="40" x2="60" y2="30"></line>
        <line x1="70" y1="47.5" x2="60" y2="37.5"></line>
        <line x1="70" y1="30" x2="75" y2="25"></line>
        <line x1="70" y1="40" x2="80" y2="30"></line>
        <line x1="70" y1="50" x2="70" y2="40"></line>
        <line x1="70" y1="50" x2="80" y2="40"></line>
        <polyline points="70,60 60,50 60,30 70,20 80,30 80,50 70,60 70,70 70,20"></polyline>
      </g>
    </svg>`;
}

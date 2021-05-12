export function createNavbar() {
  let enlace = document.createElement("a");
  enlace.href = "index.html";

  let svgLogo = document.createElement("div");
  svgLogo.innerHTML = createSVG();

  let pageTitle = document.createElement("h1");
  pageTitle.textContent = "Gastornomia Novoa";

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
    <defs>
      <polyline id="contornohoja" points="10,40 0,30 0,10 10,0 20,10 20,30 10,40 10,50 10,0"></polyline>
      <line id="left" x1="10" y1="10" x2="0" y2="0"></line>
      <line id="right" x1="0" y1="10" x2="10" y2="0"></line>
    </defs>
    <g stroke="#fff" stroke-width="3" fill="transparent">
      <use xlink:href="#left" x="0" y="20" />
      <use xlink:href="#left" x="0" y="27.5" />
      <use xlink:href="#right" x="10" y="20" />
      <use xlink:href="#right" x="10" y="32.5" />
      <use xlink:href="#contornohoja" x="0" y="10" />
    
      <line x1="30" y1="15" x2="22.25" y2="7.5"></line>
      <use xlink:href="#left" x="20" y="22.5" />
      <use xlink:href="#right" x="30" y="10" />
      <use xlink:href="#right" x="30" y="22.5" />
      <use xlink:href="#contornohoja" x="20" y="0" />
    
      <line x1="50" y1="30" x2="45" y2="25"></line>
      <use xlink:href="#left" x="40" y="30" />
      <use xlink:href="#left" x="40" y="40" />
      <line x1="50" y1="35" x2="57.5" y2="27.5"></line>
      <use xlink:href="#right" x="50" y="40" />
      <use xlink:href="#contornohoja" x="40" y="20" />
    
      <use xlink:href="#left" x="60" y="30" />
      <use xlink:href="#left" x="60" y="37.5" />
      <line x1="70" y1="30" x2="75" y2="25"></line>
      <use xlink:href="#right" x="70" y="30" />
      <use xlink:href="#right" x="70" y="40" />
      <use xlink:href="#right" x="70" y="40" />
      <use xlink:href="#contornohoja" x="60" y="20" />
    </g>
    </svg>`;
}

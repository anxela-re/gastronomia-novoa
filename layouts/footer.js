window.addEventListener("load", () => {
  let footer = document.getElementById("footer");

  footer.appendChild(createContactoContainer());
  footer.appendChild(createSocialMenu());
  footer.appendChild(formContainer());
  footer.appendChild(copyrightContainer());
});

function copyrightContainer() {
  let containerCopyright = document.createElement("div");
  containerCopyright.classList.add("copyrigth");
  let par = document.createElement("p");
  par.innerHTML = `2021 &copy; Diseñado y realizado por Anxela Redondo. Consultar `;
  let enlaceReferences = document.createElement("a");
  enlaceReferences.textContent = "fuentes del contenido";
  enlaceReferences.href = "../pages/references.html";

  par.appendChild(enlaceReferences);
  containerCopyright.appendChild(par);
  return containerCopyright;
}
function formContainer() {
  let containerForm = document.createElement("div");
  let form = document.createElement("form");

  form.appendChild(insertFormGroup("name", "Nombre", "text", "Nombre", true));
  form.appendChild(
    insertFormGroup(
      "email",
      "Correo electrónico",
      "email",
      "Correo electrónico",
      true
    )
  );
  form.appendChild(
    insertFormGroup(
      "mensaje",
      "Mensaje",
      "textarea",
      "Escriba aquí su mensaje",
      true
    )
  );
  form.appendChild(
    insertFormGroup(
      "accept",
      "He leído y acepto la política de privacidad",
      "checkbox",
      "",
      true
    )
  );
  let buttonSubmit = document.createElement("input");
  buttonSubmit.type = "submit";
  buttonSubmit.value = "Enviar";
  form.appendChild(buttonSubmit);
  containerForm.appendChild(form);
  return containerForm;
}
function insertFormGroup(id, label, inputType, placeholder, required) {
  let containerFormGourp = document.createElement("div");
  let labelEl = document.createElement("label");
  labelEl.for = id;
  labelEl.textContent = label;

  if (inputType === "textarea") {
    let textarea = document.createElement("textarea");
    textarea.placeholder = placeholder;
    textarea.required = required;
    textarea.name = id;
    textarea.id = id;
    textarea.cols = 30;
    textarea.rows = 10;
    containerFormGourp.appendChild(labelEl);
    containerFormGourp.appendChild(textarea);
  } else {
    let input = document.createElement("input");
    input.type = inputType;
    input.id = id;
    input.required = required;
    if (inputType === "checkbox") {
      input.value = id;
      input.name = id;
      containerFormGourp.appendChild(input);
      containerFormGourp.appendChild(labelEl);
    } else {
      input.placeholder = placeholder;
      containerFormGourp.appendChild(labelEl);
      containerFormGourp.appendChild(input);
    }
  }

  return containerFormGourp;
}

function createSocialMenu() {
  let item, enlace, icon;
  const containerSocial = document.createElement("div");
  const list = document.createElement("ul");
  const items = ["facebook", "twitter", "instagram", "pinterest", "youtube"];
  items.forEach((i) => {
    item = document.createElement("li");
    enlace = document.createElement("a");
    icon = document.createElement("i");
    let classes = ["fa", "fa-2x", "fab", `fa-${i}`, "underline"];
    classes.map((classItem) => icon.classList.add(classItem));
    enlace.appendChild(icon);
    item.appendChild(enlace);
    list.appendChild(item);
  });
  containerSocial.appendChild(list);
  return containerSocial;
}
function createContactoContainer() {
  let containerContacto = document.createElement("div");
  containerContacto.id = "contacto";
  let titulo = document.createElement("h2");
  titulo.textContent = "Contacta con nosotras";
  let paragraph = document.createElement("p");
  paragraph.textContent = `Conoce más nuestras gastronomía y forma parte de ella, contacta con
    nosotras si te gustaría participar en este nueva forma de ver tu
    comida.`;

  let svgLogo = document.createElement("div");
  svgLogo.innerHTML = createSVG();

  containerContacto.appendChild(titulo);
  containerContacto.appendChild(paragraph);
  containerContacto.appendChild(svgLogo);
  return containerContacto;
}

function createSVG() {
  return `<svg viewBox="-1 -1 85 75" height="100" class="logo">
      <defs>
        <polyline id="contornohoja" points="10,40 0,30 0,10 10,0 20,10 20,30 10,40 10,50 10,0"></polyline>
        <line id="left" x1="10" y1="10" x2="0" y2="0"></line>
        <line id="right" x1="0" y1="10" x2="10" y2="0"></line>
      </defs>
      <g stroke="#000" stroke-width="3" fill="transparent">
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
function getSVG() {
  return `<defs>
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
      </g>`;
}

export function createFooter() {
  let footer = document.getElementById("footer");

  footer.appendChild(createContactoContainer());
  footer.appendChild(createSocialMenu());
  footer.appendChild(formContainer());
  footer.appendChild(copyrightContainer());
}

function copyrightContainer() {
  let containerCopyright = document.createElement("div");
  containerCopyright.classList.add("copyrigth");
  let par = document.createElement("p");
  par.innerHTML = `2021 &copy; Diseñado y realizado por Anxela Redondo. Consultar `;
  let enlaceReferences = document.createElement("a");
  enlaceReferences.textContent = "fuentes del contenido";
  enlaceReferences.href = "references.html";

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
  return `<svg viewBox="-1 -1 85 75" height="100" class="logo" loading="lazy">
      <g stroke="#000" stroke-width="3" fill="transparent">
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

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFooter = createFooter;

function createFooter() {
  var footer = document.getElementById("footer");
  footer.appendChild(createContactoContainer());
  footer.appendChild(createSocialMenu());
  footer.appendChild(formContainer());
  footer.appendChild(copyrightContainer());
}

function copyrightContainer() {
  var containerCopyright = document.createElement("div");
  containerCopyright.classList.add("copyrigth");
  var par = document.createElement("p");
  par.innerHTML = "2021 &copy; Dise\xF1ado y realizado por Anxela Redondo. Consultar ";
  var enlaceReferences = document.createElement("a");
  enlaceReferences.textContent = "fuentes del contenido";
  enlaceReferences.href = "references.html";
  par.appendChild(enlaceReferences);
  containerCopyright.appendChild(par);
  return containerCopyright;
}

function formContainer() {
  var containerForm = document.createElement("div");
  var form = document.createElement("form");
  form.appendChild(insertFormGroup("name", "Nombre", "text", "Nombre", true));
  form.appendChild(insertFormGroup("email", "Correo electrónico", "email", "Correo electrónico", true));
  form.appendChild(insertFormGroup("mensaje", "Mensaje", "textarea", "Escriba aquí su mensaje", true));
  form.appendChild(insertFormGroup("accept", "He leído y acepto la política de privacidad", "checkbox", "", true));
  var buttonSubmit = document.createElement("input");
  buttonSubmit.type = "submit";
  buttonSubmit.value = "Enviar";
  form.appendChild(buttonSubmit);
  containerForm.appendChild(form);
  return containerForm;
}

function insertFormGroup(id, label, inputType, placeholder, required) {
  var containerFormGourp = document.createElement("div");
  var labelEl = document.createElement("label");
  labelEl.for = id;
  labelEl.textContent = label;

  if (inputType === "textarea") {
    var textarea = document.createElement("textarea");
    textarea.placeholder = placeholder;
    textarea.required = required;
    textarea.name = id;
    textarea.id = id;
    textarea.cols = 30;
    textarea.rows = 10;
    containerFormGourp.appendChild(labelEl);
    containerFormGourp.appendChild(textarea);
  } else {
    var input = document.createElement("input");
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
  var item, enlace, icon;
  var containerSocial = document.createElement("div");
  var list = document.createElement("ul");
  var items = ["facebook", "twitter", "instagram", "pinterest", "youtube"];
  items.forEach(function (i) {
    item = document.createElement("li");
    enlace = document.createElement("a");
    icon = document.createElement("i");
    var classes = ["fa", "fa-2x", "fab", "fa-".concat(i), "underline"];
    classes.map(function (classItem) {
      return icon.classList.add(classItem);
    });
    enlace.appendChild(icon);
    item.appendChild(enlace);
    list.appendChild(item);
  });
  containerSocial.appendChild(list);
  return containerSocial;
}

function createContactoContainer() {
  var containerContacto = document.createElement("div");
  containerContacto.id = "contacto";
  var titulo = document.createElement("h2");
  titulo.textContent = "Contacta con nosotras";
  var paragraph = document.createElement("p");
  paragraph.textContent = "Conoce m\xE1s nuestras gastronom\xEDa y forma parte de ella, contacta con\n    nosotras si te gustar\xEDa participar en este nueva forma de ver tu\n    comida.";
  var svgLogo = document.createElement("div");
  svgLogo.innerHTML = createSVG();
  containerContacto.appendChild(titulo);
  containerContacto.appendChild(paragraph);
  containerContacto.appendChild(svgLogo);
  return containerContacto;
}

function createSVG() {
  return "<svg viewBox=\"-1 -1 85 75\" height=\"100\" class=\"logo\">\n      <defs>\n        <polyline id=\"contornohoja\" points=\"10,40 0,30 0,10 10,0 20,10 20,30 10,40 10,50 10,0\"></polyline>\n        <line id=\"left\" x1=\"10\" y1=\"10\" x2=\"0\" y2=\"0\"></line>\n        <line id=\"right\" x1=\"0\" y1=\"10\" x2=\"10\" y2=\"0\"></line>\n      </defs>\n      <g stroke=\"#000\" stroke-width=\"3\" fill=\"transparent\">\n        <use xlink:href=\"#left\" x=\"0\" y=\"20\" />\n        <use xlink:href=\"#left\" x=\"0\" y=\"27.5\" />\n        <use xlink:href=\"#right\" x=\"10\" y=\"20\" />\n        <use xlink:href=\"#right\" x=\"10\" y=\"32.5\" />\n        <use xlink:href=\"#contornohoja\" x=\"0\" y=\"10\" />\n      \n        <line x1=\"30\" y1=\"15\" x2=\"22.25\" y2=\"7.5\"></line>\n        <use xlink:href=\"#left\" x=\"20\" y=\"22.5\" />\n        <use xlink:href=\"#right\" x=\"30\" y=\"10\" />\n        <use xlink:href=\"#right\" x=\"30\" y=\"22.5\" />\n        <use xlink:href=\"#contornohoja\" x=\"20\" y=\"0\" />\n      \n        <line x1=\"50\" y1=\"30\" x2=\"45\" y2=\"25\"></line>\n        <use xlink:href=\"#left\" x=\"40\" y=\"30\" />\n        <use xlink:href=\"#left\" x=\"40\" y=\"40\" />\n        <line x1=\"50\" y1=\"35\" x2=\"57.5\" y2=\"27.5\"></line>\n        <use xlink:href=\"#right\" x=\"50\" y=\"40\" />\n        <use xlink:href=\"#contornohoja\" x=\"40\" y=\"20\" />\n      \n        <use xlink:href=\"#left\" x=\"60\" y=\"30\" />\n        <use xlink:href=\"#left\" x=\"60\" y=\"37.5\" />\n        <line x1=\"70\" y1=\"30\" x2=\"75\" y2=\"25\"></line>\n        <use xlink:href=\"#right\" x=\"70\" y=\"30\" />\n        <use xlink:href=\"#right\" x=\"70\" y=\"40\" />\n        <use xlink:href=\"#right\" x=\"70\" y=\"40\" />\n        <use xlink:href=\"#contornohoja\" x=\"60\" y=\"20\" />\n      </g>\n      </svg>";
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62852" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","footer.js"], null)
//# sourceMappingURL=/footer.ef929a17.js.map
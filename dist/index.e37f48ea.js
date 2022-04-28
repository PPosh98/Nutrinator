// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ddCAb":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _mealsViewJs = require("./views/mealsView.js");
var _mealsViewJsDefault = parcelHelpers.interopDefault(_mealsViewJs);
var _addMealViewJs = require("./views/addMealView.js");
var _addMealViewJsDefault = parcelHelpers.interopDefault(_addMealViewJs);
var _editMealViewJs = require("./views/editMealView.js");
var _editMealViewJsDefault = parcelHelpers.interopDefault(_editMealViewJs);
var _selectedMealsViewJs = require("./views/selectedMealsView.js");
var _selectedMealsViewJsDefault = parcelHelpers.interopDefault(_selectedMealsViewJs);
var _unselectedMealsViewJs = require("./views/unselectedMealsView.js");
var _unselectedMealsViewJsDefault = parcelHelpers.interopDefault(_unselectedMealsViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _caloriesViewJs = require("./views/caloriesView.js");
var _caloriesViewJsDefault = parcelHelpers.interopDefault(_caloriesViewJs);
var _addCaloriesViewJs = require("./views/addCaloriesView.js");
var _addCaloriesViewJsDefault = parcelHelpers.interopDefault(_addCaloriesViewJs);
const addMealView = new _addMealViewJsDefault.default();
const controlAddCalories = function(calories) {
    _modelJs.calcUserNutrition(calories);
    _addCaloriesViewJsDefault.default.renderMessage();
};
const controlMeals = function() {
    _caloriesViewJsDefault.default.render(_modelJs.state.userNutrition.calories);
    renderMeals();
    _addMealViewJsDefault.default.mealId = _modelJs.state.meals.id;
};
const controlCreateMeal = function(searchParamsStrArr, searchParamsStr) {
    _modelJs.createMeal(searchParamsStrArr, searchParamsStr);
    addMealView.renderMessage();
    renderMeals();
};
const controlGetNutrition = async function() {
    await _modelJs.showNutrition();
    _resultsViewJsDefault.default.render(_modelJs.state.allNutrition);
};
const controlOperations = function(operation, mealData) {
    const controlEditMeal = ()=>{
        _editMealViewJsDefault.default.openWindow(mealData);
    };
    const controlDeleteMeal = ()=>_modelJs.deleteMeal(mealData)
    ;
    const controlRemoveFromMeal = ()=>_modelJs.moveMeal(mealData)
    ;
    const controlAddToMeal = ()=>_modelJs.moveMeal(mealData)
    ;
    const handleClick = {
        "meal-edit": controlEditMeal,
        "meal-bin": controlDeleteMeal,
        "meal-remove": controlRemoveFromMeal,
        "meal-add": controlAddToMeal
    };
    handleClick[operation]();
    renderMeals();
};
const controlUpdateMeal = function(mealData) {
    _modelJs.editMeal(mealData);
    _editMealViewJsDefault.default.renderMessage();
    renderMeals();
};
const controlGetMealsNutrition = function() {
// Get total nutrition value of all meals
// Render mealsNutritionView
};
const controlGetComparison = function() {
// Compare userNutrition data with mealsNutrition data and show results
};
const renderMeals = function() {
    _selectedMealsViewJsDefault.default.render(_modelJs.state.meals.selectedMeals);
    _unselectedMealsViewJsDefault.default.render(_modelJs.state.meals.unselectedMeals);
};
const init = function() {
    _mealsViewJsDefault.default.addHandlerRender(controlMeals);
    _mealsViewJsDefault.default.addHandlerGetNutrition(controlGetNutrition);
    _addCaloriesViewJsDefault.default.addHandlerAddCalories(controlAddCalories);
    _mealsViewJsDefault.default.addHandlerControls(controlOperations);
    _editMealViewJsDefault.default.addHandlerUpdateMeal(controlUpdateMeal);
    addMealView.addHandlerCreateMeal(controlCreateMeal);
};
init();

},{"./model.js":"Y4A21","./views/mealsView.js":"gHuNv","./views/addMealView.js":"fU3t2","./views/editMealView.js":"kNMQP","./views/selectedMealsView.js":"9iq1n","./views/unselectedMealsView.js":"ddHZI","./views/resultsView.js":"cSbZE","./views/caloriesView.js":"al7RN","./views/addCaloriesView.js":"kJgPY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "showNutrition", ()=>showNutrition
);
parcelHelpers.export(exports, "createMeal", ()=>createMeal
);
parcelHelpers.export(exports, "moveMeal", ()=>moveMeal
);
parcelHelpers.export(exports, "deleteMeal", ()=>deleteMeal
);
parcelHelpers.export(exports, "editMeal", ()=>editMeal
);
parcelHelpers.export(exports, "calcUserNutrition", ()=>calcUserNutrition
);
const RAPIDKEY = "d9a2df86c9msh3b2e2eae8db07e7p12b659jsn624e4569d224";
const SPKey = "6079577d1f3348e2a518bb9972c92fa7";
const state = {
    allNutrition: [],
    userNutrition: {
    },
    mealsNutrition: [],
    totalNutrition: {
    },
    meals: {
        selectedMeals: [],
        unselectedMeals: [],
        id: 0
    },
    ingredientList: []
};
const nutrObj = {
    calories: "",
    protein: "",
    fat: "",
    carbohydrates: "",
    fiber: "",
    sugar: "",
    sodium: "",
    cholesterol: "",
    iron: "",
    potassium: "",
    calcium: "",
    vitamin_d: ""
};
const showNutrition = async function() {
    try {
        state.ingredientList = [];
        state.meals.selectedMeals.forEach(function(meal) {
            meal.ingredientList.forEach(function(ingredient) {
                let ingreArray = ingredient.split("+");
                ingreArray.splice(0, 1, String(Number(ingreArray[0]) / meal.servings));
                state.ingredientList.push(ingreArray.join("+"));
            });
            console.log(state.ingredientList);
        });
        const ingredientList = `ingredientList=${state.ingredientList.join("%0A")}`;
        const res = await fetch(`https://api.spoonacular.com/recipes/parseIngredients?includeNutrition=true&apiKey=${SPKey}`, {
            method: "POST",
            body: ingredientList
        });
        const data = await res.json();
        data.forEach(function(ingredient) {
            ingredient.nutrition.nutrients.forEach(function(nutrient) {
                Object.hasOwn(nutrObj, nutrient.name.toLowerCase().replace(" ", "_")) && state.mealsNutrition.push(nutrient);
            });
        });
        console.log(state.mealsNutrition);
        state.totalNutrition = groupBy(state.mealsNutrition, "name");
        console.log(state.totalNutrition);
        state.allNutrition = state.totalNutrition.map((nutrient)=>{
            return {
                nutrient: nutrient.name,
                unit: nutrient.unit,
                mealsAmount: nutrient.amount.toFixed(2),
                userReqAmount: state.userNutrition[nutrient.name.toLowerCase().replace(" ", "_")]
            };
        });
        console.log(state.allNutrition);
        console.log(data);
    } catch (error) {
        alert(error);
    }
};
const createMeal = function(searchParamsStrArr, searchParamsStr) {
    state.meals.selectedMeals.push({
        id: Number(searchParamsStrArr[0].substring(3)),
        mealName: searchParamsStrArr[1].substring(10).replaceAll("+", " "),
        servings: Number(searchParamsStrArr[2].substring(14)),
        ingredientList: searchParamsStrArr[3].substring(17).split("%0A"),
        searchParamsStr: searchParamsStr
    });
    state.meals.id = state.meals.selectedMeals.at(-1).id + 1;
    persistMeals();
};
const moveMeal = function(mealData) {
    const mealDataArr = mealData.split("&");
    const id = Number(mealDataArr[0].substring(3));
    let objectIndex = state.meals.selectedMeals.findIndex((meal)=>meal.id === id
    );
    if (objectIndex !== -1) state.meals.unselectedMeals.push(...state.meals.selectedMeals.splice(objectIndex, 1));
    else {
        objectIndex = state.meals.unselectedMeals.findIndex((meal)=>meal.id === id
        );
        state.meals.selectedMeals.push(...state.meals.unselectedMeals.splice(objectIndex, 1));
    }
    persistMeals();
};
const deleteMeal = function(mealData) {
    const mealDataArr = mealData.split("&");
    const id = Number(mealDataArr[0].substring(3));
    let objectIndex = state.meals.selectedMeals.findIndex((meal)=>meal.id === id
    );
    if (objectIndex !== -1) state.meals.selectedMeals.splice(objectIndex, 1);
    else {
        objectIndex = state.meals.unselectedMeals.findIndex((meal)=>meal.id === id
        );
        state.meals.unselectedMeals.splice(objectIndex, 1);
    }
    persistMeals();
};
const editMeal = function(mealData) {
    const mealDataArr = mealData.split("&");
    const mealName = mealDataArr[1].substring(10).replaceAll("+", " ");
    const servings = Number(mealDataArr[2].substring(14));
    const ingredientList = mealDataArr[3].substring(17).split("%0A");
    const id = Number(mealDataArr[0].substring(3));
    let objectIndex = state.meals.selectedMeals.findIndex((meal)=>meal.id === id
    );
    if (objectIndex !== -1) {
        state.meals.selectedMeals.at(objectIndex).mealName = mealName;
        state.meals.selectedMeals.at(objectIndex).servings = servings;
        state.meals.selectedMeals.at(objectIndex).ingredientList = ingredientList;
        state.meals.selectedMeals.at(objectIndex).searchParamsStr = mealData;
    } else {
        objectIndex = state.meals.unselectedMeals.findIndex((meal)=>meal.id === id
        );
        state.meals.unselectedMeals.at(objectIndex).mealName = mealName;
        state.meals.unselectedMeals.at(objectIndex).servings = servings;
        state.meals.unselectedMeals.at(objectIndex).ingredientList = ingredientList;
        state.meals.unselectedMeals.at(objectIndex).searchParamsStr = mealData;
    }
    persistMeals();
};
const calcUserNutrition = function(calories) {
    const proteinLow = (calories * 0.1 / 4).toFixed(2);
    const proteinHigh = (calories * 0.35 / 4).toFixed(2);
    console.log("Protein: " + proteinLow + "-" + proteinHigh);
    const fibre = (calories * 0.014).toFixed(2);
    console.log("Fibre: " + fibre);
    const fat = (calories * 0.3 / 9).toFixed(2);
    console.log("Fat: " + fat);
    const carbsLow = (calories * 0.45 / 4).toFixed(2);
    const carbsHigh = (calories * 0.65 / 4).toFixed(2);
    console.log("Carbs: " + carbsLow + "-" + carbsHigh);
    state.userNutrition = {
        calories: calories,
        protein: `${proteinLow}-${proteinHigh}`,
        fat: fat,
        carbohydrates: `${carbsLow}-${carbsHigh}`,
        fiber: `${fibre}^`,
        sugar: `${30}*`,
        sodium: `${500}-${2300}`,
        cholesterol: `${200}*`,
        iron: `${8.7}-${14.8}~`,
        potassium: `${3500}-${4700}`,
        calcium: `${700}-${1300}`,
        vitamin_d: `${25}-${50}`
    };
    persistUserNutrition();
};
const persistUserNutrition = function() {
    localStorage.setItem("userNutrition", JSON.stringify(state.userNutrition));
};
const persistMeals = function() {
    localStorage.setItem("meals", JSON.stringify(state.meals));
};
const groupBy = function(arr, key) {
    return arr.sort((a, b)=>a[key].localeCompare(b[key])
    ).reduce((total, currentValue)=>{
        const newTotal = total;
        if (total.length && total[total.length - 1][key] === currentValue[key]) newTotal[total.length - 1] = {
            ...total[total.length - 1],
            ...currentValue,
            amount: total[total.length - 1].amount + currentValue.amount
        };
        else newTotal[total.length] = currentValue;
        return newTotal;
    }, []);
};
const init = function() {
    const storedUserNutrition = localStorage.getItem("userNutrition");
    if (storedUserNutrition) state.userNutrition = JSON.parse(storedUserNutrition);
    const storedMeals = localStorage.getItem("meals");
    if (storedMeals) state.meals = JSON.parse(storedMeals);
};
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gHuNv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class MealsView extends _viewJsDefault.default {
    #errorMessage = "You don't have any meals here, create one now by clicking the 'Create Meal' button!";
    #parentElement = document.getElementById("views");
    constructor(){
        super();
        this.getParentElement().innerHTML = this.getMarkup();
    }
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    addHandlerGetNutrition(handler) {
        const btnNutritionalise = document.getElementById("btn-nutritionalise");
        btnNutritionalise.addEventListener("click", handler);
    }
    addHandlerControls(handler) {
        const meals = document.getElementById("meals");
        meals.addEventListener("click", function(e) {
            if (e.target.classList.contains("meal-icon")) handler(e.target.id, e.target.closest("div .meal").dataset.meal);
        });
    }
     #generateMarkup() {
        return `
      <div id="my-meals-view">
        <div id="greetings-section">
          <h1 id="greeting">Hi, welcome!</h1>
          <span
            >Begin by entering your calories requirement by clicking the Edit button, then create
            some meals and finally get their nutritional data by hitting the
            NUTRITIONALISE button!
          </span>
        </div>
        <div id="calories-section">
          <p>My calories requirement:</p>
          <div id="calories"></div>
          <button id="btn-edit" class="btn-submit">Edit</button>
        </div>
        <div id="meals">
          <div id="selected-meals-section">
            <span id="header-selected-meals"><b>Selected Meals</b></span>
            <button id="btn-nutritionalise" class="btn-submit">NUTRITIONALISE</button>
            <button id="btn-create-meal" class="btn-submit">Create Meal</button>
            <hr class="horizontal-lines" />
            <div id="selected-meals"></div>
          </div>
          <div id="meals-repo-section">
            <span id="header-meals-repo"><b>Meals Repository</b></span>
            <hr class="horizontal-lines" />
            <div id="meals-repo"></div>
          </div>
        </div>
      </div>`;
    }
    getMarkup() {
        return this.#generateMarkup();
    }
    getParentElement() {
        return this.#parentElement;
    }
    getErrorMessage() {
        return this.#errorMessage;
    }
}
exports.default = new MealsView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    // #parentElement = document.querySelector("body");
    #data;
    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this.setData(data);
        const markup = this.getMarkup();
        this.clear();
        this.getParentElement().insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        this.setData(data);
        const newMarkup = this.getMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this.getParentElement().querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // console.log(curEl, newEl.isEqualNode(curEl));
            // Updates changed TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") // console.log('💥', newEl.firstChild.nodeValue.trim());
            curEl.textContent = newEl.textContent;
            // Updates changed ATTRIBUES
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value)
            );
        });
    }
    clear() {
        this.getParentElement().innerHTML = "";
    }
    renderSpinner() {
    }
    renderError(message = this.getErrorMessage()) {
        const markup = `<p>${message}</p>`;
        this.clear();
        this.getParentElement().insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this.getMessage()) {
        const markup = `
      <p>${message}</p>
    `;
        this.getMessageDiv().innerHTML = markup;
        this.getMessageDiv().classList.toggle("hidden");
        setTimeout(()=>{
            this.getMessageDiv().classList.toggle("hidden");
        }, 3000);
    }
    setData(data) {
        this.#data = data;
    }
    getData() {
        return this.#data;
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fU3t2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class AddMealView extends _viewJsDefault.default {
    #parentElement = document.getElementById("form-create-meal");
    #message = "Meal was created successfully! 🥳";
    #window = document.getElementById("create-meal-window");
    #overlay = document.getElementById("overlay-create");
    #btnOpen = document.getElementById("btn-create-meal");
    #btnClose = document.getElementById("btn-close-create");
    #messageDiv = document.getElementById("message-create");
    #inputMealName = document.getElementById("meal-name-create");
    #inputServings = document.getElementById("servings-create");
    #inputIngredients = document.getElementById("ingredients-create");
    #searchParamsStr;
    static mealId = 0;
    constructor(){
        super();
        this.#addHandlerShowWindow();
        this.#addHandlerHideWindow();
    }
    toggleWindow() {
        this.#overlay.classList.toggle("hidden");
        this.#window.classList.toggle("hidden");
    }
     #addHandlerShowWindow() {
        this.#btnOpen.addEventListener("click", this.toggleWindow.bind(this));
    }
     #addHandlerHideWindow() {
        this.#btnClose.addEventListener("click", this.toggleWindow.bind(this));
        this.#overlay.addEventListener("click", this.toggleWindow.bind(this));
    }
    addHandlerCreateMeal(handler) {
        this.getParentElement().addEventListener("submit", (e)=>{
            e.preventDefault();
            const formData = new FormData(this.getParentElement());
            const searchParams = new URLSearchParams();
            for (const pair of formData)searchParams.append(pair[0], pair[1]);
            this.#searchParamsStr = `id=${AddMealView.mealId++}&${searchParams.toString()}`;
            const searchParamsStrArr = this.#searchParamsStr.split("&");
            handler(searchParamsStrArr, this.#searchParamsStr);
            this.#inputIngredients.value = "";
            this.#inputMealName.value = "";
            this.#inputServings.value = "";
        });
    }
    getParentElement() {
        return this.#parentElement;
    }
    getMessage() {
        return this.#message;
    }
    getMessageDiv() {
        return this.#messageDiv;
    }
}
exports.default = AddMealView;

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNMQP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class EditMealView extends _viewJsDefault.default {
    #parentElement = document.getElementById("form-update-meal");
    #message = "Meal was updated successfully! 🎉";
    #window = document.getElementById("update-meal-window");
    #overlay = document.getElementById("overlay-update");
    #btnClose = document.getElementById("btn-close-update");
    #inputMealName = document.getElementById("meal-name-update");
    #inputServings = document.getElementById("servings-update");
    #inputIngredients = document.getElementById("ingredients-update");
    #messageDiv = document.getElementById("message-update");
    #searchParamsStr;
    #mealId;
    constructor(){
        super();
        this.#addHandlerHideWindow();
    }
    openWindow(mealData) {
        const searchParamsStrArr = mealData.split("&");
        this.#mealId = Number(searchParamsStrArr[0].substring(3));
        const mealName = searchParamsStrArr[1].substring(10).replaceAll("+", " ");
        const servings = Number(searchParamsStrArr[2].substring(14));
        const ingredientList = searchParamsStrArr[3].substring(17).split("%0A");
        this.toggleWindow();
        const ingredients = ingredientList.map((ingredient)=>{
            return ingredient.replaceAll("+", " ");
        }).join("\n");
        this.#inputIngredients.value = ingredients;
        this.#inputMealName.value = mealName;
        this.#inputServings.value = servings;
    }
    toggleWindow() {
        this.#overlay.classList.toggle("hidden");
        this.#window.classList.toggle("hidden");
    }
     #addHandlerHideWindow() {
        this.#btnClose.addEventListener("click", this.toggleWindow.bind(this));
        this.#overlay.addEventListener("click", this.toggleWindow.bind(this));
    }
    addHandlerUpdateMeal(handler) {
        this.getParentElement().addEventListener("submit", (e)=>{
            e.preventDefault();
            const formData = new FormData(this.getParentElement());
            const searchParams = new URLSearchParams();
            for (const pair of formData)searchParams.append(pair[0], pair[1]);
            this.#searchParamsStr = `id=${this.#mealId}&${searchParams.toString()}`;
            handler(this.#searchParamsStr);
        });
    }
    getParentElement() {
        return this.#parentElement;
    }
    getMessage() {
        return this.#message;
    }
    getMessageDiv() {
        return this.#messageDiv;
    }
}
exports.default = new EditMealView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9iq1n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class SelectedMealsView extends _viewJsDefault.default {
    #parentElement = document.getElementById("selected-meals");
    #errorMessage = "You don't have any meals here, add one from the repository below or create one now by clicking the 'Create Meal' button!";
     #generateMarkup() {
        return this.getData().map((meal)=>{
            this.setData(meal);
            return this.getMealMarkup();
        }).join("");
    }
    getMarkup() {
        return this.#generateMarkup();
    }
     #generateMealMarkup() {
        return `
      <div class="meal" data-meal="${this.getData().searchParamsStr}">
        <span class="meal-name">${this.getData().mealName}</span>
        <div id="meal-icons">
          <img
            id="meal-edit"
            class="meal-icon"
            src="src/img/icons/edit.png"
            alt="edit"
            title="Edit Meal"
          />
          <img
            id="meal-bin"
            class="meal-icon"
            src="src/img/icons/bin.png"
            alt="bin"
            title="Delete Meal"
          />
          <img
            id="meal-remove"
            class="meal-icon"
            src="src/img/icons/minus.png"
            alt="remove"
            title="Move to Meals Repository"
          />
        </div>
      </div>`;
    }
    getMealMarkup() {
        return this.#generateMealMarkup();
    }
    getParentElement() {
        return this.#parentElement;
    }
    getErrorMessage() {
        return this.#errorMessage;
    }
}
exports.default = new SelectedMealsView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ddHZI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class UnselectedMealsView extends _viewJsDefault.default {
    #parentElement = document.getElementById("meals-repo");
    #errorMessage = "No meals to be found here...";
     #generateMarkup() {
        return this.getData().map((meal)=>{
            this.setData(meal);
            return this.getMealMarkup();
        }).join("");
    }
    getMarkup() {
        return this.#generateMarkup();
    }
     #generateMealMarkup() {
        return `
      <div class="meal" data-meal="${this.getData().searchParamsStr}">
        <span class="meal-name">${this.getData().mealName}</span>
        <div id="meal-icons">
          <img
            id="meal-edit"
            class="meal-icon"
            src="src/img/icons/edit.png"
            alt="edit"
            title="Edit Meal"
          />
          <img
            id="meal-bin"
            class="meal-icon"
            src="src/img/icons/bin.png"
            alt="bin"
            title="Delete Meal"
          />
          <img
            id="meal-add"
            class="meal-icon"
            src="src/img/icons/add.png"
            alt="add"
            title="Add to Selected Meals"
          />
        </div>
      </div>`;
    }
    getMealMarkup() {
        return this.#generateMealMarkup();
    }
    getParentElement() {
        return this.#parentElement;
    }
    getErrorMessage() {
        return this.#errorMessage;
    }
}
exports.default = new UnselectedMealsView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ResultsView extends _viewJsDefault.default {
    #errorMessage = "You don't have any meals here, create one now by clicking the 'Create Meal' button!";
    #parentElement = document.getElementById("views");
    constructor(){
        super();
        this.drawChart();
    }
    drawChart() {
        google.charts.load("current", {
            packages: [
                "corechart"
            ]
        });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                [
                    "Task",
                    "Hours per Day"
                ],
                [
                    "Work",
                    11
                ]
            ]);
            var options1 = {
                pieHole: 0.7,
                backgroundColor: "white",
                chartArea: {
                    width: 170,
                    height: 170
                },
                width: 200,
                height: 200,
                legend: {
                    position: "top",
                    alignment: "center"
                }
            };
            var options2 = {
                pieHole: 0.7,
                backgroundColor: "white",
                chartArea: {
                    width: 170,
                    height: 170
                },
                width: 200,
                height: 200,
                legend: {
                    position: "top",
                    alignment: "center"
                }
            };
            var chart1 = new google.visualization.PieChart(document.getElementById("donutchart1"));
            chart1.draw(data, options1);
            var chart2 = new google.visualization.PieChart(document.getElementById("donutchart2"));
            chart2.draw(data, options2);
        }
    }
     #generateMarkup() {
        return `
			<div id="results-view">
				<div id="charts">
					<div id="donutchart1" class="chart"></div>
					<div id="donutchart2" class="chart"></div>
				</div>
				<h2 id="header-nutrition-table">Table of Nutrition</h3>
				<table id="nutrition-table">
					<thead>
						<tr>
							<th>You Require</th>
							<th>Nutrient(unit)</th>
							<th>You Consume</th>
						</tr>
					</thead>
					<tbody>
            ${this.getData().map(this.#generateRowMarkup).join("")}
					</tbody>
				</table>
				<button class="btn-submit">Select Other Meal(s)</button>
			</div>`;
    }
    getMarkup() {
        return this.#generateMarkup();
    }
     #generateRowMarkup(data) {
        return `
      <tr>
        <td>${data.userReqAmount}</td>
        <td>${data.nutrient}(${data.unit})</td>
        <td>${data.mealsAmount}</td>
      </tr>`;
    }
    getParentElement() {
        return this.#parentElement;
    }
    getErrorMessage() {
        return this.#errorMessage;
    }
}
exports.default = new ResultsView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"al7RN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class CaloriesView extends _viewJsDefault.default {
    #parentElement = document.getElementById("calories");
    #errorMessage = "NA";
     #generateMarkup() {
        return `
			<h1 id="calories-value">${this.getData()}<span id="kcal">kcal</span></h1>`;
    }
    getMarkup() {
        return this.#generateMarkup();
    }
    getParentElement() {
        return this.#parentElement;
    }
    getErrorMessage() {
        return this.#errorMessage;
    }
}
exports.default = new CaloriesView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kJgPY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class AddCaloriesView extends _viewJsDefault.default {
    #parentElement = document.getElementById("form-save-calories");
    #message = "Calories saved successfully! 🎈";
    #window = document.getElementById("calories-window");
    #overlay = document.getElementById("overlay-calories");
    #btnOpen = document.getElementById("btn-edit");
    #btnClose = document.getElementById("btn-close-calories");
    #messageDiv = document.getElementById("message-save");
    constructor(){
        super();
        this.#addHandlerShowWindow();
        this.#addHandlerHideWindow();
    }
    toggleWindow() {
        this.#overlay.classList.toggle("hidden");
        this.#window.classList.toggle("hidden");
    }
     #addHandlerShowWindow() {
        this.#btnOpen.addEventListener("click", this.toggleWindow.bind(this));
    }
     #addHandlerHideWindow() {
        this.#btnClose.addEventListener("click", this.toggleWindow.bind(this));
        this.#overlay.addEventListener("click", this.toggleWindow.bind(this));
    }
    addHandlerAddCalories(handler) {
        this.#parentElement.addEventListener("submit", (e)=>{
            e.preventDefault();
            const inputCalories = document.getElementById("input-calories").value;
            handler(Number(inputCalories));
            document.getElementById("calories-value").innerHTML = `${inputCalories}<span id="kcal">kcal</span>`;
        });
    }
    getMessage() {
        return this.#message;
    }
    getMessageDiv() {
        return this.#messageDiv;
    }
}
exports.default = new AddCaloriesView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ddCAb","aenu9"], "aenu9", "parcelRequire619b")

//# sourceMappingURL=index.e37f48ea.js.map

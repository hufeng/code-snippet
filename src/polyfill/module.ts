var modules = {};

function _m(moduleId, factory) {
  modules[moduleId] = {
    i: false,
    f: factory,
    exports: {}
  };
}

function _require(moduleId) {
  var module = modules[moduleId];
  if (module.i) {
    return module.exports;
  }

  module.f(module, module.exports, _require);
  module.i = true;

  return module.exports;
}

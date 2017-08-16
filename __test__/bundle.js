(function() {
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

  _m(0, function(module, exports, require) {
    var a = 1 + 1;
    console.log('hello world', a);
  });

  _require(0);
})();

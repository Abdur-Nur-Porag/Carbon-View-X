const GlobalManager = (function () {
  const registryVar = {}; // store by variable name
  const registryId = {};  // store by element id

  // helper: wrap primitive or object if not buildApi
  function wrapValue(value) {
    return {
      _value: value,
      get() { return this._value; },
      set(newValue) { 
        this._value = newValue; 
        return this;
      }
    };
  }

  return {
    register(input) {
      if (Array.isArray(input)) {
        input.forEach((obj, idx) => {
          if (!obj) return;
          const varKey = `obj_${Object.keys(registryVar).length}_${idx}`;
          if (obj.el) {
            registryVar[varKey] = obj;
            if (obj.el.id) registryId[obj.el.id] = obj;
          } else {
            registryVar[varKey] = wrapValue(obj);
          }
        });
      } else if (typeof input === "object") {
        for (const key in input) {
          const obj = input[key];
          if (!obj) continue;

          if (obj.el) {
            // store by variable name
            registryVar[key] = obj;
            // if element has id → also store by id
            if (obj.el.id) registryId[obj.el.id] = obj;
          } else {
            // plain value → wrap
            registryVar[key] = wrapValue(obj);
          }
        }
      }
      return this;
    },

    // use by variable name
    useVar(varName) {
      const obj = registryVar[varName];
      if (typeof obj === "undefined") throw new Error(`❌ GlobalManager: variable "${varName}" not found.`);
      return obj;
    },

    // use by element id
    useId(id) {
      const obj = registryId[id];
      if (typeof obj === "undefined") throw new Error(`❌ GlobalManager: id "${id}" not found.`);
      return obj;
    },

    // list all keys
    listVar() { return Object.keys(registryVar); },
    listId() { return Object.keys(registryId); },

    // show all
    allVar() { return { ...registryVar }; },
    allId() { return { ...registryId }; }
  };
})();

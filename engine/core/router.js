(function () {
  const ROUTER_FILE = "Router.json";

  // --- Helpers ---
  function loadRouter() {
    if (typeof InternalFileBridge === "undefined") {
      console.warn("InternalFileBridge not available, using fallback router");
      return null;
    }
    if (!InternalFileBridge.CheckExists(ROUTER_FILE)) {
      return {
        Active: "MainView",
        Previous: [],
        ActionSheet: null,
        Drawer: null,
        Dialog: null
      };
    }
    try {
      const content = InternalFileBridge.ReadFile(ROUTER_FILE);
      return JSON.parse(content || "{}");
    } catch (e) {
      console.error("Error reading Router.json:", e);
      return null;
    }
  }

  function saveRouter(router) {
    try {
      if (typeof InternalFileBridge === "undefined") return;
      const json = JSON.stringify(router, null, 2);
      InternalFileBridge.WriteFile(ROUTER_FILE, json);
      console.log("Router.json updated:", router);
    } catch (e) {
      console.error("Error saving Router.json:", e);
    }
  }

  // ================================
  // ActionSheet
  // ================================
  window.openActionSheet = function (name) {
    try {
      const router = loadRouter();
      if (!router) return showActionSheet(name);
      router.ActionSheet = name;
      saveRouter(router);
      showActionSheet(name);
    } catch (e) {
      showActionSheet(name);
    }
  };

  window.closeActionSheet = function (name) {
    try {
      const router = loadRouter();
      if (!router) return hideActionSheet(name);
      if (router.ActionSheet === name) {
        router.ActionSheet = null;
        saveRouter(router);
      }
      hideActionSheet(name);
    } catch (e) {
      hideActionSheet(name);
    }
  };

  // ================================
  // Dialog
  // ================================
  window.openDialog = function (name) {
    try {
      const router = loadRouter();
      if (!router) return showDialog(name);
      router.Dialog = name;
      saveRouter(router);
      showDialog(name);
    } catch (e) {
      showDialog(name);
    }
  };

  window.closeDialog = function (name) {
    try {
      const router = loadRouter();
      if (!router) return hideDialog(name);
      if (router.Dialog === name) {
        router.Dialog = null;
        saveRouter(router);
      }
      hideDialog(name);
    } catch (e) {
      hideDialog(name);
    }
  };

  // ================================
  // Drawer
  // ================================
  window.openDrawer = function (name) {
    try {
      const router = loadRouter();
      if (!router) return showDrawer(name);
      router.Drawer = name;
      saveRouter(router);
      showDrawer(name);
    } catch (e) {
      showDrawer(name);
    }
  };

  window.closeDrawer = function (name) {
    try {
      const router = loadRouter();
      if (!router) return hideDrawer(name);
      if (router.Drawer === name) {
        router.Drawer = null;
        saveRouter(router);
      }
      hideDrawer(name);
    } catch (e) {
      hideDrawer(name);
    }
  };

  // ================================
  // PageView
  // ================================
  window.openPageView = function (name) {
    try {
      const router = loadRouter();
      if (!router) return showPageView(name);

      if (router.Active) {
        router.Previous.push(router.Active);
      }
      router.Active = name;
      saveRouter(router);
      showPageView(name);
    } catch (e) {
      showPageView(name);
    }
  };

  window.BackPageView = function () {
    try {
      const router = loadRouter();
      if (!router) return showPageView("MainView");

      let lastPage;
      if (router.Previous.length > 0) {
        lastPage = router.Previous.pop();
        router.Active = lastPage;
      } else {
        lastPage = "MainView";
        router.Active = lastPage;
      }
      saveRouter(router);
      showPageView(lastPage);
    } catch (e) {
      showPageView("MainView");
    }
  };

  // ================================
  // Init Router.json if not exists
  // ================================
  try {
    if (typeof InternalFileBridge !== "undefined" && !InternalFileBridge.CheckExists(ROUTER_FILE)) {
      saveRouter({
        Active: "MainView",
        Previous: [],
        ActionSheet: null,
        Drawer: null,
        Dialog: null
      });
    }
  } catch (e) {
    console.warn("Router init skipped:", e);
  }
})();

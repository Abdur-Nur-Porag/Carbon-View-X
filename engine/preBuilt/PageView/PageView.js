// === Inject PageView Styles ===
(function injectPageViewStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .page-view {
      display: none;
    }

    .page-view.active {
      display: block;
    }
  `;
  document.head.appendChild(style);
})();

// === Page Registry ===
const PageRegistry = {};
let NotFoundPage = null;

// === PageView Component ===
function PageView({ Name, InitialPage = false, Children }) {
  const view = create("div")
    .id("page-" + Name)
    .class(["page-view"])
    .children(Children)
    .add("#app");

  PageRegistry[Name] = view;

  if (InitialPage) {
    view.el.classList.add("active");
  }

  return view;
}

// === Show Page ===
function showPageView(name) {
  let found = false;

  for (const key in PageRegistry) {
    const page = PageRegistry[key];
    const isTarget = key === name;
    page.el.classList.toggle("active", isTarget);
    if (isTarget) found = true;
  }

  if (!found && NotFoundPage) {
    for (const key in PageRegistry) {
      PageRegistry[key].el.classList.remove("active");
    }
    NotFoundPage.el.classList.add("active");
  }
}

// === Not Found Page Setter ===
function SetNotFoundPage(view) {
  NotFoundPage = view;
}

// === Expose Globally ===
window.PageView = PageView;
window.showPageView = showPageView;
window.SetNotFoundPage = SetNotFoundPage;

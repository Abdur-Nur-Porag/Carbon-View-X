const ActionSheets = {};

// ---------------- ActionSheet ----------------
function ActionSheet({
  Name,
  Position = "bottom",
  BackdropEffect = ({ backdrop }) => {
    // default effect: blur
    backdrop.addStyle({ backdropFilter: "blur(6px)" });
  },
  Style = {},
  Children = null
}) {
  if (!Name) throw new Error("ActionSheet requires a Name");
  if (document.getElementById(Name)) return;

  // Create backdrop
  const backdrop = create("div")
    .addClass("action-backdrop")
    .add(document.body);

  // ✅ Attach user-defined effect on click
  if (typeof BackdropEffect === "function") {
    backdrop.event("click", () => BackdropEffect({ backdrop }));
  }

  // Create wrapper
  const wrapper = create("div")
    .id(Name)
    .addClass(["action-sheet", Position])
    .addStyle(Style)
    .add(document.body);

  // Create content container
  const content = create("div")
    .addClass("sheet-content")
    .add(wrapper);

  // Add children
  if (Children) {
    if (Array.isArray(Children)) {
      content.children(Children);
    } else {
      content.children([Children]);
    }
  }

  // Store in registry
  ActionSheets[Name] = { wrapper, backdrop, Position };
}

// ---------------- Show/Hide ----------------
function showActionSheet(name) {
  const sheet = ActionSheets[name];
  if (!sheet) return;
  sheet.backdrop.addClass("showing");
  sheet.wrapper.addClass("showing");
  document.body.style.overflow = "hidden";
}

function hideActionSheet(name) {
  const sheet = ActionSheets[name];
  if (!sheet) return;
  sheet.wrapper.removeClass("showing");
  sheet.backdrop.removeClass("showing");
  setTimeout(() => { document.body.style.overflow = ""; }, 350);
}

const Drawers = {};

// ---------------- Drawer ----------------
function Drawer({
  Name,
  Position = "left",
  Style = {},
  Children = null,
  BackdropEffect = ({ backdrop }) => {
    // default backdrop styling
    backdrop.addStyle({ backgroundColor: "rgba(0,0,0,0.3)" });
  }
}) {
  if (!Name) throw new Error("❌ Drawer must have a 'Name'.");
  if (Drawers[Name]) return;

  // Create drawer element
  const drawer = create("div")
    .id(Name)
    .addClass(["drawer", Position])
    .addStyle(Style)
    .add(document.body);

  // Create content container
  const content = create("div")
    .addClass("drawer-content")
    .add(drawer);

  // Add children
  if (Children) {
    if (Array.isArray(Children)) {
      content.children(Children);
    } else {
      content.children([Children]);
    }
  }

  // Create backdrop
  const backdrop = create("div")
    .addClass("drawer-backdrop")
    .add(document.body);

  // ✅ Apply user-defined effect on click
  if (typeof BackdropEffect === "function") {
    backdrop.event("click", () => BackdropEffect({ backdrop }));
  }

  // Store in registry
  Drawers[Name] = { drawer, backdrop, Position };
}

// ---------------- Show/Hide ----------------
function showDrawer(name) {
  const ref = Drawers[name];
  if (!ref) return;

  ref.drawer.addClass("showing");
  ref.backdrop.addClass("showing");
  document.body.style.overflow = "hidden";
}

function hideDrawer(name) {
  const ref = Drawers[name];
  if (!ref) return;

  ref.drawer.removeClass("showing");
  ref.backdrop.removeClass("showing");

  setTimeout(() => {
    document.body.style.overflow = "";
  }, 350);
}

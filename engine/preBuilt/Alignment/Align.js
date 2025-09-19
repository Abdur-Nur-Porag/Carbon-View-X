function Align({ Align = "left", Children = {} } = {}) {
  // Create container div using buildAPI
  const container = create("div");

  // Set alignment using flex
  let justify = "flex-start";
  switch (Align.toLowerCase()) {
    case "right": justify = "flex-end"; break;
    case "center": justify = "center"; break;
  }

  container.style({
    display: "flex",
    justifyContent: justify,
    alignItems: "center"
  });

  // Add children (buildAPI objects)
  if (Children && typeof Children === "object") {
    Object.keys(Children).forEach(key => {
      const child = Children[key];
      if (child && child.el instanceof HTMLElement) {
        container.el.appendChild(child.el);
        container[key] = child; // keep reference
      }
    });
  }

  // Return container with buildAPI chaining support
  return container;
}

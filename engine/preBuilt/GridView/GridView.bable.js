function GridView({
  id = "gridView",
  className = "grid-view-container",
  tag = "div",
  items = [],
  width = "120px",
  height = "100px",
  gap = "12px",
  sideMargin = "16px",
  paddingTop = "0px",
  paddingBottom = "0px",
  lineGapTop = "0px",
  lineGapBottom = "0px",
  maxWidth = null,
  onItemClick = null,
  style = {}, // allow user to pass custom styles
}) {
  // Outer wrapper — handles consistent left/right spacing and optional max width
  const wrapper = create("div")
    .class("grid-view-wrapper")
    .style({
      paddingLeft: sideMargin,
      paddingRight: sideMargin,
      paddingTop,
      paddingBottom,
      width: "100%",
      boxSizing: "border-box",
      ...(maxWidth ? { maxWidth, margin: "0 auto" } : {}),
    });

  // Inner grid layout container
  const container = create(tag)
    .id(id)
    .class(className)
    .style({
      display: "grid",
      width: "100%",
      gridTemplateColumns: `repeat(auto-fill, minmax(${width}, 1fr))`,
      gap,
      boxSizing: "border-box",
      ...style,
    });

  // Populate grid items
  const children = {};
  items.forEach((item, index) => {
    const key = `item${index}`;
    let gridItem;

    if (typeof item === "string") {
      gridItem = create("div")
        .class("grid-view-item")
        .text(item);
    } else if (item?.el instanceof HTMLElement || item?.el instanceof Element) {
      gridItem = item.class("grid-view-item");
    } else {
      return; // invalid item, skip
    }

    gridItem.style({
      height,
      width: "100%",
      boxSizing: "border-box",
    });

    if (typeof onItemClick === "function") {
      gridItem.onClick(() => onItemClick(index, gridItem.el));
    }

    children[key] = gridItem;
  });

  // Final assembly
  container.children(children);
  wrapper.children({ Grid: container });

  // Handle dynamic padding if multi-row
  setTimeout(() => {
    const first = container.el.firstChild;
    if (!first) return;

    const rowHeight = first.offsetHeight;
    const totalHeight = container.el.offsetHeight;
    const estimatedRows = totalHeight / (parseInt(height) + parseInt(gap));

    if (estimatedRows > 1) {
      wrapper.style({
        paddingTop: lineGapTop,
        paddingBottom: lineGapBottom,
      });
    }
  }, 0); // immediate

  return wrapper;
}

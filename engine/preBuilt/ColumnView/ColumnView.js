function ColumnView({
  id = "columnView",
  className = "column-view-container",
  tag = "div",
  items = [],
  columns = 2,
  width = "120px",
  height = "100px",
  gap = "12px",
  sideMargin = "16px", // replaces MarginLeft & MarginRight
  marginTop = "10px",
  marginBottom = "10px",
  lineGapTop = "0px",
  lineGapBottom = "0px",
  maxWidth = null,
  style = {},
}) {
  // Wrapper ensures consistent spacing on sides
  const wrapper = create("div")
    .class("column-view-wrapper")
    .style({
      paddingLeft: sideMargin,
      paddingRight: sideMargin,
      marginTop,
      marginBottom,
      boxSizing: "border-box",
      width: "100%",
      ...(maxWidth ? { maxWidth, marginLeft: "auto", marginRight: "auto" } : {}),
    });

  // Inner grid container
  const container = create(tag)
    .id(id)
    .class(className)
    .style({
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      columnGap: gap,
      rowGap: gap,
      width: "100%",
      boxSizing: "border-box",
      ...style,
    });

  // Children injection
  const children = {};
  items.forEach((item, index) => {
    const key = `item${index}`;
    let child;

    if (typeof item === "string") {
      child = create("div")
        .class("column-view-item")
        .text(item);
    } else if (item?.el instanceof HTMLElement) {
      child = item.class("column-view-item");
    } else {
      return; // skip invalid
    }

    child.style({
      height,
      width: "100%",
      boxSizing: "border-box",
    });

    children[key] = child;
  });

  container.children(children);
  wrapper.children({ ColumnGrid: container });

  // Dynamic top/bottom padding for multi-row adjustment
  setTimeout(() => {
    const first = container.el.firstChild;
    if (!first) return;

    const rowHeight = first.offsetHeight;
    const totalHeight = container.el.offsetHeight;
    const rows = totalHeight / (parseInt(height) + parseInt(gap));

    if (rows > 1) {
      wrapper.style({
        paddingTop: lineGapTop,
        paddingBottom: lineGapBottom,
      });
    }
  }, 0);

  return wrapper;
}

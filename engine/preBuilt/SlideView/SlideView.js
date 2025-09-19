function SlideView(config = {}) {
  const {
    id = "SlideView",
    direction = "left-to-right",
    items = [],
    style = {},
  } = config;

  const isVertical = direction.includes("top") || direction.includes("bottom");
  const isReverse = direction === "right-to-left" || direction === "bottom-to-top";
  let index = 0;

  const wrapper = create("div")
    .id(id)
    .class(["slide-view"])
    .style({
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      touchAction: "pan-y pan-x",
      background: "#fff",
      ...style,
    });

  const inner = create("div")
    .class(["slider-inner"])
    .style({
      display: "flex",
      flexDirection: isVertical ? "column" : "row",
      width: "100%",
      height: "100%",
      transition: "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)", // more native feel
    });

  const itemList = Array.isArray(items)
    ? items
    : Object.values(items);

  itemList.forEach((item) => {
    if (item && item.el instanceof HTMLElement) {
      item.style({
        width: "100vw",
        height: "100vh",
        flexShrink: "0",
        overflow: "auto", // native scroll for slide content
        WebkitOverflowScrolling: "touch",
      });
      inner.el.appendChild(item.el);
    }
  });

  wrapper.children({ inner });

  const getTranslate = () => {
    const amount = index * 100;
    if (isVertical) {
      return `translateY(-${amount}vh)`;
    } else {
      return `translateX(-${amount}vw)`;
    }
  };

  const updateSlide = () => {
    inner.style({ transform: getTranslate() });
  };

  const goNextSlide = () => {
    if (index < itemList.length - 1) {
      index += 1;
      updateSlide();
    }
  };

  const goPreviousSlide = () => {
    if (index > 0) {
      index -= 1;
      updateSlide();
    }
  };

  // === Touch / Mouse Logic ===
  let start = 0, delta = 0, dragging = false;

  const onStart = (pos) => {
    dragging = true;
    start = pos;
  };

  const onMove = (pos) => {
    if (!dragging) return;
    delta = pos - start;
  };

  const onEnd = () => {
    const threshold = 50;
    if (Math.abs(delta) > threshold) {
      const forward = (delta < 0 && !isReverse) || (delta > 0 && isReverse);
      if (forward) {
        goNextSlide();
      } else {
        goPreviousSlide();
      }
    } else {
      updateSlide(); // snap back
    }
    dragging = false;
    delta = 0;
  };

  // === Event Bindings ===
  const getCoord = (e) => isVertical
    ? (e.touches ? e.touches[0].clientY : e.clientY)
    : (e.touches ? e.touches[0].clientX : e.clientX);

  // Touch Events
  wrapper.el.addEventListener("touchstart", (e) => onStart(getCoord(e)));
  wrapper.el.addEventListener("touchmove", (e) => onMove(getCoord(e)));
  wrapper.el.addEventListener("touchend", onEnd);

  // Mouse Events
  wrapper.el.addEventListener("mousedown", (e) => onStart(getCoord(e)));
  wrapper.el.addEventListener("mousemove", (e) => onMove(getCoord(e)));
  wrapper.el.addEventListener("mouseup", onEnd);
  wrapper.el.addEventListener("mouseleave", () => dragging && onEnd());

  // === Expose API ===
  wrapper.goNextSlide = goNextSlide;
  wrapper.goPreviousSlide = goPreviousSlide;
  wrapper.getIndex = () => index;
  wrapper.setIndex = (i) => {
    index = Math.max(0, Math.min(i, itemList.length - 1));
    updateSlide();
  };

  return wrapper;
}

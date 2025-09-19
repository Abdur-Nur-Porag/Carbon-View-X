function AppBar({
  Left = {},
  Center = {},
  Right = {},
  Fixed = true,
  Elevation = 1,
  Style = {},
  LeftStyle = {},
  CenterStyle = {},
  RightStyle = {},
}) {
  const shadows = {
    0: "none",
    1: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    2: "0px 4px 6px rgba(0, 0, 0, 0.25)",
    3: "0px 6px 10px rgba(0, 0, 0, 0.3)",
    4: "0px 8px 12px rgba(0, 0, 0, 0.35)",
    5: "0px 12px 16px rgba(0, 0, 0, 0.4)",
  };

  const Header = create("header")
    .class(["appbar"])
    .style({
      width: "100%",
      height: "56px", // Native toolbar height
      backgroundColor: "#ffffff",
      boxShadow: shadows[Elevation] || shadows[1],
      display: "flex",
      alignItems: "center",
      fontFamily: "Roboto, sans-serif",
      transition: "box-shadow 0.2s ease-in-out",
      ...(Fixed
        ? {
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            zIndex: "800",
          }
        : {}),
      ...Style,
    });

  const Nav = create("nav")
    .class(["appbar-container"])
    .style({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
      padding: "0 4px", // tighter, closer to native
    })
    .children({
      Left: create("div")
        .class(["appbar-left"])
        .style({
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minWidth: "56px",
          height: "100%",
          padding: "0 8px",
          gap: "8px",
          ...LeftStyle,
        })
        .children(Left),

      Center: create("div")
        .class(["appbar-center"])
        .style({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "1",
          height: "100%",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "500",
          color: "#212121",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          pointerEvents: "none", // ensures only side elements are clickable
          ...CenterStyle,
        })
        .children(Center),

      Right: create("div")
        .class(["appbar-right"])
        .style({
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          minWidth: "56px",
          height: "100%",
          padding: "0 8px",
          gap: "8px",
          ...RightStyle,
        })
        .children(Right),
    });

  Header.children({ Nav });

  return Header;
}

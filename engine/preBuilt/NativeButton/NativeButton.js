// NativeButton.js
function NativeButton({ Name = "", Text = "Button", Elevation = 4, Style = {}, Width = "auto", Height = "auto" }) {
  const btn = create("div").addClass("native-button");

  // Set basic properties
  if (Name) btn.id(Name);
  btn.text(Text);
  btn.style({
    width: Width,
    height: Height,
    ...Style
  });

  // Set dynamic elevation
  const maxElevation = Math.min(Math.max(Elevation, 0), 10); // Clamp 0-10
  const baseShadow = [
    `0 ${maxElevation * 0.5}px ${maxElevation * 1.5}px rgba(0,0,0,0.2)`,
    `0 ${maxElevation * 0.25}px ${maxElevation * 0.5}px rgba(0,0,0,0.14)`,
    `0 ${maxElevation * 0.25}px ${maxElevation * 0.75}px rgba(0,0,0,0.12)`
  ].join(", ");

  btn.style({ boxShadow: baseShadow });

  // Press effect
  btn.event("mousedown", () => {
    const pressedShadow = [
      `0 ${maxElevation * 0.25}px ${maxElevation * 0.5}px rgba(0,0,0,0.2)`,
      `0 ${maxElevation * 0.125}px ${maxElevation * 0.25}px rgba(0,0,0,0.14)`,
      `0 ${maxElevation * 0.125}px ${maxElevation * 0.375}px rgba(0,0,0,0.12)`
    ].join(", ");
    btn.style({ transform: "translateY(2px)", boxShadow: pressedShadow, backgroundColor: "#eaeaea" });
  });

  btn.event("mouseup", () => {
    btn.style({ transform: "translateY(0px)", boxShadow: baseShadow, backgroundColor: "#f9f9f9" });
  });

  btn.event("mouseleave", () => {
    btn.style({ transform: "translateY(0px)", boxShadow: baseShadow, backgroundColor: "#f9f9f9" });
  });

  // Return the API
  return btn;
}

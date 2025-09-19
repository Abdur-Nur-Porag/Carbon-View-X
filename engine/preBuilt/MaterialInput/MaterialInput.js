function InputField({
  Type = "Normal",         
  Suffix = null,           
  Prefix = null,           
  Placeholder = "",
  Height = "48px",
  Width = "250px",
  Label = "",              
  Text = ""
} = {}) {

  const container = create("div").addClass("material-input").style({ width: Width, display: "inline-flex", flexDirection: "column" });

  // Optional label
  if (Label) {
    const labelEl = create("label").addClass("material-input-label").text(Label);
    container.addObj({ label: labelEl });
  }

  // Input wrapper
  const wrapper = create("div").addClass("material-input-field").style({ height: Height, display: "flex", alignItems: "center", position: "relative" });

  // Apply type
  switch (Type.toLowerCase()) {
    case "border": wrapper.addClass("material-input-border"); break;
    case "filled": wrapper.addClass("material-input-filled"); break;
    case "underline": wrapper.addClass("material-input-underline"); break;
    default: wrapper.addClass("material-input-normal");
  }

  // Prefix
  if (Prefix && Array.isArray(Prefix.children)) {
    const prefixWrapper = create("div").addClass("material-input-prefix").style({ display: "flex", alignItems: "center", marginRight: "4px" });
    Prefix.children.forEach(child => prefixWrapper.addObj({ child }));
    wrapper.addObj({ prefix: prefixWrapper });
  }

  // Input element
  const inputEl = create("input").attrs({ type: "text", placeholder: Placeholder }).addStyle({ flex: 1 }).el;
  inputEl.value = Text;
  wrapper.el.appendChild(inputEl);

  // Suffix
  if (Suffix && Array.isArray(Suffix.children)) {
    const suffixWrapper = create("div").addClass("material-input-suffix").style({ display: "flex", alignItems: "center", marginLeft: "4px" });
    Suffix.children.forEach(child => suffixWrapper.addObj({ child }));
    wrapper.addObj({ suffix: suffixWrapper });
  }

  container.addObj({ field: wrapper });

  // Track input type for show/hide
  let currentType = "text";

  // Input API
  container.inputAPI = {
    textType(type) { 
      inputEl.type = type; 
      currentType = type; 
      return container; 
    },
    textShow() { 
      inputEl.type = "text"; 
      currentType = "text"; 
      return container; 
    },
    textHide() { 
      inputEl.type = "password"; 
      currentType = "password"; 
      return container; 
    },
    getText() { return inputEl.value; },
    setText(value) { inputEl.value = value; return container; },
    getCurrentType() { return currentType; } // Added for toggle
  };

  return container;
}

/** @jsx h */
function CButton(props){
  return create("button").class(["circle"]).html(props.text)
}

function CTButton(props){
  return create("button").class(["circle","transparent"]).html(props.text).id(props.id).style(props.style)
}

function ButtonView(props){
  return NativeButton({
    Width:"200px"||props.Width,
    Height:"50Px"||props.Height,
    Text:""||props.Text,
    Name:""||props.Id,
  }).ripple({
    status:true,
  })
}

function Position(props) {
  return Position({
    Width: props.Width || "100vw",
    Height: props.Height || "200px",
    Align: props.Align || "left",
    Position: props.Position || "top",
    Children: props.Children,
  });
}


/** @jsx h */
function VLayout({
  align = "flex-start",   // horizontal alignment
  position = "top",       // vertical alignment of children
  height = "300px",       // fixed height
  width = "100%",
  style = {},
  gap = "8px",
  scroll = false,         // enable vertical scroll
  children,
}) {
  const justifyMap = {
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
    space: "space-between",
  };

  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: align,
    justifyContent: justifyMap[position] || "flex-start",
    height,
    width,
    gap,
    overflowY: scroll ? "auto" : "visible",   // CSS scrolling
    overflowX: "hidden",
    boxSizing: "border-box",
    ...style,
  };

  return <div style={layoutStyle}>{children}</div>;
}

function VScroll({ children, id, height = "250px", width = "100vw", style = {} }) {
  return (
    <div
      id={id}
      className="scroll-vertical"
      style={{ height, width, ...style }}
    >
      {children}
    </div>
  );
}







/** @jsx h */
function HLayout({ 
  children, 
  align = "flex-start",
  vertical = "center",
  height = "auto",
  width = "100vw",       // fixed width required for horizontal scroll
  gap = "0",
  scroll = false,
  style = {},
  ...rest 
}) {
  const layoutStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: align,
    alignItems: vertical,
    gap,
    height,
    width,
    overflowX: scroll ? "auto" : "visible",
    ...style,
  };

  return (
    <div style={layoutStyle} {...rest}>
      {children}
    </div>
  );
}

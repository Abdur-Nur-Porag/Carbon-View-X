function Position(obj) {
  const artHeight = obj.Height;
  const artWidth = obj.Width;
  const alignment = obj.Align;
  const position = obj.Position;
  const children = obj.Children;
  const articleBox = create("article")
    .style({
      height: artHeight,
      width: artWidth,
    })
    .children({
      positionBox:create("div").class(["absolute", alignment, position]).children(children)
    })
  return articleBox;
  
}
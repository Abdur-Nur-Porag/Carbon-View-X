# 📦 buildAPI JavaScript Utility Documentation

---

## 🔨 Basic Usage

```js
const box = create("div")
  .id("myBox")
  .addClass("card")
  .style({ backgroundColor: "lightblue" })
  .text("Hello World")
  .add("body");
```

---

## 🔁 Full Chainable Example

```js
const profile = create("div")
  .id("profileCard")
  .addClass(["card", "rounded", "shadow"])
  .attrs({
    "data-role": "user",
    title: "User Card"
  })
  .style({
    padding: "20px",
    color: "white",
    backgroundColor: "#2196f3"
  })
  .text("Hello, Porag!")
  .onClick(() => alert("Clicked!"))
  .add("body");
```

---

## 📋 buildAPI Method Table

| Category     | Method Name             | Description |
|--------------|-------------------------|-------------|
| 🔗 ID         | `.id(id)`               | Set element ID |
|              | `.addId(value)`         | Alias of `.id()` |
|              | `.removeId()`           | Remove ID |
|              | `.isExistId()`          | Check if ID exists |
|              | `.getId()`              | Get ID or null |
| 🎯 Class      | `.class(cls)`           | Alias of `.addClass()` |
|              | `.addClass(cls)`        | Add class(es) |
|              | `.removeClass(cls)`     | Remove class(es) |
|              | `.removeAllClass()`     | Clear all classes |
|              | `.isExistClass(cls)`    | Check for a class |
|              | `.getAllClass()`        | Return all class names |
| ⚙️ Attributes | `.attrs(obj)`           | Alias of `.addAttr()` |
|              | `.addAttr(obj)`         | Add attribute(s) |
|              | `.removeAttr(list)`     | Remove attribute(s) |
|              | `.updateAttrValue([key, val], ...)` | Update multiple attributes |
|              | `.getAttrValue(name)`   | Get one attribute |
|              | `.getAllAttr()`         | Get all attributes |
| 🎨 Style      | `.style(obj)`           | Alias of `.addStyle()` |
|              | `.addStyle(obj)`        | Apply inline styles |
|              | `.removeStyle()`        | Remove `style` attribute |
| 🧩 Events     | `.event(name, handler)` | Add any event listener |
|              | `.onClick(handler)`     | Add click event |
|              | `.toggleEvent({initial, WhenTrue, WhenFalse})` | Toggle logic |
| 📝 Content    | `.html(html)`           | Set innerHTML |
|              | `.text(text)`           | Set innerText |
| 📥 Insertion  | `.add(target)`          | Append element to target |
| 👶 Children   | `.children(obj)`        | Add children and bind |
|              | `.addObj(obj)`          | Alias of `.children()` |
|              | `.removeChildren()`     | Remove all children |

---
## Ripple Effect
```JAVASCRIPT

.ripple({
  status:true/false,
  background:"color code",
  duration:"time in ms"
})


````


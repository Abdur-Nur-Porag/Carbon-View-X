
# Using `getId` for UI Control by ID

This utility helps you control UI elements by their ID. When you need to perform any event operation, validate inputs, get the value of an element, or manipulate an element by ID or tag, you can use this instead of `document.getElementById()`.

---

## Why use `getId`?

- Avoids the verbose and repetitive `document.getElementById()` calls.
- Supports all build api
- No need to learn multiple APIs because `getId(id)` supports the entire build API chain except `create()`.

---

## How to use `getId`

```
//use
getId(name).<buildApi>
//example
getId("exampleBt").text("This is button")
//.text() is build api

```

- You call `getId` with the element's ID as a string.
- Then chain any build API method using a dot (`.`).

### Example Build APIs:
- `.text(string)` — Set innerText.
- `.html()` — Set innerHTML.

---

## Example Usage

```

getId("myInput").text("Hello, World!");

## **AllBuild Api**
| Category   | Method Name        | Description                  |
|------------|--------------------|------------------------------|
|            | `.addId(value)`    | Alias of `.id()`             |
|            | `.removeId()`      | Remove ID                   |
|            | `.isExistId()`     | Check if ID exists           |
|            | `.getId()`         | Get ID or null               |
| 🎯 Class   | `.class(cls)`      | Alias of `.addClass()`       |
|            | `.addClass(cls)`   | Add class(es)                |
|            | `.removeClass(cls)`| Remove class(es)             |
|            | `.removeAllClass()`| Clear all classes            |
|            | `.isExistClass(cls)`| Check for a class           |
|            | `.getAllClass()`   | Return all class names       |
| ⚙️ Attributes | `.attrs(obj)`      | Alias of `.addAttr()`        |
|            | `.addAttr(obj)`    | Add attribute(s)             |
|            | `.removeAttr(list)`| Remove attribute(s)          |
|            | `.updateAttrValue([key, val], ...)` | Update multiple attributes |
|            | `.getAttrValue(name)`| Get one attribute          |
|            | `.getAllAttr()`    | Get all attributes           |
| 🎨 Style   | `.style(obj)`      | Alias of `.addStyle()`       |
|            | `.addStyle(obj)`   | Apply inline styles          |
|            | `.removeStyle()`   | Remove style attribute       |
| 🧩 Events  | `.event(name, handler)` | Add any event listener    |
|            | `.onClick(handler)`| Add click event              |
|            | `.toggleEvent({initial, WhenTrue, WhenFalse})` | Toggle logic |
| 📝 Content | `.html(html)`      | Set innerHTML                |
|            | `.text(text)`      | Set innerText                |
---

## Ripple Effect

```

.ripple({
status: true/false,
background: "color code",
duration: "time in ms"
})

```

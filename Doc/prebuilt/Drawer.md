# Drawer
```JAVASCRIPT
Drawer({
  Name: "LeftDrawer",
  Position: "left",
  BackdropEffect: ({ backdrop }) => {
    closeDrawer("LeftDrawer");
    console.log("Drawer backdrop clicked");
  },
  Children: (
    <div>
      <p>Drawer content here</p>
    </div>
  )
});
openDrawer("LeftDrawer")


```
**For App dev**
- openDrawer(name)
- closeDrawer(name)

**For web dev**
- showDrawer(name)
- hideDrawer(name)
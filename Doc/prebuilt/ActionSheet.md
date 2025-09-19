## ActionSheet
Example Of Action Sheet:
```JAVASCRIPT
ActionSheet({
  Name:"MVBASheet",
  Position:"bottom",
  BackdropEffect:()=>{
  //closeActionSheet("MVBASheet")
  console.log("clicked")
  },
  Children:(
    <div>
      
    </div>
  )
})


```
### Trigger
 **use for app dev**
- openActionSheet(name)
- closeActionSheet(name)
 
 **use for web dev**
- showActionSheet(name)
- hideActionSheet(name)

# Material Input
Use of material input
```JAVASCRIPT
const name=InputField({
  Type : normal/filled/border        
  Suffix :{name:create().build api}            
  Prefix :{name:create().build api}        
  Placeholder : "text",
  Height : "48px",
  Width : "250px",
  Label : "text",              
  Text : "text"
})
.add(id)
.support build api

```
## InputField api
- getText() 
- setText()
- textType(text/email/password/others)
- textShow()
- textHide()
- getCurrentType()

Use Example
```JAVASCRIPT

name.<inputFieldApi>


```
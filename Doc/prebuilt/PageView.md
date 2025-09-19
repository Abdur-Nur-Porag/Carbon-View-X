# Pageview

Syntex For Initial Page:
```JAVASCRIPT
PageView({
  Name: "home",              // Required: Unique name for the page
  InitialPage: true,         // Optional: First page to load by default
 Children: [/*array based obj*/] 
});
```
Syntex For Others Page:
```JAVASCRIPT
PageView({
  Name: "home",              // Required: Unique name for the page
  Children: [/*array based obj*/]
});
```

### ***Trigger***
```JAVASCRIPT
OpenPageView(viewname)// for open view
BackPageView(name)//to go back

```

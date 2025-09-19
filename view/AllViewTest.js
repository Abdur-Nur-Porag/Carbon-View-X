/** @jsx h */
/** @jsxFrag Fragment */

NativeToast({ Name: "Toast_1", Html: "Welcome toast 1" });
NativeToast({ Name: "Toast_2", Html: "Welcome toast 2" });

// Show only when needed
openNativeToast("Toast_1");
openNativeToast("Toast_2");


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


// Show drawer
//showDrawer("myDrawer");
//openDrawer("myDrawer")
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

// Show it
//showActionSheet("mySheet");

const buildApiTest = create("div")
  .children({
    a: create("button").text("Hello").id("buildApiButton")
  })
  .style({
    marginTop: "100px"
  })
NativeToast({
  Name: "buildApi",
  Html: "Build Api workinh"
})

setTimeout(() => {
  getId("buildApiButton").event("click", () => {
    getId("buildApiButton").text("Jello")
    openNativeToast("buildApi")
    
    
  })
}, 0)
const _MainViewAppBar = (
  <div>
    
    <AppBar
      Left={{
      left:<CTButton text="<i>Menu</i>"id="openMenuBar"style={{marginLeft:"-20%"}}/>}}
    />
    
    {buildApiTest}
<VLayout align="center" position="top" height="100vh"width="100vw">
 
 
  
 
<VScroll style={{marginTop:"100px"}}>
  
  <HLayout>
  <ButtonView/>
  <ButtonView/>
  <ButtonView/>
  <ButtonView/>
  
  </HLayout>

<nav class="row scroll">
  <ButtonView/>
  <ButtonView/>
  <ButtonView/>
  <ButtonView/>
  
</nav>
  
  <ButtonView/>
  
  <button class="responsive"></button>
  
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  <button class="responsive"></button>
  

</VScroll>
</VLayout>



    
    
  </div>
);
/*
setTimeout(()=>{
  NativeToast({
  Name: "NativeBt_1",
  Html: "Hello Native Button 1"
})
  getId("1").event("click",()=>{
    openNativeToast("NativeBt_1")
  })
  
},0)
*/


function MainView() {
  return create("div").children({
    AppBar: _MainViewAppBar,
  })
}


/******ALL PAGEVIEW *******/
PageView({
  Name: "MainView",
  InitialPage: true,
  Children: [MainView()]
})
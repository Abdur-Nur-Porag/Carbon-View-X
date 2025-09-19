/** @jsx h */
/** @jsxFrag Fragment */
/*ACTION SHEET AND DRAWER*/
ActionSheet({
  Name:"MVBASheet",
  Position:"bottom",
  BackdropEffect:()=>{
    closeActionSheet("MVBASheet")
    console.log("clicked")
  },
  Style:{
    borderTopLeftRadius:"30px",
    borderTopRightRadius:"30px"
  },
  Children:(
    <div>
      <h6 class=" bold">
        About it Carbon View
      </h6>
      <div>
        Carbon View is powerfull ui kit. It is use <b>JSX</b> and <b>babel compiler</b>.
        Carbon View switch webview to Carbon View Native for more smooth user exparince.
      </div>
      <div>
        <b>How work?</b>
        <div>
          CarbonView native use X25JE.This is near to V8 engine. But a simple different.X25JE is light version of V8.
        </div>
        <div>
          Here this app using X25JE  engine.And use some bridge for java opration.
        </div>
      </div>
    </div>
  )
})


const _MVAppBar=(
  <div>
    <AppBar Left={{
      text:<h6 class="bold">CarbonView</h6>
    }}/>
  </div>
);
const _MVAppBody=(
  <div style={{marginTop:""}}>
    <VLayout width="100vw" height="100vh" position="center" align="center">
      
      {/* Notification Button */}
      <ButtonView Text="Create Notification" Id="makeNotification"/>
      {/* ActionSheet */}
      <ButtonView Text="Open ActionSheet" Id="openActionSheet"/>
      {/* Drawer */}
      <ButtonView Text="Open Drawer" Id="openDrawer"/>
      {/* Grid View Show*/}
      <ButtonView Text="Open Editor" Id="openEditorView"/>
      
    </VLayout>
  </div>
);

Drawer({
  Name:"MVLDrawer",
  BackdropEffect:()=>{
    closeDrawer("MVLDrawer")
  },
  Style:{
    borderTopRightRadius:"20px",
    borderBottomRightRadius:"20px"
  },
  Children:(
    <div>
      <div class="padding">
        <h6>Drawer</h6>
        <p style={{marginTop:"-5px"}}>This is carbon view left drawer</p>
      </div>
    </div>
  )
})

NativeToast({
  Name:"notificationCreated",
  Html:"Notification Created"
})

/* GridView */
const iconSrc=Path("res/alert-emergency-light-svgrepo-com.svg")
const backIcon=(
  <span>
    <h6 class="small">Editor</h6>
  </span>
)

const _EVAppBar=(
  <div>
    <AppBar Left={{
      Left:backIcon,
    }}
      Right={{
        r:<button class="transparent" style={{border:"1px solid black"}} id="runIt">Run It</button>
      }}
    />
  </div>
)

const _EVAppBody=(
  <div style={{
    display:"flex",
    flexDirection:"column",
    height:"100vh"
  }}>
    {/* push textarea below AppBar */}
    <div style={{
      flex:1,
      padding:"10px",
      marginTop:"56px" // 👈 adjust depending on AppBar height
    }}>
      <textarea 
        id="editorText"
        spellCheck="false"
        style={{
          width:"100%",
          height:"100%",
          fontFamily:"monospace",
          fontSize:"16px",
          lineHeight:"1.5",
          color:"#222",
          background:"#f8f8f8",
          border:"1px solid #ccc",
          borderRadius:"8px",
          padding:"12px",
          outline:"none",
          resize:"none",
          overflow:"auto",
          boxSizing:"border-box"
        }}
      >
        /*javascript will go here*/
      </textarea>
    </div>
  </div>
)


NativeToast({
  Name:"savedStatus",
  Html:"saved"
})

/* Load saved file */
setTimeout(()=>{
  if(InternalFileBridge.CheckExists("temp.html")==="true"){
    const getCodeText=InternalFileBridge.ReadFile("temp.html")
    document.getElementById("editorText").value = getCodeText   // ✅ FIXED
  }
  else{	
    InternalFileBridge.WriteFile("temp.html","");
  }
},0)

/*all function*/
setTimeout(()=>{
  getId("makeNotification").event("click",()=>{
    const title="CarbonView"
    const text="Hello From CarbonView"
    DeviceControl.CreateNotification(title,text,"console.log('notification created')")
    openNativeToast("notificationCreated")
  })
  
  getId("openActionSheet").event("click",()=>{
    openActionSheet("MVBASheet")
  })
  
  getId("openDrawer").event("click", () => {
    openDrawer("MVLDrawer")
  })
  
  getId("openEditorView").event("click", () => {
    openPageView("EditorView")
  })

  getId("runIt").event("click",()=>{
    const getCodeText=document.getElementById("editorText").value
    InternalFileBridge.WriteFile("temp.html",getCodeText);
    openNativeToast("savedStatus")
    openPageView("RunView")
  })

  /* ✅ Auto-save on typing/deleting */
  const editor = document.getElementById("editorText");
  editor.addEventListener("input", () => {
    const code = editor.value;
    InternalFileBridge.WriteFile("temp.html", code);
    openNativeToast("savedStatus");
  });

},50)


/* Views */
function MainView(){
  return create("div").children({
    AppBar:_MVAppBar,
    AppBody:_MVAppBody,
  })
}

function EditorView(){
  return create("div").children({
    AppBar:_EVAppBar,
    AppBody:_EVAppBody,
  })
}

function RunView(){
  const readFile=InternalFileBridge.ReadFile("temp.html")
  console.log(readFile)
  const createHtml = create("div");
  const script = document.createElement("script");
  script.text = readFile;
  createHtml.append(script);

  return create("div").children({
    show:createHtml
  })
}

/******ALL PAGEVIEW *******/
PageView({
  Name: "MainView",
  InitialPage: true,
  Children: [MainView()]
})

PageView({
  Name: "EditorView",
  Children: [EditorView()]
})

PageView({
  Name: "RunView",
  Children: [RunView()]
})
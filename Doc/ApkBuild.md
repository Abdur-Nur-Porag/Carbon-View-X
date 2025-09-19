# Apk Building Instruction
### How work CV Apk:
Carbon View can use for app dev. Carbon View ensure security of  **js** code though **main.bundle**.

### About main.bundle
This contains all js code.And this file is fully encrypted though 64bit encryption with user defined key.
So this **mod** or **hacking** is impossible. Also use **java** powerful obfuscate system.

### Native Opration
Carbon View operate native opration though java bridge.
Carbon View already add  various java file for improve performance.
- WebConfig.java
- SPAEnable.java
- WebSequred.java
- Encryption.java
- BundleEn.java
- ServiceWorker.java
- FastRendering.java
- CacheManagement.java
- WebWorker.java
- FastLoadController.java
- ActivityHandler.java

Also Some predefine bridge.
- DeviceInfo.java
- DeviceControl.java
- NotificationController.java
- InternalStorage.java
- Bacckpress.java
- Storage.java
- PermissionHandler.java

## Warning:
Avoid use same opration in dom multiple time. And use loading page to ensure all bridge is loading.Use lazy loading when use event js or opration.
** do not use extra js file. your all js write inside view.js and opration js write view.opration.js**

## How use
- download cv.jsx.package.zip
Here you see folder named view.Open it and write your code.
- after complete copy this full code in a php compiler.Then index.php and fill your own **encrypt key**.Then run. You see a **main.bundle** is generated there. 
- Open Sketchwere then open onCreate() there write your **encryption key**.
- then go to assist/ and import that **main.bundle**.

**Here is ready **
### For res support use
If you app contain file like img,png,audios or others. add them inside assist/res folder.

**for res link use** Path("file name")
```javascript
const imgPath=Path("example.png")
// assets/res/example.png
const name=(
  <>
    <img src={imgPath}/>
  </>
)

```
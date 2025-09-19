# 📦 APK Building Instructions

## 🚀 How CarbonView APK Works

**CarbonView** can be used for full-featured mobile app development. It ensures your JavaScript code is secure through a compiled and encrypted file called `main.bundle`.

---

## 🔐 About `main.bundle`

- All JavaScript logic is compiled into a single file: `main.bundle`.
- This file is fully encrypted using **64-bit encryption** with a **user-defined key**.
- Code modification or hacking is nearly impossible.
- Additionally, it uses **Java-level obfuscation** for enhanced security.

---

## ⚙️ Native Operation via Java Bridge

CarbonView supports native operations using a built-in **Java bridge** system. Various Java classes are included to optimize performance:

### 📁 Core Java Components:

- `WebConfig.java`
- `SPAEnable.java`
- `WebSequred.java`
- `Encryption.java`
- `BundleEn.java`
- `ServiceWorker.java`
- `FastRendering.java`
- `CacheManagement.java`
- `WebWorker.java`
- `FastLoadController.java`
- `ActivityHandler.java`

### 🔌 Predefined Bridges:

- `DeviceInfo.java`
- `DeviceControl.java`
- `NotificationController.java`
- `InternalStorage.java`
- `Backpress.java`
- `Storage.java`
- `PermissionHandler.java`

---

## ⚠️ Important Usage Guidelines

- ❗ **Avoid using the same native operation multiple times in the DOM.**
- ✅ Use a **loading screen** to ensure all Java bridges are initialized.
- 💤 Use **lazy loading** for event-based JavaScript or heavy operations.
- 🚫 **Do not include extra `.js` files.**
    - Write all main JS logic in `view/view.js`.
    - Write operational JS (bridging, native logic) in `view/view.opration.js`.

---

## 📁 How to Build the APK

1. **Download**: `cv.jsx.package.zip`
2. Inside the zip, open the `view/` folder and write your code.
3. When done, copy your entire code into a **PHP environment** (e.g., XAMPP or an online PHP compiler).
4. Edit the `index.php` file and insert your **encryption key**.
5. Run it — this will generate the encrypted `main.bundle`.
6. Open **Sketchware** and go to `onCreate()`, then set the **same encryption key** used earlier.
7. Navigate to `assets/` and import the generated `main.bundle`.

> ✅ Your app is now ready to run with encrypted JS.

---

## 🖼️ Adding Static Assets (Images, Audio, etc.)

If your app needs assets like images, audio, or other files:

- Place them in: `assets/res/`

### Example usage:

```javascript
const imgPath = Path("example.png");

// This will resolve to: assets/res/example.png

const name = (
  <>
    <img src={imgPath} />
  </>
);
```

---

## 🧠 Final Tips

- Make sure `main.bundle` and Java encryption keys **match** exactly.
- Always test on a physical device or emulator after importing assets and bundles.
- For large apps, modularize your logic within `view.js` using JSX components.

---

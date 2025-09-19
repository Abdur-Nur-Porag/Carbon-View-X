/**
 * Returns the correct path for an asset depending on the environment.
 * - Android app: file://android_assets/...
 * - Web/HTML: res/...
 * @param {string} name - Relative path of the asset (e.g., "img/a.png")
 * @returns {string} Full path to asset
 */
function Path(name) {
    try {
        // Remove leading slash if exists
        if (name.startsWith("/")) name = name.substring(1);

        // Detect Android environment: usually `InternalFileBridge` exists in CarbonView Android
        const isAndroid =InternalFileBridge.CheckExists("Router.json");

        if (isAndroid==="true") {
            return "file://android_assets/res/" + name;
			console.log("Router.json file exist");
        } else {
            return "res/" + name; // normal HTML/web path
            console.log("Router.json File not exist");
        }
    } catch (err) {
        console.error("Path() error:", err);
        // Fallback to normal HTML path
        return "res/" + name;
    }
}

// Example usage:
/*
const imgSrc = Path("img/a.png");
console.log(imgSrc); // file://android_assets/img/a.png or res/img/a.png depending on environment
*/
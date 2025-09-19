# DeviceInfoBridge Documentation

**Bridge Name:** `DeviceInfo`

> **Note:** All values returned from Java via `@JavascriptInterface` are **strings** in JavaScript, even if the Java method returns `int`, `boolean`, or other types.  
> You need to convert them in JS if you want to use them as numbers or booleans.

| JS Call                        | Java Return Type | JS Type Received | Description |
|--------------------------------|-----------------|-----------------|-------------|
| `DeviceInfo.GetOSName()`        | `String`        | `String`        | Returns the operating system name (e.g., "Android"). |
| `DeviceInfo.GetOSVersion()`     | `String`        | `String`        | Returns the OS version (e.g., "8.1.0"). |
| `DeviceInfo.GetModelNumber()`   | `String`        | `String`        | Returns the device model number (e.g., "vivo 1820"). |
| `DeviceInfo.GetMobileName()`    | `String`        | `String`        | Returns the manufacturer name (e.g., "vivo"). |
| `DeviceInfo.GetRam()`           | `String`        | `String`        | Returns total RAM in MB (e.g., "256 MB"). |
| `DeviceInfo.GetRom()`           | `String`        | `String`        | Returns total ROM in MB (e.g., "24338 MB"). |
| `DeviceInfo.GetLanguage()`      | `String`        | `String`        | Returns the device language (e.g., "English"). |
| `DeviceInfo.GetHeight()`        | `int`           | `String`        | Returns screen height in pixels. Convert using `parseInt()`. |
| `DeviceInfo.GetWidth()`         | `int`           | `String`        | Returns screen width in pixels. Convert using `parseInt()`. |
| `DeviceInfo.GetDeviceHeight()`  | `int`           | `String`        | Returns device height in pixels. Convert using `parseInt()`. |
| `DeviceInfo.GetDeviceWidth()`   | `int`           | `String`        | Returns device width in pixels. Convert using `parseInt()`. |
| `DeviceInfo.GetDeviceDepth()`   | `int`           | `String`        | Returns device density DPI. Convert using `parseInt()`. |
| `DeviceInfo.GetOrientation()`   | `String`        | `String`        | Returns screen orientation ("Portrait" or "Landscape"). |
| `DeviceInfo.GetKernelVersion()` | `String`        | `String`        | Returns the kernel version (e.g., "4.9.77+"). |
| `DeviceInfo.GetBatteryStatus()` | `String`        | `String`        | Returns battery status ("Charging", "Discharging", "Full", "Unknown"). |
| `DeviceInfo.GetBatteryLabel()`  | `String`        | `String`        | Returns battery level as a percentage (e.g., "56%"). |
| `DeviceInfo.GetIpAddress()`     | `String`        | `String`        | Returns the device IP address (e.g., "192.168.1.2"). |
| `DeviceInfo.IsOnline()`         | `boolean`       | `String`        | Returns "true" or "false". Convert using `=== "true"` to get JS boolean. |
| `DeviceInfo.GetWifiMacAddress()`| `String`        | `String`        | Returns WiFi MAC address or "Unknown"/"02:00:00:00:00:00". |
| `DeviceInfo.GetBluetoothAddress()` | `String`     | `String`        | Returns Bluetooth address or "Unavailable". |
| `DeviceInfo.GetSimName()`       | `String`        | `String`        | Returns SIM operator name or "Unknown". |
| `DeviceInfo.GetAllSensorList()` | `String`        | `String`        | Returns comma-separated list of all sensor names. |

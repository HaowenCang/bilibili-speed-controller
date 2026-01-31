# Bilibili Speed Controller

A browser extension that adds higher playback speed options to Bilibili video player, supporting 3.0x, 4.0x, 8.0x and 16.0x playback speeds.

## Features

- ✅ Add 3.0x speed option
- ✅ Add 4.0x speed option
- ✅ Add 8.0x speed option
- ✅ Add 16.0x speed option
- ✅ Speed options sorted from highest to lowest (16 → 8 → 4 → 3 → 2)
- ✅ Automatically adapts to Bilibili's dynamically loaded player
- ✅ Lightweight and efficient, no impact on page performance

## Installation

1. Download the .zip file from the release and unzip it
2. Open `chrome://extensions/` in Chrome browser
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the project folder
6. After successful installation, the extension icon will appear in the browser toolbar

## Usage

1. Visit any Bilibili video page (`https://www.bilibili.com/video/*`)
2. Click the speed button at the bottom right of the video player
3. Select the desired speed option from the dropdown menu
4. The video will immediately play at the selected speed

## Speed Option Order

```
16.0x
8.0x
4.0x
3.0x
2.0x
1.5x
1.25x
1.0x (default)
0.75x
0.5x
```

## Version History

### v1.0.1 (2026-02-01)

- Optimized speed option order, now sorted from highest to lowest (16 → 8 → 4 → 3 → 2)
- Improved speed option addition logic to ensure correct sorting
- Updated extension configuration information
- Added popup page to display version information and update notes

### v1.0.0 (2026-01-31)

- Initial release
- Added 3.0x speed option
- Added 4.0x speed option
- Added 8.0x speed option
- Added 16.0x speed option

## Technical Implementation

### Core Principle

1. **DOM Monitoring**: Uses `MutationObserver` to monitor the dynamic loading of Bilibili video player
2. **Speed Addition**: Automatically adds custom speed options when the speed menu element is detected
3. **Sorting Optimization**: Ensures speed options are sorted from highest to lowest by removing and re-adding them
4. **Performance Optimization**: Automatically stops DOM monitoring after addition to reduce resource consumption

### Project Structure

```
bilibili-speed-controller/
├── content.js        # Core functionality implementation
├── manifest.json     # Extension configuration file
├── popup.html        # Extension popup page
└── README.md         # Project documentation
```

## Browser Compatibility

- ✅ Google Chrome
- ✅ Microsoft Edge

## FAQ

### Q: What if the speed options don't appear?
A: Refresh the page or reopen the video, the extension will automatically re-detect and add speed options.

### Q: What if the speed options are not sorted correctly?
A: The extension will re-sort speed options every time it loads, please try refreshing the page.

### Q: Will the extension affect video playback quality?
A: No, the extension only adds speed options and does not affect video quality or loading speed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Disclaimer

This extension is for learning and research purposes only. Please use this extension in compliance with Bilibili's user agreement and relevant laws and regulations.

---

**Enjoy efficient video watching!** 🚀

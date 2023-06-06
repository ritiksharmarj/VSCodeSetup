# VS Code setup

Here is a quick list of everything you need in order to set up VS Code.

## Theme

I use the `One Monokai` theme. This is a free theme, similar to my personal favourite Monokai Pro. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai)

`Monokai Pro` theme [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode)

### Extensions

`Auto Rename Tag` to automatically update matching HTML tags. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

`Color Highlight` to highlight colors in CSS code. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

`ES7+ React/Redux/React-Native snippets` to advance development for React/Redux code. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

`Live Server` to create a live preview for the current project. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

`Material Icon` to show code icons. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

`Path Intellisense` to autocompletes filenames. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

`Prettier` to format code. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Settings

```javascript
{
  "editor.mouseWheelZoom": true,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "editor.wordWrap": "on",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "git.autofetch": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.fontSize": 13,
  "workbench.iconTheme": "material-icon-theme",
  "editor.fontFamily": "'JetBrains Mono', 'Cascadia Code', 'Fira Code', 'Courier New', monospace",
  // "editor.fontFamily": "Consolas, 'JetBrains Mono', 'Courier New', monospace",
  "editor.fontWeight": "normal",
  "editor.fontLigatures": true,
  "workbench.activityBar.visible": true,
  "editor.renderWhitespace": "none",
  "editor.tabSize": 2,
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
  "editor.stickyScroll.enabled": true,
  "editor.lineHeight": 1.8,
  "prettier.tabWidth": 2,
  "editor.guides.bracketPairs": "active",
  "workbench.colorTheme": "Monokai Pro",
  "files.autoSave": "onFocusChange",
  "workbench.startupEditor": "none",
  "rapidapi.terminalLink.enabled": false,
  "window.zoomLevel": 1,
  "editor.unicodeHighlight.allowedLocales": {
    "es": true
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash"
}
```

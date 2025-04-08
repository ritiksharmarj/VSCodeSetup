# VS Code setup

Here is a quick list of everything you need to set up VS Code.

## Theme

`Monokai Pro` theme [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode)

### Extensions

`Auto Rename Tag` to automatically update matching HTML tags. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

`Material Icon` to show code icons. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

`Path Intellisense` to autocompletes filenames. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

`Prettier` to format code. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

`Error Lens` - [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

`ESLint` - [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

`Tailwind CSS IntelliSense` - [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)


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
  "editor.fontFamily": "'JetBrains Mono', monospace",
  "editor.fontWeight": "normal",
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "prettier.jsxSingleQuote": false,
  "prettier.singleQuote": false,
  "editor.stickyScroll.enabled": true,
  "editor.lineHeight": 1.8,
  "prettier.tabWidth": 2,
  "editor.guides.bracketPairs": "active",
  "files.autoSave": "onFocusChange",
  "workbench.startupEditor": "none",
  "editor.unicodeHighlight.allowedLocales": {
    "es": true
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "extensions.ignoreRecommendations": true,
  "terminal.integrated.fontSize": 13,
  "editor.linkedEditing": true,
  "update.showReleaseNotes": false,
  "editor.accessibilitySupport": "off",
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "git.confirmSync": false,
  "typescript.updateImportsOnFileMove.enabled": "never",
  "editor.cursorBlinking": "smooth",
  "github.copilot.editor.enableAutoCompletions": false,
  "window.zoomLevel": 0.5,
  "workbench.iconTheme": "material-icon-theme",
  "extensions.autoUpdate": false,
  "diffEditor.hideUnchangedRegions.enabled": true,
  "workbench.colorTheme": "Monokai Pro",
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "terminal.integrated.suggest.enabled": true
}
```

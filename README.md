# VS Code setup

Here is a quick list of everything you need to set up VS Code.

## Theme

`Monokai Pro` theme [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode)

### Extensions

`Material Icon` to show code icons. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

`Path Intellisense` to autocompletes filenames. [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

`Error Lens` - [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

`Tailwind CSS IntelliSense` - [Link &rarr;](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)


### Settings

```javascript
{
  "editor.mouseWheelZoom": true,
  "editor.wordWrap": "on",
  "editor.formatOnSave": true,
  "git.autofetch": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.fontSize": 13,
  "editor.fontFamily": "'JetBrains Mono', monospace",
  "editor.fontWeight": "normal",
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "editor.stickyScroll.enabled": true,
  "editor.lineHeight": 1.8,
  "editor.guides.bracketPairs": "active",
  "files.autoSave": "onFocusChange",
  "workbench.startupEditor": "none",
  "editor.unicodeHighlight.allowedLocales": {
    "es": true
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "extensions.ignoreRecommendations": true,
  "terminal.integrated.fontSize": 13,
  "editor.linkedEditing": true,
  "update.showReleaseNotes": false,
  "editor.accessibilitySupport": "off",
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "git.confirmSync": false,
  "editor.cursorBlinking": "smooth",
  "window.zoomLevel": 0.5,
  "workbench.iconTheme": "material-icon-theme",
  "extensions.autoUpdate": false,
  "update.mode": "manual",
  "diffEditor.hideUnchangedRegions.enabled": true,
  "workbench.colorTheme": "Monokai Pro",
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "terminal.integrated.suggest.enabled": true,
  "search.exclude": {
    "**/node_modules": true
  },
  "github.copilot.enable": {
    "*": false,
    "plaintext": false,
    "markdown": false,
    "scminput": false
  },
  "[json]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "rust-analyzer.inlayHints.typeHints.enable": false,
  "github.copilot.chat.commitMessageGeneration.instructions": [
    {
      "text": "Generate a commit message following the Conventional Commits format: <type>: <description>. Use lowercase for <type>, choosing from: feat, fix, docs, style, refactor, perf, test, chore, build, or ci. The description should be concise (max 50 chars), written in the imperative mood, and without punctuation at the end. For breaking changes, append '!' after the type (e.g., feat!:), and include a 'BREAKING CHANGE:' section in the footer."
    }
  ],
}
```

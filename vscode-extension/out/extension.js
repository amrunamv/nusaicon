"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
function activate(context) {
    console.log('NusaIcons IntelliSense is now active!');
    // List of NusaIcons classes
    const icons = [
        'icon-home', 'icon-menu', 'icon-search', 'icon-arrow-left', 'icon-arrow-right',
        'icon-chevron-down', 'icon-close', 'icon-check', 'icon-map-pin', 'icon-user',
        'icon-users', 'icon-lock', 'icon-shield', 'icon-plus', 'icon-trash', 'icon-edit',
        'icon-folder', 'icon-calendar', 'icon-download', 'icon-upload', 'icon-printer',
        'icon-link', 'icon-settings', 'icon-image', 'icon-video', 'icon-eye', 'icon-eye-off',
        'icon-sun', 'icon-moon', 'icon-shopping-cart', 'icon-star', 'icon-bell', 'icon-heart',
        'icon-mail', 'icon-camera', 'icon-share', 'icon-alert-circle', 'icon-info', 'icon-copy'
    ];
    const provider = vscode.languages.registerCompletionItemProvider(['html', 'javascriptreact', 'typescriptreact', 'vue', 'php'], {
        provideCompletionItems(document, position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            // Only trigger inside class attributes
            if (!linePrefix.includes('class=') && !linePrefix.includes('className=')) {
                return undefined;
            }
            return icons.map(icon => {
                const item = new vscode.CompletionItem(icon, vscode.CompletionItemKind.EnumMember);
                item.detail = 'NusaIcons CSS Class';
                item.documentation = new vscode.MarkdownString(`Renders the **${icon.replace('icon-', '')}** icon from NusaIcons.\\\n\\\nUsage:\\\n\`<i class="${icon}"></i>\``);
                return item;
            });
        }
    }, '-', 'n', 'i', 'c', 'o' // Trigger characters
    );
    context.subscriptions.push(provider);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map
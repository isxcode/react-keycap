// http://www.typescriptlang.org/docs/handbook/declaration-files/templates.html
// 导入静态资源
declare module "*.png" {
    const content: string;
    export = content
}

declare module "*.sass" {
    const content: string;
    export = content
}

declare module "*.md" {
    const content: string;
    export = content
}

declare module "*.json" {
    const content: string;
    export = content
}

declare module "markdown-to-jsx"
declare module "react-router-dom"

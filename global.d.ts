// http://www.typescriptlang.org/docs/handbook/declaration-files/templates.html
// 导入静态资源
declare module "*.png" {
    const content: string
    export = content
}

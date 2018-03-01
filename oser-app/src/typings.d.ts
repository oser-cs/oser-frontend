/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/* Enable JSON file imports as modules */
declare module "*.json" {
    const value: any;
    export default value;
}

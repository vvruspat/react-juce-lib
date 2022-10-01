export declare type Instance = ViewInstance | RawTextViewInstance;
export declare class ViewInstance {
    private _id;
    private _type;
    _children: Instance[];
    _props: any;
    _parent: any;
    constructor(id: string, type: string, props?: any, parent?: ViewInstance);
    getViewId(): string;
    getType(): string;
    getChildIndex(childInstance: Instance): number;
    appendChild(childInstance: Instance): any;
    insertChild(childInstance: Instance, index: number): any;
    removeChild(childInstance: Instance): any;
    setProperty(propKey: string, value: any): any;
    contains(node: Instance): boolean;
}
export declare class RawTextViewInstance {
    private _id;
    private _text;
    _parent: ViewInstance;
    constructor(id: string, text: string, parent: ViewInstance);
    getViewId(): string;
    getText(): string;
    setTextValue(text: string): any;
}
declare const _default: {
    getRootContainer(): ViewInstance;
    createViewInstance(viewType: string, props: any, parentInstance: ViewInstance): ViewInstance;
    createTextViewInstance(text: string, parentInstance: ViewInstance): RawTextViewInstance;
    resetAfterCommit(): any;
};
export default _default;

import { Instance } from "./Backend";
export declare class SyntheticEvent {
    bubbles: boolean;
    defaultPrevented: boolean;
    target: Instance;
    private _internal;
    constructor(props: any);
    stopPropagation(): void;
    preventDefault(): void;
}
export declare class SyntheticMouseEvent extends SyntheticEvent {
    x: number;
    y: number;
    clientX: number;
    clientY: number;
    screenX: number;
    screenY: number;
    relatedTarget: Instance;
    constructor(props: any);
}
export declare class SyntheticKeyboardEvent extends SyntheticEvent {
    keyCode: number;
    key: string;
    constructor(props: any);
}
declare const _default: {
    isMouseEventHandler(key: string): boolean;
    isKeyboardEventHandler(key: string): boolean;
};
export default _default;

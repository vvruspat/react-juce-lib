/** Polyfill ES2015 data structures with core-js. */
import "core-js/es6/set";
import "core-js/es6/map";
export { default as EventBridge } from "./lib/EventBridge";
export * from "./components/View";
export * from "./components/ScrollView";
export * from "./components/Canvas";
export * from "./components/Text";
export * from "./components/TextInput";
export * from "./components/Image";
export * from "./components/Button";
export * from "./components/Slider";
export * from "./components/ListView";
export * from "./lib/SyntheticEvents";
declare const _default: {
    getRootContainer(): import("./lib/Backend").ViewInstance;
    render(element: any, container: any, callback?: (() => void | null | undefined) | undefined): number;
    enableMethodTrace(): void;
};
export default _default;

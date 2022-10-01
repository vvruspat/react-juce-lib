import React, { PropsWithChildren } from "react";
declare function ScrollViewContentView(props: any): React.DOMElement<any, Element>;
export interface ScrollEvent {
    scrollTop: number;
    scrollLeft: number;
}
export interface ScrollViewProps {
    overflow?: string;
    "overflow-x"?: string;
    "overflow-y"?: string;
    "scrollbar-color"?: string;
    "scrollbar-width"?: string | number;
    "scroll-on-drag"?: boolean;
    onScroll: (e: ScrollEvent) => void;
}
export declare function ScrollView(props: PropsWithChildren<ScrollViewProps | any>): React.DOMElement<any, Element>;
export declare namespace ScrollView {
    var ContentView: typeof ScrollViewContentView;
}
export {};

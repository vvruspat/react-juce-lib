import { Component, PropsWithChildren } from "react";
import { CanvasRenderingContext } from "./Canvas";
import { SyntheticMouseEvent } from "../lib/SyntheticEvents";
export interface SliderProps {
    value?: number;
    sensitivity?: number;
    onChange?: (value: number) => void;
    onDraw?: (ctx: CanvasRenderingContext, width: number, height: number, value: number) => void;
    mapDragGestureToValue?: (mouseDownX: number, mouseDownY: number, sensitivity: number, valueAtDragStart: number, dragEvent: SyntheticMouseEvent) => number;
}
declare type SliderState = {
    width: number;
    height: number;
    value: number;
};
/**
 * A generic slider component which can be used as a building block for more complex
 * sliders.
 *
 * Slider takes an onDraw function prop for rendering the Slider using a CanvasRenderingContext.
 * Slider also accepts a mapDragGestureToValue pop which allows customisation when converting mouse drag
 * positions/events to the Slider's normalised value reported via the onChange prop callback.
 *
 * Some default onDraw and mapDragGestureToValue implementations are provided:
 * @see Slider.drawLinearHorizontal
 * @see Slider.drawLinearVertical
 * @see Slider.drawRotary
 *
 * @see Slider.linearHorizontalGestureMap
 * @see Slider.linearVerticalGestureMap
 * @see Slider.rotaryGestureMap
 *
 * @example
 *
 * <Slider
 *  onChange={(value) => console.log("Slider value changed: " + value)}
 *  onDraw={Slider.drawRotary('ff66FDCF', 'ff626262')}
 *  mapDragGestureToValue={Slider.rotaryGestureMap}
 * />
 *
 */
export declare class Slider extends Component<PropsWithChildren<SliderProps | any>, SliderState> {
    static linearHorizontalGestureMap: (mouseDownX: number, mouseDownY: number, sensitivity: number, valueAtDragStart: number, dragEvent: SyntheticMouseEvent) => number;
    static linearVerticalGestureMap: (mouseDownX: number, mouseDownY: number, sensitivity: number, valueAtDragStart: number, dragEvent: SyntheticMouseEvent) => number;
    static rotaryGestureMap: (mouseDownX: number, mouseDownY: number, sensitivity: number, valueAtDragStart: number, dragEvent: SyntheticMouseEvent) => number;
    static drawLinearHorizontal: (trackColor: string, fillColor: string) => (ctx: CanvasRenderingContext, width: number, height: number, value: number) => void;
    static drawLinearVertical: (trackColor: string, fillColor: string) => (ctx: CanvasRenderingContext, width: number, height: number, value: number) => void;
    static drawRotary: (trackColor: any, fillColor: any) => (ctx: any, width: any, height: any, value: any) => void;
    private _valueAtDragStart;
    private _mouseDownX;
    private _mouseDownY;
    static defaultProps: {
        sensitivity: number;
        onDraw: (ctx: any, width: any, height: any, value: any) => void;
        mapDragGestureToValue: (mouseDownX: number, mouseDownY: number, sensitivity: number, valueAtDragStart: number, dragEvent: SyntheticMouseEvent) => number;
    };
    constructor(props: PropsWithChildren<SliderProps | any>);
    _onMeasure(e: any): void;
    _onMouseDown(e: SyntheticMouseEvent): void;
    _onMouseDrag(e: SyntheticMouseEvent): void;
    _onDraw(ctx: CanvasRenderingContext): any;
    render(): JSX.Element;
}
export {};

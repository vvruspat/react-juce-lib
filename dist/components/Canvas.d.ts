import React, { Component } from "react";
export declare class CanvasRenderingContext {
    private _drawCommands;
    constructor();
    reset(): void;
    getDrawCommands(): any[];
    set fillStyle(value: string);
    set strokeStyle(value: string);
    set lineWidth(value: number);
    set font(value: string);
    set textAlign(value: string);
    fillRect(x: number, y: number, width: number, height: number): void;
    strokeRect(x: number, y: number, width: number, height: number): void;
    strokeRoundedRect(x: number, y: number, width: number, height: number, cornerSize: number): void;
    fillRoundedRect(x: number, y: number, width: number, height: number, cornerSize: number): void;
    clearRect(x: number, y: number, width: number, height: number): void;
    beginPath(): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    closePath(): void;
    stroke(): void;
    fill(): void;
    rotate(angle: number): void;
    translate(x: number, y: number): void;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    resetTransform(): void;
    drawImage(image: string, dx: number, dy: number): void;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
}
export interface CanvasProps {
    onDraw: (ctx: CanvasRenderingContext) => void;
    onMeasure?: (e: any) => void;
    stateful?: boolean;
    children?: React.ReactNode;
}
interface CanvasState {
    width: number;
    height: number;
}
export declare class Canvas extends Component<CanvasProps, CanvasState> {
    private _ctx;
    constructor(props: CanvasProps);
    _onMeasure(e: any): void;
    _onDraw(): any[];
    render(): React.DOMElement<Readonly<CanvasProps> & {
        onDraw: () => any[];
        onMeasure: (e: any) => void;
    }, Element>;
}
export {};

import React from "react";
import { SyntheticMouseEvent } from "../lib/SyntheticEvents";
export interface ButtonProps {
    onClick: (e: SyntheticMouseEvent) => void;
    onMouseDown?: (e: SyntheticMouseEvent) => void;
    onMouseUp?: (e: SyntheticMouseEvent) => void;
    onMouseEnter?: (e: SyntheticMouseEvent) => void;
    onMouseLeave?: (e: SyntheticMouseEvent) => void;
    children?: React.ReactNode;
}
/**
 * A simple Button component which can be used as a building block
 * for more complex button types.
 *
 * @example
 *
 * <Button onClick={() => { console.log("clicked"); }} {...styles.button}>
 *   <Text {...styles.text}>
       Hello World
 *   </Text>
 * </Button>
 *
 * const styles = {
 *   text: {
 *     'font-size': 18.0,
 *     'line-spacing': 1.6,
 *     'color': 'ff626262'
 *   },
 *   button: {
 *     'justify-content': 'center',
 *     'align-items': 'center',
 *     'width': '100%',
 *     'height': '100%',
 *     'border-radius': 5.0,
 *     'border-width': 2.0,
 *     'border-color': 'ff626262'
 *   }
 * };
 *
 */
export declare const Button: ({ onMouseDown, onMouseUp, onClick, children, ...other }: ButtonProps) => JSX.Element;

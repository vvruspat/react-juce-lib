import React, { useCallback, useMemo, useRef, useState } from "react";

import { View } from "./View";
import { SyntheticMouseEvent } from "../lib/SyntheticEvents";
import { ViewInstance } from "../lib/Backend";

//TODO: Once ViewProps work is complete we can probably
//      remove this in favour of ViewProps.
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
export const Button = ({
  onMouseDown,
  onMouseUp,
  onClick,
  children,
  ...other
}: ButtonProps) => {
  const _ref = useRef<ViewInstance>();
  const [down, setDown] = useState(false);
  const opacity = useMemo(() => (down ? 0.8 : 1.0), [down]);

  const handleDown = useCallback((e: SyntheticMouseEvent): void => {
    onMouseDown?.(e);
    setDown(true);
  }, []);

  const handleUp = useCallback((e: SyntheticMouseEvent): void => {
    onMouseUp?.(e);

    setDown(false);

    if (typeof onClick === "function") {
      const instance = _ref ? _ref.current : null;

      if (instance && instance.contains(e.relatedTarget)) {
        onClick(e);
      }
    }
  }, []);

  return (
    <View
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      opacity={opacity}
      viewRef={_ref}
      {...other}
    >
      {children}
    </View>
  );
};

import { useEffect } from "react";

/**
 * Attaches an event listener to `window` object.
 * Re-attaches when handler changes and unattaches on unmount
 */
export const useWindowEvent = <E extends WindowEventType>(
  event: E,
  handler: WindowEventHandler<E>
) => {
  useEffect(() => {
    window.addEventListener(event, handler);

    return () => {
      window.removeEventListener(event, handler);
    };
  }, [handler]);
};

type WindowEventType = keyof WindowEventMap;
type WindowEventHandler<WindowEventType extends keyof WindowEventMap> = (
  this: Window,
  ev: WindowEventMap[WindowEventType]
) => unknown;

import React from "react";
import ResizeObserver from "resize-observer-polyfill";

export function useMeasure<T extends Element>() {
  const ref = React.useMemo(() => React.createRef<T>(), []);

  const [bounds, set] = React.useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const ro = React.useMemo(
    () => new ResizeObserver(([entry]) => set(entry.contentRect)),
    []
  );

  React.useEffect(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ro, ref]);

  return [{ ref }, bounds] as const;
}

import { useRef, useEffect, type RefObject } from "react";

export const useDragScroll = (trackRef: RefObject<HTMLDivElement | null>) => {
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    scrollStart: 0,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onMouseDown = (event: MouseEvent) => {
      event.preventDefault();
      dragState.current = {
        isDragging: true,
        startX: event.clientX,
        scrollStart: track.scrollLeft,
      };
    };

    const onMouseMove = (event: MouseEvent) => {
      const { isDragging, startX, scrollStart } = dragState.current;
      if (!isDragging) return;
      track.scrollLeft = scrollStart - (event.clientX - startX);
    };

    const onMouseUp = () => {
      dragState.current.isDragging = false;
    };

    track.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      track.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [trackRef]);
};

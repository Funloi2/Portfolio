import { useEffect, useState } from "react";

export default function CursorFollower() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect touch-primary devices
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        setIsTouchDevice(isTouch);
        if (isTouch) return;

        const onMove = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
            if (!visible) setVisible(true);
        };

        const onLeave = () => setVisible(false);
        const onEnter = () => setVisible(true);

        window.addEventListener("mousemove", onMove);
        document.addEventListener("mouseleave", onLeave);
        document.addEventListener("mouseenter", onEnter);

        return () => {
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseleave", onLeave);
            document.removeEventListener("mouseenter", onEnter);
        };
    }, [visible]);

    if (isTouchDevice) return null;

    return (
        <div
            className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border-2 transition-transform duration-150 ease-out"
            style={{
                width: 32,
                height: 32,
                borderColor: "#273d9e",
                transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)`,
                opacity: visible ? 1 : 0,
            }}
        />
    );
}
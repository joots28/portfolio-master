import { useEffect, useRef } from "react"

export function AtomArt() {
  return (
    <div className="atom-scene" aria-hidden="true">
      <div className="atom-halo" />
      <div className="atom-assembly">
        <div className="atom-nucleus">
          <i />
          <i />
          <i />
          <i />
        </div>
        {[0, 1, 2].map((index) => (
          <div className={`atom-plane plane-${index}`} key={index}>
            <div className="atom-track" />
            <div className="electron-orbit">
              <span className="electron" />
            </div>
          </div>
        ))}
      </div>
      <div className="atom-floor" />
    </div>
  )
}

export function FuturisticCursor() {
  const cursor = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const query = window.matchMedia(
      "(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)",
    )
    let frame = 0
    const hide = () => {
      document.documentElement.classList.remove("cursor-enabled")
      cursor.current?.classList.remove("cursor-visible")
    }
    const move = (event: PointerEvent) => {
      if (!query.matches || event.pointerType !== "mouse") {
        hide()
        return
      }
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (!cursor.current) return
        cursor.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
        cursor.current.classList.add("cursor-visible")
        cursor.current.classList.toggle(
          "cursor-interactive",
          !!(event.target as Element).closest("a, button"),
        )
        document.documentElement.classList.add("cursor-enabled")
      })
    }
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Tab") hide()
    }
    window.addEventListener("pointermove", move)
    document.documentElement.addEventListener("pointerleave", hide)
    window.addEventListener("blur", hide)
    window.addEventListener("keydown", keyboard)
    query.addEventListener("change", hide)
    return () => {
      cancelAnimationFrame(frame)
      hide()
      window.removeEventListener("pointermove", move)
      document.documentElement.removeEventListener("pointerleave", hide)
      window.removeEventListener("blur", hide)
      window.removeEventListener("keydown", keyboard)
      query.removeEventListener("change", hide)
    }
  }, [])
  return (
    <div className="future-cursor" ref={cursor} aria-hidden="true">
      <span />
      <i />
    </div>
  )
}
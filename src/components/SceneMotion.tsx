import { useEffect } from "react"

export default function SceneMotion({
  route,
  paused,
}: {
  route: string
  paused: boolean
}) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    const fine = window.matchMedia("(pointer: fine)")
    const root = document.documentElement
    let frame = 0
    let pointerFrame = 0
    const update = () => {
      frame = 0
      const distance =
        document.documentElement.scrollHeight - window.innerHeight
      root.style.setProperty(
        "--page-progress",
        `${distance > 0 ? window.scrollY / distance : 0}`,
      )
      if (!reduced.matches && !paused) {
        root.style.setProperty(
          "--hero-shift",
          `${Math.min(window.scrollY, window.innerHeight) * 0.16}px`,
        )
      } else root.style.setProperty("--hero-shift", "0px")
    }
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const move = (event: PointerEvent) => {
      if (reduced.matches || paused || !fine.matches) return
      const x = (event.clientX / window.innerWidth - 0.5) * 12
      const y = (event.clientY / window.innerHeight - 0.5) * 9
      cancelAnimationFrame(pointerFrame)
      pointerFrame = requestAnimationFrame(() => {
        root.style.setProperty("--scene-x", `${x}deg`)
        root.style.setProperty("--scene-y", `${-y}deg`)
      })
    }
    update()
    window.addEventListener("scroll", scroll, { passive: true })
    window.addEventListener("resize", scroll)
    window.addEventListener("pointermove", move, { passive: true })
    reduced.addEventListener("change", update)
    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(pointerFrame)
      window.removeEventListener("scroll", scroll)
      window.removeEventListener("resize", scroll)
      window.removeEventListener("pointermove", move)
      reduced.removeEventListener("change", update)
      root.style.setProperty("--scene-x", "0deg")
      root.style.setProperty("--scene-y", "0deg")
    }
  }, [route, paused])
  return (
    <div className="reading-progress" aria-hidden="true">
      <span />
    </div>
  )
}
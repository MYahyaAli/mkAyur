"use client"

import { useState, useEffect } from "react"
import { useMounted } from "./use-mounted"

export function useMediaQuery(query: string): boolean {
    const mounted = useMounted()
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        if (!mounted) return

        const media = window.matchMedia(query)
        const updateMatches = () => setMatches(media.matches)

        // Set initial value
        updateMatches()

        // Listen for changes
        media.addEventListener("change", updateMatches)

        return () => {
            media.removeEventListener("change", updateMatches)
        }
    }, [query, mounted])

    return matches
}

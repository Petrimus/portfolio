import { useRef, useLayoutEffect, useState } from 'react'

const isBrowser = typeof window !== `undefined`

const getScrollPosition = () => {
  if (!isBrowser) return { x: 0, y: 0 }
  const position = document.body.getBoundingClientRect()

  return { x: position.left, y: position.top }
}

export const useScrollPosition = (effect, deps, wait) => {
  const position = useRef(getScrollPosition())

  let throttleTimeout = null

  const handleChange = () => {
    const currPos = getScrollPosition()
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(handleChange, wait)
        }
      } else {
        handleChange()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}


export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  const withoutReset = {
    type,
    value,
    onChange
  }

  return {
    type,
    value,
    onChange,
    reset,
    withoutReset
  }
}
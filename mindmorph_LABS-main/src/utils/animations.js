export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 }
}

export const slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.4 }
}

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

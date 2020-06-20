const observeSection = ({element, threshold, callback}: any) => {
  const options = {threshold}

  const observerCallback = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
        callback()
        observer.unobserve(entry.target)
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, options)
  observer.observe(element)
}

export const domService = {
  observeSection
}

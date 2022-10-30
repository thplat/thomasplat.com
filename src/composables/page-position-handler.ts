import app from "@/config/app";
import routes from "@/router/routes";
import { useRoutingStore } from "@/stores/routing";

// Since vue router does not support one-pagers we have to do scroll handling ourselves

/**
 * Replaces vertical scrolling by horizontal scrolling for a given selector
 * @param selector 
 */
export const useHorizontalScroll = (selector: string) => {
  const store = useRoutingStore()

  const scrollBehavior = () => {
    const scrollContainer = document.querySelector(selector);

    if (!scrollContainer)
      return

    jumpToInitialRoute(selector)

    if (window.innerWidth < app.max_width) return 

    scrollContainer.addEventListener("wheel", (e) => {
      if (window.innerWidth < app.max_width) return 
      e.preventDefault();
      scrollContainer.scrollLeft += (e as WheelEvent).deltaY
    });

    scrollContainer.addEventListener("scroll", (e) => {
      if (window.innerWidth < app.max_width) return 
      ratioScroll(scrollContainer, '.projects-grid', 1.4)
      ratioScroll(scrollContainer, '.work-history', 1.3, 1)      
      ratioScroll(scrollContainer, '.skills', 1, 2)  
    })
  }

  const detectRoute = (event: Event) => {
    const mode = window.innerWidth < 1400 ? 'vertical' : 'horizontal'

    const el = document.querySelector(selector)

    if (!el)
      throw new Error(`Container not found`)

    const routePositions = mode === 'horizontal' 
      ? routes.map((route, index) => document.body.clientWidth * index)
      : routes.map((route, index) => {
        const scrollContainer = document.querySelector(selector)

        if (!scrollContainer) 
          throw new Error(`Scroll Container not found`)

        return elementVerticalOffset(scrollContainer, index)
      })
  
    const currentRoutePosition = [...routePositions].reverse().find(predicate => (mode === 'horizontal' ? el.scrollLeft : el.scrollTop) >= predicate)

    const currentRouteIndex = routePositions.indexOf(currentRoutePosition!)
    const currentRoute = routes[currentRouteIndex]
  
    if (currentRoute && store.currentRoute !== currentRoute.path) {
      store.currentRoute = currentRoute.path
    }
  }  

  return { detectRoute, scrollBehavior }
}

/**
 * Scrolls {element} vertically based on the total horizontal scroll of {parent}
 * @param parent 
 * @param selector 
 * @param speed 
 * @param initialOffset 
 */
const ratioScroll = (parent: Element, selector: string, speed = 1, initialOffset = 0) => {
  const el = document.querySelector<HTMLElement>(selector)    

  if (!el)
    return

  const parentHeight = parent.getBoundingClientRect().height
  const elHeight = el.getBoundingClientRect().height

  const delta = elHeight - parentHeight

  const scrollWidthRatio = (parent.scrollLeft - (window.innerWidth * initialOffset)) / window.innerWidth


  el.style.top = `${ -1 * ( (scrollWidthRatio * (delta + parentHeight) * speed  )) }px`     
}

const elementVerticalOffset = (element: Element, index: number) => {
  const currentTopOffset = element.scrollTop
  const slideElement = element.children[index]
  
  const rect = slideElement.getBoundingClientRect()
  return rect.top + currentTopOffset + 1
}

const jumpToInitialRoute = (selector: string) => {
  const path = window.location.pathname

  if (path === '/')
    return

  const route = routes.find(predicate => predicate.path === path)

  if (!route)
    return

  navigateTo(route.path, selector, { smooth: false })
}

/**
 * Jumps to a route on a page
 * 
 * @param event 
 * @param index 
 * @param selector 
 * @returns {void} 
 */
export const navigateTo = (route: string, selector: string, options = { smooth: true }) => {
  const scrollContainer = document.querySelector(selector);
  const routeObject = routes.find(predicate => predicate.path === route)
  const index = routes.findIndex(predicate => predicate === routeObject)

  if (!scrollContainer)
    return  

  if (!routeObject) {
    throw new Error(`Route ${route} does not exist`)
  }

  history.pushState({}, '', routeObject.path)
    
  if (window.innerWidth <= 1024) {
    window.history.scrollRestoration = 'manual'
    
    const offset = elementVerticalOffset(scrollContainer, index)

    scrollContainer.scrollTo({
      top: offset,
      behavior: options.smooth ? 'smooth' : 'auto'
    })

    return
  }

  scrollContainer.scroll({
    left: document.body.offsetWidth * index,
    behavior: options.smooth ? 'smooth' : 'auto'
  })
}


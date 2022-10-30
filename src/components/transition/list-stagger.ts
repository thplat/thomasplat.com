import app from '@/config/app'
import gsap from 'gsap'

export const useTransitions = () => ({

    beforeEnter: (el: Element) => {
        if (window.innerWidth < app.max_width) return

        const style = (el as HTMLElement).style
        const data = (el as HTMLElement).dataset
    
        if (!data.index)
            throw new Error(`Attribute data-index not found on ProjectPanel Element`)
    
        style.opacity = '0';
        style.transform = 'translateY(100px)'
    }, 

    enter: (el: Element, done: () => void) => {
        if (window.innerWidth < app.max_width) return

        const data = (el as HTMLElement).dataset
    
        if (!data.index)
            throw new Error(`Attribute data-index not found on ProjectPanel Element`)
    
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            onComplete: done,
            delay: parseInt(data.index) * 0.05
        })
    }    
})
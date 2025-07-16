import type { Skill } from '@/types'
import { defineStore } from 'pinia'

interface RootState {
    skills: Skill[]
}

export const useSkillsStore = defineStore({
  id: 'skills',
  state: (): RootState => ({
    skills: [
        {
            category: 'Backend',
            logos: ['laravel', 'node'],
            description: 'The invisible parts of a system that holds it together always fascinated me. Designing scalable systems, that work well under stress is compelling for any projects success!'
        },
        {
            category: 'Frontend',
            logos: ['vue', 'js'],
            description: 'Guiding a user through a complex systems is not an easy task, but one that I love the most. Creating well-maintainable UIs that are intuitive to use is something I do on a daily basis.'
        },
        {
            category: 'Software-Design',
            logos: [],
            description: 'The way code behaves and the way code is structured are two inherently different things. Code quality is a severly underrated discipline and that\'s why I made it my mission to learn everything about software architecture and design patterns.',
        }
    ]
  }),
})

import type { Project } from '@/types/types'
import { defineStore } from 'pinia'

interface RootState {
  projects: Project[]
}

export const useProjectStore = defineStore({
  id: 'project',
  state: (): RootState => ({
    projects: [
      {
        type: 'Node / Adonis / Javascript / Vue',
        title: 'jobist.ai',
        description: 'An AI-powered job posting generator that creates customized job listings in seconds. The platform streamlines recruitment by crafting tailored job descriptions through AI.',
        link: {
          name: 'jobist',
          url: 'https://jobist.ai'
        },
        highlight: true
      }, 
      {
        type: 'PHP / Laravel / Javascript / Vue',
        title: 'wildriftguides.gg',
        description: 'a web application for guides written by Wild Rift players. A custom reactive guide editor allows for lots of flexibility when creating guides.',
        link: {
          name: 'wildriftguides.gg',
          url: 'https://wildriftguides.gg'
        }
      },   
      {
        type: 'Javascript / Vue',
        title: 'thomasplat.com',
        description: 'this website is open-source! Check it out on github!',
        link: {
          name: 'Github',
          url: 'https://github.com/thplat/thomasplat.com'
        }
      },    
      {
        type: 'Node',
        title: 'Mocksrv',
        description: 'a library to mock API requests in the frontend without a server. Features a rich API for most flexibility. This is a work in progress.',
        link: {
          name: 'Github',
          url: 'https://github.com/thplat/mocksrv'
        },
        highlight: true
      },                  
    ]
  }),
})

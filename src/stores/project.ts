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
        type: 'Javascript / Node / Vue',
        online: true,
        title: 'noway-koreaclimb.de',
        description: 'a tracking application for Germanys biggest League of Legends streamer. A cheap $10 droplet handles over a million requests a day. Hail the power of caching!',
        link: {
          name: 'noway-koreaclimb.de',
          url: 'https://noway-koreaclimb.de'
        }
      },
      {
        type: 'Node',
        online: true,
        title: 'Mocksrv',
        description: 'a library to mock API requests in the frontend without a server. Features a rich API for most flexibility. This is a work in progress.',
        link: {
          name: 'Github',
          url: 'https://github.com/thplat/mocksrv'
        },
        highlight: true
      },
      {
        type: 'Javascript / Vue',
        online: true,
        title: 'thomasplat.com',
        description: 'this website is open-source! Check it out on github!',
        link: {
          name: 'Github',
          url: 'https://github.com/thplat'
        }
      },
      {
        type: 'PHP / Laravel / Javascript / Vue',
        online: false, 
        title: 'wildriftguides.gg',
        description: 'a web application for guides written by Wild Rift players. A custom reactive guide editor allows for lots of flexibility when creating guides.',
        link: {
          name: 'wildriftguides.gg',
          url: 'https://wildriftguides.gg'
        }
      },
    ]
  }),
})

import type { CvBasicItem, WorkHistoryEntry } from '@/types/types'
import config from '@/config/app'
import { defineStore } from 'pinia'
import { i18n } from '@/plugins/i18n'

interface RootState {
  basicData: CvBasicItem[],
  entries: WorkHistoryEntry[]
}

export const useCvStore = defineStore({
  id: 'cv',
  state: (): RootState => ({
    basicData: [
      {
        label: i18n.t('cv.labels.name'),
        value: i18n.t('cv.values.name')
      },      
      {
        label: i18n.t('cv.labels.birthday'),
        value: i18n.t('cv.values.birthday')
      },
      {
          label: i18n.t('cv.labels.address'),
          value: i18n.t('cv.values.address')
      },
      {
          label: i18n.t('cv.labels.languages'),
          value: i18n.t('cv.values.languages')
      },
      {
        label: i18n.t('cv.labels.email'),
        value: config.email,
      },
    ],

    entries: [
      {
        type: 'school',
        from: 2009,
        to: 2012,
        location: 'Heinrich-Schickhardt-Schule Freudenstadt - Grammar school',
        description: 'Technical grammar school with the profile subject of computer science'
      },
      {
        type: 'school',
        from: 2012,
        to: 2015,
        location: 'Hans-Kraut-Gewerbeschule - Villingen-Schwenningen',
        description: 'IT specialist education in the specialist area of application development'
      },
      {
        type: 'work',
        from: 2012,
        to: 2015,
        location: 'workID Werbeagentur (digital agency)',
        description: 'Fields of work: PHP-Development, Facebook app development, web application development, server administration'
      },      
      {
        type: 'work',
        from: 2015,
        to: 2019,
        location: 'oddity GmbH (digital agency)',
        description: 'Fields of work: PHP-Development, web application development, planning and implementation of software design principles across the development team'
      },     
      {
        type: 'work',
        from: 2019,
        to: 2020,
        location: 'loadbee GmbH',
        description: 'Fields of work: Frontend- and UI-Development with Javascript & VueJS, PHP-Development, technical conception'
      },
      {
        type: 'work',
        from: 2020,
        to: 2021,
        location: 'Growin Kim & Plat GbR',
        description: 'Fields of work: business management, frontend and backend development, technical conception'
      },
      {
        type: 'work',
        from: 2021,
        location: 'loadbee GmbH',
        description: 'Fields of work: Frontend- and UI-Development with Javascript & VueJS, technical conception'
      },      
    ]
  }),

  getters: {
    history: (state) => state.entries.reverse() 
  }
})

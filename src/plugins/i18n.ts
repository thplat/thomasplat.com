import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import de from '../i18n/de.json'
import en from '../i18n/en.json'

export const instance = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        de,
        en
    }
})

export const useI18n = (app: App) => {
    app.use(instance)
}

export const i18n = instance.global
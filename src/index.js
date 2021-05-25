import Cron from '@/components/Cron.vue'

export default {
    install: (app) => {
        app.component(Cron.name, Cron)
    },
    Cron
}
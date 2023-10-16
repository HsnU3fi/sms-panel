// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
export default defineNuxtConfig({
    modules: [
        '@element-plus/nuxt',
        '@vueuse/motion/nuxt',
        '@pinia/nuxt',
    ],
    plugins: ['~/plugins/axios.config.js'],
    buildModules: [
        "@nuxtjs/axios"
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    build:{
        transpile:['vuetify']
    },
    axios: {
        // proxy: true
    },
    components: {
        global: true,
        dirs: ['~/components']
    },
    motion: {
        directives: {
            'pop-bottom': {
                initial: {
                    scale: 0,
                    opacity: 0,
                    y: 100
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    y: 0
                },
            }
        }
    },
    css: ['@/static/bootstrap/bootstrap-grid.css', '@/assets/scss/main.scss','@mdi/font/css/materialdesignicons.css'],
})

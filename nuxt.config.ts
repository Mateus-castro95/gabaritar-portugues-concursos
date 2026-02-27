// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Gabaritar Português - Concursos',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap' }
      ],
      script: [
        {
          // Utmify Pixel
          innerHTML: `window.pixelId = "699fe4457494d33e101160de"; var a = document.createElement("script"); a.setAttribute("async", ""); a.setAttribute("defer", ""); a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js"); document.head.appendChild(a);`
        },
        {
          // Utmify UTM
          src: 'https://cdn.utmify.com.br/scripts/utms/latest.js',
          'data-utmify-prevent-xcod-sck': '',
          'data-utmify-prevent-subids': '',
          async: true,
          defer: true
        }
      ]
    }
  }
})
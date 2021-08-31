export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'form-visualizer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  storybook: {
    // 追加のアドオンなどあれば
    addons: [
      '@storybook/addon-controls',
      '@storybook/addon-notes',
    ],
    // ポート指定
    port: 5555,
    parameters: {
      // 背景色：デフォルトの色を使う場合
      backgrounds: {
        default: 'dark', // light or dark
      },
      // 背景色：カスタマイズする場合
      backgrounds: {
        default: 'brown',
        values: [
          {
            name: 'brown',
            value: '#56371B'
          },
          {
            name: 'light',
            value: '#fff'
          },
          {
            name: 'dark',
            value: '#333'
          },
        ]
      },
      // Description, Default, Controlsカラムの表示
      controls: {
        expanded: true
      },
      // 表示位置
      layout: 'centered', // centered:中央表示, padded:コンポーネントに余白付与, fullscreen:幅いっぱい
    }
  }
}

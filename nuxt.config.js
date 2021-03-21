import colors from 'vuetify/es5/util/colors';

export default {
	head: {
		titleTemplate: '%s - nuxt_google-shop-clone',
		title: 'nuxt_google-shop-clone',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	css: [{ src: '~/assets/style/app.styl', lang: 'styl' }],

	plugins: [],

	components: true,

	buildModules: ['@nuxtjs/vuetify'],

	modules: [],

	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			themes: {
				light: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3,
				},
			},
		},
	},
	build: {},
	pageTransition: 'fade-transition',
};

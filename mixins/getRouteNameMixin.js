export default {
	computed: {
		getRouteName() {
			const path = this.$route.path;
			const routeName = path.split('/')[1];
			return routeName;
		},
	},
};

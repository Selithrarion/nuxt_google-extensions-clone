export default {
	computed: {
		isLoadingStatusStore() {
			return this.$store.state.loading.isLoadingStatus;
		},
	},
	methods: {
		setLoadingStatusStore() {
			this.$store.dispatch('loading/setLoadingStatus');
		},
		setLoadedStatusStore() {
			this.$store.dispatch('loading/setLoadedStatus');
		},
	},
};

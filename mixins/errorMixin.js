export default {
	computed: {
		isErrorStatusStore() {
			return this.$store.state.error.isErrorStatus;
		},
	},
	methods: {
		setIsErrorStatusStore() {
			this.$store.dispatch('error/setIsErrorStatus');
		},
		removeIsErrorStatusStore() {
			this.$store.dispatch('error/removeIsErrorStatus');
		},
	},
};

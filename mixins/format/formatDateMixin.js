export default {
	methods: {
		formatDate(date, withTime, onlyTime) {
			if (withTime) return new Date(date).toLocaleString();
			else if (onlyTime) return new Date(date).toLocaleTimeString();
			else return new Date(date).toLocaleDateString();
		},
	},
};

export default {
	methods: {
		roundBigNumber(number) {
			if (number < 1000) return number;
			else if (number < 10000) return '1000+';
			else if (number < 100000) return '10000+';
			else if (number < 1000000) return number.toString()[0] + '00 000+';
			else if (number < 10000000) return number.toString()[0] + ' 000 000+';
			else return number.toString()[0] + '0 000 000+';
		},
	},
};

export const actions = {
	async getSearchData({}, search) {
		console.log('search', search);
		const data = await new Promise((res) => {
			setTimeout(() => {
				res();
			}, 1000);
		});
		return data;
	},
};

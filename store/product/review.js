export const state = () => ({
	sortType: '',
	filterLang: '',
});

export const mutations = {
	SET_LANG_FILTER(state, lang) {
		state.filterLang = lang;
	},
	SET_SORTING(state, sort) {
		state.sortType = sort;
	},
};

export const actions = {
	setLangFilter({ commit }, lang) {
		console.log('set lang filter', lang);
		commit('SET_LANG_FILTER', lang);
	},
	setSorting({ commit }, sort) {
		console.log('set sorting', sort);
		commit('SET_SORTING', sort);
	},

	async addReview({ rootState }, text) {
		console.log('add review', text);
		console.log('user id', rootState.user.id);
	},

	async setReviewIsUseful({ rootState }, { id, value }) {
		console.log('set review is useful', id, value);
		console.log('user id', rootState.user.id);
	},
	async complainReview({ rootState }, id) {
		console.log('complain review', id);
		console.log('user id', rootState.user.id);
	},

	async sendReviewReply({ rootState }, { id, text }) {
		console.log('send review reply', id, text);
		console.log('user id', rootState.user.id);
	},
};

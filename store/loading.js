export const state = () => ({
	isLoadingStatus: true,
});

export const mutations = {
	SET_LOADING_STATUS(state) {
		state.isLoadingStatus = true;
	},
	SET_LOADED_STATUS(state) {
		state.isLoadingStatus = false;
	},
};

export const actions = {
	setLoadingStatus({ commit }) {
		commit('SET_LOADING_STATUS');
	},
	setLoadedStatus({ commit }) {
		commit('SET_LOADED_STATUS');
	},
};

export const state = () => ({
	isErrorStatus: false,
});

export const mutations = {
	SET_IS_ERROR_STATUS(state) {
		state.isErrorStatus = true;
	},
	REMOVE_IS_ERROR_STATUS(state) {
		state.isErrorStatus = false;
	},
};

export const actions = {
	setIsErrorStatus({ commit }) {
		commit('SET_IS_ERROR_STATUS');
	},
	removeIsErrorStatus({ commit }) {
		commit('REMOVE_IS_ERROR_STATUS');
	},
};

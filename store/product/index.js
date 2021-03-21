export const state = () => ({
	features: [],
	category: 'all',
	rating: 'all',
});

export const mutations = {
	UPDATE_FEATURES_DATA(state, featuresData) {
		state.features = featuresData;
	},
	CLEAR_FEATURES_DATA(state) {
		state.features = [];
	},

	UPDATE_RATINGS_DATA(state, stars) {
		state.rating = stars;
	},
	CLEAR_RATINGS_DATA(state) {
		state.rating = 'all';
	},

	UPDATE_CATEGORY(state, category) {
		state.category = category;
	},
};

export const actions = {
	async getExtensionsData({ state }) {
		const { features, category, rating } = state;
		console.log('get extensions data', features, category, rating);
		const data = await new Promise((res) => {
			setTimeout(() => {
				res({
					carousel: [
						{
							id: 14157,
							type: 'carousel',
							website: 'website.com',
							imgURL: `https://lh3.googleusercontent.com/Lpg4xZWbDMFCeOtmZE60LWQsA3-fl-0x8f_u33I93fou6LEz4TIgQCh0LZYfwlt0dOte7eZA3comIjXqQxGLsG6yKw=w700-h280-e365-rj-sc0x00ffffff`,
						},
						{
							id: 144157,
							type: 'carousel',
							website: 'website.com',
							imgURL: `https://lh3.googleusercontent.com/Lpg4xZWbDMFCeOtmZE60LWQsA3-fl-0x8f_u33I93fou6LEz4TIgQCh0LZYfwlt0dOte7eZA3comIjXqQxGLsG6yKw=w700-h280-e365-rj-sc0x00ffffff`,
						},
					],
					extensions: [
						{
							id: 12645,
							title: 'Google Hangouts',
							description:
								'Hangouts делает общение более ярким. Добавляйте в чат фотографии и смайлики и устраивайте групповые видеовстречи. Это бесплатно!',
							type: 'extension',
							website: 'website.com',
							rating: 3.4,
							ratingQuantity: 34123,
							imgURL: `https://lh3.googleusercontent.com/JJIt25TAeYDRQ9LBHEzQPFY4qg6k7T-ABk_NNBWm0r8qCZEjhjt2Y3f29Ug15mw4Av0WzuGELBPBdMvMsT_RmrlE=w220-h140-e365-rj-sc0x00ffffff`,
						},
						{
							id: 126145,
							title: 'Google Hangouts',
							description:
								'Hangouts делает общение более ярким. Добавляйте в чат фотографии и смайлики и устраивайте групповые видеовстречи. Это бесплатно!',
							type: 'extension',
							website: 'website.com',
							rating: 3.4,
							ratingQuantity: 34123,
							imgURL: `https://lh3.googleusercontent.com/JJIt25TAeYDRQ9LBHEzQPFY4qg6k7T-ABk_NNBWm0r8qCZEjhjt2Y3f29Ug15mw4Av0WzuGELBPBdMvMsT_RmrlE=w220-h140-e365-rj-sc0x00ffffff`,
						},
						{
							id: 126545,
							title: 'Google Hangouts',
							description:
								'Hangouts делает общение более ярким. Добавляйте в чат фотографии и смайлики и устраивайте групповые видеовстречи. Это бесплатно!',
							type: 'extension',
							website: 'website.com',
							rating: 3.4,
							ratingQuantity: 34123,
							imgURL: `https://lh3.googleusercontent.com/JJIt25TAeYDRQ9LBHEzQPFY4qg6k7T-ABk_NNBWm0r8qCZEjhjt2Y3f29Ug15mw4Av0WzuGELBPBdMvMsT_RmrlE=w220-h140-e365-rj-sc0x00ffffff`,
						},
						{
							id: 241,
							title: 'Google Hangouts',
							description:
								'Hangouts делает общение более ярким. Добавляйте в чат фотографии и смайлики и устраивайте групповые видеовстречи. Это бесплатно!',
							type: 'extension',
							website: 'website.com',
							rating: 3.4,
							ratingQuantity: 34123,
							imgURL: `https://lh3.googleusercontent.com/JJIt25TAeYDRQ9LBHEzQPFY4qg6k7T-ABk_NNBWm0r8qCZEjhjt2Y3f29Ug15mw4Av0WzuGELBPBdMvMsT_RmrlE=w220-h140-e365-rj-sc0x00ffffff`,
						},
						{
							id: 126845,
							title: 'Google Hangouts',
							description:
								'Hangouts делает общение более ярким. Добавляйте в чат фотографии и смайлики и устраивайте групповые видеовстречи. Это бесплатно!',
							type: 'extension',
							website: 'website.com',
							rating: 3.4,
							ratingQuantity: 34123,
							imgURL: `https://lh3.googleusercontent.com/JJIt25TAeYDRQ9LBHEzQPFY4qg6k7T-ABk_NNBWm0r8qCZEjhjt2Y3f29Ug15mw4Av0WzuGELBPBdMvMsT_RmrlE=w220-h140-e365-rj-sc0x00ffffff`,
						},
					],
				});
			}, 500);
		});
		return data;
	},

	async getThemesData({ state }) {
		const { features, category, rating } = state;
		console.log('get themes data', features, category, rating);
		const data = await new Promise((res) => {
			setTimeout(() => {
				res([
					{
						id: 434216,
						title: 'Black & White',
						description: 'Black & White: a timeless combination!',
						type: 'theme',
						website: 'website.com',
						rating: 4.3,
						ratingQuantity: 559,
						imgURL:
							'https://lh3.googleusercontent.com/cbTyu3hrxxC7GrNhGXfo2Du09vJ8wmQnYq_Kuav7YbbrRH-nOQM1xdLPM-98Wct4WtPQmuNj7CyzIYQS-VdHrHd-=w220-h140-e365-rj-sc0x00ffffff',
					},
					{
						id: 4424216,
						title: 'Black & White',
						description: 'Black & White: a timeless combination!',
						type: 'theme',
						website: 'website.com',
						rating: 4.3,
						ratingQuantity: 559,
						imgURL:
							'https://lh3.googleusercontent.com/cbTyu3hrxxC7GrNhGXfo2Du09vJ8wmQnYq_Kuav7YbbrRH-nOQM1xdLPM-98Wct4WtPQmuNj7CyzIYQS-VdHrHd-=w220-h140-e365-rj-sc0x00ffffff',
					},
					{
						id: 43421326,
						title: 'Black & White',
						description: 'Black & White: a timeless combination!',
						type: 'theme',
						website: 'website.com',
						rating: 4.3,
						ratingQuantity: 559,
						imgURL:
							'https://lh3.googleusercontent.com/cbTyu3hrxxC7GrNhGXfo2Du09vJ8wmQnYq_Kuav7YbbrRH-nOQM1xdLPM-98Wct4WtPQmuNj7CyzIYQS-VdHrHd-=w220-h140-e365-rj-sc0x00ffffff',
					},
				]);
			}, 500);
		});
		return data;
	},

	async getProductDetails({}, id) {
		console.log('get product details', id);
		const data = new Promise((res) => {
			setTimeout(() => {
				res({
					id: 15353,
					title: 'Product Title',
					description: 'Product description',
					type: 'ProductType',
					website: 'productwebsite.com',
					rating: 4,
					ratingQuantity: 1000,
					downloads: 2000,
					version: '1.4.1',
					updatedAt: '2021-03-07T13:53:48.422Z',
					createdAt: '2021-03-07T13:53:48.422Z',
					size: '27.40MB',
					lang: ['Russian', 'English'],
					author: {
						id: 63519,
						name: 'ProductAuthor',
						contactURL: null,
						policyURL: null,
						address: {
							country: 'Russia',
							city: 'Maykor',
							street: 'Street',
							house: '1',
						},
					},
					reviews: [
						{
							id: 1,
							author: {
								id: 514,
								name: 'Meganagib1195',
								avatarURL: `https://yt3.ggpht.com/a/AATXAJzDrFvuDbhS_jIuqvQP_u8IImAJRIw4KySN5P9s=s900-c-k-c0xffffffff-no-rj-mo`,
							},
							text: 'nice extension',
							rating: 4,
							updatedAt: 1616123456270,
						},
						{
							id: 2,
							author: {
								id: 5141,
								name: 'MylastDay3',
								avatarURL: `https://yt3.ggpht.com/a/AATXAJzDrFvuDbhS_jIuqvQP_u8IImAJRIw4KySN5P9s=s900-c-k-c0xffffffff-no-rj-mo`,
							},
							text: 'прикольно, но оно просто не работает',
							rating: 2,
							updatedAt: 1616123456275,
						},
					],
					imgURL: `https://lh3.googleusercontent.com/JJIt25TAeYDRQ9LBHEzQPFY4qg6k7T-ABk_NNBWm0r8qCZEjhjt2Y3f29Ug15mw4Av0WzuGELBPBdMvMsT_RmrlE=w220-h140-e365-rj-sc0x00ffffff`,
				});
			}, 500);
		});
		return data;
	},

	async updateFeaturesData({ dispatch, commit }, { featuresData, target }) {
		console.log('update ratings', featuresData, target);
		commit('UPDATE_FEATURES_DATA', featuresData);
		if (target === 'extensions') await dispatch('getExtensionsData');
		else if (target === 'themes') await dispatch('getThemesData');
	},
	async clearFeaturesData({ dispatch, commit }, target) {
		console.log('clear feats', target);
		commit('CLEAR_FEATURES_DATA');
		if (target === 'extensions') await dispatch('getExtensionsData');
		else if (target === 'themes') await dispatch('getThemesData');
	},

	async updateRatingsData({ dispatch, commit }, { stars, target }) {
		console.log('update ratings', stars, target);
		commit('UPDATE_RATINGS_DATA', stars);
		if (target === 'extensions') await dispatch('getExtensionsData');
		else if (target === 'themes') await dispatch('getThemesData');
	},
	async clearRatingsData({ dispatch, commit }, target) {
		console.log('clear ratings', target);
		commit('CLEAR_RATINGS_DATA');
		if (target === 'extensions') await dispatch('getExtensionsData');
		else if (target === 'themes') await dispatch('getThemesData');
	},

	async updateCategoriesData({ dispatch, commit }, { category, target }) {
		console.log('update category', category, target);
		commit('UPDATE_CATEGORY', category);
		if (target === 'extensions') await dispatch('getExtensionsData');
		else if (target === 'themes') await dispatch('getThemesData');
	},

	async getSimilarProductsById({}, id) {
		console.log('get similar products', id);
		return await new Promise((res) => {
			setTimeout(() => {
				res([
					{
						id: 1226145,
						title: 'Google Hangouts',
						rating: 3.4,
						ratingQuantity: 34123,
						imgURL: `https://lh3.googleusercontent.com/JJIt25TAeYDRQ9LBHEzQPFY4qg6k7T-ABk_NNBWm0r8qCZEjhjt2Y3f29Ug15mw4Av0WzuGELBPBdMvMsT_RmrlE=w220-h140-e365-rj-sc0x00ffffff`,
					},
					{
						id: 1263145,
						title: 'Google Hangouts',
						rating: 3.4,
						ratingQuantity: 34123,
						imgURL: `https://lh3.googleusercontent.com/JJIt25TAeYDRQ9LBHEzQPFY4qg6k7T-ABk_NNBWm0r8qCZEjhjt2Y3f29Ug15mw4Av0WzuGELBPBdMvMsT_RmrlE=w220-h140-e365-rj-sc0x00ffffff`,
					},
					{
						id: 1261145,
						title: 'Google Hangouts',
						rating: 3.4,
						ratingQuantity: 34123,
						imgURL: `https://lh3.googleusercontent.com/JJIt25TAeYDRQ9LBHEzQPFY4qg6k7T-ABk_NNBWm0r8qCZEjhjt2Y3f29Ug15mw4Av0WzuGELBPBdMvMsT_RmrlE=w220-h140-e365-rj-sc0x00ffffff`,
					},
				]);
			}, 500);
		});
	},
};

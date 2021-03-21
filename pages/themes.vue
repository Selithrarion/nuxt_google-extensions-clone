<template>
	<div>
		<BasePageLoadingCircular v-if="isLoadingStatusStore" />

		<div v-else>
			<div>
				<ProductList v-if="themesData" :product-data="themesData" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import loadingMixin from '../mixins/loadingMixin';
import errorMixin from '../mixins/errorMixin';

export default {
	async fetch() {
		this.setLoadingStatusStore();
		try {
			const data = await this.getThemesData();
			this.themesData = data;
		} catch (e) {
			this.setIsErrorStatusStore();
			console.error(e);
		} finally {
			this.setLoadedStatusStore();
		}
	},

	mixins: [loadingMixin, errorMixin],

	data() {
		return {
			themesData: null,
		};
	},

	computed: {},

	methods: {
		...mapActions({
			getThemesData: 'product/getThemesData',
		}),
	},

	mounted() {},
};
</script>

<style scoped></style>

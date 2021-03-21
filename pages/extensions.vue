<template>
	<div>
		<BasePageLoadingCircular v-if="isLoadingStatusStore" />

		<div v-else>
			<div v-if="extensionsData && carouselData">
				<CategorySlider :carousel-data="carouselData" />
				<ProductList :product-data="extensionsData" />
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
			const { extensions, carousel } = await this.getExtensionsData();
			this.extensionsData = extensions;
			this.carouselData = carousel;
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
			extensionsData: null,
			carouselData: null,
		};
	},

	computed: {},

	methods: {
		...mapActions({
			getExtensionsData: 'product/getExtensionsData',
		}),
	},

	mounted() {},
};
</script>

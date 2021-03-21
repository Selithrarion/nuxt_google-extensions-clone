<template>
	<div>
		<BasePageLoadingCircular v-if="isLoadingStatusStore" />

		<div v-else>
			<div>
				<ProductDetailBreadcrumbs :breadcrumb-items="breadcrumbItems" />
				<ProductDetailIntroductionInfo :product-data="productData" />

				<v-divider />

				<ProductTabsWrapper :product-data="productData" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import loadingMixin from '../../mixins/loadingMixin';
import errorMixin from '../../mixins/errorMixin';

export default {
	mixins: [loadingMixin, errorMixin],

	async fetch() {
		this.setLoadingStatusStore();
		try {
			const productID = this.$route.params.id;
			this.productData = await this.getProduct(productID);
			this.breadcrumbItems[1].title = this.productData.title;
		} catch (e) {
			this.setIsErrorStatusStore();
			console.error(e);
		} finally {
			this.setLoadedStatusStore();
		}
	},

	data() {
		return {
			productData: null,

			breadcrumbItems: [
				{
					title: 'Главная',
					disabled: false,
					href: '/extensions',
				},
				{
					title: '',
					disabled: true,
					href: '#',
				},
			],
		};
	},

	methods: {
		...mapActions({
			getProduct: 'product/getProductDetails',
		}),
	},
};
</script>

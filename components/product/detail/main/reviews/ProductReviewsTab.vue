<template>
	<div class="product-reviews-tab">
		<ProductReviewsTabHeader />
		<ProductReviewsTabContent :reviews="filteredAndSortedReviews" />
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'ProductReviewsTab',

	props: {
		productData: {
			type: Object,
			required: true,
		},
	},

	computed: {
		...mapState({
			sortType: 'product/review/sortType',
			filterLang: 'product/review/filterLang',
		}),

		filteredAndSortedReviews() {
			return this.productData.reviews;
		},
	},
};
</script>

<style scoped lang="stylus">
.product-reviews-tab {
}
</style>

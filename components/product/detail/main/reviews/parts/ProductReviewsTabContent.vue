<template>
	<div class="product-reviews-tab-content">
		<v-list flat>
			<ProductReviewsTabItem
				v-for="review in reviews"
				:key="review.id"
				:review="review"
			/>
		</v-list>
	</div>
</template>

<script>
export default {
	name: 'ProductReviewsTabContent',

	props: {
		reviews: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped></style>

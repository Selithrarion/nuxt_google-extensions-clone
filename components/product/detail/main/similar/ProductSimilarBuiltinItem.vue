<template>
	<v-sheet
		class="product-similar-builtin-item"
		height="100%"
		color="#f9f9f9"
		@click="$router.push('/detail/' + productData.id)"
	>
		<v-row
			class="product-similar-builtin-item fill-height"
			align="center"
			justify="center"
		>
			<div class="product-similar-builtin-item__content">
				<v-avatar size="60" tile>
					<img :src="productData.imgURL" alt="product image" />
				</v-avatar>
				<div class="py-1">{{ productData.title }}</div>
				<BaseProductRating
					:rating="productData.rating"
					:quantity="productData.ratingQuantity"
					color="black"
					readonly
				/>
			</div>
		</v-row>
	</v-sheet>
</template>

<script>
export default {
	name: 'ProductSimilarBuiltinItem',

	props: {
		productData: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped lang="stylus">
.product-similar-builtin-item {
  cursor: pointer
  &__content {
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    color: #151516
  }
}
</style>

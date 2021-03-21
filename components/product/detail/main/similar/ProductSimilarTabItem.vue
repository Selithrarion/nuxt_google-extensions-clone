<template>
	<v-card
		class="product-similar-tab-item"
		elevation="1"
		@click="$router.push('/detail/' + productData.id)"
	>
		<v-img :src="productData.imgURL" />
		<v-card-title class="product-similar-tab-item__title pb-1 pt-2 pt-sm-3">
			{{ productData.title }}
		</v-card-title>
		<BaseProductRating
			class="d-none d-sm-inline-flex pb-2"
			:rating="productData.rating"
			:quantity="productData.ratingQuantity"
			readonly
		/>
	</v-card>
</template>

<script>
export default {
	name: 'ProductSimilarTabItem',

	props: {
		productData: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped lang="stylus">
.product-similar-tab-item {
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  cursor: pointer
  &__title {
    font-size: 1rem
  }
  @media screen and (max-width: 960px) {
    &__title {
      font-size: 1rem
    }
  }
}
</style>

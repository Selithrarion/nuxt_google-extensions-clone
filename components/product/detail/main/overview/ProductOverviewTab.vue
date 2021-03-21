<template>
	<div class="product-overview-tab">
		<div class="product-overview-tab__content">
			<ProductOverviewLeftColumn
				class="product-overview-tab__column--left"
				:description="productData.description"
			/>
			<ProductOverviewRightColumn
				class="product-overview-tab__column--right"
				:product-data="productData"
			/>
		</div>

		<ProductSimilar
			class="product-overview-tab__similar"
			:product-data="productData"
			type="built-in"
		/>
	</div>
</template>

<script>
export default {
	name: 'ProductOverviewTab',

	props: {
		productData: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="stylus">
.product-overview-tab {
  &__content {
    display: grid
    grid-template-columns: 2fr 1fr
    grid-template-areas: 'overview info'
  }
  &__column {
    &--left {
      grid-area: 'overview'
    }
    &--right {
      grid-area: 'info'
    }
  }
  @media screen and (max-width: 600px) {
    &__content {
      display: flex
      flex-flow: column
    }
  }
}
</style>

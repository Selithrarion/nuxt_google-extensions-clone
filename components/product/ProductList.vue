<template>
	<v-container class="mt-8" fluid>
		<v-row class="border">
			<ProductItem
				v-if="productData"
				v-for="item in productData"
				:key="item.id"
				:item-data="item"
				class="mt-6"
			/>
			<LayoutNothingFound v-else />
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'ProductList',

	props: {
		productData: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped lang="stylus">
.border {
  border-top 2px solid #e8eaed
}
</style>

<template>
	<div class="product-tabs-wrapper">
		<v-tabs
			v-model="selectedTab"
			class="product-tabs-wrapper__tabs my-8"
			show-arrows
			grow
		>
			<v-tab :key="1"> Обзор </v-tab>
			<v-tab :key="2"> Меры по обеспечению конфиденциальности </v-tab>
			<v-tab :key="3"> Отзывы </v-tab>
			<v-tab :key="4"> Поддержка </v-tab>
			<v-tab :key="5"> Похожие </v-tab>
		</v-tabs>

		<v-tabs-items v-model="selectedTab">
			<v-tab-item :key="1">
				<ProductOverviewTab :product-data="productData" />
			</v-tab-item>
			<v-tab-item :key="2">
				<ProductPolicyTab :product-data="productData" />
			</v-tab-item>
			<v-tab-item :key="3">
				<ProductReviewsTab :product-data="productData" />
			</v-tab-item>
			<v-tab-item :key="4">
				<ProductHelpTab :product-data="productData" />
			</v-tab-item>
			<v-tab-item :key="5">
				<ProductSimilar :product-data="productData" type="tab" />
			</v-tab-item>
		</v-tabs-items>
	</div>
</template>

<script>
export default {
	name: 'ProductTabsWrapper',

	props: {
		productData: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			selectedTab: 0,
		};
	},
};
</script>

<style scoped lang="stylus">
.product-tabs-wrapper {
}
</style>

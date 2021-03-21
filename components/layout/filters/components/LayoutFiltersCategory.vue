<template>
	<div>
		<div class="mb-5">Категории</div>
		<v-select
			v-model="selectedCategory"
			dense
			outlined
			:items="categoryList"
			item-text="name"
			item-value="value"
			hide-details
			@change="updateCategoriesData"
		/>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import loadingMixin from '../../../../mixins/loadingMixin';
import getRouteNameMixin from '../../../../mixins/getRouteNameMixin';

export default {
	name: 'LayoutFiltersCategory',

	mixins: [loadingMixin, getRouteNameMixin],

	data() {
		return {
			selectedCategory: 'all',
			categoryList: [
				{
					name: 'Все',
					value: 'all',
				},
				{
					name: 'Блоги',
					value: 'blogs',
				},
				{
					name: 'Инструменты разработчика',
					value: 'devtools',
				},
				{
					name: 'Новости и погода',
					value: 'news-and-weather',
				},
				{
					name: 'от Google',
					value: 'google',
				},
			],
		};
	},
	methods: {
		...mapActions({
			storeUpdate: 'product/updateCategoriesData',
		}),

		async updateCategoriesData() {
			this.setLoadingStatusStore();
			const info = {
				category: this.selectedCategory,
				target: this.getRouteName,
			};

			try {
				await this.storeUpdate(info);
			} catch (e) {
				this.setIsErrorStatusStore();
				console.error(e);
			} finally {
				this.setLoadedStatusStore();
			}
		},
	},
};
</script>

<style scoped></style>

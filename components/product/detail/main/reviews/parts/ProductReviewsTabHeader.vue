<template>
	<div class="product-reviews-tab-header">
		<span class="product-reviews-tab-header__title-wrapper">
			<span class="product-reviews-tab-header__title text-h6 mr-2 mr-md-4">
				Отзывы пользователей
			</span>

			<ProductReviewsTabAddReviewDialog>
				<v-btn
					class="product-reviews-tab-header__button"
					color="primary"
					outlined
					small
				>
					Написать отзыв
				</v-btn>
			</ProductReviewsTabAddReviewDialog>
		</span>

		<span class="product-reviews-tab-header__select-wrapper">
			<v-select
				v-model="selectedLang"
				class="product-reviews-tab-header__select--lang mr-4"
				:items="langItems"
				item-text="text"
				item-value="code"
				hide-details
				dense
			/>

			<v-select
				v-model="selectedSorting"
				class="product-reviews-tab-header__select--sort d-inline-flex"
				:items="sortItems"
				item-text="text"
				item-value="value"
				hide-details
				dense
			/>
		</span>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'ProductReviewsTabHeader',

	data() {
		return {
			selectedLang: '',
			langItems: [
				{
					code: 'ru',
					text: 'Русский',
				},
				{
					code: 'all',
					text: 'Все языки',
				},
			],
			selectedSorting: 'useful',
			sortItems: [
				{
					value: 'useful',
					text: 'Полезные',
				},
				{
					value: 'latest',
					text: 'Недавние',
				},
			],
		};
	},

	watch: {
		selectedLang: 'setLangFilter',
		selectedSorting: 'setSorting',
	},

	methods: {
		...mapActions({
			setLangFilterStore: 'product/review/setLangFilter',
			setSortingStore: 'product/review/setSorting',
		}),

		setLangFilter(lang) {
			this.setLangFilterStore(lang);
		},
		setSorting(sort) {
			this.setSortingStore(sort);
		},
	},

	mounted() {
		this.selectedLang = this.$store.state.userLanguage;
	},
};
</script>

<style scoped lang="stylus">
.product-reviews-tab-header {
  display: grid
  grid-template-columns: 1fr 1fr
  grid-gap: 16px
  &__title-wrapper {
    display: flex
    align-items: center
  }
  &__select-wrapper {
    display: flex
    align-items: center
    padding-bottom: 4px
    .v-select {
      display: inline-flex
      width: 45%
    }
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr
    &__title-wrapper {
      justify-content space-between
    }
    &__select-wrapper {
      width: 100%
      display: flex
      justify-content: center
    }
  }
}
</style>

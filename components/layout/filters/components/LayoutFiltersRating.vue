<template>
	<div class="mt-12">
		<LayoutFiltersTitle
			:isVisible="isRatingSelected"
			title="Оценки от"
			@clear="clearRatingData"
		/>

		<v-radio-group v-model="rating" class="mt-2" @change="updateRatingData">
			<div class="wrapper">
				<v-radio class="d-inline wrapper__radio" />
				<v-rating
					class="d-inline ml-8"
					length="5"
					readonly
					size="20"
					:value="5"
					color="gray"
				/>
			</div>
			<div class="wrapper">
				<v-radio class="d-inline wrapper__radio" />
				<v-rating
					class="d-inline ml-8"
					length="5"
					readonly
					size="20"
					:value="4"
					color="gray"
				/>
			</div>
			<div class="wrapper">
				<v-radio class="d-inline wrapper__radio" />
				<v-rating
					class="d-inline ml-8"
					length="5"
					readonly
					size="20"
					:value="3"
					color="gray"
				/>
			</div>
			<div class="wrapper">
				<v-radio class="d-inline wrapper__radio" />
				<v-rating
					class="d-inline ml-8"
					length="5"
					readonly
					size="20"
					:value="2"
					color="gray"
				/>
			</div>
		</v-radio-group>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import loadingMixin from '../../../../mixins/loadingMixin';
import getRouteNameMixin from '../../../../mixins/getRouteNameMixin';
import errorMixin from '../../../../mixins/errorMixin';

export default {
	name: 'LayoutFiltersRating',

	mixins: [loadingMixin, errorMixin, getRouteNameMixin],

	data() {
		return {
			rating: null,
			fiveStarsOnly: false,
			fourAndAbove: false,
			threeAndAbove: false,
			twoAndAbove: false,
		};
	},

	computed: {
		isRatingSelected() {
			const isNull = this.rating === null;
			return !isNull;
		},
	},

	methods: {
		...mapActions({
			storeUpdate: 'product/updateRatingsData',
			storeClear: 'product/clearRatingsData',
		}),

		async updateRatingData() {
			this.setLoadingStatusStore();

			const stars = this.getStarStringValueDepOnRatingValue();
			console.log('stars', stars);
			const info = {
				stars,
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

		async clearRatingData() {
			this.setLoadingStatusStore();

			const target = this.getRouteName;
			this.rating = null;

			try {
				await this.storeClear(target);
			} catch (e) {
				this.setIsErrorStatusStore();
				console.error(e);
			} finally {
				this.setLoadedStatusStore();
			}
		},

		getStarStringValueDepOnRatingValue() {
			let stars;
			const radioValue = this.rating;

			switch (radioValue) {
				case 0:
					stars = 'five';
					break;
				case 1:
					stars = 'four';
					break;
				case 2:
					stars = 'three';
					break;
				case 3:
					stars = 'two';
					break;
			}
			return stars;
		},
	},
};
</script>

<style scoped lang="stylus">
.wrapper {
  position relative
  &__radio {
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    margin-top .4rem
  }
}
</style>

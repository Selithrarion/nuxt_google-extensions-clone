<template>
	<div class="mt-10">
		<LayoutFiltersTitle
			:isVisible="isFeaturesDataPopulated"
			title="Возможности"
			@clear="clearFeaturesData"
		/>

		<v-checkbox
			v-model="offlineApps"
			label="Оффлайн-приложения"
			hide-details
			@change="updateFeaturesData"
		/>
		<v-checkbox
			v-model="fromGoogle"
			label="От Google"
			hide-details
			@change="updateFeaturesData"
		/>
		<v-checkbox
			v-model="free"
			label="Бесплатно"
			hide-details
			@change="updateFeaturesData"
		/>
		<v-checkbox
			v-model="compatibleWithAndroid"
			label="Совместимые с Android"
			hide-details
			@change="updateFeaturesData"
		/>
		<v-checkbox
			v-model="compatibleWithGoogleDisk"
			label="Совместимые с Google Диском"
			hide-details
			@change="updateFeaturesData"
		/>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import loadingMixin from '../../../../mixins/loadingMixin';
import getRouteNameMixin from '../../../../mixins/getRouteNameMixin';

export default {
	name: 'LayoutFiltersFeatures',

	mixins: [loadingMixin, getRouteNameMixin],

	data() {
		return {
			offlineApps: false,
			fromGoogle: false,
			free: false,
			compatibleWithAndroid: false,
			compatibleWithGoogleDisk: false,
			featuresData: [],
		};
	},

	computed: {
		isFeaturesDataPopulated() {
			return this.featuresData.length > 0;
		},
	},

	methods: {
		...mapActions({
			storeUpdate: 'product/updateFeaturesData',
			storeClear: 'product/clearFeaturesData',
		}),

		async updateFeaturesData() {
			this.setLoadingStatusStore();
			await this.populateFeaturesData();
			const info = {
				featuresData: this.featuresData,
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

		async clearFeaturesData() {
			this.setLoadingStatusStore();

			const target = this.getRouteName;

			try {
				this.clearLocalFeaturesDataAndResetCheckboxes();
				await this.storeClear(target);
			} catch (e) {
				this.setIsErrorStatusStore();
				console.error(e);
			} finally {
				this.setLoadedStatusStore();
			}
		},

		populateFeaturesData() {
			const newArray = [];
			if (this.offlineApps) newArray.push('offlineApps');
			if (this.fromGoogle) newArray.push('fromGoogle');
			if (this.free) newArray.push('free');
			if (this.compatibleWithAndroid) newArray.push('compatibleWithAndroid');
			if (this.compatibleWithGoogleDisk)
				newArray.push('compatibleWithGoogleDisk');
			this.featuresData = newArray;
		},

		clearLocalFeaturesDataAndResetCheckboxes() {
			this.featuresData = [];
			this.offlineApps = false;
			this.fromGoogle = false;
			this.free = false;
			this.compatibleWithAndroid = false;
			this.compatibleWithGoogleDisk = false;
		},
	},
};
</script>

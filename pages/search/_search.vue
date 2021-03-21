<template>
	<div class="mt-8">
		<BasePageLoadingCircular v-if="isLoadingStatusStore" />

		<div v-else>
			<div v-if="searchData">
				{{ searchData }}
			</div>

			<LayoutNothingFoundSearch v-else :search-text="searchText" />
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import loadingMixin from '../../mixins/loadingMixin';
import errorMixin from '../../mixins/errorMixin';

export default {
	mixins: [loadingMixin, errorMixin],

	async fetch() {
		this.setLoadingStatusStore();
		const search = this.$route.params.search;
		this.searchText = search;
		try {
			const data = await this.getSearchData(search);
			this.searchData = data;
		} catch (e) {
			this.setIsErrorStatusStore();
			console.error(e);
		} finally {
			this.setLoadedStatusStore();
		}
	},

	data() {
		return {
			searchData: null,
			searchText: '',
			isPageLoading: true,
		};
	},

	computed: {},

	methods: {
		...mapActions({
			getSearchData: 'search/getSearchData',
		}),
	},
};
</script>

<style scoped></style>

<template>
	<div class="my-4">
		<LayoutFiltersExtensions v-if="isExtensionsPage || isSearchPage" />
		<LayoutFiltersThemes v-if="isThemesPage" />
	</div>
</template>

<script>
import getRouteNameMixin from '../../../mixins/getRouteNameMixin';

export default {
  name: 'LayoutFiltersWrapper',

	mixins: [getRouteNameMixin],

	computed: {
		isExtensionsPage() {
			return this.$route.path === '/extensions';
		},
		isThemesPage() {
			return this.$route.path === '/themes';
		},
		isSearchPage() {
			return this.getRouteName === 'search';
		},
	},
};
</script>

<style scoped></style>

<template>
	<div class="mb-4">
		<v-text-field
			v-model="searchText"
			class="mb-2"
			label="Поиск по магазину"
			prepend-inner-icon="mdi-magnify"
			filled
			dense
			hide-details
			@keydown.enter="search"
		></v-text-field>

		<nuxt-link v-if="isSearch" class="text-decoration-none" to="/extensions">
			<v-icon small>mdi-arrow-left-bold</v-icon>
			<span>Главная</span>
		</nuxt-link>
	</div>
</template>

<script>
import getRouteNameMixin from '../../../mixins/getRouteNameMixin';

export default {
	name: 'LayoutSearch',

	mixins: [getRouteNameMixin],

	data() {
		return {
			searchText: '',
		};
	},

	computed: {
		isSearchTextEmpty() {
			return this.searchText === '';
		},
		isSearch() {
			return this.getRouteName === 'search';
		},
	},

	watch: {
		isSearch(value) {
			if (value === false) this.searchText = '';
		},
	},

	methods: {
		search() {
			if (this.isSearchTextEmpty) return;
			this.$router.push('/search/' + this.searchText);
		},
		resetSearchField() {
			this.searchText = '';
		},
	},
};
</script>

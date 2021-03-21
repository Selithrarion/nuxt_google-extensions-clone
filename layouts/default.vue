<template>
	<v-app>
		<v-navigation-drawer
			v-if="isCategoryRootPages"
			v-model="navDrawer"
			color="#f5f5f5"
			clipped
			fixed
			app
		>
			<v-list>
				<v-col>
					<LayoutSearch />
					<LayoutMainCategorySelect
						v-if="!isSearch"
						:key="isLoadingStatusStore"
						:is-disabled="isLoadingStatusStore"
					/>
					<v-divider />

					<LayoutFiltersWrapper />
					<v-divider />
				</v-col>

				<v-list-item v-for="link in links" :key="link.title">
					<nuxt-link :to="link.to"></nuxt-link>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar color="white" clipped-left fixed app>
			<v-app-bar-nav-icon v-if="!isCategoryRootPages" @click="goBack">
				<v-icon>mdi-arrow-left</v-icon>
			</v-app-bar-nav-icon>

			<v-app-bar-nav-icon
				v-if="isCategoryRootPages && $vuetify.breakpoint.mdAndDown"
				@click="navDrawer = !navDrawer"
			>
				<v-icon>mdi-menu</v-icon>
			</v-app-bar-nav-icon>
			<v-app-bar-title class="d-none d-sm-inline-flex">
				интернет-магазин chrome
			</v-app-bar-title>

			<v-spacer />

			<LayoutOptions />
			<LayoutAccount />
		</v-app-bar>

		<v-main>
			<v-container>
				<v-row justify="center" align="center">
					<v-col cols="12" sm="10">
						<nuxt />
					</v-col>
				</v-row>
			</v-container>

			<BaseErrorDialog
				:is-error="isErrorStatusStore"
				@close="closeErrorDialogAndUpdateStore"
			/>
		</v-main>
	</v-app>
</template>

<script>
import getRouteNameMixin from '../mixins/getRouteNameMixin';
import errorMixin from '../mixins/errorMixin';
import loadingMixin from '../mixins/loadingMixin';

export default {
	mixins: [getRouteNameMixin, errorMixin, loadingMixin],
	data() {
		return {
			navDrawer: true,
			links: [
				{
					title: 'Политика конфиденциальности',
					to: '/extensions',
				},
				{
					title: 'Условия использования',
					to: '/extensions',
				},
				{
					title: 'Подробнее об Интернет-магазине Chrome',
					to: '/extensions',
				},
			],
		};
	},

	computed: {
		isSearch() {
			return this.getRouteName === 'search';
		},
		isCategoryRootPages() {
			return (
				this.$route.path === '/extensions' || this.$route.path === '/themes'
			);
		},
	},

	methods: {
		goBack() {
			this.$router.go(-1);
		},
		reloadPage() {
			this.$router.go();
		},
		closeErrorDialogAndUpdateStore() {
			this.removeIsErrorStatusStore();
		},
	},
};
</script>

<style scoped lang="stylus">
.v-sheet.v-app-bar {
  box-shadow 0 2px 6px 0 rgba(0,0,0,0.12) !important
}
.v-app-bar-title__content {
  width: 250px
}
</style>

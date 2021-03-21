<template>
	<div class="wrapper">
		<span class="wrapper__features"> {{ title }} </span>
		<v-btn v-if="isVisible"  icon @click="clearData">
			<v-icon>mdi-close</v-icon>
		</v-btn>
	</div>
</template>

<script>
export default {
  name: 'LayoutFiltersTitle',

	props: {
		title: {
			type: String,
			required: true,
		},
		isVisible: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		clearData() {
			this.$emit('clear');
		},
	},
};
</script>

<style scoped lang="stylus">
.wrapper {
  display flex
  justify-content space-between
  &__features {
    display flex
    align-items center
    height 36px
  }
}
</style>

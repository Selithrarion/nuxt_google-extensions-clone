<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="layout-options__icon mr-1"
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-title>Мои расширения и приложения</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Язык: русский</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Местоположение: Россия</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Панель инструментов разработчика</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Справка</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
	export default {
    name: 'LayoutOptions',
	};
</script>

<style scoped lang="stylus">
  .layout-options__icon:hover {
    color #1976d2
  }
</style>

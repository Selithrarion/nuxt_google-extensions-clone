<template>
  <v-dialog v-model="isError" width="550">
    <v-card class="custom-card__padding">
      <div class="text-h4 text-center pb-10">
        <slot name="title"> Произошла ошибка </slot>
      </div>

      <v-divider />

      <div class="text-center pt-8">
        <slot> Произошла ошибка. Обновите страницу и повторите попытку. </slot>
      </div>

      <div class="custom-card__actions">
        <slot name="actions">
          <v-btn color="primary" @click="reload"> Обновить </v-btn>
          <v-btn color="primary" outlined @click="close"> Закрыть </v-btn>
        </slot>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'BaseErrorDialog',

  props: {
    isError: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    close() {
      this.$emit('close');
    },
    reload() {
      this.$router.go();
    },
  },
};
</script>

<style scoped lang="stylus">
.custom-card {
  &__padding {
    padding: 40px 80px
  }
  &__actions {
    display: flex
    justify-content space-around
    margin-top 40px
  }
}
</style>

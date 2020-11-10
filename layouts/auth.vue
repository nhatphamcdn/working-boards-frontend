<template>
  <div class="auth-container">
    <div class="auth-container__logo">
      <nuxt-link to="/">
        <Logo class="auth-container__image" />
      </nuxt-link>
    </div>
    <div class="auth-container__external-heading" v-if="externalHeading">
      <h2>{{ externalHeading }}</h2>
    </div>
    <div class="auth-container__body">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
  data: () => ({
    externalHeading: null,
  }),
  methods: {
    setExternalHeading(value) {
      this.externalHeading = value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/layout/auth";
</style>
<template src="./template.html"></template>

<script>
export default {
  name: "MainButton",
  props: {
    to: {
      type: [String, Object],
      default: null,
      required: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    component: function () {
      if (this.to) {
        return "nuxt-link";
      }

      return "button";
    },
  },
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
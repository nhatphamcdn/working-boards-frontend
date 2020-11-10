<template src="./template.html"></template>

<script>
export default {
  name: "MainInput",
  props: {
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data: () => ({
    filled: false,
  }),
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
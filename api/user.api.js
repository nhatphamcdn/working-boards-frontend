export default ($axios, resource) => ({
  me() {
    return $axios.get(resource.user.info);
  },
})

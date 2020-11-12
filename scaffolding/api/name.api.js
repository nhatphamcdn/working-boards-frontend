export default ($axios, resource) => ({
  get() {
    return $axios.get(resource.apiConfig);
  },

  post(payload) {
    return $axios.post(resource.apiConfig, payload);
  }
})

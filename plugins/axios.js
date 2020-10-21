export default function ({
  $axios,
  store,
  redirect
}) {
  $axios.onRequest(config => {
    // config.headers.common['Authorization'] = `Bearer ${store.getters['auth/token']}`;
  })

  $axios.onError(error => {
    console.error('[ ERROR ]', error)
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      //!TODO clear token store
      return redirect('/');
    }

    return error;
  })
}

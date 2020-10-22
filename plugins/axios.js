function handleError(error) {
  let message = '';
  let statusCode = null;

  if (error.response) {
    statusCode = error.response.status;
    message = error.response.data.message;
  } else if (error.request) {
    message = error.request;
  } else {
    message = error.message;
  }

  if (!statusCode) {
    return {
      error: {
        message: "Something went wrong. Please try again later."
      }
    };
  } else if (statusCode === 401) {
    // todo
    return {
      error: {
        message,
        statusCode: 401
      }
    };
  } else if (statusCode === 400) {
    return {
      error: {
        message
      },
      data: null
    };
  }
  return {
    error: {
      message
    }
  };
}

export default function ({
  app,
  $axios,
  store,
  redirect,
}) {
  // config axios default every request
  $axios.defaults.baseURL = app.$config.apiURL;

  // const token = $cookies.get('token');
  // if (token) {
  // $axios.defaults.headers.common["Authorization"] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZGlzcGxheU5hbWUiOiJuaGF0IiwiZXhwIjoxNjA4NDQ3MDM1LjkxNiwiaWF0IjoxNjAzMjYzMDM1fQ.Nfa8MNdDQdZYrPewUUTcFqCTgVJbZalexEIyUL6mb6M';
  // }


  $axios.onRequest(config => {
    // config.headers.common['Authorization'] = `Bearer ${store.getters['auth/token']}`;
  })

  // $axios.onResponse(response => {
  //   if (!response) {
  //     return {
  //       data: null
  //     };
  //   }

  //   if (response && response.data)
  //     return response.data;

  //   return response;
  // })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);

    if (code === 401) {
      //!TODO clear token store
      return {
        message: 'Fucking no way -> back now~~~',
        statusCode: 401
      }
    }

    return error;
  })
}

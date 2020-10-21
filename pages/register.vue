<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="@/assets/img/task.svg"
          alt="Workflow"
        />
        <h2
          class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >
          Create your account
        </h2>
        <p class="mt-2 text-center text-sm leading-5 text-gray-600">
          Or
          <span
            class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Working Boards is in development.
          </span>
        </p>
      </div>
      <form class="mt-8">
        <div class="border rounded-md shadow-md px-4 pt-4 pb-6">
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-medium mb-2"
              for="first_name"
              >Display Name</label
            >
            <input
              class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              id="first_name"
              type="text"
              placeholder="Your first name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-medium mb-2"
              for="email"
              >Email Address</label
            >
            <input
              class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              id="email"
              type="email"
              placeholder="Your email address"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-medium mb-2"
              for="password"
              >Password</label
            >
            <input
              class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              id="password"
              type="password"
              placeholder="Your secure password"
            />
          </div>
          <div>
            <label
              class="block text-grey-darker text-sm font-medium mb-2"
              for="confirm-password"
              >Confirm Password</label
            >
            <input
              class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              id="confirm-password"
              type="password"
              placeholder="Your secure password"
            />
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
          >
            Sign up
          </button>

          <p
            class="mt-3 text-sm text-center text-blue-600 group-hover:text-blue-400"
          >
            Already have an account?
            <nuxt-link :to="{ name: 'login' }" class="underline"
              >Login here</nuxt-link
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

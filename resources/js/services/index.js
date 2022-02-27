import axios from 'axios'

function createInstance($router) {
  const instance = axios.create()
  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response.status === 401) {
        $router.push('/login')
      }
      return Promise.reject(error)
    }
  )
  return instance
}

export function createServices(options) {
  const { router } = options
  return {
    install(app) {
      const instance = createInstance(router)
      app.config.globalProperties.$http = instance
    },
  }
}

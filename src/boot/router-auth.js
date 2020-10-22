import { LocalStorage } from 'quasar'

export default ({ router }) => {
  router.beforeEach((to, from, next) => {

    next()

    // let loggedIn = LocalStorage.getItem('loggedIn')

    // if (!loggedIn && to.path !== '/auth' && to.path !== '/index') {
    //   next('/auth')
    // } else {
    //   next()
    // }

  })
}

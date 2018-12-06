module.exports = (router) => {
  router.prefix('/v1')
  router.use('/auth', require('./auth.routes'))
}

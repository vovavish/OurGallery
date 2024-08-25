const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use((req, res, next) => {
    // Если путь запроса /directus и нет слеша в конце, перенаправляем с добавлением слеша
    // Добавлено так как при обращении к адресу /directus было перенаправление на /admin,
    // что не приводило к открытию админки directus.
    if (req.path === '/directus') {
      res.redirect(301, '/directus/');
    } else {
      next();
    }
  });

  app.use(
    '/directus/',
    createProxyMiddleware({
      target: 'http://directus:8055/',
      changeOrigin: true,
      pathRewrite: {
        '^/directus': ''
      },
    })
  );
};
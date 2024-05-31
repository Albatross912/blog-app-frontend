const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Proxy API requests to your HTTP server (Assuming the server is running on port 3001)
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://backend-blog-app-ivjj.onrender.com",
      changeOrigin: true,
    })
  );
};

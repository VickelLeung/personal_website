module.exports = app => {
    app.use(
      "/api",
      proxy({
        target: "http://localhost:4000",
        changeOrigin: true
      })
    );
  };
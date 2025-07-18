const loggingMiddleware = (req, res, next) => {
  const instance = process.env.INSTANCE_NAME || "unknown";
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url} - ${instance}`
  );
  next();
};

export default loggingMiddleware;

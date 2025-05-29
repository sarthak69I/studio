const functions = require("firebase-functions");
const next = require("next");

// Initialize Next.js app
// The `dev` flag should be false for production.
// The `dir` points to the root of your Next.js project (where .next folder is located).
const nextApp = next({
  dev: false,
  dir: "..", // Assumes functions directory is at the project root, so '..' goes up to the project root.
  conf: { distDir: ".next" }, // Specifies the location of the build output.
});

const handle = nextApp.getRequestHandler();

exports.nextServer = functions.https.onRequest((req, res) => {
  // Ensure the Next.js app is prepared before handling requests
  return nextApp.prepare().then(() => {
    return handle(req, res);
  });
});

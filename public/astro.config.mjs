import { defineConfig } from "astro/config";

// If deploying to a custom domain (recommended) or Vercel, leave `site` as-is.
// If deploying to GitHub Pages WITHOUT a custom domain, set:
//   site: "https://<user>.github.io", base: "/<repo-name>"
export default defineConfig({
  site: "https://example.com",
});

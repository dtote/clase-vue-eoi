import vueConfig from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

const path = require("path")
const mode = process.env.NODE_ENV === "production" ? "production" : "development"
const base = mode === "production" ? "/" + path.basename(process.cwd()) + "/" : "/"

export default defineConfig({
  root: "src",
  base,
  mode,
  publicDir: "../public",
  plugins: [vueConfig()],
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
})

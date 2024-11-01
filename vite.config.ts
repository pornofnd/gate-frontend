import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      src: "/src",
      public: "/public",
      components: "/src/components",
      mixins:"/src/mixins",
      utils:"/src/utils",
      store:"/src/store/"
    },
  },
});

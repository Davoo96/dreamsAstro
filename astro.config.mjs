import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react(), tailwind(), compress(), sitemap()],
  site: "https://dreamsincorporadora.com.br/",
  image: {
    service: {
      entrypoint: "astro/assets/services/noop"
    }
  },
  plugins: [
    {
      name: "@astrojs/ts-plugin"
    }
  ]
});

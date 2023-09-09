import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react(), tailwind(), compress()],
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

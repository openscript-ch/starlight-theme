# @openscript-ch/starlight-theme

A theme for documenting classes and courses. This is a fork of the [Starlight Theme Rapide](https://github.com/HiDeoo/starlight-theme-rapide).

## Usage

1. Initialize a new Astro Starlight project:

   ```bash
   pnpm create astro --template starlight
   ```

1. Add the theme to your project:

   ```bash
   pnpm add @openscript-ch/starlight-theme
   ```

1. Update your `starlight.config.mjs` to use the theme:

   ```javascript
   import starlight from '@astrojs/starlight'
   import openscriptTheme from '@openscript-ch/starlight-theme'
   import { defineConfig } from 'astro/config'

   export default defineConfig({
     integrations: [
       starlight({
         plugins: [openscriptTheme()],
         title: 'My Course',
       }),
     ],
   })
   ```

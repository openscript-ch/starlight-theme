import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeOpenscript from 'starlight-theme-openscript'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/openscript-ch/starlight-theme/edit/main/docs/',
      },
      plugins: [starlightThemeOpenscript()],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started', 'customization'],
        },
        {
          label: 'Resources',
          items: [{ label: 'Plugins and Tools', link: '/resources/starlight/' }],
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
      social: [
        { href: 'https://github.com/openscript-ch/starlight-theme', icon: 'github', label: 'GitHub' },
      ],
      title: 'Starlight Openscript',
    }),
  ],
  site: 'https://starlight-theme-openscript.vercel.app',
})

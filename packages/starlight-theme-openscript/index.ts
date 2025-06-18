import type { StarlightPlugin } from '@astrojs/starlight/types'

import { overrideComponents } from './libs/starlight'

export default function starlightThemeOpenscriptPlugin(): StarlightPlugin {
  return {
    name: '@openscript-ch/starlight-theme',
    hooks: {
      'config:setup'({ config, logger, updateConfig }) {
        const userExpressiveCodeConfig =
          !config.expressiveCode || config.expressiveCode === true ? {} : config.expressiveCode

        updateConfig({
          components: overrideComponents(config, ['LanguageSelect', 'Pagination', 'ThemeSelect'], logger),
          customCss: [
            ...(config.customCss ?? []),
            '@openscript-ch/starlight-theme/styles/layers',
            '@openscript-ch/starlight-theme/styles/theme',
            '@openscript-ch/starlight-theme/styles/base',
            ...(config.markdown?.headingLinks === false ? [] : ['@openscript-ch/starlight-theme/styles/anchors']),
          ],
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                  themes: ['vitesse-dark', 'vitesse-light'],
                  ...userExpressiveCodeConfig,
                  styleOverrides: {
                    borderColor: 'var(--sl-openscript-ui-border-color)',
                    borderRadius: '0.5rem',
                    ...userExpressiveCodeConfig.styleOverrides,
                    frames: {
                      editorActiveTabIndicatorTopColor: 'unset',
                      editorActiveTabIndicatorBottomColor: 'var(--sl-color-gray-3)',
                      editorTabBarBorderBottomColor: 'var(--sl-openscript-ui-border-color)',
                      frameBoxShadowCssValue: 'unset',
                      ...userExpressiveCodeConfig.styleOverrides?.frames,
                    },
                    textMarkers: {
                      backgroundOpacity: '40%',
                      markBackground: 'var(--sl-openscript-ec-marker-bg-color)',
                      markBorderColor: 'var(--sl-openscript-ec-marker-border-color)',
                      ...userExpressiveCodeConfig.styleOverrides?.textMarkers,
                    },
                  },
                },
        })
      },
    },
  }
}

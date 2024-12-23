import plugin from "tailwindcss/plugin";

const custom = plugin.withOptions(
  () => () => {},
  () => ({
    theme: {
      extend: {
        fontSize: {
          display1: [
            "var(--font-size-3xl)",
            {
              lineHeight: "var(--font-line-height-3xl)",
              fontWeight: "var(--font-weight-semi-bold)",
            },
          ],
          display2: [
            "var(--font-size-2xl)",
            {
              lineHeight: "var(--font-line-height-2xl)",
              fontWeight: "var(--font-weight-semi-bold)",
            },
          ],
          display3: [
            "var(--font-size-xl)",
            {
              lineHeight: "var(--font-line-height-xl)",
              fontWeight: "var(--font-weight-semi-bold)",
            },
          ],
          display4: [
            "var(--font-size-lg)",
            {
              lineHeight: "var(--font-line-height-lg)",
              fontWeight: "var(--font-weight-semi-bold)",
            },
          ],
          headline1: [
            "var(--font-size-md)",
            {
              lineHeight: "var(--font-line-height-md)",
              fontWeight: "var(--font-weight-semi-bold)",
            },
          ],
          headline2: [
            "var(--font-size-sm)",
            {
              lineHeight: "var(--font-line-height-sm)",
              fontWeight: "var(--font-weight-semi-bold)",
            },
          ],
          subhead: [
            "var(--font-size-xs)",
            {
              lineHeight: "var(--font-line-height-xs)",
              fontWeight: "var(--font-semi-bold)",
            },
          ],
          body1: [
            "var(--font-size-md)",
            { lineHeight: "var(--font-line-height-md)" },
          ],
          body2: [
            "var(--font-size-sm)",
            { lineHeight: "var(--font-line-height-sm)" },
          ],
          caption: [
            "var(--font-size-xs)",
            { lineHeight: "var(--font-line-height-xs)" },
          ],
          small: [
            "var(--font-size-2xs)",
            { lineHeight: "var(--font-line-height-3xs)" },
          ],
        },
        fontWeight: {
          regular: "var(--font-weight-regular)",
          medium: "var(--font-weight-medium)",
          semiBold: "var(--font-weight-semi-bold)",
        },
        opacity: {
          0: "var(--opacity-0)",
          none: "var(--opacity-none)",
          dim1: "var(--opacity-dim1)",
          dim2: "var(--opacity-dim2)",
          dim3: "var(--opacity-dim3)",
          dim4: "var(--opacity-dim4)",
          dim5: "var(--opacity-dim5)",
        },
        screens: {
          sm: "var(--screens-sm)",
          md: "var(--screens-md)",
          lg: "var(--screens-lg)",
          xl: "var(--screens-xl)",
        },
        spacing: {
          auto: "auto",
          none: "var(--spacing-none)",
          "2xs": "var(--spacing-2xs)",
          xs: "var(--spacing-xs)",
          sm: "var(--spacing-sm)",
          md: "var(--spacing-md)",
          lg: "var(--spacing-lg)",
          xl: "var(--spacing-xl)",
          "2xl": "var(--spacing-2xl)",
          "3xl": "var(--spacing-3xl)",
        },
        zIndex: {
          hide: "var(--z-index-hide)",
          base: "var(--z-index-base)",
          raised: "var(--z-index-raised)",
          dropdown: "var(--z-index-dropdown)",
          sticky: "var(--z-index-sticky)",
          overlay: "var(--z-index-overlay)",
          modal: "var(--z-index-modal)",
          popover: "var(--z-index-popover)",
          "skip-link": "var(--z-index-skip-link)",
          toast: "var(--z-index-toast)",
          tooltip: "var(--z-index-tooltip)",
        },
        borderRadius: {
          none: "var(--radius-none)",
          sm: "var(--radius-sm)",
          md: "var(--radius-md)",
          lg: "var(--radius-lg)",
          xl: "var(--radius-xl)",
          full: "var(--radius-full)",
        },
        borderWidth: {
          none: "var(--border-width-none)",
          sm: "var(--border-width-sm)",
          md: "var(--border-width-md)",
        },
        boxShadow: {
          DEFAULT: "var(--shadow)",
          sm: "var(--shadow-sm)",
          md: "var(--shadow-md)",
          none: "none",
        },
        colors: {
          basic: {
            DEFAULT: "var(--colors-basic)",
            hovered: "var(--colors-basic-hovered)",
            container: {
              DEFAULT: "var(--colors-basic-container)",
              hovered: "var(--colors-basic-container-hovered)",
            },
          },
          accent: {
            DEFAULT: "var(--colors-accent)",
            hovered: "var(--colors-accent-hovered)",
            container: {
              DEFAULT: "var(--colors-accent-container)",
              hovered: "var(--colors-accent-container-hovered)",
            },
            variant: {
              DEFAULT: "var(--colors-accent-variant)",
              hovered: "var(--colors-accent-variant-hovered)",
            },
          },
          main: {
            DEFAULT: "var(--colors-main)",
            hovered: "var(--colors-main-hovered)",
            container: {
              DEFAULT: "var(--colors-main-container)",
              hovered: "var(--colors-main-container-hovered)",
            },
            variant: {
              DEFAULT: "var(--colors-main-variant)",
              hovered: "var(--colors-main-variant-hovered)",
            },
          },
          support: {
            DEFAULT: "var(--colors-support)",
            hovered: "var(--colors-support-hovered)",
            container: {
              DEFAULT: "var(--colors-support-container)",
              hovered: "var(--colors-support-container-hovered)",
            },
            variant: {
              DEFAULT: "var(--colors-support-variant)",
              hovered: "var(--colors-support-variant-hovered)",
            },
          },
          success: {
            DEFAULT: "var(--colors-success)",
            hovered: "var(--colors-success-hovered)",
            container: {
              DEFAULT: "var(--colors-success-container)",
              hovered: "var(--colors-success-container-hovered)",
            },
          },
          alert: {
            DEFAULT: "var(--colors-alert)",
            hovered: "var(--colors-alert-hovered)",
            container: {
              DEFAULT: "var(--colors-alert-container)",
              hovered: "var(--colors-alert-container-hovered)",
            },
          },
          error: {
            DEFAULT: "var(--colors-error)",
            hovered: "var(--colors-error-hovered)",
            container: {
              DEFAULT: "var(--colors-error-container)",
              hovered: "var(--colors-error-container-hovered)",
            },
          },
          info: {
            DEFAULT: "var(--colors-info)",
            hovered: "var(--colors-info-hovered)",
            container: {
              DEFAULT: "var(--colors-info-container)",
              hovered: "var(--colors-info-container-hovered)",
            },
          },
          neutral: {
            DEFAULT: "var(--colors-neutral)",
            hovered: "var(--colors-neutral-hovered)",
            container: {
              DEFAULT: "var(--colors-neutral-container)",
              hovered: "var(--colors-neutral-container-hovered)",
            },
          },
          background: {
            DEFAULT: "var(--colors-background)",
            variant: "var(--colors-background-variant)",
          },
          surface: {
            DEFAULT: "var(--colors-surface)",
            hovered: "var(--colors-surface-hovered)",
            inverse: {
              DEFAULT: "var(--colors-surface-inverse)",
              hovered: "var(--colors-surface-inverse-hovered)",
            },
          },
          overlay: {
            DEFAULT: "var(--colors-overlay)",
          },
          on: {
            accent: {
              DEFAULT: "var(--colors-on-accent)",
              container: "var(--colors-on-accent-container)",
              variant: "var(--colors-on-accent-variant)",
            },
            basic: {
              DEFAULT: "var(--colors-on-basic)",
              container: "var(--colors-on-basic-container)",
            },
            main: {
              DEFAULT: "var(--colors-on-main)",
              container: "var(--colors-on-main-container)",
              variant: "var(--colors-on-main-variant)",
            },
            support: {
              DEFAULT: "var(--colors-on-support)",
              container: "var(--colors-on-support-container)",
              variant: "var(--colors-on-support-variant)",
            },
            success: {
              DEFAULT: "var(--colors-on-success)",
              container: "var(--colors-on-success-container)",
            },
            alert: {
              DEFAULT: "var(--colors-on-alert)",
              container: "var(--colors-on-alert-container)",
            },
            error: {
              DEFAULT: "var(--colors-on-error)",
              container: "var(--colors-on-error-container)",
            },
            info: {
              DEFAULT: "var(--colors-on-info)",
              container: "var(--colors-on-info-container)",
            },
            background: {
              DEFAULT: "var(--colors-on-background)",
              variant: "var(--colors-on-background-variant)",
            },
            surface: {
              DEFAULT: "var(--colors-on-background)",
              inverse: {
                DEFAULT: "var(--colors-on-surface-inverse)",
                hovered: "var(--colors-on-surface-inverse-hovered)",
              },
            },
            overlay: {
              DEFAULT: "var(--colors-on-overlay)",
            },
          },
        },
      },
    },
  })
);

export default custom;

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
          surface: {
            DEFAULT: "var(--colors-surface)",
            inverse: "var(--colors-surface-inverse)",
            outline: "var(--colors-surface-outline)",
            overlay: "var(--colors-surface-overlay)",
          },
          main: {
            DEFAULT: "var(--colors-main)",
            hovered: "var(--colors-main-hovered)",
            pressed: "var(--colors-main-pressed)",
            focused: "var(--colors-main-focused)",
            disabled: "var(--colors-main-disabled)",
            container: {
              DEFAULT: "var(--colors-main-container)",
              hovered: "var(--colors-main-container-hovered)",
              pressed: "var(--colors-main-container-pressed)",
              focused: "var(--colors-main-container-focused)",
              disabled: "var(--colors-main-container-disabled)",
            },
            variant: {
              DEFAULT: "var(--colors-main-variant)",
              hovered: "var(--colors-main-variant-hovered)",
              pressed: "var(--colors-main-variant-pressed)",
              focused: "var(--colors-main-variant-focused)",
              disabled: "var(--colors-main-variant-disabled)",
            },
          },
          secondary: {
            DEFAULT: "var(--colors-secondary)",
            container: "var(--colors-secondary-container)",
            variant: "var(--colors-secondary-variant)",
            inverse: "var(--colors-secondary-inverse)",
          },
          accent: {
            DEFAULT: "var(--colors-accent)",
            container: "var(--colors-accent-container)",
            variant: "var(--colors-accent-variant)",
            inverse: "var(--colors-accent-inverse)",
          },
          success: {
            DEFAULT: "var(--colors-success)",
            container: "var(--colors-success-container)",
            variant: "var(--colors-success-variant)",
            inverse: "var(--colors-success-inverse)",
          },
          alert: {
            DEFAULT: "var(--colors-alert)",
            container: "var(--colors-alert-container)",
            variant: "var(--colors-alert-variant)",
            inverse: "var(--colors-alert-inverse)",
          },
          error: {
            DEFAULT: "var(--colors-error)",
            container: "var(--colors-error-container)",
            variant: "var(--colors-error-variant)",
            inverse: "var(--colors-error-inverse)",
          },
          on: {
            surface: {
              DEFAULT: "var(--colors-on-surface)",
              inverse: "var(--colors-on-surface-inverse)",
              overlay: "var(--colors-on-surface-overlay)",
            },
            primary: {
              DEFAULT: "var(--colors-on-primary)",
              container: "var(--colors-on-primary-container)",
              variant: "var(--colors-on-primary-variant)",
              inverse: "var(--colors-on-primary-inverse)",
            },
            secondary: {
              DEFAULT: "var(--colors-on-secondary)",
              container: "var(--colors-on-secondary-container)",
              variant: "var(--colors-on-secondary-variant)",
              inverse: "var(--colors-on-secondary-inverse)",
            },
            accent: {
              DEFAULT: "var(--colors-on-accent)",
              container: "var(--colors-on-accent-container)",
              variant: "var(--colors-on-accent-variant)",
              inverse: "var(--colors-on-accent-inverse)",
            },
            success: {
              DEFAULT: "var(--colors-on-success)",
              container: "var(--colors-on-success-container)",
              variant: "var(--colors-on-success-variant)",
              inverse: "var(--colors-on-success-inverse)",
            },
            alert: {
              DEFAULT: "var(--colors-on-alert)",
              container: "var(--colors-on-alert-container)",
              variant: "var(--colors-on-alert-variant)",
              inverse: "var(--colors-on-alert-inverse)",
            },
            error: {
              DEFAULT: "var(--colors-on-error)",
              container: "var(--colors-on-error-container)",
              variant: "var(--colors-on-error-variant)",
              inverse: "var(--colors-on-error-inverse)",
            },
          },
        },
      },
    },
  })
);

export default custom;

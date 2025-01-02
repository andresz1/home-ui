import type { Theme } from "../theme";

export const theme: Theme = {
  borderRadius: {
    none: "0px",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },
  borderWidth: {
    none: "0px",
    sm: "1px",
    md: "2px",
  },
  boxShadow: {
    sm: "0 1px 2px 0 rgba(108 129 157 / 0.50)",
    DEFAULT: "0 4px 8px 0 rgba(108 129 157 / 0.50)",
    md: "0 6px 12px 0 rgba(108 129 157 / 0.50)",
    lg: "0 8px 16px 0 rgba(108 129 157 / 0.50)",
    xl: "0 12px 24px 0 rgba(108 129 157 / 0.50)",
    none: "none",
  },
  colors: {
    basic: "#303ab2",
    onBasic: "#ffffff",
    basicHovered: "#636bc5",
    basicContainer: "#eaebf7",
    onBasicContainer: "#1d1d1d",
    basicContainerHovered: "#f4f4fb",
    accent: "#e3165b",
    onAccent: "#ffffff",
    accentHovered: "#ea5084",
    accentContainer: "#fce8ee",
    onAccentContainer: "#930e3b",
    accentContainerHovered: "#fdf3f6",
    accentVariant: "#b51148",
    onAccentVariant: "#ffffff",
    accentVariantHovered: "#d4ae14",
    main: "#f25c1a",
    onMain: "#ffffff",
    mainHovered: "#ff7133",
    mainContainer: "#feeee7",
    onMainContainer: "#8c360f",
    mainContainerHovered: "#fabda3",
    mainVariant: "#d95217",
    onMainVariant: "#ffffff",
    mainVariantHovered: "#f25c1a",
    support: "#18afa5",
    onSupport: "#ffffff",
    supportHovered: "#1edbcf",
    supportContainer: "#e8fbfa",
    onSupportContainer: "#12847d",
    supportContainerHovered: "#c6f5f2",
    supportVariant: "#1edbcf",
    onSupportVariant: "#ffffff",
    supportVariantHovered: "#56e4db",
    success: "#008436",
    onSuccess: "#ffffff",
    successHovered: "#00a544",
    successContainer: "#e5f5eb",
    onSuccessContainer: "#006b2c",
    successContainerHovered: "#bef4a4",
    alert: "#f25c1a",
    onAlert: "#ffffff",
    alertHovered: "#ff7133",
    alertContainer: "#feeee7",
    onAlertContainer: "#8c360f",
    alertContainerHovered: "#fabda3",
    error: "#e93e40",
    onError: "#ffffff",
    errorHovered: "#f07879",
    errorContainer: "#fdecec",
    onErrorContainer: "#691c1d",
    errorContainerHovered: "#f7c4d5",
    info: "#303ab2",
    onInfo: "#ffffff",
    infoHovered: "#636bc5",
    infoContainer: "#eaebf7",
    onInfoContainer: "#1d1d1d",
    infoContainerHovered: "#f4f4fb",
    neutral: "#777777",
    onNeutral: "#ffffff",
    neutralHovered: "#999999",
    neutralContainer: "#f1f1f1",
    onNeutralContainer: "#1d1d1d",
    neutralContainerHovered: "#f5f5f5",
    background: "#ffffff",
    onBackground: "#1d1d1d",
    backgroundVariant: "#f4f4fb",
    onBackgroundVariant: "#1d1d1d",
    surface: "#ffffff",
    onSurface: "#1d1d1d",
    surfaceHovered: "#f5f5f5",
    surfaceInverse: "#353535",
    onSurfaceInverse: "#ffffff",
    surfaceInverseHovered: "#4d4d4d",
    outline: "#eaeaea",
    outlineHigh: "#1d1d1d",
    overlay: "#1d1d1db8",
    onOverlay: "#ffffff",
  },
  fontFamily: {
    sans: '"Nunito Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSize: {
    display1: { fontSize: "2.5rem", lineHeight: "3.5rem", fontWeight: "700" },
    display1Expanded: {
      fontSize: "3rem",
      lineHeight: "4rem",
      fontWeight: "700",
    },
    display2: { fontSize: "2rem", lineHeight: "2.75rem", fontWeight: "700" },
    display2Expanded: {
      fontSize: "2.5rem",
      lineHeight: "3.5rem",
      fontWeight: "700",
    },
    display3: { fontSize: "1.5rem", lineHeight: "2rem", fontWeight: "700" },
    display3Expanded: {
      fontSize: "2rem",
      lineHeight: "2.75rem",
      fontWeight: "700",
    },
    headline1: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: "700",
    },
    headline1Expanded: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: "700",
    },
    headline2: {
      fontSize: "1.125rem",
      lineHeight: "1.5rem",
      fontWeight: "700",
    },
    headline2Expanded: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: "700",
    },
    subhead: { fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "700" },
    subheadExpanded: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: "700",
    },
    body1: { fontSize: "1rem", lineHeight: "1.5rem" },
    body2: { fontSize: "0.875rem", lineHeight: "1.25rem" },
    caption: { fontSize: "0.75rem", lineHeight: "1rem" },
    small: { fontSize: "0.625rem", lineHeight: "0.875rem" },
    body1Link: { fontSize: "1rem", lineHeight: "1.5rem" },
    body2Link: { fontSize: "0.875rem", lineHeight: "1.125rem" },
    captionLink: { fontSize: "0.75rem", lineHeight: "1rem" },
    callout: { fontSize: "1rem", lineHeight: "1.5rem" },
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
  },
  opacity: {
    0: "0",
    none: "1",
    dim1: "0.72",
    dim2: "0.56",
    dim3: "0.40",
    dim4: "0.16",
    dim5: "0.08",
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  spacing: {
    auto: "auto",
    none: "0px",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "2.5rem",
  },
  zIndex: {
    hide: "-1",
    base: "0",
    raised: "1",
    dropdown: "1000",
    sticky: "1100",
    overlay: "1300",
    modal: "1400",
    popover: "1500",
    skipLink: "1600",
    toast: "1700",
    tooltip: "1800",
  },
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export interface ThemeFontSize {
  fontSize: string;
  lineHeight: string;
  fontWeight?: string;
  letterSpacing?: string;
}

export interface Theme {
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  borderWidth: {
    none: string;
    sm: string;
    md: string;
  };
  boxShadow: {
    sm: string;
    DEFAULT: string;
    md: string;
    lg: string;
    xl: string;
    none: string;
  };
  colors: {
    basic: string;
    onBasic: string;
    basicHovered: string;
    basicContainer: string;
    onBasicContainer: string;
    basicContainerHovered: string;
    accent: string;
    onAccent: string;
    accentHovered: string;
    accentContainer: string;
    onAccentContainer: string;
    accentContainerHovered: string;
    accentVariant: string;
    onAccentVariant: string;
    accentVariantHovered: string;
    main: string;
    onMain: string;
    mainHovered: string;
    mainContainer: string;
    onMainContainer: string;
    mainContainerHovered: string;
    support: string;
    onSupport: string;
    supportHovered: string;
    supportContainer: string;
    onSupportContainer: string;
    supportContainerHovered: string;
    mainVariant: string;
    onMainVariant: string;
    mainVariantHovered: string;
    supportVariant: string;
    onSupportVariant: string;
    supportVariantHovered: string;
    success: string;
    onSuccess: string;
    successHovered: string;
    successContainer: string;
    onSuccessContainer: string;
    successContainerHovered: string;
    alert: string;
    onAlert: string;
    alertHovered: string;
    alertContainer: string;
    onAlertContainer: string;
    alertContainerHovered: string;
    error: string;
    onError: string;
    errorHovered: string;
    errorContainer: string;
    onErrorContainer: string;
    errorContainerHovered: string;
    info: string;
    onInfo: string;
    infoHovered: string;
    infoContainer: string;
    onInfoContainer: string;
    infoContainerHovered: string;
    neutral: string;
    onNeutral: string;
    neutralHovered: string;
    neutralContainer: string;
    onNeutralContainer: string;
    neutralContainerHovered: string;
    background: string;
    onBackground: string;
    backgroundVariant: string;
    onBackgroundVariant: string;
    surface: string;
    onSurface: string;
    surfaceHovered: string;
    surfaceInverse: string;
    onSurfaceInverse: string;
    surfaceInverseHovered: string;
    outline: string;
    outlineHigh: string;
    overlay: string;
    onOverlay: string;
  };
  fontFamily: {
    sans: string;
    mono: string;
  };
  fontSize: {
    display1: ThemeFontSize;
    display1Expanded: ThemeFontSize;
    display2: ThemeFontSize;
    display2Expanded: ThemeFontSize;
    display3: ThemeFontSize;
    display3Expanded: ThemeFontSize;
    headline1: ThemeFontSize;
    headline1Expanded: ThemeFontSize;
    headline2: ThemeFontSize;
    headline2Expanded: ThemeFontSize;
    subhead: ThemeFontSize;
    subheadExpanded: ThemeFontSize;
    body1: ThemeFontSize;
    body2: ThemeFontSize;
    caption: ThemeFontSize;
    small: ThemeFontSize;
    body1Link: ThemeFontSize;
    body2Link: ThemeFontSize;
    captionLink: ThemeFontSize;
    callout: ThemeFontSize;
  };
  fontWeight: {
    regular: string;
    medium: string;
    semiBold: string;
    bold: string;
  };
  opacity: {
    0: string;
    none: string;
    dim1: string;
    dim2: string;
    dim3: string;
    dim4: string;
    dim5: string;
  };
  screens: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  spacing: {
    auto: string;
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
  };
  zIndex: {
    hide: string;
    base: string;
    raised: string;
    dropdown: string;
    sticky: string;
    overlay: string;
    modal: string;
    popover: string;
    skipLink: string;
    toast: string;
    tooltip: string;
  };
}

export type PartialTheme = DeepPartial<Theme>;

const defaultTheme = require("tailwindcss/defaultTheme")

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgba(var(${variableName}))`
  }
}

const themes = {
  skin: {
    base: "var(--color-background)",
    "base-muted": "var(--color-background-muted)",
    "base-md": "var(--color-background-medium)",
    focus: "var(--color-focus)",
    anchor: "var(--color-anchor)",
    "anchor-hover": "var(--color-anchor-hover)",
    fg: "var(--color-text)",
    "fg-muted": "var(--color-text-muted)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    header: withOpacity("--color-header"),
    "header-fg": withOpacity("--color-header-text"),
  },
}

module.exports = {
  mode: "jit",
  purge: {
    mode: "all",
    content: [
      "./src/**/*.tsx",
      "./src/**/*.ts",
      "./content/**/*.tsx",
      "./content/**/*.mdx",
    ],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.fg-muted"),
            a: {
              color: theme("colors.anchor"),
              "&:hover": {
                color: theme("colors.anchor-hover"),
              },
              code: { color: theme("colors.focus") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.fg"),
              fontFamily: "Exo",
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.fg"),
              fontFamily: "Exo",
            },
            h3: {
              fontWeight: "700",
              fontFamily: "Exo",
              color: theme("colors.fg"),
            },
            "h4,h5,h6": {
              fontFamily: "Exo",
              fontWeight: "600",
              color: theme("colors.fg"),
            },
            code: {
              color: theme("colors.bg"),
              backgroundColor: theme("colors.focus"),
            },
            details: {
              backgroundColor: theme("colors.bg"),
            },
            hr: { borderColor: theme("colors.base-muted") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.fg-muted"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.fg-muted"),
            },
            strong: { color: theme("colors.fg") },
            thead: {
              color: theme("colors.fg"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.base-muted"),
              },
            },
            blockquote: {
              fontSize: "1.5rem",
              color: theme("colors.fg"),
              borderLeftColor: theme("colors.fg-muted"),
            },
          },
        },
      }),
      colors: themes.skin,
      boxShadow: {
        button: "6px 6px 13px #70ad13, -6px -6px 13px #98eb19",
        light: "6px 6px 13px #059bb4, -6px -6px 13px #07d1f4",
      },
      fontFamily: {
        exo: ["Exo", ...defaultTheme.fontFamily.sans],
        yrsa: ["Yrsa", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        blog: "1fr min(600px, 100%) 1fr",
      },
      backgroundColor: themes,
      textColor: themes,
      borderColor: themes,
      ringColor: themes,
      divideColor: themes,
      ringOffsetColor: themes,
      placeholderColor: themes,
      gradientColorStops: themes,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}

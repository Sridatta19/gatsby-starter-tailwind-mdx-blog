const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

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
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.yellow.200"),
              "&:hover": {
                color: theme("colors.yellow.300"),
              },
              code: { color: theme("colors.rose.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
              fontFamily: "Exo",
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
              fontFamily: "Exo",
            },
            h3: {
              fontWeight: "700",
              fontFamily: "Exo",
              color: theme("colors.gray.100"),
            },
            "h4,h5,h6": {
              fontFamily: "Exo",
              fontWeight: "600",
              color: theme("colors.gray.100"),
            },
            code: {
              backgroundColor: theme("colors.gray.800"),
            },
            details: {
              backgroundColor: theme("colors.gray.800"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.400"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.400"),
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              fontSize: "1.5rem",
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.300"),
            },
          },
        },
      }),
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
        amber: colors.amber,
        yellow: colors.yellow,
        orange: colors.orange,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        emerald: colors.emerald,
      },
      boxShadow: {
        button: "6px 6px 13px #d08609, -6px -6px 13px #ffb60d",
      },
      fontFamily: {
        exo: ["Exo", ...defaultTheme.fontFamily.sans],
        yrsa: ["Yrsa", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        blog: "1fr min(65ch, 100%) 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}

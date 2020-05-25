module.exports = {
  theme: {
    extend: {
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '72': '18rem',
        '80': '20rem',
      }
    },
    customForms: theme => ({
      default: {
        'select, radio, textarea, input, checkbox': {
          '&:focus': {
            borderColor: theme('colors.gray.400'),
            boxShadow: 'none',
          }
        },
        'input:focus': {
          backgroundColor: theme('colors.white')
        }
      },
      dark: {
        'select, radio, textarea, input, checkbox': {
          lineHeight: theme('lineHeight.snug'),
          borderColor: 'transparent',
          color: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700')
        },
        radio: {
          backgroundColor: theme('colors.gray.900'),
          borderRadius: theme('borderRadius.full')
        },
        checkbox: {
          backgroundColor: theme('colors.gray.900')
        }
      }
    }),
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}
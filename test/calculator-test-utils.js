import {ThemeProvider} from 'emotion-theming'
import PropTypes from 'prop-types'
import {render as rtlRender} from '@testing-library/react'
import React from 'react'
// eslint-disable-next-line import/no-unresolved
import {dark} from 'themes'

function render(ui, {theme = dark, ...options} = {}) {
  function Wrapper({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
  Wrapper.propTypes = {
    children: PropTypes.node
  }
  return  rtlRender(ui, {...options, wrapper: Wrapper})
}
export * from '@testing-library/react'
// override existing render function with our own render
export {render}
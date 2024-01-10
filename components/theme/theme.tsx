'use client'

import {applyTheme, getInitialTheme} from "@/helpers/theme-helper/theme-helper";

const ThemeProvider = () => {
  applyTheme(getInitialTheme())
  return null
}

export default ThemeProvider
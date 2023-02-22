import 'styled-components'
import { ColorModeTypes } from 'types/theme'
import type { DeviceTypes, ColorsTypes, FontTypes, LayoutTypes } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colorMode?: ColorModeTypes
    device: DeviceTypes
    colors: ColorsTypes
    fontStyle: FontTypes
    layout: LayoutTypes
  }
}

import 'styled-components'
import { DeviceTypes, ColorsTypes, FontTypes, LayoutTypes } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    device: DeviceTypes
    colors: ColorsTypes
    fontStyle: FontTypes
    layout: LayoutTypes
  }
}

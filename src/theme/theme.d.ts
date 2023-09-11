import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    mainColor: string
    response: {
      laptop: string
      mobile: string
    }
  }
}

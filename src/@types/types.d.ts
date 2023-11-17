/// <reference types="gtag.js" />

declare module 'gtag.js'

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

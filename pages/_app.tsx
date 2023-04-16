import '../styles/global.css'
import {CssBaseline, StylesProvider} from "@material-ui/core";
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Component {...pageProps} />
    </StylesProvider>
  )
}

// .js
// export default function App({Component, pageProps}) {
//   return <Component {...pageProps}/>
// }
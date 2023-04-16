import '../styles/global.css'
import {CssBaseline, StylesProvider} from "@material-ui/core";
import { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <StylesProvider injectFirst>
      <SessionProvider session={session}>
        <CssBaseline />
        <Component {...pageProps} />
      </SessionProvider>
    </StylesProvider>
  )
}

// .js
// export default function App({Component, pageProps}) {
//   return <Component {...pageProps}/>
// }
import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from "next/dist/next-server/lib/router/router";
export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
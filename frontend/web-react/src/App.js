import React from 'react'
import { useRoutes } from 'react-router-dom'
import { ChakraProvider, useTheme } from '@chakra-ui/react'

import routes from './routes'

const App = () => {
  const routing = useRoutes(routes)
  return (
    <ChakraProvider>
      {routing}
    </ChakraProvider>
  )
}

export default App

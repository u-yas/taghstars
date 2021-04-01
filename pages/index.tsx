import { Box } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { LoginButton } from '../components/loginButton'
import { LogoutButton } from '../components/logoutButton'
import useSWR from 'swr'
import { TaggedList } from '../components/taggedList'

const IndexPage = () => {
  // storageにtokenがあるかどうか確認する
  const [auth, setAuth] = useState(false)

  const { tags, error } = useSWR('')
  return (
  <Box
    w={["300px", "500px", "700px", "800px"]}
    h={["200px", "300px", "400px", "400px"]}
  >
      
      {
        auth ?
          (<>
            <TaggedList />
            <LogoutButton />
            <ImportAstralapp />
          </>
          )
         :()
        <LoginButton />
      }
    
  </Box>
)
}

export default IndexPage

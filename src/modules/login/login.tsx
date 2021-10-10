import styled from 'styled-components'
import { Container, Typography } from '@mui/material'
import handleLoginError from '../../lib/handleLoginError'
import { useLocation } from 'react-router'

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
`

const Login = (): JSX.Element => {
  const queryParams = new URLSearchParams(useLocation().search)

  handleLoginError(queryParams)

  return (
    <StyledContainer>
      <Typography align='center'>Login Page</Typography>
    </StyledContainer>
  )
}

export default Login

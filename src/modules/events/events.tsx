import styled from 'styled-components'
import { Container, Typography } from '@mui/material'

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
`

const Events = (): JSX.Element => {
  return (
    <StyledContainer>
      <Typography align='center'>Events Page</Typography>
    </StyledContainer>
  )
}

export default Events

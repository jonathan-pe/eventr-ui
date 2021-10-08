import styled from 'styled-components'
import { Container, Typography } from '@mui/material'

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
`

const Calendar = (): JSX.Element => {
  return (
    <StyledContainer>
      <Typography align='center'>Calendar Page</Typography>
    </StyledContainer>
  )
}

export default Calendar

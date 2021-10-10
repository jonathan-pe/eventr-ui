import styled from 'styled-components'
import { Box, Typography } from '@mui/material'
import EventCard from './eventCard'

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 64px);
  overflow: scroll;
`

const EventsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 50px;
`

const Events = (): JSX.Element => {
  return (
    <StyledBox>
      <Typography align='center'>Events Page</Typography>
      <EventsContainer>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </EventsContainer>
    </StyledBox>
  )
}

export default Events

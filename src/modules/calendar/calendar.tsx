import styled from 'styled-components'
import { Box } from '@mui/material'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import list from '@fullcalendar/list'

const PageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
`

const CalendarBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .fc {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    max-height: 600px;
  }
`

const Calendar = (): JSX.Element => {
  return (
    <PageBox sx={{ mt: 5, mb: 5, ml: 5, mr: 5 }}>
      <CalendarBox>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, list]}
          events={[
            { title: 'event 1', date: '2019-04-01' },
            { title: 'event 2', date: '2019-04-02' },
          ]}
          initialView='dayGridMonth'
        />
      </CalendarBox>
    </PageBox>
  )
}

export default Calendar

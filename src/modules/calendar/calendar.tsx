import styled from 'styled-components'
import { Box } from '@mui/material'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import list from '@fullcalendar/list'
import useMediaQuery from '@mui/material/useMediaQuery'

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

  .fc .fc-list-sticky .fc-list-day > * {
    background: none;
  }

  .fc .fc-list-event:hover td {
    background: rgba(208, 208, 208, 0.3);
  }

  .fc-h-event {
    background-color: #fca311;
    border: 1px solid #fca311;
  }

  .fc-v-event {
    background-color: #fca311;
    border: 1px solid #fca311;
  }

  .fc-timegrid-event {
    box-shadow: 0px 0px 0px 1px #14213d;
  }

  .fc-daygrid-event-dot {
    border: 4px solid #fca311;
  }

  .fc-button-primary {
    background-color: #14213d;
    outline: none;
  }

  .fc .fc-button-primary:not(:disabled).fc-button-active:focus {
    box-shadow: 0 0 0 2px rgb(76 91 106 / 100%);
  }

  .fc-button-active {
    background-color: #14213d;
    opacity: 0.7;
  }

  .fc-button {
    &:focus {
      box-shadow: 0 0 0 2px rgb(76 91 106 / 100%);
    }
  }

  .fc-h-event > * {
    color: #000000;
  }

  .fc-v-event > * {
    color: #000000;
  }

  .fc-popover {
    background: #14213d;
  }
`

const Calendar = (): JSX.Element => {
  const screenIsBig = useMediaQuery('(max-width: 800px)')

  return (
    <PageBox sx={{ mt: 5, mb: 5, ml: 5, mr: 5 }}>
      <CalendarBox>
        {screenIsBig ? (
          <Box>hello</Box>
        ) : (
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, list, interactionPlugin]}
            events={[
              { title: 'event 1', date: new Date('2021-10-4'), allDay: true },
              { title: 'event 2', date: new Date('2021-10-7'), end: new Date('2021-10-10') },
              { title: 'event 3', date: new Date() },
            ]}
            headerToolbar={{
              start: 'title',
              center: '',
              end: 'dayGridMonth,timeGridWeek,timeGrid today prevYear,prev,next,nextYear',
            }}
            buttonText={{
              today: 'Today',
              dayGridMonth: 'Month',
              timeGrid: 'Day',
              timeGridWeek: 'Week',
            }}
            selectable={true}
            editable={true}
            dateClick={info => console.log('data clicked', info)}
            eventClick={info => console.log('event clicked', info)}
            selectMirror={true}
            unselectAuto={true}
            initialView='dayGridMonth'
            dayMaxEvents={3}
            height={'100%'}
            contentHeight={'auto'}
          />
        )}
      </CalendarBox>
    </PageBox>
  )
}

export default Calendar

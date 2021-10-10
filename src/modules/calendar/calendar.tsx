import styled from 'styled-components'
import { Box } from '@mui/material'
import FullCalendar, { EventSourceInput } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

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

    .fc-event-title {
      color: black;
    }

    .fc-event-time {
      color: black;
    }
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

  .fc-popover {
    background: #14213d;
  }
`

const Calendar = (): JSX.Element => {
  const testEvents: EventSourceInput = [
    { title: 'event 1', date: new Date('2021-10-4'), allDay: true },
    { title: 'event 2', date: new Date('2021-10-7'), end: new Date('2021-10-10') },
    { title: 'event 3', date: new Date() },
  ]

  return (
    <PageBox sx={{ mt: 5, mb: 5, ml: 5, mr: 5 }}>
      <CalendarBox>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          events={testEvents}
          headerToolbar={{
            start: 'title',
            center: '',
            end: 'today prevYear,prev,next,nextYear',
          }}
          buttonText={{
            today: 'Today',
          }}
          selectable={true}
          editable={true}
          dateClick={info => console.log('data clicked', info)}
          eventClick={info => console.log('event clicked', info)}
          unselectAuto={true}
          initialView='dayGridMonth'
          dayMaxEvents={3}
          height={'100%'}
          contentHeight={'auto'}
        />
      </CalendarBox>
    </PageBox>
  )
}

export default Calendar

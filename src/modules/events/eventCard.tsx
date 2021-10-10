import styled from 'styled-components'
import { Typography, Card, CardMedia, CardContent, CardActions, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ShareIcon from '@mui/icons-material/Share'
import lightbulb from '../../assets/images/lightbulb.jpg'

const StyledCard = styled(Card)`
  min-width: 275px;
  width: calc(100% / 4 - 8px);
  max-width: 450px;
  min-height: 200px;
  margin: 8px 4px;

  @media screen and (max-width: 1250px) {
    width: calc(100% / 3 - 8px);
  }

  @media (max-width: 975px) {
    width: calc(100% / 2 - 8px);
  }

  @media (max-width: 700px) {
    width: calc(100% - 8px);
  }
`

const EventCard = (): JSX.Element => {
  return (
    <StyledCard raised={true}>
      <CardMedia component='img' height='140' image={lightbulb} alt='light bulb' />
      <CardContent>
        <Typography fontSize='13px'>SAT, Oct 9th @ 10PM</Typography>
        <Typography fontSize='17px' fontWeight='600'>
          Event Title
        </Typography>
        <Typography fontSize='14px' fontWeight='600' color='text.secondary'>
          Event Location
        </Typography>
        <Typography fontSize='12px' color='text.secondary'>
          59,999 eventrs
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  )
}

export default EventCard

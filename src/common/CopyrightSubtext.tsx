import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export default function CopyrightSubtext(props: any): JSX.Element {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://eventr.xyz/'>
        eventr
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}

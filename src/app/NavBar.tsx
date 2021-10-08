import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

interface NavbarProps {
  toggleDrawer: (drawerIsOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

export default function NavBar({ toggleDrawer }: NavbarProps): JSX.Element {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={event => toggleDrawer(true)(event)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          eventr
        </Typography>
        <Button color='inherit' onClick={() => console.log('TODO: Write signOut()')}>
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  )
}

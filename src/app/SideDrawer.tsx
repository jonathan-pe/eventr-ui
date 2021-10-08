import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import { Brightness2Outlined, Brightness7 } from '@mui/icons-material'

interface SideDrawerProps {
  toggleDrawer: (drawerIsOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
  drawerIsOpen: boolean
  mode: 'light' | 'dark'
  toggleTheme: () => void
}

const SideDrawer = ({ toggleDrawer, drawerIsOpen, mode, toggleTheme }: SideDrawerProps): JSX.Element => {
  return (
    <Drawer anchor={'left'} open={drawerIsOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{
          width: 250,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          pt: 1,
          pb: 1,
        }}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem button sx={{ pr: 3, pl: 3 }}>
            <ListItemText>Events</ListItemText>
          </ListItem>
          <ListItem button sx={{ pr: 3, pl: 3 }}>
            <ListItemText>Calendar</ListItemText>
          </ListItem>
        </List>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton size='large' edge='start' color='inherit' aria-label='darkMode' onClick={() => toggleTheme()}>
            {mode === 'dark' ? <Brightness7 /> : <Brightness2Outlined />}
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  )
}

export default SideDrawer

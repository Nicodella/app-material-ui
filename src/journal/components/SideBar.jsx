import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material"


export const SideBar = ( {drawerWidth} ) => {
  return (
    <Box
    component='nav'
    sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}} >
      <Drawer variant='permanent'
      open
      sx={{display: {xs: 'block'},
      '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
      }}
      >
            <Toolbar variant="h6" nowWrap component='div'>
                Rodrigo
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map(text =>
                        <ListItem key={text } disablePadding>
                            <ListItemButton>
                                <TurnedInNot/>
                            
                            <Grid>
                                <ListItemText primary={text}/>
                                <ListItemText secondary ={'Nisi voluptate duis voluptate eiusmod id commodo non ut duis officia irure laborum enim.'}/>
                            </Grid>
                            </ListItemButton>
                        </ListItem>
                    )
                }
            </List>
      </Drawer>
    </Box>
  )
}



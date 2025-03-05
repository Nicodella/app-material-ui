
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from "../views/NoteView"
import { AddOutlined } from "@mui/icons-material"



export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView/>
      <NoteView/>
     {/*<Typography >Fugiat labore sit pariatur ipsum ea ea culpa aliquip dolore elit nulla Lorem ex. Dolore magna ipsum voluptate veniam et commodo ipsum nisi eu occaecat eiusmod. Commodo nulla mollit anim esse qui ut tempor. Dolor duis dolor id velit consequat.</Typography>*/} 
    <IconButton size="large"
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': {backgroundColor: 'error.main', opacity: 0.9},
        position : 'fixed',
        right: 50,
        bottom: 50
      }}>
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}



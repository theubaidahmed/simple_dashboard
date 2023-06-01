import { Card, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';

const MockCard = props => {
    const { icon, clientName, service } = props;
    return (
        <Card
            elevation={0}
            sx={{
                pl: 2,
                mb: 2,
                // py: 1,
                outline: '1px solid rgba(0,0,0, 0.05)',
                borderRadius: '8px',
                '.MuiListItem-root': {
                    px: 0,
                },
            }}>
            <ListItem
                secondaryAction={
                    <IconButton edge='end'>
                        <MoreVertIcon />
                    </IconButton>
                }>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                    primary={service}
                    primaryTypographyProps={{
                        gutterBottom: true,
                        sx: { textTransform: 'uppercase' },
                    }}
                    secondary={clientName}></ListItemText>
            </ListItem>
        </Card>
    );
};

export default MockCard;

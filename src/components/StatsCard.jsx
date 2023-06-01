import { Box, Card, LinearProgress, Typography } from '@mui/material';
import React from 'react';

const StatsCard = props => {
    const { color, stats, caption } = props;
    return (
        <Card variant='stats' color={color} elevation={0}>
            <Box>
                <Typography variant='h4' fontWeight={500} my={2}>
                    {stats}
                </Typography>
                <Typography variant='body1'>{caption}</Typography>
            </Box>

            <Box>
                <LinearProgress variant='determinate' value={25} sx={{ background: '#58ECD9' }} />
            </Box>
        </Card>
    );
};

export default StatsCard;

// function LinearProgressWithLabel(props) {
//     return (
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Box sx={{ width: '100%', mr: 1 }}></Box>
//             <Box sx={{ minWidth: 35 }}>
//                 <Typography variant='body2' color='text.secondary'>{`${Math.round(
//                     props.value
//                 )}%`}</Typography>
//             </Box>
//         </Box>
//     );
// }

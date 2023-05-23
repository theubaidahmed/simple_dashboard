import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import StatsCard from '../components/StatsCard';

const Dashboard = () => {
    return (
        <Container maxWidth='false'>
            <Box my={4}>
                <Typography variant='h3' fontWeight={500} mb={1}>
                    Hello! Leon
                </Typography>
                <Typography variant='body2' color='text.secondary' sx={{ wordSpacing: '2px' }}>
                    Never put off till tomorrow what can be done today!{' '}
                </Typography>
            </Box>
            <Grid container spacing={8}>
                <Grid item xs={12} lg={8}>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        mb={3}
                        sx={{ wordSpacing: '2px' }}>
                        Today
                    </Typography>
                    <Grid container spacing={2}>
                        {Array(4)
                            .fill(0)
                            .map(item => (
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <StatsCard color='secondary' stats='480' caption='Go on' />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        sx={{ wordSpacing: '2px' }}
                        mb={3}>
                        Automatically assigned
                    </Typography>
                    <StatsCard color='primary' stats='480' caption='Go on' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;

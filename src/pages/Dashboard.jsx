import { Box, Button, Card, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StatsCard from '../components/StatsCard';
import MockCard from '../components/MockCard';
import LockIcon from '@mui/icons-material/Lock';
import Image from '../components/Image';

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
                <Grid item xs={12} xl={8}>
                    <Typography
                        variant='body1'
                        color='text.secondary'
                        mb={3}
                        fontWeight={500}
                        sx={{ wordSpacing: '2px' }}>
                        Today
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <StatsCard color='secondary' stats='480' caption='Go on' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <StatsCard stats='180' caption='Intention' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <StatsCard stats='72' caption='Deal' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <StatsCard color='tertiary' stats='72' caption='No intention' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <StatsCard stats='72' caption='No intention' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <StatsCard stats='72' caption='No intention' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} xl={4}>
                    <Typography
                        variant='body1'
                        color='text.secondary'
                        sx={{ wordSpacing: '2px' }}
                        fontWeight={500}
                        mb={3}>
                        Automatically assigned
                    </Typography>
                    <StatsCard color='primary' stats='480' caption='Go on' />
                </Grid>
            </Grid>
            <Grid container columnSpacing={4}>
                <Grid item xs={12} lg={4}>
                    <Typography
                        variant='body1'
                        color='text.secondary'
                        fontWeight={500}
                        my={3}
                        sx={{ wordSpacing: '2px' }}>
                        Mockup
                    </Typography>

                    <MockCard
                        service='@theubaidahmed'
                        clientName='Salena Gomez'
                        icon={<FacebookIcon fontSize='large' sx={{ color: '#0A82ED' }} />}
                    />
                    <MockCard
                        service='@theubaidahmed'
                        clientName='Salena Gomez'
                        icon={<TwitterIcon fontSize='large' sx={{ color: '#1DA1F2' }} />}
                    />
                    <MockCard
                        service='@theubaidahmed'
                        clientName='Salena Gomez'
                        icon={<YouTubeIcon fontSize='large' sx={{ color: '#DC2925' }} />}
                    />
                </Grid>

                <Grid item xs={12} lg={8}>
                    <Typography
                        variant='body1'
                        color='text.secondary'
                        fontWeight={500}
                        sx={{ wordSpacing: '2px' }}
                        my={3}>
                        Company
                    </Typography>
                    <Card
                        elevation={0}
                        sx={{
                            p: 2,

                            height: 'calc(100% - 90px)',
                            borderRadius: '12px',
                            boxShadow:
                                'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
                        }}>
                        <Stack direction='row' justifyContent='space-between' height='100%'>
                            <Box display='flex' flexDirection='column'>
                                <Typography
                                    variant='h5'
                                    fontWeight={500}
                                    sx={{ textTransform: 'uppercase' }}
                                    gutterBottom>
                                    fmountain company
                                </Typography>
                                <Typography variant='body2' flexGrow={1}>
                                    leading big data solution provider in India, aiming to use big
                                    data and artificial intelligence
                                </Typography>
                                <Box>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        startIcon={<LockIcon />}
                                        sx={{
                                            borderRadius: '30px',
                                            px: 4,
                                        }}
                                        disableElevation>
                                        Unlock
                                    </Button>
                                </Box>
                            </Box>

                            <Image
                                name='building.jpeg'
                                align='right'
                                sx={{ height: '100%', display: { xs: 'none', md: 'block' } }}
                            />
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;

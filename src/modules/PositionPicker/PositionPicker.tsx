import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { CardLink } from './components/CardLink';

export const PositionPicker = (): JSX.Element => {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <CardLink path='accessioning' />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardLink path='grossing' />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardLink path='processing' />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardLink path='sectioning' />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardLink path='staining' />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardLink path='sendout' />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardLink path='report' />
                </Grid>
            </Grid>
        </Container>
    )
}
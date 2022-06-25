import { Link, Typography } from '@mui/material';

export const Copyright = (): JSX.Element => (
  <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 8, mb: 4 }}>
    {'Copyright © '}
    <Link color="inherit" href="https://pathsoft.com/">
      PathSoft
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { default as NextLink } from 'next/link';

export const CardLink = ({ path }: { path: string }) => {
    const { t } = useTranslation('positions');
    return (
        <Card
            sx={{ height: '100%', cursor: 'pointer' }}
        >
            <NextLink href={`/${path}`}>
                <Link underline='none' color="inherit">
                    <Typography variant="h5" component="h2" sx={{ p: 6, textAlign: 'center' }}>
                        {t(path)}
                    </Typography>
                </Link>
            </NextLink>
        </Card>
    )
}
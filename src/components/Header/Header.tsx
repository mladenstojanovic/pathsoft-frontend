import AppBar from "@mui/material/AppBar";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';

export const Header = (): JSX.Element => {
    const { t } = useTranslation('header');
    const router = useRouter()

    return (<AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
        <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <NextLink href="/">
                <Link variant="h6" color="inherit" noWrap sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                    PathSoft
                </Link>
            </NextLink>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NextLink href="/positions">
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5, flex: '1 0 auto' }}
                    >
                        {t('positions')}
                    </Link>
                </NextLink>
                <FormControl sx={{ my: 1, mx: 2 }} variant="standard">
                    <Select
                        labelId="select-language-label"
                        id="select-language"
                        value={router.locale}
                        label={t('language')}
                        onChange={(e) => {
                            router.push(router.pathname, router.asPath, { locale: e.target.value });
                        }}
                    >
                        <MenuItem value={'en'}>English</MenuItem>
                        <MenuItem value={'rs'}>Srpski</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Toolbar>
    </AppBar>)
}
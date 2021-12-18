import { Home, Person, ImportContacts, PhotoCamera } from '@mui/icons-material';
import { Box, Typography, SvgIcon, Hidden, useTheme } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  currentCategory: string;
};

const items = [
  {
    category: 'home',
    href: '/',
    icon: Home,
  },
  {
    category: 'about',
    href: '/about',
    icon: Person,
  },
  {
    category: 'blog',
    href: '/blog',
    icon: ImportContacts,
  },
  {
    category: 'works',
    href: '/works',
    icon: PhotoCamera,
  },
];

const Navigation: FC<Props> = ({ currentCategory }) => {
  const theme = useTheme();

  return (
    <Box component="nav">
      <Box component="ul" display="flex">
        {items.map((i) => (
          <Box
            key={i.href}
            component="li"
            flex={{ xs: '1 1 auto', md: '0 1 auto' }}
          >
            <Link href={i.href} passHref>
              <Box component="a" display="block">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  px={{ xs: 0.5, md: 3 }}
                  py={{ xs: 0.5, md: 1.5 }}
                  bgcolor={{
                    md: i.category === currentCategory ? 'common.white' : '',
                  }}
                  textAlign="center"
                  color={{
                    xs:
                      i.category === currentCategory
                        ? 'primary.light'
                        : 'common.white',
                    md:
                      i.category === currentCategory
                        ? 'common.black'
                        : 'common.white',
                  }}
                >
                  <Hidden mdUp>
                    <SvgIcon component={i.icon} fontSize="small" />
                  </Hidden>
                  <Typography
                    fontWeight="medium"
                    fontSize={{
                      xs: theme.typography.pxToRem(11),
                      md: theme.typography.pxToRem(14),
                    }}
                    lineHeight="1.2"
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {i.category}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Navigation;

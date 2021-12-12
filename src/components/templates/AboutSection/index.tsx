import { Box, Theme } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

import Container from 'components/templates/Container/';

const AboutSection: FC = ({ children }) => {
  return (
    <Box
      display="flex"
      minHeight="100vh"
      pb={10}
      bgcolor="common.black"
      overflow="hidden"
    >
      <Container>
        <Box display={{ md: 'flex' }} flexDirection={{ md: 'row-reverse' }}>
          <Box
            position="relative"
            sx={(theme: Theme) => ({
              '&::before': {
                content: '""',
                display: 'block',
                [theme.breakpoints.up('md')]: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: '100vw',
                  backgroundColor: 'common.white',
                },
              },
            })}
          >
            <Box
              position="relative"
              display="flex"
              alignItems="flex-end"
              minHeight={{ md: '100vh' }}
              pt={5}
              bgcolor="common.white"
              flex="1 1 55%"
              sx={(theme: Theme) => ({
                '&::before, &::after': {
                  content: '""',
                  position: 'absolute',
                  zIndex: 1,
                  display: 'block',
                  backgroundColor: 'common.black',
                },
                '&::before': {
                  top: 0,
                  left: '-1px',
                  bottom: '-1px',
                  width: '15%',
                  clipPath: 'polygon(0 0, 100% 0, 15% 100%, 0 100%)',
                  [theme.breakpoints.up('md')]: {
                    width: 'min(35%, 300px)',
                    clipPath: 'polygon(0 0, 100% 0, 10% 100%, 0 100%)',
                  },
                },
                '&::after': {
                  left: '-1px',
                  bottom: 0,
                  right: 0,
                  paddingBottom: '10%',
                  clipPath: 'polygon(0 80%, 100% 0, 100% 100%, 0 100%)',
                  [theme.breakpoints.up('md')]: {
                    right: 'auto',
                    width: '100vw',
                    paddingBottom: '50%',
                    clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)',
                  },
                },
              })}
            >
              <Box
                maxWidth={{ xs: '250px', md: '600px' }}
                mx="auto"
                mb={{ md: '100px' }}
                pl={{ xs: '40px', md: '140px' }}
                boxSizing="content-box"
              >
                <Image
                  src="/assets/image/profile.png"
                  alt=""
                  width="700"
                  height="700"
                />
              </Box>
            </Box>
          </Box>
          <Box
            flex="1 1 45%"
            pt={3}
            pb={6}
            color="common.white"
            bgcolor="common.black"
            display={{ md: 'flex' }}
            alignItems={{ md: 'center' }}
            justifyContent={{ md: 'center' }}
          >
            <Box>{children}</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;

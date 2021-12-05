import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';

import Container from 'components/templates/Container/';
import CategoryHeading from 'components/ui/CategoryHeading/';
import Profile from 'components/ui/Profile/';

const About: FC = ({}) => {
  return (
    <>
      <Head>
        <title>About | minami web site</title>
        <meta
          name="description"
          content="南進之介のWebサイト 南進之介について"
        />
      </Head>
      <Box position="relative" minHeight="100vh">
        {/* bg */}
        <Box position="fixed" top={0} right={0} bottom={0} left={0} zIndex="-1">
          <Image
            src="/assets/image/profile.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
          <Box
            position="absolute"
            top={0}
            right={0}
            bottom={0}
            left={0}
            bgcolor="rgba(21,21,21,0.70)"
            sx={{
              backdropFilter: 'blur(40px) brightness(60%)',
            }}
          />
        </Box>
        {/* bg */}

        <Box pt={{ xs: 2, md: 8 }} pb={10} color="common.white">
          <Container>
            <Box mb={10}>
              <CategoryHeading titleEng="About" titleJpn="南進之介" />
            </Box>
            <Box mb={4} mx="auto" maxWidth="632px">
              <Profile
                profileItems={[
                  {
                    id: 0,
                    title: 'Name',
                    description: 'Shinnosuke Minami',
                  },
                  {
                    id: 1,
                    title: 'Age',
                    description: 29,
                  },
                ]}
              />
            </Box>
            <Box mx="auto" maxWidth="848px">
              <Typography>
                南くんのプロフィール文章がなにか入る。南くんのプロフィール文章がなにか入る。南くんのプロフィール文章がなにか入る。南くんのプロフィール文章がなにか入る。南くんのプロフィール文章がなにか入る。南くんのプロフィール文章がなにか入る。南くんのプロフィール文章がなにか入る。
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default About;

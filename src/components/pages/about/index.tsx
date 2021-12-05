import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';

import AboutSection from 'components/templates/AboutSection/';
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
      <AboutSection>
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
        <Box mx="auto" maxWidth="500px">
          <Typography>
            南くんのプロフィール文章がなにか入る。南くんのプロフィール文章がなにか入る。南くんのプロフィール文章がなにか入る。南くんのプロフィール文章がなにか入る。南くんのプロフィール文章がなにか入る。南くんのプロフィール文章がなにか入る。南くんのプロフィール文章がなにか入る。
          </Typography>
        </Box>
      </AboutSection>
    </>
  );
};

export default About;

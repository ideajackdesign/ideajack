import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';

import AboutSection from 'components/templates/AboutSection/';
import CategoryHeading from 'components/ui/CategoryHeading/';
import Profile from 'components/ui/Profile/';
import { About as AboutType, AboutItem } from 'domains/microCMS/models/about';

type Props = { about: AboutType; profile: AboutItem | undefined };

const About: FC<Props> = ({ about, profile }) => {
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
            profileItems={about.contents.map((a) => ({
              id: a.id,
              title: a.title,
              description: a.description,
            }))}
          />
        </Box>
        {profile && (
          <Box mx="auto" maxWidth="500px">
            <Typography>{profile.description}</Typography>
          </Box>
        )}
      </AboutSection>
    </>
  );
};

export default About;

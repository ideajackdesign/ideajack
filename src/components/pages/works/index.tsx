import { Box } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';

import Container from 'components/templates/Container/';
import CategoryHeading from 'components/ui/CategoryHeading/';
import PicCard from 'components/ui/PicCard/';

const dummy = [
  {
    id: '1',
    title: 'testこれはdummyダミーテキスト',
    src: '/assets/image/profile.png',
    href: '/',
  },
  {
    id: '2',
    title: 'testこれはdummyダミーテキスト',
    src: '/assets/image/profile.png',
    href: '/',
  },
  {
    id: '3',
    title: 'testこれはdummyダミーテキスト',
    src: '/assets/image/profile.png',
    href: '/',
  },
  {
    id: '4',
    title: 'testこれはdummyダミーテキスト',
    src: '/assets/image/profile.png',
    href: '/',
  },
  {
    id: '5',
    title: 'testこれはdummyダミーテキスト',
    src: '/assets/image/profile.png',
    href: '/',
  },
  {
    id: '6',
    title: 'testこれはdummyダミーテキスト',
    src: '/assets/image/profile.png',
    href: '/',
  },
];

const Works: FC = ({}) => {
  return (
    <>
      <Head>
        <title>Works | minami web site</title>
        <meta
          name="description"
          content="南進之介のWebサイト 写真家としての作品一覧"
        />
      </Head>
      <Box
        pt={{ xs: 2, md: 8 }}
        pb={10}
        minHeight="100vh"
        bgcolor="common.white"
      >
        <Container>
          <Box mb={10}>
            <CategoryHeading titleEng="Works" titleJpn="写真家" />
          </Box>
          <Box
            component="ul"
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            gap={{ xs: 0.25, md: 0.5 }}
          >
            {dummy.map((p) => (
              <Box key={p.id} component="li">
                <PicCard title={p.title} src={p.src} href={p.href} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Works;

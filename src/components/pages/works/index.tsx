import { Box } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';

import Container from 'components/templates/Container/';
import CategoryHeading from 'components/ui/CategoryHeading/';
import PicCard from 'components/ui/PicCard/';
import { Work } from 'domains/local/models/works';

type Props = { works: Work[] };

const Works: FC<Props> = ({ works }) => {
  return (
    <>
      <Head>
        <title>Works | minami web site</title>
        <meta
          name="description"
          content="南進之介のWebサイト 写真家としての作品一覧"
        />
      </Head>
      <Box pt={{ xs: 2, md: 8 }} pb={15} bgcolor="common.white">
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
            {works.map((w) => (
              <Box key={w.id} component="li">
                <PicCard
                  title={w.title}
                  src={`/assets/works/${w.id}/image/${w.main}`}
                  href={`/works/${w.id}`}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Works;

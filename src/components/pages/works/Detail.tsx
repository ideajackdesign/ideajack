import {
  Box,
  Button,
  Hidden,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';

import ArrowLeft from 'components/icons/ArrowLeft';
import Container from 'components/templates/Container/';
import PicGallery from 'components/ui/PicGallery/';
import { Work } from 'domains/local/models/works';

type Props = { work: Work };

const Detail: FC<Props> = ({ work }) => {
  const theme = useTheme();
  const md = theme.breakpoints.values.md;
  const isPc = useMediaQuery(`(min-width:${md}px)`);

  return (
    <>
      <Head>
        <title>{`${work.title} | work | minami web site`}</title>
        <meta
          name="description"
          content={`南進之介のWebサイト ${work.title}`}
        />
      </Head>
      <Hidden mdUp>
        <Box py={1.5}>
          <Container>
            <Link href="/works" passHref>
              <Button variant="text" component="a" startIcon={<ArrowLeft />}>
                work
              </Button>
            </Link>
          </Container>
        </Box>
      </Hidden>
      <Box pt={{ md: 2 }} pb={15} bgcolor="common.white">
        <Container>
          <Box
            display="flex"
            gap={{ xs: 3, md: 2 }}
            flexDirection={{ xs: 'column', md: 'row' }}
          >
            <Box flex={{ md: '2 1 0' }}>
              <PicGallery
                pics={work.images.map((fileName) => ({
                  id: fileName,
                  src: `/assets/works/${work.id}/image/${fileName}`,
                }))}
              />
            </Box>
            <Box flex={{ md: '1 1 0' }}>
              <Box
                mb={{ xs: 0.5, md: 2 }}
                display="flex"
                flexDirection="column-reverse"
                justifyContent="center"
              >
                <Typography variant="h1">{work.title}</Typography>
                <Typography
                  fontSize={theme.typography.pxToRem(isPc ? 15 : 14)}
                  lineHeight="1.2"
                >
                  <Box component="time">{work.date}</Box>
                </Typography>
              </Box>
              <Box mb={{ md: 4 }}>
                <Typography
                  sx={{
                    whiteSpace: 'pre-line',
                  }}
                >
                  {work.description}
                </Typography>
              </Box>
              <Hidden mdDown>
                <Box textAlign="center">
                  <Link href="/works" passHref>
                    <Button component="a" startIcon={<ArrowLeft />}>
                      Works
                    </Button>
                  </Link>
                </Box>
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Detail;

import { Box } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';

import Container from 'components/templates/Container/';
import CategoryHeading from 'components/ui/CategoryHeading/';
import { Blog } from 'domains/microCMS/models/blog';

type Props = { blog: Blog };
const Detail: FC<Props> = ({ blog }) => {
  console.log(blog);

  return (
    <>
      <Head>
        <title>{`${blog.title} | Blog | minami web site`}</title>
        <meta
          name="description"
          content={`南進之介のWebサイト ${blog.title}`}
        />
      </Head>
      <Box pt={{ xs: 2, md: 8 }} pb={10} bgcolor="common.white">
        <Container>
          <Box mb={10}>
            <CategoryHeading titleEng="Blog" titleJpn="記録" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Detail;

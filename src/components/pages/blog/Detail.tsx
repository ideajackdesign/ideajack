import { Box, Button, Hidden } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';

import ArrowLeft from 'components/icons/ArrowLeft';
import Container from 'components/templates/Container/';
import ArticleArea from 'components/ui/ArticleArea/';
import BlogHeading from 'components/ui/BlogHeading/';
import { Blog } from 'domains/microCMS/models/blog';

type Props = { blog: Blog };
const Detail: FC<Props> = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{`${blog.title} | Blog | minami web site`}</title>
        <meta
          name="description"
          content={`南進之介のWebサイト ${blog.title}`}
        />
      </Head>
      <Hidden mdUp>
        <Box py={1.5}>
          <Container>
            <Link href="/blog" passHref>
              <Button variant="text" component="a" startIcon={<ArrowLeft />}>
                Blog
              </Button>
            </Link>
          </Container>
        </Box>
      </Hidden>
      <Box component="article" pb={10} bgcolor="common.white">
        <Box mb={{ xs: 1, md: 5 }}>
          <BlogHeading
            title={blog.title}
            date={blog.publishedAt}
            category={blog.category[0]}
            src={blog.thumbnail.url}
          />
        </Box>
        <Container>
          <Box maxWidth={848} mx="auto" mb={{ md: 8 }}>
            <ArticleArea content={blog.content} />
          </Box>
          <Hidden mdDown>
            <Box textAlign="center">
              <Link href="/blog" passHref>
                <Button component="a" startIcon={<ArrowLeft />}>
                  Blog
                </Button>
              </Link>
            </Box>
          </Hidden>
        </Container>
      </Box>
    </>
  );
};

export default Detail;

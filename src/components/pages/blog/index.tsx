import { Box, Typography, Pagination, Stack } from '@mui/material';
import Head from 'next/head';
import { FC, useMemo, useState } from 'react';

import Container from 'components/templates/Container/';
import ArticleCard from 'components/ui/ArticleCard/';
import CategoryHeading from 'components/ui/CategoryHeading/';
import Loading from 'components/ui/Loading/';
import { Blogs } from 'domains/microCMS/models/blog';
import { filterHtmlTag } from 'helpers/filterHtmlTag';
import useBlogs from 'hooks/useBlogs';

type Props = {
  blogs: Blogs;
  page: number;
  handleChangePage: (page: number) => void;
};

const LIMIT = 10;

const Blog: FC<Props> = ({ blogs, page, handleChangePage }) => {
  const count = useMemo(() => {
    return Math.ceil(blogs.totalCount / LIMIT);
  }, [blogs.totalCount]);

  return (
    <>
      <Head>
        <title>Blog | minami web site</title>
        <meta name="description" content="南進之介のWebサイト ブログ一覧" />
      </Head>
      <Box pt={{ xs: 2, md: 8 }} pb={15} bgcolor="common.white">
        <Container>
          <Box mb={10}>
            <CategoryHeading titleEng="Blog" titleJpn="記録" />
          </Box>
          {(blogs.contents.length === 0 && (
            <Typography>投稿はありませんでした。</Typography>
          )) || (
            <>
              <Box
                component="ul"
                display="grid"
                gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
                gap={{ xs: 1, md: 2 }}
                mb={5}
              >
                {blogs.contents.map((b) => (
                  <Box key={b.id} component="li">
                    <ArticleCard
                      title={b.title}
                      description={filterHtmlTag(b.content)}
                      date={b.publishedAt}
                      category={b.category[0]}
                      src={b.thumbnail.url}
                      href={`/blog/${b.id}`}
                    />
                  </Box>
                ))}
              </Box>
              <Stack spacing={2} alignItems="center">
                <Pagination
                  page={page}
                  count={count}
                  shape="rounded"
                  color="primary"
                  onChange={(e, page) => handleChangePage(page)}
                />
              </Stack>
            </>
          )}
        </Container>
      </Box>
    </>
  );
};

const EnhancedBlog: FC = () => {
  const [page, setPage] = useState(1);
  const { blogs, error } = useBlogs({
    limit: LIMIT.toString(),
    offset: (LIMIT * (page - 1)).toString(),
  });

  const handleChangePage = (p: number) => {
    if (p !== page) {
      setPage(p);
      window.scrollTo(0, 0);
    }
  };

  if (error) return <div>failed to load</div>;
  if (!blogs) return <Loading />;

  return <Blog blogs={blogs} page={page} handleChangePage={handleChangePage} />;
};

export default EnhancedBlog;

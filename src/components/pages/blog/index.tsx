import { Box } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';

import Container from 'components/templates/Container/';
import ArticleCard from 'components/ui/ArticleCard/';
import CategoryHeading from 'components/ui/CategoryHeading/';
import { Blogs } from 'domains/microCMS/models/blog';
import { filterHtmlTag } from 'helpers/filterHtmlTag';
import useBlogs from 'hooks/useBlogs';

type Props = { blogs: Blogs };
const Blog: FC<Props> = ({ blogs }) => {
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
          <Box
            component="ul"
            display="grid"
            gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
            gap={{ xs: 1, md: 2 }}
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
        </Container>
      </Box>
    </>
  );
};

const EnhancedBlog: FC = () => {
  const { blogs } = useBlogs();

  if (!blogs) return <></>;

  return <Blog blogs={blogs} />;
};

export default EnhancedBlog;

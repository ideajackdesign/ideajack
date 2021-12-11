import type { NextPage, GetStaticProps } from 'next';

import Home from 'components/pages/';
import { Blogs } from 'domains/microCMS/models/blog';
import { getAllBlogs } from 'domains/microCMS/services/blog';

type StaticProps = { blogs: Blogs };

const Index: NextPage<StaticProps> = ({ blogs }) => {
  return <Home blogs={blogs} />;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getAllBlogs({ limit: '5' });

  return {
    props: {
      blogs,
    },
    revalidate: 10,
  };
};

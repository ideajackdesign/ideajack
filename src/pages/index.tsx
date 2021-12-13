import type { NextPage, GetStaticProps } from 'next';

import Home from 'components/pages/';
import { Work } from 'domains/local/models/works';
import { getAllWorks } from 'domains/local/services/works';
import { Blogs } from 'domains/microCMS/models/blog';
import { getAllBlogs } from 'domains/microCMS/services/blog';

type StaticProps = { blogs: Blogs; works: Work[] };

const Index: NextPage<StaticProps> = ({ blogs, works }) => {
  return <Home blogs={blogs} works={works} />;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getAllBlogs({ limit: '5' });
  const works = getAllWorks(6);

  return {
    props: {
      blogs,
      works,
    },
    revalidate: 10,
  };
};

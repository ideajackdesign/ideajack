import type { NextPage, GetStaticProps } from 'next';

import Home from 'components/pages/';
import { Work } from 'domains/local/models/works';
import { getAllWorks } from 'domains/local/services/works';
import { About } from 'domains/microCMS/models/about';
import { Blogs } from 'domains/microCMS/models/blog';
import { getAbout } from 'domains/microCMS/services/about';
import { getAllBlogs } from 'domains/microCMS/services/blog';

type StaticProps = { about: About; blogs: Blogs; works: Work[] };

const Index: NextPage<StaticProps> = ({ about, blogs, works }) => {
  return <Home about={about} blogs={blogs} works={works} />;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const a = await getAbout();
  const about = {
    ...a,
    contents: a.contents.filter((_a) => _a.title !== 'profile'),
  };
  const blogs = await getAllBlogs({ limit: '5' });
  const works = getAllWorks(6);

  return {
    props: {
      about,
      blogs,
      works,
    },
    revalidate: 10,
  };
};

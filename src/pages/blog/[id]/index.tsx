import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import Detail from 'components/pages/blog/Detail';
import { Blog } from 'domains/microCMS/models/blog';
import { getBlog, getAllBlogs } from 'domains/microCMS/services/blog';

type StaticProps = { blog: Blog };

const Index: NextPage<StaticProps> = ({ blog }) => {
  return <Detail blog={blog} />;
};

export default Index;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const p = params as { id: string };
  const blog = await getBlog(p.id);

  return {
    props: {
      blog,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await getAllBlogs({ limit: '10000' });
  const paths = blogs.contents.map((b) => ({
    params: {
      id: b.id,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

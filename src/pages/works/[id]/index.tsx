import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import Detail from 'components/pages/works/Detail';
import { Work } from 'domains/local/models/works';
import { getWork, getAllWorks } from 'domains/local/services/works';

type StaticProps = { work: Work };

const Index: NextPage<StaticProps> = ({ work }) => {
  return <Detail work={work} />;
};

export default Index;

export const getStaticProps: GetStaticProps = ({ params }) => {
  const p = params as { id: string };
  const work = getWork(p.id);

  return {
    props: {
      work,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const works = getAllWorks();
  const paths = works.map((w) => ({
    params: {
      id: w.id,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

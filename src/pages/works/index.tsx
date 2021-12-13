import type { NextPage, GetStaticProps } from 'next';

import Works from 'components/pages/works/';
import { Work } from 'domains/local/models/works';
import { getAllWorks } from 'domains/local/services/works';

type StaticProps = { works: Work[] };

const Index: NextPage<StaticProps> = ({ works }) => {
  return <Works works={works} />;
};

export default Index;

export const getStaticProps: GetStaticProps = () => {
  const works = getAllWorks();

  return {
    props: {
      works,
    },
    revalidate: 10,
  };
};

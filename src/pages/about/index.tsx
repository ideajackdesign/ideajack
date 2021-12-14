import type { NextPage, GetStaticProps } from 'next';

import About from 'components/pages/about/';
import { About as AboutType, AboutItem } from 'domains/microCMS/models/about';
import { getAbout } from 'domains/microCMS/services/about';

type StaticProps = { about: AboutType; profile: AboutItem | undefined };

const Index: NextPage<StaticProps> = ({ about, profile }) => {
  return <About about={about} profile={profile} />;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const a = await getAbout();
  const about = {
    ...a,
    contents: a.contents.filter((_a) => _a.title !== 'profile'),
  };
  const profile = a.contents.find((_a) => _a.title === 'profile');

  return {
    props: {
      about,
      profile,
    },
    revalidate: 10,
  };
};

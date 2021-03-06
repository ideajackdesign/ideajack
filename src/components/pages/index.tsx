import { Box, Button, Typography, Theme } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import Arrow from 'components/icons/Arrow';
import AboutSection from 'components/templates/AboutSection/';
import Container from 'components/templates/Container/';
import HomeSection, { Section } from 'components/templates/HomeSection/';
import ArticleCard from 'components/ui/ArticleCard/';
import CategoryHeading from 'components/ui/CategoryHeading/';
import PicGrid from 'components/ui/PicGrid/';
import Profile from 'components/ui/Profile/';
import SwiperWrapper from 'components/ui/SwiperWrapper/';
import { Work } from 'domains/local/models/works';
import { About } from 'domains/microCMS/models/about';
import { Blogs } from 'domains/microCMS/models/blog';
import { filterHtmlTag } from 'helpers/filterHtmlTag';

import 'swiper/css';

type StaticProps = { about: About; blogs: Blogs; works: Work[] };

type Props = StaticProps & {
  isInViewAbout: boolean;
  isInViewBlog: boolean;
  isInViewWorks: boolean;
  handleInView: (section: Section, isInView: boolean) => void;
};

const Home: FC<Props> = ({
  about,
  blogs,
  works,
  isInViewAbout,
  isInViewBlog,
  isInViewWorks,
  handleInView,
}) => {
  const pics = works.map((w) => ({
    id: w.id,
    title: w.title,
    src: `/assets/works/${w.id}/image/${w.main}`,
    href: `/works/${w.id}`,
  }));

  return (
    <>
      <Head>
        <title>minami web site</title>
        <meta name="description" content="南進之介のWebサイト" />
      </Head>
      <HomeSection isFilterBlur={isInViewAbout} zIndex={0}>
        <Box pb={{ xs: 15, xd: 0 }} bgcolor="common.black">
          <Box
            position="relative"
            minHeight={{
              xs: 'calc(100vh - env(safe-area-inset-bottom) - 120px)',
              md: 'calc(100vh - env(safe-area-inset-bottom))',
            }}
          >
            <Image
              src="/assets/image/mv.jpg"
              alt=""
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              priority
            />
          </Box>
        </Box>
      </HomeSection>
      <HomeSection
        section="about"
        isFilterBlur={isInViewBlog}
        zIndex={1}
        handleInView={handleInView}
      >
        <AboutSection>
          <Box mb={8} gridArea="hdg">
            <CategoryHeading titleEng="About" titleJpn="南進之介" />
          </Box>
          <Box
            mb={4}
            mx={{ xs: 'auto', md: 0 }}
            maxWidth={{ xs: 600, md: 'none' }}
            gridArea="profile"
          >
            <Profile
              profileItems={about.contents.map((a) => ({
                id: a.id,
                title: a.title,
                description: a.description,
              }))}
            />
          </Box>
          <Box textAlign="center" gridArea="btn">
            <Link href="/about" passHref>
              <Button
                component="a"
                color="inherit"
                endIcon={<Arrow />}
                sx={{
                  color: 'common.white',
                  borderColor: 'common.white',
                  '&:hover, &:focus': {
                    backgroundColor: 'common.white',
                    color: 'common.black',
                  },
                }}
              >
                About
              </Button>
            </Link>
          </Box>
        </AboutSection>
      </HomeSection>
      <HomeSection
        section="blog"
        isFilterBlur={isInViewWorks}
        zIndex={2}
        handleInView={handleInView}
      >
        <Box
          display={{ md: 'flex' }}
          alignItems={{ md: 'center' }}
          pt={10}
          pb={6}
          minHeight="100vh"
          bgcolor="common.white"
        >
          <Box
            sx={(theme: Theme) => ({
              [theme.breakpoints.up('md')]: {
                maxWidth: '1280px',
                margin: '0 auto',
                display: 'grid',
                alignItems: 'center',
                gap: '0 16px',
                gridTemplate: `
        'slider slider hdg' auto
        'btn btn hdg' auto / 1fr 1fr 1fr
        `,
              },
            })}
          >
            <Box mb={{ xs: 8, md: 0 }} px={1} gridArea="hdg">
              <CategoryHeading titleEng="Blog" titleJpn="記録" />
            </Box>
            <Box mb={4} gridArea="slider">
              {(blogs.contents.length === 0 && (
                <Typography>投稿はありませんでした。</Typography>
              )) || (
                <SwiperWrapper>
                  {blogs.contents.map((b) => (
                    <SwiperSlide key={b.id} tag="li">
                      {({ isActive }) => (
                        <ArticleCard
                          title={b.title}
                          description={filterHtmlTag(b.content)}
                          date={b.publishedAt}
                          category={b.category[0]}
                          src={b.thumbnail.url}
                          href={`/blog/${b.id}`}
                          disabled={!isActive}
                        />
                      )}
                    </SwiperSlide>
                  ))}
                </SwiperWrapper>
              )}
            </Box>
            <Box px={1} textAlign="center" gridArea="btn">
              <Link href="/blog" passHref>
                <Button component="a" endIcon={<Arrow />}>
                  Blog
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </HomeSection>
      <HomeSection
        section="works"
        isFilterBlur={false}
        zIndex={3}
        handleInView={handleInView}
      >
        <Box
          display={{ md: 'flex' }}
          alignItems={{ md: 'center' }}
          pt={10}
          pb={6}
          minHeight="100vh"
          bgcolor="common.white"
        >
          <Container>
            <Box
              sx={(theme: Theme) => ({
                [theme.breakpoints.up('md')]: {
                  display: 'grid',
                  alignItems: 'center',
                  gap: '0 16px',
                  gridTemplate: `
      'hdg pic pic' auto
      'hdg btn btn' auto / 1fr 1fr 1fr
      `,
                },
              })}
            >
              <Box mb={{ xs: 8, md: 0 }} gridArea="hdg">
                <CategoryHeading titleEng="Works" titleJpn="写真家" />
              </Box>
              <Box
                mb={4}
                mx={{ xs: 'auto', md: 0 }}
                maxWidth={{ xs: 600, md: 'none' }}
                gridArea="pic"
              >
                <PicGrid pics={pics} />
              </Box>
              <Box textAlign="center" gridArea="btn">
                <Link href="/works" passHref>
                  <Button component="a" endIcon={<Arrow />}>
                    Works
                  </Button>
                </Link>
              </Box>
            </Box>
          </Container>
        </Box>
      </HomeSection>
    </>
  );
};

const EnhancedHome: FC<StaticProps> = ({ about, blogs, works }) => {
  const [isInViewAbout, setIsInViewAbout] = useState(false);
  const [isInViewBlog, setIsInViewBlog] = useState(false);
  const [isInViewWorks, setIsInViewWorks] = useState(false);

  const handleInView = (section: Section, isInView: boolean) => {
    switch (section) {
      case 'about':
        setIsInViewAbout(isInView);
        break;
      case 'blog':
        setIsInViewBlog(isInView);
        break;
      case 'works':
        setIsInViewWorks(isInView);
        break;
      default:
        break;
    }
  };

  return (
    <Home
      {...{
        about,
        blogs,
        works,
        isInViewAbout,
        isInViewBlog,
        isInViewWorks,
        handleInView,
      }}
    />
  );
};

export default EnhancedHome;

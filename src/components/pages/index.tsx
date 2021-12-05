import { Box, Button, Theme } from '@mui/material';
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

import 'swiper/css';

type Props = {
  isInViewAbout: boolean;
  isInViewBlog: boolean;
  isInViewWorks: boolean;
  handleInView: (section: Section, isInView: boolean) => void;
};

const Home: FC<Props> = ({
  isInViewAbout,
  isInViewBlog,
  isInViewWorks,
  handleInView,
}) => {
  return (
    <>
      <Head>
        <title>minami web site</title>
        <meta name="description" content="南進之介のWebサイト" />
      </Head>
      <HomeSection isFilterBlur={isInViewAbout} zIndex={0}>
        <Box position="relative" minHeight="100vh" bgcolor="common.black">
          <Image
            src="/assets/image/mv.jpg"
            alt=""
            layout="fill"
            objectFit="contain"
            objectPosition="top"
          />
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
              profileItems={[
                {
                  id: 0,
                  title: 'Name',
                  description: 'Shinnosuke Minami',
                },
                {
                  id: 1,
                  title: 'Age',
                  description: 29,
                },
              ]}
            />
          </Box>
          <Box textAlign="center" gridArea="btn">
            <Link href="/about" passHref>
              <Button
                component="a"
                color="inherit"
                endIcon={<Arrow />}
                sx={{
                  '&:hover, &:focus': {
                    borderColor: 'common.white',
                    backgroundColor: 'common.white',
                    color: 'primary.main',
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
              <SwiperWrapper>
                <SwiperSlide tag="li">
                  {({ isActive }) => (
                    <ArticleCard
                      title="記事タイトル記事タイトル記事記事タイトル記事タイトル"
                      description="本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文"
                      date={new Date()}
                      category="Category"
                      src="/assets/image/profile.png"
                      href="test"
                      disabled={!isActive}
                    />
                  )}
                </SwiperSlide>
                <SwiperSlide tag="li">
                  {({ isActive }) => (
                    <ArticleCard
                      title="記事タイトル記事タイトル記事記事タイトル記事タイトル"
                      description="本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文"
                      date={new Date()}
                      category="Category"
                      src="/assets/image/profile.png"
                      href="test"
                      disabled={!isActive}
                    />
                  )}
                </SwiperSlide>
                <SwiperSlide tag="li">
                  {({ isActive }) => (
                    <ArticleCard
                      title="記事タイトル記事タイトル記事記事タイトル記事タイトル"
                      description="本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文"
                      date={new Date()}
                      category="Category"
                      src="/assets/image/profile.png"
                      href="test"
                      disabled={!isActive}
                    />
                  )}
                </SwiperSlide>
              </SwiperWrapper>
            </Box>
            <Box px={1} textAlign="center" gridArea="btn">
              <Link href="/blog" passHref>
                <Button component="a" color="primary" endIcon={<Arrow />}>
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
        isLastSection
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
                <PicGrid
                  pics={[
                    {
                      id: '1',
                      title: 'testこれはdummyダミーテキスト',
                      src: '/assets/image/profile.png',
                      href: '/',
                    },
                    {
                      id: '2',
                      title: 'testこれはdummyダミーテキスト',
                      src: '/assets/image/profile.png',
                      href: '/',
                    },
                    {
                      id: '3',
                      title: 'testこれはdummyダミーテキスト',
                      src: '/assets/image/profile.png',
                      href: '/',
                    },
                    {
                      id: '4',
                      title: 'testこれはdummyダミーテキスト',
                      src: '/assets/image/profile.png',
                      href: '/',
                    },
                    {
                      id: '5',
                      title: 'testこれはdummyダミーテキスト',
                      src: '/assets/image/profile.png',
                      href: '/',
                    },
                    {
                      id: '6',
                      title: 'testこれはdummyダミーテキスト',
                      src: '/assets/image/profile.png',
                      href: '/',
                    },
                  ]}
                />
              </Box>
              <Box textAlign="center" gridArea="btn">
                <Link href="/works" passHref>
                  <Button component="a" color="primary" endIcon={<Arrow />}>
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

const EnhancedHome: FC = () => {
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
    <Home {...{ isInViewAbout, isInViewBlog, isInViewWorks, handleInView }} />
  );
};

export default EnhancedHome;
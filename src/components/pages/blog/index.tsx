import { Search } from '@mui/icons-material';
import { Box, TextField, Button } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';

import Container from 'components/templates/Container/';
import ArticleCard from 'components/ui/ArticleCard/';
import CategoryHeading from 'components/ui/CategoryHeading/';

const Blog: FC = ({}) => {
  return (
    <>
      <Head>
        <title>Blog | minami web site</title>
        <meta name="description" content="南進之介のWebサイト ブログ一覧" />
      </Head>
      <Box
        pt={{ xs: 2, md: 8 }}
        pb={10}
        minHeight="100vh"
        bgcolor="common.white"
      >
        <Container>
          <Box mb={10}>
            <CategoryHeading titleEng="Blog" titleJpn="記録" />
          </Box>
          <Box component="form" mb={6} ml="auto" width="min(100%, 632px)">
            <Box display="flex" gap={2} mb={2}>
              <TextField fullWidth variant="standard" label="カテゴリ" />
              <TextField fullWidth variant="standard" label="日付" />
            </Box>
            <Box display="flex" justifyContent="flex-end" gap={1}>
              <Button variant="text" type="reset">
                クリア
              </Button>
              <Button type="submit" startIcon={<Search />}>
                検索
              </Button>
            </Box>
          </Box>
          <Box
            component="ul"
            display="grid"
            gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
            gap={{ xs: 1, md: 2 }}
          >
            <Box component="li">
              <ArticleCard
                title="記事タイトル記事タイトル記事記事タイトル記事タイトル"
                description="本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文"
                date={new Date()}
                category="Category"
                src="/assets/image/profile.jpg"
                href="test"
              />
            </Box>
            <Box component="li">
              <ArticleCard
                title="記事タイトル記事タイトル記事記事タイトル記事タイトル"
                description="本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文"
                date={new Date()}
                category="Category"
                src="/assets/image/profile.jpg"
                href="test"
              />
            </Box>
            <Box component="li">
              <ArticleCard
                title="記事タイトル記事タイトル記事記事タイトル記事タイトル"
                description="本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文"
                date={new Date()}
                category="Category"
                src="/assets/image/profile.jpg"
                href="test"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Blog;

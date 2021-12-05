import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Layout from 'components/templates/Layout';
import { checkCategory } from 'helpers/checkCategory';
import theme from 'theme';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  const currentCategory = checkCategory(pathname);

  // const currentCategory = pathname
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout currentCategory={currentCategory}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};
export default MyApp;

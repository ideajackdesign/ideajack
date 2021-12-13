import { Box, Hidden } from '@mui/material';
import { FC } from 'react';

import Container from 'components/templates/Container/';
import Navigation from 'components/ui/Navigation/';

type Props = {
  currentCategory: string;
};

const Layout: FC<Props> = ({ children, currentCategory }) => {
  const isBgBlack = ['home', 'about'].includes(currentCategory);

  return (
    <Box bgcolor={isBgBlack ? 'common.black' : ''}>
      <Hidden mdDown>
        <Box
          component="header"
          position="sticky"
          top={0}
          zIndex="appBar"
          bgcolor="rgba(0,0,0,0.75)"
          sx={{
            backdropFilter: 'blur(5px)',
          }}
        >
          <Container>
            <Box display="flex" justifyContent="flex-end">
              <Navigation currentCategory={currentCategory} />
            </Box>
          </Container>
        </Box>
      </Hidden>
      <Box component="main">{children}</Box>
      <Hidden mdUp>
        <Box
          position="fixed"
          bottom={0}
          right={0}
          left={0}
          zIndex="appBar"
          pb="env(safe-area-inset-bottom)"
          bgcolor="rgba(0,0,0,0.75)"
          sx={{
            backdropFilter: 'blur(5px)',
          }}
        >
          <Navigation currentCategory={currentCategory} />
        </Box>
      </Hidden>
    </Box>
  );
};

export default Layout;

import { Box, Hidden } from '@mui/material';
import { FC } from 'react';

import Container from 'components/templates/Container/';
import Navigation from 'components/ui/Navigation/';

type Props = {
  currentCategory: string;
};

const Layout: FC<Props> = ({ children, currentCategory }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Hidden mdDown>
        <Box
          component="header"
          position="fixed"
          top={0}
          right={0}
          left={0}
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
      <Box component="main" flex="1 1 auto">
        {children}
      </Box>
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

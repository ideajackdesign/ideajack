import { Box } from '@mui/material';
import { FC } from 'react';

const Container: FC = ({ children }) => {
  return (
    <Box
      width="100%"
      height="100%"
      maxWidth={`${1280 + 32}px`}
      mx="auto"
      px={{ xs: 1, md: 2 }}
    >
      {children}
    </Box>
  );
};

export default Container;

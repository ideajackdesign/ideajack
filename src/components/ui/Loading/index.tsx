import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';

const ArticleCard: FC = () => {
  return (
    <Box display="flex" justifyContent="center" my={5}>
      <CircularProgress aria-label="loading" />
    </Box>
  );
};

export default ArticleCard;

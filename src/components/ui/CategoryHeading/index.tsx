import { Typography, Box, useTheme } from '@mui/material';
import { FC } from 'react';

type Props = {
  titleEng: string;
  titleJpn: string;
};

const CategoryHeading: FC<Props> = ({ titleEng, titleJpn }) => {
  const theme = useTheme();

  return (
    <Typography variant="h1" align="center">
      <Box
        display="inline-grid"
        gridTemplateColumns="auto auto"
        gap="8px 4px"
        pt={0.5}
        pb={2}
        overflow="hidden"
      >
        <Box
          component="span"
          gridColumn="1 / 2"
          gridRow="1 / 2"
          textAlign="right"
          color="primary.main"
          fontSize={{
            xs: theme.typography.pxToRem(36),
            md: theme.typography.pxToRem(56),
          }}
          fontWeight="bold"
        >
          {titleEng}
        </Box>
        <Box
          component="span"
          position="relative"
          gridColumn="2 / 3"
          gridRow="2 / 3"
          fontWeight="regular"
          sx={{
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-26px',
              left: '6px',
              height: '150px',
              borderRight: '1px solid currentColor',
              transform: 'translateX(2px) rotate(30deg)',
            },
          }}
        >
          {titleJpn}
        </Box>
      </Box>
    </Typography>
  );
};

export default CategoryHeading;

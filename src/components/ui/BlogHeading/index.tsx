import { Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

import Container from 'components/templates/Container/';
import { filterDate } from 'helpers/filterDate';

type Props = {
  title: string;
  date: Date;
  category: string;
  src: string;
};

const ArticleCard: FC<Props> = ({ title, date, category, src }) => {
  const theme = useTheme();
  const md = theme.breakpoints.values.md;
  const isPc = useMediaQuery(`(min-width:${md}px)`);

  return (
    <Box
      position="relative"
      color="common.white"
      sx={{
        [theme.breakpoints.down('md')]: {
          aspectRatio: '16/9',
        },
        [theme.breakpoints.up('md')]: {
          height: '450px',
        },
      }}
    >
      <Box height="100%">
        <Container>
          <Box
            position="relative"
            zIndex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
            p={1}
          >
            <Box order={1}>
              <Typography variant="h1">{title}</Typography>
            </Box>
            <Box order={0}>
              <Typography fontSize={theme.typography.pxToRem(isPc ? 15 : 14)}>
                {category}
                {` | `}
                <Box component="time">{filterDate({ date })}</Box>
              </Typography>
            </Box>
          </Box>
        </Container>
        <Box
          className="bg"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          sx={{
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'common.black',
              opacity: 0.6,
            },
          }}
        >
          <Image src={src} alt="" layout="fill" objectFit="cover" />
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleCard;

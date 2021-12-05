import 'swiper/css';

import { Box, useTheme, useMediaQuery } from '@mui/material';
import { FC } from 'react';
import { Pagination, A11y } from 'swiper';
import { Swiper } from 'swiper/react';

const SwiperWrapper: FC = ({ children }) => {
  const theme = useTheme();
  const md = theme.breakpoints.values.md;
  const isPc = useMediaQuery(`(min-width:${md}px)`);

  return (
    <Box
      sx={{
        '.swiper': {
          display: 'flex',
          flexDirection: 'column-reverse',
        },
        '.swiper-wrapper': {
          marginBottom: 1,
        },
        '.swiper-pagination': {
          display: 'flex',
          margin: '0 auto',
          width: '80%',
          '> .swiper-pagination-bullet': {
            position: 'relative',
            flex: '1 1 auto',
            height: '30px',
            cursor: 'pointer',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: 0,
              width: '100%',
              height: '2px',
              backgroundColor: 'grey.50',
            },
            '&.swiper-pagination-bullet-active::after': {
              backgroundColor: 'primary.main',
            },
          },
        },
      }}
    >
      <Swiper
        wrapperTag="ul"
        slidesPerView={1.25}
        speed={400}
        centeredSlides
        spaceBetween={isPc ? 16 : -1}
        modules={[Pagination, A11y]}
        pagination={{ clickable: true }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default SwiperWrapper;

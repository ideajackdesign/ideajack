import { Box, Theme } from '@mui/material';
import { FC } from 'react';
import { InView } from 'react-intersection-observer';

const ROOT_MARGIN = '0px 0px -50% 0px';

export type Section = 'about' | 'blog' | 'works';

type Props = {
  section?: Section;
  zIndex: number;
  isFilterBlur: boolean;
  handleInView?: (section: Section, isFilterBlur: boolean) => void;
};

const HomeSection: FC<Props> = ({
  children,
  section,
  zIndex,
  isFilterBlur,
  handleInView,
}) => {
  return (
    <Box
      component="section"
      position="sticky"
      top={0}
      zIndex={zIndex}
      boxShadow={(theme: Theme) => theme.shadows[24]}
    >
      <InView
        rootMargin={ROOT_MARGIN}
        onChange={(inView) =>
          section && handleInView && handleInView(section, inView)
        }
      >
        {children}
      </InView>
      <Box
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        zIndex={1}
        bgcolor="rgba(0,0,0,0.2)"
        sx={{
          backdropFilter: 'blur(8px)',
          visibility: isFilterBlur ? 'visible' : 'hidden',
          opacity: isFilterBlur ? 1 : 0,
          transition: 'opacity 0.4s, visibility 0.4s',
        }}
      />
    </Box>
  );
};

export default HomeSection;

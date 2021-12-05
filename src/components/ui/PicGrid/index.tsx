import { Box, Theme } from '@mui/material';
import { FC } from 'react';

import PicCard from 'components/ui/PicCard/';

type Props = {
  pics: {
    id: string;
    title: string;
    src: string;
    href: string;
  }[];
};

const GRID_AREA_NAMES = ['a', 'b', 'c', 'd', 'e', 'f'];

const PicGrid: FC<Props> = ({ pics }) => {
  return (
    <Box
      component="ul"
      display="grid"
      gap={0.5}
      sx={(theme: Theme) => ({
        [theme.breakpoints.up('xs')]: {
          gridTemplate: `
        "a a c" 1fr
        "a a d" 1fr
        "e b b" 1fr
        "f b b" 1fr / 1fr 1fr 1fr;
        `,
        },
        [theme.breakpoints.up('md')]: {
          gridTemplate: `
        "a a c d" 1fr
        "a a b b" 1fr
        "e f b b" 1fr / 1fr 1fr 1fr 1fr;
        `,
        },
      })}
    >
      {pics.map((p, index) => (
        <Box key={p.id} component="li" gridArea={GRID_AREA_NAMES[index]}>
          <PicCard title={p.title} src={p.src} href={p.href} />
        </Box>
      ))}
    </Box>
  );
};

export default PicGrid;

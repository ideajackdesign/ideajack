import { Box, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import TypographyRowControl from 'components/ui/TypographyRowControl/';

type Props = {
  title: string;
  src: string;
  href: string;
};

const PicCard: FC<Props> = ({ title, src, href }) => {
  const theme = useTheme();
  const md = theme.breakpoints.values.md;
  const isPc = useMediaQuery(`(min-width:${md}px)`);

  return (
    <Box position="relative" sx={{ aspectRatio: '4/3' }}>
      <Link href={href} passHref>
        <Box
          component="a"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          sx={{
            '&:hover, &:focus': {
              '> .hover-area': {
                opacity: 1,
              },
            },
          }}
        >
          <Image src={src} alt="" layout="fill" objectFit="cover" />
          <Box
            className="hover-area"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={2}
            width="90%"
            height="80%"
            bgcolor="rgba(21,21,21,0.60)"
            sx={{
              backdropFilter: 'blur(10px)',
              opacity: 0,
              transition: 'opacity 0.4s',
              '&::before, &::after': {
                content: '""',
                display: 'block',
                position: 'absolute',
                width: '15%',
                height: '15%',
              },
              '&::before': {
                top: theme.spacing(1),
                left: theme.spacing(1),
                borderTop: `1px solid ${theme.palette.common.white}`,
                borderLeft: `1px solid ${theme.palette.common.white}`,
              },
              '&::after': {
                bottom: theme.spacing(1),
                right: theme.spacing(1),
                borderBottom: `1px solid ${theme.palette.common.white}`,
                borderRight: `1px solid ${theme.palette.common.white}`,
              },
            }}
          >
            <TypographyRowControl
              maxRow={2}
              typographyProps={{
                align: 'center',
                color: 'common.white',
                lineHeight: '1.2',
                fontSize: `${theme.typography.pxToRem(isPc ? 18 : 14)}`,
                fontWeight: 500,
              }}
            >
              {title}
            </TypographyRowControl>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default PicCard;

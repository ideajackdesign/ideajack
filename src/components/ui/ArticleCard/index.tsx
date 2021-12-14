import {
  Typography,
  Box,
  Card,
  CardActionArea,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import TypographyRowControl from 'components/ui/TypographyRowControl/';
import { filterDate } from 'helpers/filterDate';

type Props = {
  title: string;
  description: string;
  date: Date;
  category: string;
  src: string;
  href: string;
  disabled?: boolean;
};

const ArticleCard: FC<Props> = ({
  title,
  description,
  date,
  category,
  src,
  href,
  disabled = false,
}) => {
  const theme = useTheme();
  const md = theme.breakpoints.values.md;
  const isPc = useMediaQuery(`(min-width:${md}px)`);

  return (
    <Box
      component={Card}
      bgcolor="common.black"
      color="common.white"
      sx={{ aspectRatio: '16/9' }}
    >
      <Link href={href} passHref>
        <CardActionArea
          sx={{
            height: '100%',
            '&:hover, &:focus': {
              '> .bg': {
                transform: 'scale(1.1)',
                '&::after': {
                  opacity: 0.1,
                },
              },
            },
          }}
          disabled={disabled}
        >
          <Box
            position="relative"
            zIndex={1}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            height="100%"
            p={1}
          >
            <Box mb={0.75} order={1} component="b">
              <TypographyRowControl
                maxRow={1}
                typographyProps={{
                  lineHeight: '1.2',
                  fontSize: theme.typography.pxToRem(isPc ? 19 : 15),
                  fontWeight: 500,
                }}
              >
                {title}
              </TypographyRowControl>
            </Box>
            <Box order={0}>
              <Typography fontSize={theme.typography.pxToRem(isPc ? 14 : 11)}>
                {category}
                {` | `}
                <Box component="time">{filterDate({ date })}</Box>
              </Typography>
            </Box>
            <Box order={2} minHeight="52.5px">
              <TypographyRowControl
                maxRow={2}
                typographyProps={{
                  fontSize: theme.typography.pxToRem(isPc ? 15 : 12),
                }}
              >
                {description}
              </TypographyRowControl>
            </Box>
          </Box>
          <Box
            className="bg"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            sx={{
              filter: disabled ? 'saturate(0%)' : null,
              transition: 'transform 0.4s',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'common.black',
                opacity: 0.6,
                transition: 'opacity 0.4s',
              },
            }}
          >
            <Image
              src={src}
              alt=""
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          </Box>
        </CardActionArea>
      </Link>
    </Box>
  );
};

export default ArticleCard;

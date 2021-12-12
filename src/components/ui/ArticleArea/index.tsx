import { Box, useTheme } from '@mui/material';
import { FC } from 'react';

type Props = {
  content: string;
};

const ArticleCard: FC<Props> = ({ content }) => {
  const theme = useTheme();

  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: content,
      }}
      sx={{
        '& > :first-child': {
          marginTop: 0,
        },
        '& > :last-child': {
          marginBottom: 0,
        },
        '& h1': {
          ...theme.typography.h1,
          marginTop: theme.spacing(10),
          marginBottom: theme.spacing(4),
          fontSize: theme.typography.pxToRem(28),
          [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(33),
          },
        },
        '& h2': {
          ...theme.typography.h1,
          marginTop: theme.spacing(10),
          marginBottom: theme.spacing(4),
          fontSize: theme.typography.pxToRem(23),
          [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(28),
          },
        },
        '& h3': {
          ...theme.typography.h2,
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(2),
          fontSize: theme.typography.pxToRem(19),
          [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(23),
          },
        },
        '& h4': {
          ...theme.typography.h3,
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(1),
          fontSize: theme.typography.pxToRem(17.5),
          [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(19),
          },
        },
        '& blockquote': {
          margin: '8px 0',
          padding: '8px 16px',
          backgroundColor: theme.palette.grey[50],
          borderLeft: `3px solid ${theme.palette.grey[100]}`,
          color: theme.palette.grey[500],
          fontSize: theme.typography.pxToRem(14),
        },
        '& ul': {
          listStyleType: 'disc',
          margin: '8px 0',
          paddingLeft: 5,
        },
      }}
    />
  );
};

export default ArticleCard;

import { Typography, TypographyProps } from '@mui/material';
import { FC } from 'react';

type Props = {
  maxRow: 1 | 2 | 3 | 4 | 5;
  maxRowPc?: 1 | 2 | 3 | 4 | 5;
  typographyProps?: TypographyProps;
};

const TypographyRowControl: FC<Props> = ({
  children,
  maxRow,
  maxRowPc,
  typographyProps,
}) => {
  return (
    <Typography
      sx={{
        whiteSpace: 'pre-line',
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: { xs: maxRow, sm: maxRowPc },
      }}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
};

export default TypographyRowControl;

import { Typography, Box, useTheme } from '@mui/material';
import { FC } from 'react';

type Props = {
  profileItems: {
    id: string | number;
    title: string;
    description: string | number;
  }[];
};

const Profile: FC<Props> = ({ profileItems }) => {
  const theme = useTheme();

  return (
    <Box component="dl" display="flex" flexDirection="column" gap="12px" m={0}>
      {profileItems.map((p) => (
        <Box key={p.id} textAlign="center">
          <Box component="dt" fontSize={theme.typography.pxToRem(17)}>
            {p.title}
          </Box>
          <Typography component="dd" m={0}>
            {p.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Profile;

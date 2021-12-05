import { Typography, Box, useTheme } from '@mui/material';
import Image from 'next/image';
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
    <Box display="flex" gap="16px">
      <Box flex="1 1 50%" textAlign="right">
        <Image
          src="/assets/image/profile.jpg"
          alt=""
          width="342"
          height="342"
        />
      </Box>
      <Box flex="1 1 50%">
        <Box
          component="dl"
          display="flex"
          flexDirection="column"
          gap="12px"
          m={0}
        >
          {profileItems.map((p) => (
            <Box key={p.id}>
              <Box component="dt" fontSize={theme.typography.pxToRem(17)}>
                {p.title}
              </Box>
              <Typography component="dd" m={0}>
                {p.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

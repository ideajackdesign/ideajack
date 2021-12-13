import { Box, useTheme } from '@mui/material';
import Image from 'next/image';
import { FC, useState } from 'react';

type Props = {
  pics: {
    id: string;
    src: string;
  }[];
  selectIndex: number;
  handleClick: (index: number) => void;
};

const PicGallery: FC<Props> = ({ pics, selectIndex, handleClick }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        position="relative"
        mb={1.5}
        bgcolor="common.black"
        sx={{ aspectRatio: '4/3' }}
      >
        {pics.map((p, index) => (
          <Box key={p.id} display={index === selectIndex ? 'block' : 'none'}>
            <Image src={p.src} alt="" layout="fill" objectFit="contain" />
          </Box>
        ))}
      </Box>
      <Box overflow="auto" textAlign="center">
        <Box component="ul" display="inline-flex" gap={0.5}>
          {pics.map((p, index) => (
            <Box key={p.id} component="li">
              <Box
                component="button"
                type="button"
                position="relative"
                display="block"
                width="80px"
                bgcolor="common.black"
                border={
                  index === selectIndex
                    ? `2px solid ${theme.palette.primary.main}`
                    : ''
                }
                aria-label={`写真${index + 1}`}
                sx={{ aspectRatio: '4/3', cursor: 'pointer' }}
                onClick={() => handleClick(index)}
              >
                <Image src={p.src} alt="" layout="fill" objectFit="contain" />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const EnhancedPicGallery: FC<Pick<Props, 'pics'>> = ({ pics }) => {
  const [selectIndex, setSelectIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectIndex(index);
  };

  return (
    <PicGallery
      pics={pics}
      selectIndex={selectIndex}
      handleClick={handleClick}
    />
  );
};

export default EnhancedPicGallery;

'use client';

import 'swiper/react';
import 'swiper/css';

import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StyledCard,
  StyledImageContainer,
  StyledOverlay,
  StyledProgressBar,
} from './slider.styles';
import Image from 'next/image';
import { SliderItem } from './models/slider-item';
import { imageUrl } from './constants/mocked-data';

type Props = {
  data: SliderItem[];
  progress: number;
};

export const Slider = ({ data, progress }: Props) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event: {
    currentTarget: React.SetStateAction<null>;
  }) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleSliderOnEvents = (event: any) => {
    console.log('event: ', event);
  };

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      loop={false}
      onAny={handleSliderOnEvents}
      style={{ padding: '1rem', paddingLeft: 0 }}
      onReachEnd={handleSliderOnEvents}
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index}>
          <StyledCard
            onMouseEnter={handlePopoverOpen as any}
            onMouseLeave={handlePopoverClose}
          >
            <StyledImageContainer>
              <Image
                src={slide.imageUrl || imageUrl}
                alt={slide.title}
                width={200}
                height={300}
                priority={true}
                style={{
                  objectFit: 'contain',
                }}
              />
              <StyledOverlay theme={theme as any}>
                <Typography variant='h5' sx={{ color: '#212121' }}>
                  {slide.title}
                </Typography>
              </StyledOverlay>
              <StyledProgressBar
                variant='determinate'
                value={progress}
                color='error'
              />
            </StyledImageContainer>
          </StyledCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

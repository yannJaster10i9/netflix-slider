import { Card, LinearProgress, styled } from '@mui/material';

export const StyledCard = styled(Card)(() => ({
  maxWidth: 200,
  position: 'relative',
  backgroundColor: '#fff',
  boxShadow: 'none',
  borderRadius: 'none',
}));

export const StyledImageContainer = styled('div')({
  position: 'relative',
});

export const StyledOverlay = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.18)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',
  textAlign: 'center',
  opacity: 0,
  transition: 'opacity 0.3s',
  '&:hover': {
    opacity: 1,
  },
}));

export const StyledProgressBar = styled(LinearProgress)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 20,
});

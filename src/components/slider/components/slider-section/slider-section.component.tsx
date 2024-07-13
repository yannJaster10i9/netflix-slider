import { Container, Typography } from '@mui/material';
import { Slider } from '../../slider.component';
import { SliderItem } from '../../models/slider-item';

type Props = {
  title: string;
  progress: number;
  data: SliderItem[];
};
export const SliderSection = ({ title, data, progress }: Props) => {
  return (
    <section>
      <Container>
        <Typography variant='h4' gutterBottom>
          {title}
        </Typography>
        <Slider {...{ data, progress }} />
      </Container>
    </section>
  );
};

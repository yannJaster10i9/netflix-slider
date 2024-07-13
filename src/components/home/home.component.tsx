'use client';

import React from 'react';
import { SliderSection } from '../slider/components/slider-section/slider-section.component';
import { slidesData } from '../slider/constants/mocked-data';

const HomeComponent = () => {
  const [progress, setProgress] = React.useState(0);
  const [slides, setSlides] = React.useState<any>([]);

  React.useEffect(() => {
    const getSlides = async () => {
      const { data }: { data: Array<any> } = await fetch(
        'https://cms.tamojunto.org.br/api/cursos?populate[0]=categorias&populate[imagem][populate]=*&_limit=50'
      ).then((res) => res.json());

      const normalizedSlides = data.map((item) => {
        const title = item.attributes?.titulo;
        const url = item.attributes?.imagem.data?.attributes.formats.large?.url;
        return {
          title: title || '',
          imageUrl: url || '',
        };
      });
      setSlides(normalizedSlides);
    };

    getSlides();
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {}, [slides, setSlides]);

  return (
    <div>
      <SliderSection
        title='Seção de Marketing'
        data={slides}
        progress={progress}
      />
      <SliderSection
        title='Seção Financeira'
        data={slidesData}
        progress={progress}
      />
    </div>
  );
};

export default HomeComponent;

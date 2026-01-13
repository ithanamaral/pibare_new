import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './carousel.css';

const imagens = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });

const Carousel = () => {
  const listaImagens = Object.values(imagens).map((mod) => mod.default);

  return (
    <div className="carrossel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {listaImagens.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="slide-item">
              <img src={url} alt={`Slide ${index}`} style={{ width: '100%' }} />
              <div className="slide-caption">
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel; 
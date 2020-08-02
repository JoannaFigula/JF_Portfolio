import React, {Component} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import photo1 from "../../img/rower.jpg";
import photo2 from "../../img/babia.jpg";
import photo3 from "../../img/morsowanie.jpg";
import photo4 from "../../img/5stawow.jpg";
import photo5 from "../../img/bieg.jpg";
import photo6 from "../../img/biegowkiBieg.jpg";

export default class AboutHobby extends Component {
    render() {

        return(
          <section className="sliderHobby container">
              <h2>Enjoy your life and do all things with passion</h2>
              <Swiper
                  className="swiperSlide"
                  spaceBetween={20}
                  slidesPerView={3}
                  // navigation
                  // pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
              >
                  <SwiperSlide><img className="hobbyImg" alt="" src={photo1}/></SwiperSlide>
                  <SwiperSlide><img className="hobbyImg" alt="" src={photo2}/></SwiperSlide>
                  <SwiperSlide><img className="hobbyImg" alt="" src={photo3}/></SwiperSlide>
                  <SwiperSlide><img className="hobbyImg" alt="" src={photo4}/></SwiperSlide>
                  <SwiperSlide><img className="hobbyImg" alt="" src={photo5}/></SwiperSlide>
                  <SwiperSlide><img className="hobbyImg" alt="" src={photo6}/></SwiperSlide>
              </Swiper>
          </section>
        )
    }
}

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
              <h2>Enjoy your life and do all things with passion!</h2>
              <Swiper
                  className="swiperSlide"
                  spaceBetween={20}
                  slidesPerView={3}
                  // navigation
                  // pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
              >
                  <SwiperSlide><div className="grid">
                      <figure className="hobby">
                         <img className="hobbyImg" alt="" src={photo1}/>
                          <figcaption>
                              <h2>Ride <span>Bicycle</span></h2>
                              <p>You can't buy hapiness, but you can buy bike.</p>
                          </figcaption>
                      </figure>
                  </div></SwiperSlide>

                  <SwiperSlide><div className="grid">
                      <figure className="hobby">
                          <img className="hobbyImg" alt="" src={photo2}/>
                          <figcaption>
                              <h2>Climb <span>Mountains</span></h2>
                              <p>See the world better.</p>
                          </figcaption>
                      </figure>
                  </div></SwiperSlide>

                  <SwiperSlide><div className="grid">
                      <figure className="hobby">
                          <img className="hobbyImg" alt="" src={photo3}/>
                          <figcaption>
                              <h2>Ice <span>Swimming</span></h2>
                              <p>Explore your possibilities.</p>
                          </figcaption>
                      </figure>
                  </div></SwiperSlide>

                  <SwiperSlide><div className="grid">
                      <figure className="hobby">
                          <img className="hobbyImg" alt="" src={photo4}/>
                          <figcaption>
                              <h2>Friends <span>Forever</span></h2>
                              <p>Spending time with FRIENDS is never waste of time...</p>
                          </figcaption>
                      </figure>
                  </div></SwiperSlide>

                  <SwiperSlide><div className="grid">
                      <figure className="hobby">
                          <img className="hobbyImg" alt="" src={photo5}/>
                          <figcaption>
                              <h2> Run Run <span>Run</span></h2>
                              <p>Running gives energy, health and joy. Yes, I will run!</p>
                          </figcaption>
                      </figure>
                  </div></SwiperSlide>

                  <SwiperSlide><div className="grid">
                      <figure className="hobby">
                          <img className="hobbyImg" alt="" src={photo6}/>
                          <figcaption>
                              <h2>Cross <span>Country</span></h2>
                              <p>Have a lots of fun.</p>
                          </figcaption>
                      </figure>
                  </div></SwiperSlide>
              </Swiper>
          </section>
        )
    }
}

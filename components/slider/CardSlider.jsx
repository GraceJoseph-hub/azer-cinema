import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

const CardSlider = () => {
  return (
    <main>
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // loop={true}
          grabCursor={true}
          // initialSlide={2}
          // centeredSlides={true}
          slidesPerView="auto"
          speed={1000}
          slideToClickedSlide={true}
          // pagination={{ clickable: true }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          fadeEffect={{ crossFade: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            430: { spaceBetween: 50 },
            580: { spaceBetween: 70 },
            650: { spaceBetween: 30 },
          }}
          className="swiper-container"
        >
          {/* first slide */}
          <SwiperSlide className="swiper-slide slide-1">
            <div className="title">
              <h1>The Bear</h1>
            </div>
            <div className="content">
              <div className="score">8.6</div>
              <div className="text">
                <h2>The Bear</h2>
                <p>
                  A drama series that dives into the world of a Chicago
                  restaurant. It follows a young chef, Carmen 'Carmy' Berzatto,
                  who returns home to run his family's sandwich shop after the
                  death of his brother. The show explores the pleasures of the
                  culinary world, family bonds and the challenges of remaining
                  in a business.
                </p>
              </div>
              <div className="genre">
                <span style={{ "--1": 1 }}>Drama</span>
                <span style={{ "--1": 2 }}>Comedy</span>
              </div>
            </div>
          </SwiperSlide>

          {/* second slide */}
          <SwiperSlide className="swiper-slide slide-2">
            <div className="title">
              <h1>Wednesday</h1>
            </div>
            <div className="content">
              <div className="score">8.6</div>
              <div className="text">
                <h2>Wednesday</h2>
                <p>
                  A supernatural series centered around Wednesday Addams from
                  the Addams teenager attending Nevermore Academy, where she
                  hones her physic abilities navigates her relationship with her
                  peculiar family and new friends.
                </p>
              </div>
              <div className="genre">
                <span style={{ "--1": 1 }}>Supernatural</span>
                <span style={{ "--1": 2 }}>Comedy</span>
                <span style={{ "--1": 3 }}>Mystery</span>
              </div>
            </div>
          </SwiperSlide>

          {/* third slide */}
          <SwiperSlide className="swiper-slide slide-3">
            <div className="title">
              <h1>Severance</h1>
            </div>
            <div className="content">
              <div className="score">8.6</div>
              <div className="text">
                <h2>Severance</h2>
                <p>
                  A psychological thriller about employees at lumon Inc where
                  workers undergo a procedure to separate their memories from
                  their personal lives. The series follows who begins to uncover
                  the dark truth behind this process, blurring the line between
                  work and personal
                </p>
              </div>
              <div className="genre">
                <span style={{ "--1": 1 }}>Psychological thriller</span>
                <span style={{ "--1": 2 }}>Science fiction</span>
              </div>
            </div>
          </SwiperSlide>

          {/* fourth slide */}
          <SwiperSlide className="swiper-slide slide-4">
            <div className="title">
              <h1>Game of thrones</h1>
            </div>
            <div className="content">
              <div className="score">9.6</div>
              <div className="text">
                <h2>Game of thrones</h2>
                <p>
                  A psychological thriller about employees at lumon Inc where
                  workers undergo a procedure to separate their memories from
                  their personal lives. The series follows who begins to uncover
                  the dark truth behind this process, blurring the line between
                  work and personal
                </p>
              </div>
              <div className="genre">
                <span style={{ "--1": 1 }}>Fantancy</span>
                <span style={{ "--1": 2 }}>Drama</span>
                <span style={{ "--1": 3 }}>Adventure</span>
              </div>
            </div>
          </SwiperSlide>
          {/* fifth slide */}
          <SwiperSlide className="swiper-slide slide-5">
            <div className="title">
              <h1>Succession</h1>
            </div>
            <div className="content">
              <div className="score">9.6</div>
              <div className="text">
                <h2>Succession</h2>
                <p>
                  A psychological thriller about employees at lumon Inc where
                  workers undergo a procedure to separate their memories from
                  their personal lives. The series follows who begins to uncover
                  the dark truth behind this process, blurring the line between
                  work and personal
                </p>
              </div>
              <div className="genre">
                <span style={{ "--1": 1 }}>Drama</span>
                <span style={{ "--1": 2 }}>Satire</span>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </main>
  );
};

export default CardSlider;

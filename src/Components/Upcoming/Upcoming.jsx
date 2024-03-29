import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { imageW300 } from "../../utils/ImageUrl";
import { Link } from "react-router-dom";
const Upcoming = ({ UpcomingData }) => {
  return (
    <>
      <section className="top_rated">
        <div className="rated_container">
          <h1 className="top_rated">Upcoming</h1>
          <Swiper
            spaceBetween={100}
            slidesPerView={3}
            modules={[Autoplay]}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
          >
            {UpcomingData?.results?.map((item) => (
              <SwiperSlide key={item?.id}>
                <Link
                  to={`about/${item?.id}-${item?.title
                    .replaceAll(" ", "-")
                    .toLowerCase()}`}
                >
                  <div className="rated_slides">
                    <img src={imageW300(item?.poster_path)} alt="" />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Upcoming;

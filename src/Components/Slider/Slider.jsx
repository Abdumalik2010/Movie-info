import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Link } from "react-router-dom";
import { imageW500 } from "../../utils/ImageUrl";
const Slider = ({ data, ganresData }) => {
  return (
    <section className="section">
      <div className="main_container">
        <div className="main_slider-box">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Autoplay, Pagination]}
            navigation={true}
            loop
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
          >
            {data?.results.map((item, idx) => {
              const luboy = item?.genre_ids;
              const filteredList = luboy.map((item) =>
                ganresData?.genres?.find((ganresId) => ganresId?.id === item)
              );
              return (
                <SwiperSlide key={item?.id} className="slider_box">
                  <img src={imageW500(item?.backdrop_path)} alt="" />
                  <div className="slide_content">
                    <div className="slide_item">
                      <h1>{item?.original_title}</h1>
                      <p>
                        {item?.overview?.length > 65 &&
                          item?.overview?.slice(0, 65) + "..."}
                      </p>
                      <div className="slide_calendar" key={idx}>
                        <p>{item?.release_date}</p>
                        {filteredList.map((item) => (
                          <p key={item?.id}>
                            {item?.name}
                            {filteredList[filteredList.length - 1]?.name ===
                            item?.name
                              ? " "
                              : " / "}
                          </p>
                        ))}
                      </div>
                      <Link
                        to={`about/${item?.id}-${item?.title
                          .replaceAll(" ", "-")
                          .toLowerCase()}`}
                      >
                        <button className="button">Show more</button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;

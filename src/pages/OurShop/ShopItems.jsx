
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import OrderedFood from "../../components/OrderedFood/OrderedFood";
// TODO: implement pagination
const ShopItems = ({items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
};
return (
    <div >

        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        items.map(item => <OrderedFood
                            key={item._id}
                            item={item}
                        ></OrderedFood>)
                    }
                </div>

            </SwiperSlide>

        </Swiper>
    </div>
);
};

export default ShopItems;
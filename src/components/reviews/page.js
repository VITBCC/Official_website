"use client";
import React, { useRef, useEffect } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const obj = [
    {
        id: 1,
        image: "",
        name: "Brooklyn Simmona",
        tag: "manam",
        desc: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci."
    },
    {
        id: 2,
        image: "",
        name: "Ester Howard",
        tag: "Offmax",
        desc: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.",
    },
    {
        id: 3,
        image: "",
        name: "Arlen McCoy",
        tag: "bloopixel",
        desc: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.",
    },
    {
        id: 4,
        image: "",
        name: "Jane Cooper",
        tag: "unpexel",
        desc: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. ",
    },
    {
        id: 5,
        image: "",
        name: "Gagan Chaudhary",
        tag: "gamer",
        desc: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. ",
    },
    {
        id: 6,
        image: "",
        name: "Divij Kathuria",
        tag: "developer",
        desc: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. ",
    }
]

export default function Reviews() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const slidesPerViewBig =
        useEffect(() => {
            if (swiperRef.current) {
                swiperRef.current.params.navigation.prevEl = prevRef.current;
                swiperRef.current.params.navigation.nextEl = nextRef.current;
                swiperRef.current.navigation.init();
                swiperRef.current.navigation.update();
            }
        }, []);

    return (
        <div className="flex flex-col justify-center bg-black text-white w-screen p-6 font-mono md:h-[35rem] gap-y-16">
            <div className="flex md:flex-row flex-col md:gap-0 gap-y-7 justify-between items-center">
                <div className="text-xl">{`Hear what our customers say :)`}</div>
                <div className="flex flex-row md:gap-x-4 gap-x-8">
                    <button ref={prevRef} className="p-2 w-10 text-yellow-500 border border-solid-[3px] border-yellow-500 font-bold">
                        {`<`}
                    </button>
                    <button ref={nextRef} className="p-2 w-10 text-yellow-500 border border-solid-[3px] border-yellow-500 font-bold">
                        {'>'}
                    </button>
                </div>
            </div>
            <div className="md:mt-7">
                <Swiper
                    onInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation]}
                    spaceBetween={50}
                    breakpoints={{
                        640: { // When the screen width is 640px or more
                            slidesPerView: 1, // 1 slide per view
                        },
                        768: { // When the screen width is 768px or more
                            slidesPerView: 2, // 2 slides per view
                        },
                        1024: { // When the screen width is 1024px or more
                            slidesPerView: 3, // 3 slides per view
                        },
                    }}

                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {obj.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col border border-solid-[2px] border-gray-400 rounded-md p-4 gap-y-3">
                                <div className="flex flex-row justify-start gap-x-3 items-center">
                                    <div className="rounded-full h-fit w-fit object-cover">
                                        <img
                                            src="https://media.licdn.com/dms/image/v2/C4D03AQGgU6clhGeG6A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1658064866808?e=1729123200&v=beta&t=AOWyPdaxvHRjjsjDHU8fu1PHwQv5CsRP_3PMj1obf2Y"
                                            className="rounded-full w-14 h-14"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                        <div className="text-gray-500 font-bold">{item.tag}</div>
                                    </div>
                                </div>
                                <div>
                                    {item.desc}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
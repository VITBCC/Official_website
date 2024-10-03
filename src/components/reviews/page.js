"use client";
import React, { useRef, useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// const obj = [
//   {
//     id: 1,
//     image: "",
//     name: "Project1",
//     tag: "React",
//     desc: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.",
//   },
//   {
//     id: 2,
//     image: "",
//     name: "Project2",
//     tag: "Next",
//     desc: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.",
//   },
//   {
//     id: 3,
//     image: "",
//     name: "Project3",
//     tag: "Blockchain",
//     desc: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.",
//   },
//   {
//     id: 4,
//     image: "",
//     name: "Project4",
//     tag: "AI",
//     desc: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. ",
//   },
//   {
//     id: 5,
//     image: "",
//     name: "Project5",
//     tag: "ML",
//     desc: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. ",
//   },
//   {
//     id: 6,
//     image: "",
//     name: "Project6",
//     tag: "Gaming",
//     desc: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. ",
//   },
// ];

export default function Reviews() {
  const [projects, setProjects] = useState([]);
  async function getAllProjects() {
    try {
      const response = await fetch("http://localhost:8003/api/v1/projects/getProjects");
      const data = await response.json();
      if (data) {
        console.log(data?.data?.projects, "projects");
        setProjects(data?.data?.projects);
      }
    }
    catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    getAllProjects();
  }, [])
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const slidesPerViewBig = useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  //   {
  //     "_id": "669a8d321a79b3a207bddcd4",
  //     "name": "\"Get started with blockchain\"",
  //     "mentors": [
  //         "Gagan",
  //         "Divij",
  //         "Ujjawal"
  //     ],
  //     "description": "\"Deep dive into the world of blockchain\"",
  //     "coverImage": "https://res.cloudinary.com/dinegxmng/image/upload/v1721404720/qa3bmjzmgvkjwpggvc0b.svg",
  //     "contributors": [],
  //     "technologies": [
  //         "Solidity",
  //         "GraphQL",
  //         "AnonAadhar"
  //     ],
  //     "review": true,
  //     "createdAt": "2024-07-19T15:58:42.589Z",
  //     "updatedAt": "2024-07-20T11:03:07.676Z",
  //     "__v": 3,
  //     "usersEnrolled": [
  //         "669b97883cb1eeec279f7bfd"
  //     ]
  // }
  return (
    <div className="flex flex-col justify-center bg-black text-white w-screen p-6 font-mono md:h-[35rem] gap-y-16">
      <div className="flex md:flex-row flex-col md:gap-0 gap-y-7 justify-between items-center">
        <div className="text-xl">{`Our projects :)`}</div>
        <div className="flex flex-row md:gap-x-4 gap-x-8">
          <button
            ref={prevRef}
            className="p-2 w-10 text-yellow-500 border border-solid-[3px] border-yellow-500 font-bold"
          >
            {`<`}
          </button>
          <button
            ref={nextRef}
            className="p-2 w-10 text-yellow-500 border border-solid-[3px] border-yellow-500 font-bold"
          >
            {">"}
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
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col border border-solid-[2px] border-gray-400 rounded-md p-4 gap-y-3">
                <div className="flex flex-row justify-start gap-x-3 items-center">
                  <div className="rounded-full w-fit h-fit overflow-hidden">
                    <img
                      src={item.coverImage}
                      className="rounded-full w-24 h-24 object-cover" // Increased size from w-14 h-14 to w-20 h-20
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="flex flex-row gap-4 mt-3 max-w-full flex-wrap">
                      {item.technologies.map((tech, index) => (
                        <div key={index} className="text-gray-500 font-bold">{tech}</div>
                      ))}
                    </div>

                  </div>
                </div>
                <div>{item.description}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

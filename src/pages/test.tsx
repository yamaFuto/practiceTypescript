// import MicroModal from "micromodal";
import MicroModal from 'react-micro-modal';
import { render } from "react-dom";
import TestCarousel from "@/components/swiper";
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import ModalContent from "@/components/modalContent";


export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    {/* <MicroModal trigger={(open) => <div onClick={open}>Open!</div>}>
      {(close) => (
        <>
          <button onClick={close}>Close!</button>
        </>
      )}
    </MicroModal> */}
    <TestCarousel />

    <ModalContent />

    </>
  )
}

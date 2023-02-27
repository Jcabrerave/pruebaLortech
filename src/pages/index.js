"use client";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { useState } from "react";
import Carousel from "react-material-ui-carousel";

export default function Home() {
  const [images, setImages] = useState([
    {
      image:
        "https://storage.googleapis.com/farmedica-public/banners/timestrip%20lortech_1634571366482.jpg",
      caption: "Lortech",
    },
    {
      image:
        "https://storage.googleapis.com/farmedica-public/banners/gabinetes%20lortech_1634571326474.jpg",
      caption: "Lortech",
    },
    {
      image:
        "https://storage.googleapis.com/farmedica-public/banners/Banner%20contenedores_1646781827122.jpg",
      caption: "Lortech",
    },
  ]);

  return (
    <div className="container-carousel">
      <Carousel
        navButtonsAlwaysVisible={true}
        interval={6000}
        indicators={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Image
              className="image"
              src={image.image}
              alt={image.caption}
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

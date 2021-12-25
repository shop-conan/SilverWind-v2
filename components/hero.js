import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import Underline from "../public/images/hero-underline.svg";
import heroHeartRingVideo from "../public/videos/heroHeartRingVideo.gif";

export default function Hero() {
  return (
    <React.Fragment>
      <Container>
        <div className="flex flex-col md:flex-row md:my-20">
          <div className="my-20 px-4 md:my-0 md:p-0">
            <h1 className="text-5xl md:text-7xl text-violet-500 opacity-80">
              personalized handmade{" "}
            </h1>
            <span className="text-5xl md:text-7xl text-violet-900">
              jewelry <Underline />
            </span>
            <Link href="/products">
              <a className="bg-violet-900 rounded-md px-3 md:px-5 py-1 text-white text-xl md:text-2xl hover:bg-violet-600 active:bg-violet-600">
                Shop Now
              </a>
            </Link>
          </div>
          <div className="px-4">
            <Image
              src={heroHeartRingVideo}
              width={600}
              height={400}
              alt="Heart shaped ring"
              className="rounded-md"
            />
            <p className="text-right text-violet-900 opacity-30">designed and crafted by Julia</p>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

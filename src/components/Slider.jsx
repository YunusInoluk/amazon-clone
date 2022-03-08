import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"slick-prev !left-0"}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings} className="">
          <div>
            <img
              src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
              alt="Refresh your space"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3740_.jpg"
              alt="Shop Toys & Games"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3740_.jpg"
              alt="We ship over 45 milion products around the world"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3740_.jpg"
              alt="Discover our Beauty selection"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

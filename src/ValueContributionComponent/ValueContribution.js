import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ValueContribution.css";
import {
  Content,
  Feature,
  ValueHeading,
  CarouselContent
} from "./ValueContributioncss";
import BalanceButton from "../ButtonComponent/Button"

export default function ValueContribution() {
  return (
    <Carousel showThumbs={false}>
      <CarouselContent>
        <Feature>Featured</Feature>
        <ValueHeading>Learn how to value your Contributions</ValueHeading>
        <Content>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud dolore magna ali.
        </Content>
      <BalanceButton content="LEARN MORE"/>
       </CarouselContent>
      <CarouselContent>
        <Feature>Featured</Feature>
        <ValueHeading>Learn how to value your Contributions</ValueHeading>
        <Content>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud dolore magna aliYou should never need to
          use this in the browser.
        </Content>
        <BalanceButton content="LEARN MORE"/>
      </CarouselContent>
      <CarouselContent>
        <Feature>Featured</Feature>
        <ValueHeading>Learn how to value your Contributions</ValueHeading>
        <Content>
          “You should never need to use this in the browser. Only if you are
          running an isomorphic react app that is rendered on the server you
          should call resetIdCounter.
        </Content>
        <BalanceButton content="LEARN MORE"/>
      </CarouselContent>
    </Carousel>
  );
}

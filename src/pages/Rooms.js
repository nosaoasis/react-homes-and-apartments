import React from "react";
import {
  Hero,
  Banner,
  RoomsContainer,
  WithConsumer
} from "../components/index";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms" subtitle="">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <WithConsumer />
    </>
  );
};

export default Rooms;

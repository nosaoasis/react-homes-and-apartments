import React from "react";
import { Room } from "./index";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        unfortunately, no rooms matched your search parameter
      </div>
    );
  }
  return (
    <section className="rooms-list">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;

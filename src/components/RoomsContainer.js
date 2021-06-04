import React from "react";
import { RoomsFilter, RoomsList, Loading } from "./index";
import { withConsumer } from "../Context";
import Laoding from "./Loading";

const RoomsContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Laoding />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default withConsumer(RoomsContainer);

// import React from "react";
// import { RoomsFilter, RoomsList, Loading } from "./index";
// import { RoomConsumer } from "../Context";

// // static contextType = RoomContext;
// const RoomsContainer = () => {
//   return (
//     <>
//       <RoomConsumer>
//         {value => {
//           const { loading, sortedRooms, rooms } = value;
//           if (loading) {
//             return <Loading />;
//           }
//           return (
//             <div>
//               hello from the rooms container
//               <RoomsFilter rooms={rooms} />
//               <RoomsList rooms={sortedRooms} />
//             </div>
//           );
//         }}
//       </RoomConsumer>
//     </>
//   );
// };

// export default RoomsContainer;

import React, { useContext } from "react";
import { Title } from "./index";
import { RoomContext } from "../Context";

// get all unique values
const getUniquevalues = (item, value) => {
  return [
    ...new Set(
      item.map(item => {
        return item[value];
      })
    )
  ];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  let types = getUniquevalues(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUniquevalues(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <>
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">Room Type</label>
            {/* select type */}
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          {/* select type end */}
          {/* guest */}
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {people}
            </select>
          </div>
          {/* guest end  */}
          {/* room price */}
          <div className="form-group">
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {/*room price end */}
          {/* size */}
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </div>
          {/* size end */}
          {/* extras */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
          {/* extras end */}
        </form>
      </section>
    </>
  );
};

export default RoomsFilter;

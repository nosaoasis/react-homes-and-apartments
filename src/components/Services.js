import React, { Component } from "react";
import { Title } from "./index";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "You can enjoy free cocktail drinks once a day delivered to your room."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Get hiking kit rent-free during the ski seasons."
      },
      {
        icon: <FaShuttleVan />,
        title: "Explore",
        info: "Get free mobility on weekends."
      },
      {
        icon: <FaBeer />,
        title: "Beer",
        info: "A special table at the bar for you on Saturdays."
      }
    ]
  };
  render() {
    return (
      <>
        <section className="services">
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default Services;

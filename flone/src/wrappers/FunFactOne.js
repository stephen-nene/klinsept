import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const funFactData = [
  {
    id: "1",
    iconClass: "pe-7s-box2",
    countNum: 3600,
    title: "bottles sold",
  },
  {
    id: "2",
    iconClass: "pe-7s-cart",
    countNum: 690,
    title: "orders completed",
  },
  {
    id: "3",
    iconClass: "pe-7s-world",
    countNum: 4,
    title: "countries we operate in",
  },
  {
    id: "4",
    iconClass: "pe-7s-smile",
    countNum: 420,
    title: "satisfied customers",
  },
];

const FunFactOne = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };

  return (
    <div
      className={`funfact-area pt-100 bg-gray-3`}
    >
      <div className="container">
        <div className="row">
          {funFactData &&
            funFactData.map((data, key) => {
              return (
                <div key={key} className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`single-count text-center mb-30`}>
                    <div className="count-icon">
                      <i className={data.iconClass} />
                    </div>
                    <h2 className="count">
                      <VisibilitySensor
                        onChange={onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={didViewCountUp ? data.countNum : 0} />
                      </VisibilitySensor>
                    </h2>
                    <span>{data.title}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};


export default FunFactOne;

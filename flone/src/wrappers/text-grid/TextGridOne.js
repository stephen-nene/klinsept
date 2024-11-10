import React from "react";

const textGridData = [
  {
    id: "1",
    title: "Our Vision",
    text: "To be the leading janitorial products manufacturer in East Africa by 2026.",
  },
  {
    id: "2",
    title: "Our Goal",
    text: "Quality that is internationally accepted.Assured delivery schedule to ensure customers get products on time.Competitive prices that favour everyone.An attitude of long term relationship with all our customers.Cleanliness to protect your family.",
  },
  {
    id: "3",
    title: "Our Mission",
    text: `Contribute effectively to economic and social development by providing our customers and partners with the highest quality of detergents and health care products. To offer excellent prices through the adoption of the best international practices in production and marketing.`,
  },
];

const TextGridOne = () => {
  return (
    <div className={`about-mission-area pb-70`}>
      <div className="container">
        <div className="row">
          {textGridData &&
            textGridData.map((data, key) => {
              return (
                <div key={key} className="col-lg-4 col-md-4">
                  <div className={`single-mission mb-40`}>
                    <h3>{data.title}</h3>
                    <p>{data.text}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TextGridOne;

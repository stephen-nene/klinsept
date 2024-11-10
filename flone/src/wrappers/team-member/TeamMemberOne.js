
import React from "react";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";


const teamMemberData = [
  {
    "id": "1",
    "image": "/assets/img/team/team-1.jpg",
    "fbLink": "//www.facebook.com",
    "twitterLink": "//www.twitter.com",
    "instagramLink": "//www.instagram.com",
    "name": "Mr.Mike Banding",
    "position": "Manager"
  },
  {
    "id": "2",
    "image": "/assets/img/team/team-1.jpg",
    "fbLink": "//www.facebook.com",
    "twitterLink": "//www.twitter.com",
    "instagramLink": "//www.instagram.com",
    "name": "Mr.Peter Pan",
    "position": "Developer"
  },
  {
    "id": "3",
    "image": "/assets/img/team/team-1.jpg",
    "fbLink": "//www.facebook.com",
    "twitterLink": "//www.twitter.com",
    "instagramLink": "//www.instagram.com",
    "name": "Ms.Sophia",
    "position": "Designer"
  },
  {
    "id": "4",
    "image": "/assets/img/team/team-1.jpg",
    "fbLink": "//www.facebook.com",
    "twitterLink": "//www.twitter.com",
    "instagramLink": "//www.instagram.com",
    "name": "Mr.John Lee",
    "position": "Chairman"
  }
]
const TeamMemberOne = () => {
  return (
    <div
      className={`team-area pt-35 pb-70"`}
    >
      <div className="container">
        {/* section title */}
        <SectionTitleTwo
          titleText="Team Members"
          subTitleText="Meet the team that makes this company great"
          positionClass="text-center"
          spaceClass="mb-60"
        />

        <div className="row">
          {teamMemberData &&
            teamMemberData.map((data, key) => {
              return (
                <div key={key} className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className={`team-wrapper mb-30`}
                >
                  <div className="team-img">
                    <img
                      src={process.env.PUBLIC_URL + data.image}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="team-action">
                      <a
                        className="facebook"
                        href={data.fbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                      <a
                        className="twitter"
                        href={data.twitterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                      <a
                        className="instagram"
                        href={data.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>{data.name}</h4>
                    <span>{data.position} </span>
                  </div>
                </div>
              </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};


export default TeamMemberOne;

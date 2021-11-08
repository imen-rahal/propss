import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

  const Profile = (props) => {
  console.log(props);
  return (
    <div className="card" style={myStyle}>
      <h1 className="card-header" style={{ color: "red" }}>
        {props.user.fullNAME}
        <span style={{ marginLeft: 300 }}>{props.children}</span>
      </h1>
      <div className="card-body">
        <h3 className="card-title"  style={{ color: "red" }} >{props.user.bio}</h3>
        <p className="card-text">{props.user.profession}</p>
        <a
          href="#!"
          className="btn btn-primary" 
          onClick={(event) => {
            event.preventDefault();
            props.showname(props.user.fullNAME);
          }}
        > c'est moi
        </a>
      </div>
    </div>
  );
};
Profile.propTypes = { user: PropTypes.object.isRequired,showname: PropTypes.func.isRequired };
Profile.defaultProps = {
  user: { fullNAME: "admin", bio: "admin", profession: "admin" },
};
const myStyle = { width: "50vw", marginLeft: 300 };

export default Profile;
import React from "react";
import "./Profile.css";

const Profile = ({ user }) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-3">
          <img
            src={user.avatar_url}
            className="img-fluid mb-2"
            alt={user.login}
          />
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block mb-2 mt-2 "
          >
            View Profile
          </a>
        </div>
        <div className="col-md-9">
          <span className="badge bg-primary ">
            Public Reops: {user.public_repos}
          </span>
          <span className="badge bg-success ">
            Public Gists: {user.public_gists}
          </span>
          <span className="badge bg-dark ">
            Public Followers: {user.followers}
          </span>
          <span className="badge bg-info">
            Public Following: {user.following}
          </span>
          <br />
          <div className="list-group">
            <div className="list-group-item">
              <b>Company:</b> {user.company}
            </div>
            <div className="list-group-item">
              <b>Website/blog:</b> {user.blog}
            </div>
            <div className="list-group-item">
              <b>Location:</b> {user.location}
            </div>
            <div className="list-group-item">
              <b>Member Since:</b> {user.created_at}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

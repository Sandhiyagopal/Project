import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Profile1 = () => {
  return (
    <div className="profile-container">
     <div className="profile-parent">
    <div className="profile-details">
    <div className="colz">
        <a href='#'>
            <i className="fa fa-facebook-square"></i>
        </a>
        <a href='#'>
            <i className="fa fa-google-plus-square"></i>
        </a>
        <a href='#'>
            <i className="fa fa-instagram"></i>
        </a>
        <a href='#'>
            <i className="fa fa-google-youtube-square"></i>
        </a>
        <a href='#'>
            <i className="fa fa-twitter"></i>
        </a>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Profile1;

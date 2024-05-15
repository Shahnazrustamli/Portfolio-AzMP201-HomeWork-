import React from "react";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="name-peofile">
        <div className="name">
          <i className="fa-solid fa-lock"></i> <p>kuche_pishiyi</p>{" "}
          <i className="fa-solid fa-angle-down"></i>
        </div>
        <div>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <div className="profile-header">
        <img
          className="profile-picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftXXE7LmgRLyLfKm_omXkrWtPwaTzP5g-rov2IF6siw&s"
          alt="Profil Resmi"
        />
        <div className="profile-info">
          <h2 className="username">kuche pishiyi</h2>
          <div className="stats">
            <div className="stat">
              <span className="stat-count">100</span>
              <span className="stat-label">Gönderiler</span>
            </div>
            <div className="stat">
              <span className="stat-count">1000</span>
              <span className="stat-label">Takipçiler</span>
            </div>
            <div className="stat">
              <span className="stat-count">500</span>
              <span className="stat-label">Takip Ettiği</span>
            </div>
          </div>
          <p className="bio">Gerçek biyografi burada yazılı olmalıdır.</p>
          <button className="edit-profile-button">Edit Profile</button>
          <button className="edit-profile-button">Share Profile</button>
          <button className="edit-profile-button">
            <i className="fa-solid fa-user-plus"></i>
          </button>
        </div>
      </div>
      <div className="gallery">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftXXE7LmgRLyLfKm_omXkrWtPwaTzP5g-rov2IF6siw&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftXXE7LmgRLyLfKm_omXkrWtPwaTzP5g-rov2IF6siw&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftXXE7LmgRLyLfKm_omXkrWtPwaTzP5g-rov2IF6siw&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftXXE7LmgRLyLfKm_omXkrWtPwaTzP5g-rov2IF6siw&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftXXE7LmgRLyLfKm_omXkrWtPwaTzP5g-rov2IF6siw&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftXXE7LmgRLyLfKm_omXkrWtPwaTzP5g-rov2IF6siw&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftXXE7LmgRLyLfKm_omXkrWtPwaTzP5g-rov2IF6siw&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftXXE7LmgRLyLfKm_omXkrWtPwaTzP5g-rov2IF6siw&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftXXE7LmgRLyLfKm_omXkrWtPwaTzP5g-rov2IF6siw&s"
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;

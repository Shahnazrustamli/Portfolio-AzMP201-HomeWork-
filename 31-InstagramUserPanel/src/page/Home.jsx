import React from "react";

const Home = () => {
  return (
    <div className="instagram-stories">
      <div className="home-ig">
        <img
          className="ig"
          src="https://www.dafont.com/forum/attach/orig/7/3/737566.png?1"
          alt=""
        />
        <div className="dm-heart">
          <i className="fa-regular fa-heart heart"></i>
          <img
            className="direct"
            src="https://static.thenounproject.com/png/3861743-200.png"
            alt=""
          />
        </div>
      </div>
      <div className="stories-container">
        <div className="story">
          <div className="story-image-wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftXXE7LmgRLyLfKm_omXkrWtPwaTzP5g-rov2IF6siw&s"
              alt="Story"
              className="story-image"
            />
          </div>
          <span className="story-username">Your story </span>
        </div>
        <div className="story">
          <div className="story-image-wrapper outline">
            <img
              src="https://pbs.twimg.com/media/CcrO36tUYAEAX5m?format=jpg&name=4096x4096"
              alt="Story"
              className="story-image"
            />
          </div>
          <span className="story-username">s.agcayeffa </span>
        </div>
        <div className="story">
          <div className="story-image-wrapper outline">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXgumv_neWBLbL9JUpmyAez8gtGTLJpdzQGVb-mMHrA&s"
              alt="Story"
              className="story-image"
            />
          </div>
          <span className="story-username">chin_chon </span>
        </div>
        <div className="story">
          <div className="story-image-wrapper outline">
            <img
              src="https://www.rukita.co/stories/wp-content/uploads/2023/06/max-harlynking-6Hk-m_uPW1Q-unsplash.webp"
              alt="Story"
              className="story-image"
            />
          </div>
          <span className="story-username">at.muraddir</span>
        </div>
        <div className="story">
          <div className="story-image-wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuIcIwdMI9IlGedV_zm3L34dFwDUrPhGA9z82RFdTnpEyv2kQnwSh81Pqbx9AS-EXVs0&usqp=CAU"
              alt="Story"
              className="story-image"
            />
          </div>
          <span className="story-username">ayka </span>
        </div>
        <div className="story">
          <div className="story-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Story"
              className="story-image"
            />
          </div>
          <span className="story-username">mehdiyeva </span>
        </div>
        <div className="story">
          <div className="story-image-wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSag3TxDegfl2xUVQz1jmj0ZbFeAgqiUQZZFLRBvhcFNg&s"
              alt="Story"
              className="story-image"
            />
          </div>
          <span className="story-username">chichek </span>
        </div>
      </div>
      <div className="reels-container">
        <div className="reel">
          <div className="pp">
            <img
              src="https://www.rukita.co/stories/wp-content/uploads/2023/06/max-harlynking-6Hk-m_uPW1Q-unsplash.webp"
              alt="Story"
              className="story-image"
            />
            <p>at.muraddir</p>
          </div>
          <img
            src="https://img.freepik.com/premium-photo/portrait-cheerful-little-boy-with-curly-hair-tshirt-smiling-funny-carefree_2221-7628.jpg"
            alt="Reel"
            className="reel-image"
          />
          <div className="post-activity">
            <div className="post-heart">
              <i className="fa-regular fa-heart heart"></i>
              <i className="fa-regular fa-comment heart"></i>
              <img
                className="direct"
                src="https://static.thenounproject.com/png/3861743-200.png"
                alt=""
              />
            </div>
            <i className="fa-solid fa-bookmark heart"></i>
          </div>
        </div>
        <div className="reel">
          <div className="pp">
            <img
              src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Story"
              className="story-image"
            />
            <p>at.muraddir</p>
          </div>
          <img
            src="https://guardian.ng/wp-content/uploads/2023/05/bigstock-1619644371.jpg "
            alt="Reel"
            className="reel-image"
          />
          <div className="post-activity">
            <div className="post-heart">
              <i className="fa-regular fa-heart heart"></i>
              <i className="fa-regular fa-comment heart"></i>
              <img
                className="direct"
                src="https://static.thenounproject.com/png/3861743-200.png"
                alt=""
              />
            </div>
            <i className="fa-solid fa-bookmark heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

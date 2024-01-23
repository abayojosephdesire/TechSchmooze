import React from "react";
import "./Card.css";

function Card() {
  return (
    <section className="section-container">
      <div className="container1">
        <div className="profile"></div>
        {/* get profile pic object, onClick shout take us to the profile page */}
        <div className="container2">
          <div className="profile-block">
            {/* get item object, Order */}
            <div className="item">Water Kettle</div>
            {/* get time posted */}
            <div>2h</div>
          </div>
          {/* use order_content */}
          <div className="text-area1">I want water kettle. Could be new or old. </div>
        </div>
      </div>

      <div className="like-block">
        {/* onClick should do something??? */}
        <i className="fa-regular fa-heart" />
        {/* onClick should take you to search people */}
        <i className="fa-solid fa-share" />
        {/* onlick should save data to saved items */}
        <i className="fa-regular fa-bookmark" />
        {/* onClick should take us to poster"s inbox*/}
        <i className="fa-regular fa-message" />
      </div>
      <div className="comment-example">
        {/* get comment_name and comment_content */}
        <div className="commentor">@Nadine</div> <div>What are you paying?</div>
      </div>
      {/* show number of comments */}
      <div className="comment-number">12 comments</div>
      <div className="comment-block">
        {/* post comment using.... */}
        <textarea className="text-area" placeholder="your comment"></textarea>
        <i className="fa-solid fa-paper-plane" />
      </div>
    </section>
  );
}

export default Card;

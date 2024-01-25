import React, {useEffect} from "react";
import { NewPost} from "../modules/NewPostInput.js";
import { useNavigate } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.userId) {
      navigate("/");
    }
  }, [props.userId, navigate]);

  useEffect(() => {
    document.title = "Post"
  }, []);
  return (
    <>
        {props.userId && <NewPost />}
    </>
  );
}

export default Post;

import React, {useEffect} from "react";
import { NewPostPress} from "../modules/NewPostPressInput.js";
import { useNavigate } from "react-router-dom";

const PostPress = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.userId) {
      navigate("/");
    }
  }, [props.userId, navigate]);

  useEffect(() => {
    document.title = "Share on press"
  }, []);
  return (
    <>
        {props.userId && <NewPostPress />}
    </>
  );
}

export default PostPress;

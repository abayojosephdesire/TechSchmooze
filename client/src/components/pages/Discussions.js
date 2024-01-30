import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardDiscussion from "../modules/CardDiscussion.js";
import { get } from "../../utilities";
import "./Discussions.css";

const Discussions = (props) => {
  const navigate = useNavigate();
  const [discussions, setDiscussions] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
  });

  useEffect(() => {
    if (!props.userId) {
      navigate("/");
    }
  }, [props.userId, navigate]);

  // When the Discussions component mounts
  useEffect(() => {
    document.title = "Discussions"
    get("/api/discussions").then((discussionObjs) => {
      let reversedDiscussionObjs = discussionObjs.reverse();
      setDiscussions(reversedDiscussionObjs);
    });
  }, []);

  const handleCheckboxChange = (filterType, value) => {
    if (selectedFilters[filterType].includes(value)) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: prevFilters[filterType].filter((filter) => filter !== value),
      }));
    } else {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: [...prevFilters[filterType], value],
      }));
    }
  };

  const filteredDiscussions = discussions.filter((discussionObj) => {
    return (
      (selectedFilters.category.length === 0 || selectedFilters.category.includes(discussionObj.category))
    );
  });

  const discussionsArray = filteredDiscussions.map((discussionObj) => (
    <CardDiscussion
      key={discussionObj._id}
      _id={discussionObj._id}
      creator_name={discussionObj.creator_name}
      creator_id={discussionObj.creator_id}
      userId={props.userId}
      postDate={discussionObj.postDate}
      content={discussionObj.content}
      category={discussionObj.category}
    />
  ));

  const column1Items = discussionsArray.filter((_, index) => index % 3 === 0);
  const column2Items = discussionsArray.filter((_, index) => index % 3 === 1);
  const column3Items = discussionsArray.filter((_, index) => index % 3 === 2);

  const discussionsListColumn1 = column1Items.length > 0 ? (
    column1Items
  ) : null;

  const discussionsListColumn2 = column2Items.length > 0 ? (
    column2Items
  ) : null;

  const discussionsListColumn3 = column3Items.length > 0 ? (
    column3Items
  ) : null;

  return (
    <div className="Discussions-container">
      <div className="Discussions-filters">
        <div className="Discussions-filtersItem">
          <h3>Categories</h3>
          <ul>
            <li>
              <input type="checkbox" id="Academic" value="Academic" onChange={() => handleCheckboxChange("category", "Academic")} />
              <label for="Academic" className="Discussions-filtersLabel">Academic</label>
            </li>
            <li>
              <input type="checkbox" id="Events" value="Events & activities" onChange={() => handleCheckboxChange("category", "Events & activities")} />
              <label for="Events" className="Discussions-filtersLabel">Events & activities</label>
            </li>
            <li>
              <input type="checkbox" id="Hobbies" value="Hobbies & interests" onChange={() => handleCheckboxChange("category", "Hobbies & interests")} />
              <label for="Hobbies" className="Discussions-filtersLabel">Hobbies & interests</label>
            </li>
            <li>
              <input type="checkbox" id="Campus" value="Campus life" onChange={() => handleCheckboxChange("category", "Campus life")} />
              <label for="Campus" className="Discussions-filtersLabel">Campus life</label>
            </li>
            <li>
              <input type="checkbox" id="Technology" value="Technology & innovation" onChange={() => handleCheckboxChange("category", "Technology & innovation")} />
              <label for="Technology" className="Discussions-filtersLabel">Technology & innovation</label>
            </li>
            <li>
              <input type="checkbox" id="Career" value="Career & internship" onChange={() => handleCheckboxChange("category", "Career & internship")} />
              <label for="Career" className="Discussions-filtersLabel">Career & internship</label>
            </li>
            <li>
              <input type="checkbox" id="Health" value="Health & wellness" onChange={() => handleCheckboxChange("category", "Health & wellness")} />
              <label for="Health" className="Discussions-filtersLabel">Health & wellness</label>
            </li>
            <li>
              <input type="checkbox" id="Travel" value="Travel & exploration" onChange={() => handleCheckboxChange("category", "Travel & exploration")} />
              <label for="Travel" className="Discussions-filtersLabel">Travel & exploration</label>
            </li>
            <li>
              <input type="checkbox" id="Community" value="Community engagement" onChange={() => handleCheckboxChange("category", "Community engagement")} />
              <label for="Community" className="Discussions-filtersLabel">Community engagement</label>
            </li>
            <li>
              <input type="checkbox" id="General" value="General discussion" onChange={() => handleCheckboxChange("category", "General discussion")} />
              <label for="General" className="Discussions-filtersLabel">General discussion</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="Discussions-list">
        {discussionsListColumn1 && (
          <div className="Discussions-listColumn">
            {discussionsListColumn1}
          </div>
        )}
        {discussionsListColumn2 && (
          <div className="Discussions-listColumn">
            {discussionsListColumn2}
          </div>
        )}
        {discussionsListColumn3 && (
          <div className="Discussions-listColumn">
            {discussionsListColumn3}
          </div>
        )}
        {!discussionsListColumn1 && !discussionsListColumn2 && !discussionsListColumn3 && (
          <div className="Discussions-nothing">No discussions available!</div>
        )}
      </div>
    </div>
  );
};
export default Discussions;

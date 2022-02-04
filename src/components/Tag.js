import React, { useState } from "react";
import styled from "styled-components";

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 200px auto;
  height: 50px;
  width: 550px;
  padding: 0 8px;
  border: 1px solid #d3d3d3;
  border-radius: 6px;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    .tag {
      width: auto;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: #4900ce;
      border-radius: 6px;
      padding: 0 8px;
      margin: 3px;
      font-size: 14px;

      .close-icon {
        background-color: white;
        color: black;
        width: 16px;
        height: 16px;
        margin-left: 6px;
        border-radius: 80px;
        line-height: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        cursor: pointer;
      }
    }
  }

  input {
    flex: 1;
    border: none;
    margin-left: 5px;
    margin-top: 10px;
    height: 25px;
    width: 45px;
    font-size: 15px;
    :focus {
      outline: transparent;
    }
  }

  &:focus-within {
    border: 1px solid #4900ce;
  }
`;

const Tag = () => {
  const [tags, setTags] = useState(["CodeStates", "JJang"]);
  const removeTags = (indexToRemove) => {
    setTags(
      tags.filter((tag) => {
        return tag !== tags[indexToRemove];
      })
    );
  };
  const addTags = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <TagContainer>
      <ul>
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span className="close-icon" onClick={() => removeTags(index)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Press enter to add tags"
        onKeyUp={(e) => (e.key === "Enter" ? addTags(e) : null)}
      />
    </TagContainer>
  );
};

export default Tag;

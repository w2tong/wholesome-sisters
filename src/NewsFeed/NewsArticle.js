import React from "react";

function NewsArticle(props) {
    return (
        <div>
            {props.title}
            {props.date}
            {props.text}
        </div>
    );
}
  
export default NewsArticle;
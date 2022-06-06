import React from "react";

function NewsArticle(props) {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.date}</div>
            <div>{props.text}</div>
            <image src={props.img} alt={props.imgAlt}/>
        </div>
    );
}
  
export default NewsArticle;
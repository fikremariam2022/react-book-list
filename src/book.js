import React from "react";

const Book = (props) => {
  const { author, title, imgSrc } = props;

  return (
    <article className="book">
      <img src={imgSrc} alt="" />

      <h1>{title}</h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
      <p>{props.children}</p>
    </article>
  );
};

export default Book;

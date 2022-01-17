import { useState } from "react";
// import './Card.css';
export const Photo = ({ url, explanation, title, date }) => {
  const [like, setLike] = useState(false);


  return (
    <div className="Single-post-container">
      <img
        src={url}
        alt="new"
        height="undefined"
        width="450"
        style={{ borderRadius: "4%" }}
      />
      <div className="Picture-text-area">
        <b style={{ fontSize: 20 }}>{title + " + " + date}</b>
        <p style={{ fontSize: 13 }}>{explanation}</p>
      </div>
      <button
        onClick={() => setLike(!like)}
        className={like ? "Button-like" : "Button-no-like"}
      >
        {like ? 'Liked' : 'Like'}
      </button>
    </div>
  );
};
export default Photo;

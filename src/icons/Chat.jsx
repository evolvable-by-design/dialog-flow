import React from "react";

const Chat = props => {
  const { fill } = props;
  return (
    <svg viewBox="0 0 20 20">
      <path
        d="M10 15h8.01c1.092 0 1.99-.898 1.99-2.006V3.006A1.998 1.998 0 0018.01 1H1.99C.899 1 0 1.898 0 3.006v9.988C0 14.103.891 15 1.99 15H6v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z"
        fill={fill ? fill : "none"}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Chat;

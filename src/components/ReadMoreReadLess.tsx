import { FC } from "react";
import { useState } from "react";

export interface children {
  children: string;
  limit: number;
}

const ReadMoreReadLess: FC<children> = ({ children, limit }) => {
  children = String(children);

  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };

  return (
    <div className="read-more-read-less">
      {isReadMoreShown ? children : children.substr(0, limit)}
      <button onClick={toggleBtn}>
        {isReadMoreShown ? " less" : "...more"}
      </button>
    </div>
  );
};

export default ReadMoreReadLess;

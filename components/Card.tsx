import { Models } from "node-appwrite";
import React from "react";

const Card = ({ file }: { file: Models.Document }) => {
  return (
    <div>
      <h1>{file.name}</h1>
    </div>
  );
};

export default Card;

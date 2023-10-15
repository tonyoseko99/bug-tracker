"use client";
import React, { useState } from "react";

const NewIssue = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <form>
      <input name="title" className="" placeholder="Title" value={title}>
        Title
      </input>
      <textarea
        name="description"
        placeholder="Description"
        value={description}
      >
        Description
      </textarea>
      <button type="submit" className="bg-blue p-4 text-white"></button>
    </form>
  );
};

export default NewIssue;

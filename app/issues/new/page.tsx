"use client";
import { Button, Flex, Heading, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React, { useState } from "react";

const NewIssue = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <Heading mb="2" size="4">
        Add Issue
      </Heading>
      <Flex direction="column" gap="3" style={{ maxWidth: 500 }}>
        <TextField.Root>
          <TextField.Input placeholder="Title" name="title" />
        </TextField.Root>
        <SimpleMDE placeholder="Description" />
        <Button>submit</Button>
      </Flex>
    </div>
  );
};

export default NewIssue;

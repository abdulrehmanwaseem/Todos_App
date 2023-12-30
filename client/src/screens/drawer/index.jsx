import React from "react";
import { Tldraw } from "@tldraw/tldraw";
import "./styles.css";

const index = () => {
  return (
    <>
      <div className="fixed inset-0 pt-[5.4vh]  ">
        <Tldraw persistenceKey="demo" />
      </div>
    </>
  );
};

export default index;

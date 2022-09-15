import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../components/About/About";
import TextUtils from "../components/TextUtils/TextUtils";

export const Routing = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TextUtils
            heading="Enter Text Below To Analyze"
            mode={props.mode}
            showAlert={props.showAlert}
          />
        }
      />
      <Route exact path="about" element={<About mode={props.mode} />} />
      <Route
        exact
        path="textutils"
        element={
          <TextUtils
            heading="Enter Text Below To Analyze"
            mode={props.mode}
            showAlert={props.showAlert}
          />
        }
      />
    </Routes>
  );
};

import React from "react";
import { useState } from "react";
const TextUtils = (props) => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleUpperCase = () => {
    if (text.length > 0) {
      console.log(text);
      const upperCaseText = text.toUpperCase();
      setText(upperCaseText);
    } else {
      props.showAlert("Please Enter Text To Analyze", "danger");
    }
  };

  const handleLowerCase = () => {
    if (text.length > 0) {
      console.log(text);
      const upperCaseText = text.toLowerCase();
      setText(upperCaseText);
    } else {
      props.showAlert("Please Enter Text To Analyze", "danger");
    }
  };

  const clearText = () => {
    setText("");
  };

  var char = text.trim();
  const words = text
    .trim()
    .split(/\s+/)
    .filter((element) => {
      return element.length !== 0;
    }).length;

  const emailExtrct = () => {
    if (text.length > 0) {
      var emailText = text.match(
        /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
      );
      if (emailText === null) {
        setEmail("There Is No Email In The Text To Extract");
      } else {
        setEmail(emailText.join("\n"));
      }
    } else {
      props.showAlert("Please Enter Text To Extract Emails", "danger");
    }
  };

  const handleSentence = () => {
    if (text.length > 0) {
      var sent = text
        .toLowerCase()
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");

      setText(sent);
    } else {
      props.showAlert("Please Enter Text To Analyze", "danger");
    }
  };

  const handleCopy = () => {
    if (text.length > 0) {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
      props.showAlert("Text Copied","success")
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);

    } else {
      props.showAlert("Please Enter Text To Copy", "warning");
    }
  };

  const downloadText = () => {
    if (text.length > 0) {
      console.log("ello");
      const element = document.createElement("a");
      const file = new Blob([text], {
        type: "text/plain",
      });
      element.href = URL.createObjectURL(file);
      element.download = "myText.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      props.showAlert("Please Enter Text To Download", "danger");
    }
  };

  return (
    <>
      <div className="container mt-1 mb-5 p-3 ">
        <div
          className="py-4 px-4 "
          style={{
            background: "rgba(55, 20, 55, 0.1)",
            boxShadow:
              props.mode === "light"
                ? "0px 5px 10px 0px rgba(0, 0, 0, 0.4)"
                : "0px 0px 15px 2px #f2e1f2",
            borderRadius: "5px",
          }}
        >
          {/* heading */}
          <h3
            className="text-lg-start text-sm-center text-md-start"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              textAlign: "center",
            }}
          >
            {props.heading}{" "}
          </h3>

          {/* input textarea  */}
          <div className="my-4">
            <textarea
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "whitesmoke" : "black",
              }}
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="ENTER TEXT HERE"
              id="myBox"
              rows="6"
            ></textarea>
          </div>
          <div className="d-flex flex-wrap">
            {/* buttons  */}
            <button
              className="btn btn-primary mx-2 my-2 btn-sm "
              onClick={handleUpperCase}
            >
              UpperCase
            </button>
            <button
              className="btn btn-primary mx-2 my-2 btn-sm "
              onClick={handleLowerCase}
            >
              LowerCase
            </button>
            <button
              className="btn btn-primary mx-2 my-2 btn-sm "
              onClick={handleSentence}
            >
              Sentence Case
            </button>
            <button
              className="btn btn-primary mx-2 my-2 btn-sm"
              onClick={handleCopy}
            >
              {isCopied ? "Copied ✔" : "Copy To Clipboard"}
            </button>

            <button
              className="btn btn-primary mx-2 my-2 btn-sm "
              onClick={emailExtrct}
            >
              Extract Emails
            </button>
            <button
              className="btn btn-primary mx-2 my-2 btn-sm "
              onClick={clearText}
            >
              CLEAR
            </button>

            <button
              className="btn btn-success mx-2 my-2 btn-sm "
              onClick={downloadText}
            >
              Download <i className="fa fa-download" />
            </button>
          </div>
        </div>

        {/* text Summary  */}
        <div
          className="card mt-5 py-4 px-4  mb-4"
          style={{
            background:
              props.mode === "dark" ? "transparent" : "rgba(155, 55, 55, 0.1)",
            boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.4)",
            borderRadius: "5px",
          }}
        >
          {/* Summary heading  */}

          <h3
            className="card-title text-lg-start text-sm-center text-md-start text-monospace my-2 p-2"
            style={{
              width: "auto",
              textAlign: "center",
              letterSpacing: "1px",
              backgroundColor: "transparent ",
              color: props.mode === "dark" ? "white" : "black ",
            }}
          >
            YOUR TEXT SUMMARY
          </h3>
          {/* number of words and chars and time to read */}

          <div className="d-lg-flex d-sm-flex flex-lg-row flex-sm-column justify-content-lg-between  mt-2 ">
            <div
              className="card  mb-lg-0 mb-sm-5 p-3 d-flex flex-column justify-content-evenly "
              style={{
                flex: 0.3,
                backgroundColor:
                  props.mode === "dark" ? "#212529" : "transparent ",
              }}
            >
              <h4
                className="card-title "
                style={{
                  color: props.mode === "dark" ? "white" : "black ",
                  fontWeight: props.mode === "dark" ? "200" : "normal",
                }}
              >
                Words And Char
              </h4>
              <div
                className="card-body text-left py-2 px-0"
                style={{
                  color: props.mode === "dark" ? "white" : "black ",
                }}
              >
                <p className="">
                  {words} words and {char.length} charactesr
                </p>
                <p className="">{0.008 * words} Minutes To Read</p>
              </div>
            </div>
            <div
              className="card p-3  "
              style={{
                flex: 0.5,
                backgroundColor:
                  props.mode === "dark" ? "#212529" : "transparent ",
              }}
            >
              <h4
                className="card-title"
                style={{
                  color: props.mode === "dark" ? "white" : "black ",
                  fontWeight: props.mode === "dark" ? "200" : "normal",
                  letterSpacing: "1px",
                }}
              >
                Emails From Text
              </h4>
              <div
                className="card-body card-text py-2 px-0"
                style={{
                  height: "5rem",
                  overflow: "auto",
                  color: props.mode === "dark" ? "white" : "black ",
                }}
              >
                {email}
              </div>
            </div>
          </div>

          {/* preview  */}
          <div
            className="box my-5 "
            style={{
              backgroundColor:
                props.mode === "dark" ? "transparent" : "transparent ",
            }}
          >
            <div
              className="box-title mb-3"
              style={{
                color: props.mode === "dark" ? "white" : "black ",
                letterSpacing: "2px",
              }}
            >
              <h4>PREVIEW</h4>
            </div>
            <p
              className="card card-text p-3"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "#212529" : "transparent ",
                color: props.mode === "dark" ? "white" : "black ",
              }}
            >
              {text ? text : "Your Entered Text"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextUtils;

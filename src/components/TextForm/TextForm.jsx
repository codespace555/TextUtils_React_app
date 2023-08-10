import React, { useState, createElement } from "react";
import { ToastContainer, toast } from "react-toastify";
import Btn from "../navbar/btn";
import "react-toastify/dist/ReactToastify.css";
export default function TextForm({ Heading }) {
  // useState.....................................................
  const [text, setText] = useState("");
  const [ExtractEmail, setExtractEmail] = useState("");

  //   for uperCase......................................................

  const handleUperClick = () => {
    if (text === "") {
      toast.error("No Text Found", {
        position: toast.POSITION.TOP_Right,
      });
    } else {
      const newText = text.toUpperCase();
      setText(newText);
      toast.success("Text Change in UperCase", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  //   for lower..........................................................

  const handleLowerClick = () => {
    if (text === "") {
      toast.error("No Text Found", {
        position: toast.POSITION.TOP_Right,
      });
    } else {
      const newText = text.toLowerCase();

      setText(newText);
      toast.success("Text Change in lowerCase", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  //   for email..........................................................
  const handleEmailClick = () => {
    let emaillst = text.match(
      /([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    );

    if (emaillst === null) {
      // no Email Address Found
      console.log("no Email Address Found");
      toast.error("No Email Address Found", {
        position: toast.POSITION.TOP_Right,
      });
      setExtractEmail("No Email Address Found");
    } else {
      const uniqueEmail = Array.from(new Set(emaillst));
      const finaluniqueEmail = [];
      for (let i = 0; i <= uniqueEmail.length; i++) {
        let characterIs = String(uniqueEmail[i]).charAt(
          String(uniqueEmail[i]).length - 1
        );
        if (characterIs === ".") {
          finaluniqueEmail.push(String(uniqueEmail[i].slice(0, -1)));
        } else {
          finaluniqueEmail.push(uniqueEmail[i]);
        }
      }
      emaillst = finaluniqueEmail.join("\n").toLowerCase();
      setExtractEmail(emaillst);
      toast(`${emaillst} `, {
        position: toast.POSITION.Top_LEFT,
      });
    }
  };
  //   for clear..........................................................

  const handleClearClick = () => {
    if (text === "") {
      toast.error("No Text Found", {
        position: toast.POSITION.TOP_Right,
      });
    } else {
      const newText = "";
      setText(newText);
      setExtractEmail();

      toast.success("Text Is Clear", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  // for copy.....................................

  const handleCopyClick = () => {
    if (text === "") {
      toast.error("No Text Found", {
        position: toast.POSITION.TOP_Right,
      });
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Text Copy Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  // ...........................word count...................

  // ...........................word count...................

  //   for onchange..........................................................
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  // for search......................

  return (
    <>
      <div className="container">
        <h1>{Heading}</h1>
        <hr />
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter your Text
          </label>
          <textarea
            className="form-control border-5 mb-3"
            id="exampleFormControlTextarea1"
            onChange={handleonChange}
            rows="10"
            placeholder="Enter Your Text"
            value={text}
          ></textarea>

          <div className="container d-flex  text-center justify-content-around">
            <Btn onPlay={handleUperClick} titelBtn={"Convert To UperCase"} />
            <Btn onPlay={handleLowerClick} titelBtn={"Convert To LowerCase"} />
            <Btn onPlay={handleEmailClick} titelBtn={"Extract Email"} />
            <Btn onPlay={handleClearClick} titelBtn={"Clear Text"} />
            <Btn onPlay={handleCopyClick} titelBtn={"Copy Text"} />
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.trim().split(/\s+/).length} Words and{" "}
          {text.split(" ").join("").length} Characters
        </p>
        <p>{text.trim().split(/\s+/).length * 0.008} Minutes to Read</p>
        <h4>{ExtractEmail}</h4>
        <h2>Preview</h2>

        <hr />
        <p>{text}</p>

        <ToastContainer />
      </div>
    </>
  );
}
TextForm.defaultProps = {
  Heading: "Heading",
};

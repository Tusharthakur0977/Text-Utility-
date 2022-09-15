import React from "react";
import "./about.css";
export const About = (props) => {
  // const [theme, setTheme] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   height: "91.5vh",
  // });
  // const [modeBtn, setModeBtn] = useState(true);

  // const toggleTheme = () => {
  //   if (theme.color == "black") {
  //     setTheme({
  //       color: "white",
  //       backgroundColor: "#080808",
  //       height: "91.5vh",
  //     });
  //     setModeBtn(false);
  //   } else {
  //     setTheme({
  //       color: "black",
  //       backgroundColor: "white",
  //       height: "91.5vh",
  //     });
  //     setModeBtn(true);
  //   }
  // };
  return (
    <div
      className="about  p-2 m-0"
      style={{
        marginTop: "60px",
      }}
    >
      <div className="container-fluid d-flex flex-row align-items-center ">
        <h3
          className="about-title m-0 flex-grow-1"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          About Us
        </h3>
        {/* <button
          className={`btn ${
            modeBtn == true ? `btn-outline-dark` : `btn-outline-light`
          } `}
          onClick={toggleTheme}
        >
          {modeBtn ? (
            <>
              DARK <i className="fa-solid fa-moon"></i>
            </>
          ) : (
            <>
              LIGHT{" "}
              <i className="fa-solid fa-sun" style={{ color: "yellow" }}></i>
            </>
          )}
        </button> */}
      </div>

      <div
        className="container p-4 mt-4"
        style={{
          backgroundColor: props.mode === "dark" ? "#212529" : "white",
        }}
      >
        <div className="accordion px-5" id="accordionExample">
          <div className="accordion-item my-3 ">
            <h2
              className="accordion-header"
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                borderRadius: "10px",
              }}
              id="headingOne"
            >
              <button
                style={{
                  backgroundColor: props.mode === "dark" ? "#212529" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                  borderRadius: "10px",
                }}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body ">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item my-3">
            <h2
              className="accordion-header"
              id="headingTwo"
              style={{
                borderRadius: "10px",
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
              }}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  backgroundColor: props.mode === "dark" ? "#212529" : "white",
                  borderTop: "1px solid white",
                  color: props.mode === "dark" ? "white" : "black",
                  borderRadius: "10px",
                }}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item my-3">
            <h2
              className="accordion-header"
              id="headingThree"
              style={{
                borderRadius: "10px",
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
              }}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  backgroundColor: props.mode === "dark" ? "#212529" : "white",
                  borderTop: props.mode === "dark" ? "1px solid white" :"1px solid dark",
                  color: props.mode === "dark" ? "white" : "black",
                  borderRadius: "10px",
                }}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

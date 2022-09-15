import React from "react";
import { Link } from "react-router-dom";
export const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg m-0 px-2  navbar${props.mode==="dark"?"-dark":"-light"} `}
      style={{
        width: "100%",
        background: props.mode === "dark" ? "" : ",rgba(255, 255, 255, 0.95)",
      }}
    >
      <div className="container-fluid">
        <img
          className="navbar-brand-icon py-1 px-2"
          style={{
            marginRight: "2rem",
            border:
              props.mode === "dark" ? "1px solid white" : "1px solid black",
            borderRadius: props.mode === "dark" ? "0" : "5px",
            boxShadow:
              props.mode === "light"
                ? "0px 5px 10px 0px rgba(0, 0, 0, 0.4)"
                : "0px 0px 10px 1.4px #f2e1f2",
          }}
          src={props.mode === "dark" ? "logofordark.png" : "logoforlight.png"}
          height="45px"
          alt="Text Utility"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-collapse-lg navbar-collapse-sm  pt-lg-0 pt-3" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="textUtils" className="nav-link">
                TextUtils
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
          <div className="nav-item form-check form-switch  m-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label ${
                props.mode === "dark" ? `text-light` : `text-dark`
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "dark" ? <>Light Mode</> : <>Dark Mode</>}
            </label>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

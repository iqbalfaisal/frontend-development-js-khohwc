import React, { useState } from "react";
import "./Shorten.css";

export default function Shorten() {
  const [state, setState] = useState({
    name: "Shorten",
    error: null,
    value: "",
    items: [],
    btnClicked: "",
    linkStorage: JSON.parse(localStorage.getItem("data")),
  });

  const { btnClicked, value, items, linkStorage } = state;

  const fetchAPI = () => {
    let param = state.value;

    fetch(`https://api.shrtco.de/v2/shorten?url=${param}`)
      .then((res) => res.json())
      .then((result) => {
        if (localStorage.getItem("data") == null) {
          localStorage.setItem("data", "[]");
        }

        var old_data = JSON.parse(localStorage.getItem("data"));

        if (result.ok === true) {
          old_data.push(result);
        }

        localStorage.setItem("data", JSON.stringify(old_data));

        setState({
          ...state,
          items: result,
          linkStorage: JSON.parse(localStorage.getItem("data")),
        });
      })
      .catch((error) => console.log("error", error));
  };

  const handleChange = (event) => {
    setState({ ...state, value: event.target.value });
  };

  const renderLinks = () => {
    return (
      localStorage.getItem("data") != null &&
      linkStorage.reverse().map((item, index) => (
        <div className="shorten-link">
          <h3 className="title-url">{item.result.original_link}</h3>
          <a href={item.result.short_link} className="title-link">
            {item.result.short_link}
          </a>
          <button
            id="btn-copy"
            className={`btn btn-rectangle ${
              index === btnClicked ? "copied-btn" : ""
            }`}
            onClick={() => {
              navigator.clipboard.writeText(item.result.short_link);
              setState({
                ...state,
                btnClicked: index,
              });
            }}
          >
            {index === btnClicked ? "Copied!" : "Copy"}
          </button>
        </div>
      ))
    );
  };

  return (
    <section className="link">
      <div className="container">
        <div className="main-link">
          <input
            id="input-link"
            type="text"
            placeholder="Shorten a link here..."
            required
            value={value}
            onChange={handleChange}
          />
          {items.ok === false ? (
            <small className="error">Please add a link</small>
          ) : (
            ""
          )}
          <button
            id="btn-link"
            className="btn btn-rectangle"
            onClick={fetchAPI}
          >
            Shorten It!
          </button>
        </div>
        <div className="shorten-links">{renderLinks()}</div>
      </div>
    </section>
  );
}

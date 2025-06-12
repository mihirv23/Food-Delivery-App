import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div
          className="carousel-inner"
          id="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/id/15/200/300"
              className="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/1/200/300"
              className="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/13/200/300"
              className="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

<form className="d-flex" role="search">
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form>;

import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import Carousel from "../components/Carousel";

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[0],response[1])
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);
  // this means that on the first hit to the homepage itself all will be rendered or changes in state will happen. if the array contained other ele it would mean that onyl when those ele change will a statechange happen

  return (
    <div>
      <div>
        {" "}
        <NavBar />{" "}
      </div>
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
            <div className="d-flex justify-content-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value = {search}
                onChange={(e)=>{
                  setSearch(e.target.value)
                }}
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </div>
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
      <div className="container">
        {foodCat.length > 0
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>{" "}
                  {/* //{} then only it understands that js is being usd */}
                  <hr />
                  {
                    foodItem.length >0 ?foodItem.filter((item)=>(item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filterItems=>{
                      return(
                        <div key = {filterItems._id} className="col-12 col-md-6 col-lg-3 ">
                          <Card
                          //we are required to use useState here therefore removing foodName, imgsrc
                            // foodName = {filterItems.name}
                            foodItem = {filterItems}
                            options = {filterItems.options[0]}
                            >
                          </Card>
                        </div>
                      )
                    })
                  :<div>No such data found </div>}
                </div>
              );
            })
          : ""}
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

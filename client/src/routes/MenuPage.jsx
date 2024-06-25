import React, { useEffect, useContext } from "react";
import MenuList from "../components/MenuList";
import { useParams, useHistory } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const MenuPage = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response.data.data);

        setSelectedRestaurant(response.data.data); // Set selectedRestaurant with response.data
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]); // Include id in the dependency array

  const handleBack = () => {
    history.push("/");
  };
  return (
    <>
      <div className="container">
        <button onClick={handleBack} className="btn btn-success mt-3">
          Back
        </button>
        {/* Check if selectedRestaurant is not null before accessing its properties */}
        <h1 className="text-center display-1">
          {selectedRestaurant.restaurant.name} Menu
        </h1>
      </div>
      <MenuList restaurantId={id} />
    </>
  );
};

export default MenuPage;

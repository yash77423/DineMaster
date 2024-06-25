import React, { useState, useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";

const MenuList = ({ restaurantId }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(
          `/${restaurantId}/menuPage/`
        );
        console.log(response.data.data.restaurant);
        setMenuItems(response.data.data.restaurant);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [restaurantId]);

  return (
    <div>
      <table className="table table-hover table-dark mt-3">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Dish</th>
            <th scope="col">Ingredients</th>
            <th scope="col">Allergen Warning</th>
            <th scope="col">Type</th>
            <th scope="col">Price</th>
          </tr>
        </thead>

        <tbody>
          {menuItems &&
            menuItems.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.food_name}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.allergy_warnings}</td>
                  <td>{item.type}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default MenuList;

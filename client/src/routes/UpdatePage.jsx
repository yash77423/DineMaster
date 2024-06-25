import React from "react";
import { useHistory } from "react-router-dom";
import UpdateRestaurant from "../components/UpdateRestaurant";

const UpdatePage = () => {
  let history = useHistory();
  const handleBack = () => {
    history.push("/");
  };
  return (
    <div>
      <button onClick={handleBack} className="btn btn-success mt-3">
        Back
      </button>
      <h1 className="text-center">Update Restaurant</h1>
      <UpdateRestaurant />
    </div>
  );
};

export default UpdatePage;

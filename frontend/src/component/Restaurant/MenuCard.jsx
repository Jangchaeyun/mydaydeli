import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { categoryIngredients } from "../util/categoryIngredients";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../State/Cart/Action";

const MenuCard = ({ item }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const dispatch = useDispatch();

  const handleCheckBoxChange = (itemName) => {
    if (selectedIngredients.includes(itemName)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== itemName)
      );
    } else {
      setSelectedIngredients({ ...selectedIngredients, itemName });
    }
  };

  const handleAddItemToCart = (e) => {
    e.preventDefault();
    const reqData = {
      token: localStorage.getItem("jwt"),
      cartItem: {
        menuItemId: item.id,
        quantity: 1,
        ingredients: selectedIngredients,
      },
    };
    dispatch(addItemToCart(reqData));
    console.log("req data ", reqData);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src={item.images[0]}
                alt=""
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">{item.name}</p>
                <p>{item.price.toLocaleString()}원</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleAddItemToCart}>
            <div className="flex gap-5 flex-wrap">
              {Object.keys(categoryIngredients(item.ingredients)).map(
                (category) => (
                  <div>
                    <p>{category}</p>
                    <FormGroup>
                      {categoryIngredients(item.ingredients)[category].map(
                        (item) => (
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                onChange={() => handleCheckBoxChange(item.name)}
                              />
                            }
                            label={item.name}
                          />
                        )
                      )}
                    </FormGroup>
                  </div>
                )
              )}
            </div>
            <div className="pt-5">
              <Button
                variant="contained"
                type="submit"
                disabled={false}
                style={{ fontFamily: "Ownglyph_meetme-Rg" }}
              >
                {true ? "장바구니에 담기" : "품절"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuCard;

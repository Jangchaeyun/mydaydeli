import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const demo = [
  {
    category: "메뉴 선택 (하나만)",
    ingredients: ["엽기떡볶이", "엽기오뎅", "엽기반반"],
  },
  {
    category: "맛 선택 (하나만)",
    ingredients: ["착한맛", "초보맛", "덜매운맛", "오리지널", "매운맛"],
  },
  {
    category: "토핑 추가",
    ingredients: ["떡 추가", "오뎅 추가", "매추리알 추가", "치즈 추가"],
  },
];

const MenuCard = () => {
  const handleCheckBoxChange = (value) => {
    console.log("value");
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
                src="https://newsimg.sedaily.com/2023/05/06/29PH1PD9A6_1.png"
                alt=""
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">엽기메뉴</p>
                <p>14,000원</p>
                <p className="text-gray-400">
                  분모자떡볶이 선택 시, 떡이 분모자로 변경되어 제공됩니다.
                </p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
              {demo.map((item) => (
                <div>
                  <p>{item.category}</p>
                  <FormGroup>
                    {item.ingredients.map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => handleCheckBoxChange(item)}
                          />
                        }
                        label={item}
                      />
                    ))}
                  </FormGroup>
                </div>
              ))}
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

import {
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OrderTable from "./OrderTable";

const orderStatus = [
  { label: "조리 중", value: "PEDING" },
  { label: "배달 완료", value: "COMPLETE" },
  { label: "모두", value: "ALL" },
];

const Orders = () => {
  const [filterValue, setFilterValue] = useState();
  const handleFilter = (e, value) => {
    setFilterValue(value);
  };
  return (
    <div className="px-2">
      <Card className="p-5">
        <Typography
          sx={{ paddingBottom: "1rem", fontFamily: "Ownglyph_meetme-Rg" }}
          variant="h5"
        >
          주문 상태
        </Typography>
        <FormControl>
          <RadioGroup
            onChange={handleFilter}
            row
            name="category"
            value={filterValue || "all"}
          >
            {orderStatus.map((item) => (
              <FormControlLabel
                key={item.label}
                value={item.value}
                control={<Radio />}
                label={
                  <Typography
                    style={{
                      fontFamily: "Ownglyph_meetme-Rg",
                    }}
                  >
                    {item.label}
                  </Typography>
                }
              ></FormControlLabel>
            ))}
          </RadioGroup>
        </FormControl>
      </Card>
      <OrderTable />
    </div>
  );
};

export default Orders;

import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Avatar,
  Chip,
} from "@mui/material";
import React, { useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFoodAction,
  getMenuItemsByRestaurantId,
} from "../../component/State/Menu/Action";

const orders = [1, 1, 1, 1, 1];

const MenuTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, menu, ingredients } = useSelector((store) => store);

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        jwt,
        restaurantId: restaurant.usersRestaurant.id,
        vegetarian: false,
        nonveg: false,
        seasonal: false,
        foodCategory: "",
      })
    );
  }, []);

  const handleDeleteFood = (foodId) => {
    dispatch(deleteFoodAction({ foodId, jwt }));
  };

  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"메뉴 관리"}
          sx={{ pt: 2, alignItems: "center" }}
          style={{ fontFamily: "Ownglyph_meetme-Rg" }}
          action={
            <IconButton
              onClick={() => navigate("/admin/restaurants/add-menu")}
              aria-label="settings"
            >
              <CreateIcon />
            </IconButton>
          }
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  번호
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  이미지
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  메뉴
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  세부 메뉴
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  가격
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  재고
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  삭제
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu.menuItems.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {item.id}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    <Avatar src={item.images[0]}></Avatar>
                  </TableCell>
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {item.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {item.ingredients.map((ingredient) => (
                      <Chip label={ingredient.name} />
                    ))}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {item.price.toLocaleString()}원
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {item.available ? "있음" : "없음"}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    <IconButton
                      color="primary"
                      onClick={() => handleDeleteFood(item.id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default MenuTable;

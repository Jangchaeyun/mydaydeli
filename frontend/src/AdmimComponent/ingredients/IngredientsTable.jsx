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
  Modal,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { Delete } from "@mui/icons-material";
import CreateIngredientForm from "./CreateIngredientForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getIngredientsOfRestaurant,
  updateStockOfIngredient,
} from "../../component/State/Ingredients/Action";

const orders = [1, 1, 1, 1, 1];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const IngredientsTable = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, ingredients } = useSelector((store) => store);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(
      getIngredientsOfRestaurant({ jwt, id: restaurant.usersRestaurant.id })
    );
  }, []);

  const handleUpdateStoke = (id) => {
    dispatch(updateStockOfIngredient({ id, jwt }));
  };

  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"세부메뉴 관리"}
          sx={{ pt: 2, alignItems: "center" }}
          style={{ fontFamily: "Ownglyph_meetme-Rg" }}
          action={
            <IconButton onClick={handleOpen} aria-label="settings">
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
                  이름
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  카테고리
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  재고
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredients.ingredients.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="center"
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
                    {item.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {item.category.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    <Button
                      onClick={() => handleUpdateStoke(item.id)}
                      style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                    >
                      {item.inStoke ? "있음" : "없음"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateIngredientForm />
        </Box>
      </Modal>
    </Box>
  );
};

export default IngredientsTable;

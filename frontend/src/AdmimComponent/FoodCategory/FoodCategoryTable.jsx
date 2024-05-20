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
} from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import { Delete } from "@mui/icons-material";

const orders = [1, 1, 1, 1, 1];

const FoodCategoryTable = () => {
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"카테고리 관리"}
          sx={{ pt: 2, alignItems: "center" }}
          style={{ fontFamily: "Ownglyph_meetme-Rg" }}
          action={
            <IconButton aria-label="settings">
              <CreateIcon />
            </IconButton>
          }
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  번호
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  이름
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {1}
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {"name"}
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

export default FoodCategoryTable;

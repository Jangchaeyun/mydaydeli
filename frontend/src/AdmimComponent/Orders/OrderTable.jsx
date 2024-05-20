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
} from "@mui/material";
import React from "react";

const orders = [1, 1, 1, 1, 1];

const OrderTable = () => {
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader title={"주문 목록"} sx={{ pt: 2, alignItems: "center" }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontFamily: "Ownglyph_meetme-Rg" }}>
                  번호
                </TableCell>
                <TableCell
                  align="right"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  이미지
                </TableCell>
                <TableCell
                  align="right"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  주문인
                </TableCell>
                <TableCell
                  align="right"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  가격
                </TableCell>
                <TableCell
                  align="right"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  메뉴
                </TableCell>
                <TableCell
                  align="right"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  세부 메뉴
                </TableCell>
                <TableCell
                  align="right"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  상태
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
                    align="right"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {"image"}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {"zzangsally@gmail.com"}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {"4000원"}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {"휘낭시에 4구 선물세트"}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {""}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {"조리 중"}
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

export default OrderTable;
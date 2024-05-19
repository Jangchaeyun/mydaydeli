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
      <Card className="pt-1">
        <CardHeader
          title={"주문 목록"}
          sx={{ pt: 2, alignItems: "center" }}
          style={{ fontFamily: "Ownglyph_meetme-Rg" }}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell align="right">이미지</TableCell>
                <TableCell align="right">주문인</TableCell>
                <TableCell align="right">가격</TableCell>
                <TableCell align="right">메뉴</TableCell>
                <TableCell align="right">세부 메뉴</TableCell>
                <TableCell align="right">상태</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {1}
                  </TableCell>
                  <TableCell align="right">{"image"}</TableCell>
                  <TableCell align="right">{"zzangsally@gmail.com"}</TableCell>
                  <TableCell align="right">{"4000원"}</TableCell>
                  <TableCell align="right">{"휘낭시에 4구 선물세트"}</TableCell>
                  <TableCell align="right">{""}</TableCell>
                  <TableCell align="right">{"조리 중"}</TableCell>
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

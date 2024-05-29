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
  Avatar,
  AvatarGroup,
  Chip,
  Menu,
  Button,
  MenuItem,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurantsOrder,
  updateOrderStatus,
} from "../../component/State/Restaurant Order/Action";

const orderStatus = [
  { label: "주문서 확인 중", value: "주문서 확인 중" },
  { label: "조리 중", value: "조리 중" },
  { label: "배달 중", value: "배달 중" },
  { label: "배달 완료", value: "배달 완료" },
];

const OrderTable = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, restaurantOrder, menu, ingredients } = useSelector(
    (store) => store
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(
      fetchRestaurantsOrder({
        jwt,
        restaurantId: restaurant.usersRestaurant?.id,
      })
    );
  }, []);

  const handleUpdateOrder = (orderId, orderStatus) => {
    dispatch(updateOrderStatus({ orderId, orderStatus, jwt }));
    handleClose();
  };

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
                  align="center"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  이미지
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  주문인
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
                  상태
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  상테 변경
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurantOrder.orders.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    align="center"
                    scope="row"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {item.id}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    <AvatarGroup>
                      {item.items.map((orderItem) => (
                        <Avatar src={orderItem.food?.images[0]} />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {item.customer?.fullName}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {item.totalAmount.toLocaleString()}원
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {item.items.map((orderItem) => (
                      <p>{orderItem.food?.name}</p>
                    ))}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {item.items.map((orderItem) => (
                      <div>
                        {orderItem.ingredients.map((ingredient) => (
                          <Chip label={ingredient} />
                        ))}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    {item.orderStatus}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                    >
                      상태 변경
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {orderStatus.map((status) => (
                        <MenuItem
                          style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                          onClick={() =>
                            handleUpdateOrder(item.id, status.value)
                          }
                        >
                          {status.label}
                        </MenuItem>
                      ))}
                    </Menu>
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

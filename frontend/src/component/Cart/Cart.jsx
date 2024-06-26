import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../State/Order/Action";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  detailAddress: "",
  commonEntrancePassword: "",
};

// const validationSchema = Yup.object.shape({
//   streetAddress: Yup.string().required("도로명 주소는 필수"),
//   detailAddress: Yup.string().required("상세정보는 필수"),
// });

const items = [1, 1, 1, 1];

const Cart = () => {
  const createOrderUsingSelectedAddress = () => {};

  const handleOpenAddressModel = () => {
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);
  const { cart, auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleClose = () => setOpen(false);
  const handleSubmit = (values) => {
    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId: cart.cartItems[0].food?.restaurant.id,
        deliveryAddress: {
          fullName: auth.user?.fullName,
          streetAddress: values.streetAddress,
          detailAddress: values.detailAddress,
          commonEntrancePassword: values.commonEntrancePassword,
        },
      },
    };
    dispatch(createOrder(data));
    console.log("form value", values);
  };

  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {cart.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">주문서 상세</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>주문 금액</p>
                <p>{cart.cart?.total.toLocaleString()}</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>배송비</p>
                <p>무료</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-gray-400">
              <p>총 금액</p>
              <p>{cart.cart?.total.toLocaleString()}원</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              배송지 선택
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    배송지 입력
                  </h1>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModel}
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    입력
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fontFamily="Ownglyph_meetme-Rg"
                    as={TextField}
                    name="streetAddress"
                    label="도로명 주소"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontFamily: "Ownglyph_meetme-Rg",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: "Ownglyph_meetme-Rg",
                      },
                    }}
                    // error={!ErrorMessage("도로명 주소")}
                    // helper={
                    //   <ErrorMessage>
                    //     {(msg) => <span className="text-red-600">{msg}</span>}
                    //   </ErrorMessage>
                    // }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fontFamily="Ownglyph_meetme-Rg"
                    as={TextField}
                    name="detailAddress"
                    label="상세 주소"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontFamily: "Ownglyph_meetme-Rg",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: "Ownglyph_meetme-Rg",
                      },
                    }}
                    // error={!ErrorMessage("도로명 주소")}
                    // helper={
                    //   <ErrorMessage>
                    //     {(msg) => <span className="text-red-600">{msg}</span>}
                    //   </ErrorMessage>
                    // }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fontFamily="Ownglyph_meetme-Rg"
                    as={TextField}
                    name="commonEntrancePassword"
                    label="공통입구 비밀번호"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontFamily: "Ownglyph_meetme-Rg",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: "Ownglyph_meetme-Rg",
                      },
                    }}
                    // error={!ErrorMessage("도로명 주소")}
                    // helper={
                    //   <ErrorMessage>
                    //     {(msg) => <span className="text-red-600">{msg}</span>}
                    //   </ErrorMessage>
                    // }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    style={{ fontFamily: "Ownglyph_meetme-Rg" }}
                    fullWidth
                  >
                    주문 여기로!!!
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;

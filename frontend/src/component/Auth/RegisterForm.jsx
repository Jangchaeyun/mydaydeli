import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../State/Authentication/Action";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(registerUser({ userData: values, navigate }));
  };
  return (
    <div>
      <Typography
        variant="h5"
        className="text-center"
        style={{ fontFamily: "Ownglyph_meetme-Rg" }}
      >
        회원가입
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            fontFamily="Ownglyph_meetme-Rg"
            as={TextField}
            name="fullName"
            label="이름 혹은 닉네임"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            fontFamily="Ownglyph_meetme-Rg"
            as={TextField}
            name="email"
            label="이메일"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            fontFamily="Ownglyph_meetme-Rg"
            as={TextField}
            name="password"
            label="패스워드"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
          />
          <Field
            fullWidth
            margin="normal"
            as={Select}
            labelId="role-simple-select-label"
            id="demo-simple-select"
            name="role"
            // value={role}
            // onChange={handleChange}
          >
            <MenuItem value={"ROLE_CUSTOMER"}>일반 고겍</MenuItem>
            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>가게 주인</MenuItem>
          </Field>
          <Button
            onClick={() => handleSubmit()}
            sx={{ mt: 2, padding: "1rem" }}
            className="mt-5"
            fullWidth
            type="submit"
            variant="contained"
            style={{ fontFamily: "Ownglyph_meetme-Rg" }}
          >
            회원가입
          </Button>
        </Form>
      </Formik>
      <Typography
        variant="body2"
        style={{ fontFamily: "Ownglyph_meetme-Rg" }}
        align="center"
        sx={{ mt: 3 }}
      >
        이미 계정이 있으신가요?
        <Button
          size="small"
          onClick={() => navigate("/")}
          style={{ fontFamily: "Ownglyph_meetme-Rg" }}
        >
          로그인
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;

import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {};
  return (
    <div>
      <Typography
        variant="h5"
        className="text-center"
        style={{ fontFamily: "Ownglyph_meetme-Rg" }}
      >
        로그인
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
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
          />
          <Button
            sx={{ mt: 2, padding: "1rem" }}
            className="mt-5"
            fullWidth
            type="submit"
            variant="contained"
            style={{ fontFamily: "Ownglyph_meetme-Rg" }}
          >
            로그인
          </Button>
        </Form>
      </Formik>
      <Typography
        variant="body2"
        style={{ fontFamily: "Ownglyph_meetme-Rg" }}
        align="center"
        sx={{ mt: 3 }}
      >
        계정이 없으신가요?
        <Button
          size="small"
          onClick={() => navigate("/account/register")}
          style={{ fontFamily: "Ownglyph_meetme-Rg" }}
        >
          회원가입
        </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;

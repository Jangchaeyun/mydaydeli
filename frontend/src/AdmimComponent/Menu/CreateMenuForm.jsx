import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { uploadImageToCloudinary } from "../util/UploadToCloudinary";

const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  restaurantId: 2,
  vegetarian: true,
  seasonal: false,
  ingredients: [],
  images: [],
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CreateMenuForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      values.restaurantId = 2;
      console.log("data --- ", values);
    },
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file);
    console.log("image ---", image);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-2xl text-center py-2">
          새로운 메뉴 추가
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            <Grid className="flex flex-wrap gap-5" item xs={12}>
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <label className="relative" htmlFor="fileInput">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternateIcon className="text-white" />
                </span>
                {uploadImage && (
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className="flex flex-wrap gap-2">
                {formik.values.images.map((image, index) => (
                  <div className="relative">
                    <img
                      className="w-24 h-24 object-cover"
                      key={index}
                      src={image}
                      alt=""
                    />
                    <IconButton
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                      onClick={() => handleRemoveImage(index)}
                    >
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="이름"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
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
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="설명"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
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
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="price"
                name="price"
                label="가격"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.price}
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
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  음식 카테고리
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.category}
                  label="카테고리"
                  onChange={formik.handleChange}
                  name="category"
                >
                  <MenuItem
                    value={10}
                    sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    Ten
                  </MenuItem>
                  <MenuItem
                    value={20}
                    sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    Twenty
                  </MenuItem>
                  <MenuItem
                    value={30}
                    sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    Thirty
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-multiple-chip-label"
                  sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  세부 메뉴
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  name="ingredients"
                  multiple
                  value={formik.values.ingredients}
                  onChange={formik.handleChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="세부 매뉴"
                    />
                  }
                  sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  // MenuProps={MenuProps}
                >
                  {["하트일지초", "숫자초"].map((name, index) => (
                    <MenuItem
                      key={name}
                      value={name}
                      sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  채식주의자
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="vegetarian"
                  value={formik.values.vegetarian}
                  label="채식주의자"
                  onChange={formik.handleChange}
                  name="vegetarian"
                  sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  <MenuItem
                    value={true}
                    sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    가능
                  </MenuItem>
                  <MenuItem
                    value={false}
                    sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    불가능
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  계절음식
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="seasonal"
                  value={formik.values.seasonal}
                  label="계절음식"
                  onChange={formik.handleChange}
                  name="seasonal"
                  sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  <MenuItem
                    value={true}
                    sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    예
                  </MenuItem>
                  <MenuItem
                    value={false}
                    sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                  >
                    아니요
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            className="mt-4"
            variant="contained"
            color="primary"
            type="submit"
            style={{ fontFamily: "Ownglyph_meetme-Rg" }}
          >
            음식점 추가
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateMenuForm;

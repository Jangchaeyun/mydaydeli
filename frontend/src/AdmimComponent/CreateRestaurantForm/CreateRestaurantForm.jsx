import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { uploadImageToCloudinary } from "../util/UploadToCloudinary";

const initialValues = {
  name: "",
  streetAddress: "",
  detailAddress: "",
  description: "",
  cuisineType: "",
  image: "",
  email: "",
  mobile: "",
  twitter: "",
  instagram: "",
  openingHours: "월-금 : 오전 9:00 - 오후 12:00",
  images: [],
};

const CreateRestaurantForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data = {
        name: values.name,
        description: values.description,
        cuisineType: values.cuisineType,
        address: {
          streetAddress: values.streetAddress,
          detailAddress: values.detailAddress,
        },
        contactInformation: {
          email: values.email,
          mobile: values.mobile,
          twitter: values.twitter,
          instagram: values.instagram,
        },
        openingHours: values.openingHours,
        images: values.images,
      };
      console.log("data --- ", data);
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
          새로운 음식점 추가
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
                id="cuisineType"
                name="cuisineType"
                label="음식점 종류"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.cuisineType}
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
                id="openingHours"
                name="openingHours"
                label="운영 시간"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.openingHours}
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
                id="streetAddress"
                name="streetAddress"
                label="도로명 주소"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.streetAddress}
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
                id="detailAddress"
                name="detailAddress"
                label="상세 주소"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.detailAddress}
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
                id="email"
                name="email"
                label="이메일"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.email}
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
                id="mobile"
                name="mobile"
                label="모바일"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.mobile}
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
                id="instagram"
                name="instagram"
                label="인스타그램"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.instagram}
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
                id="twitter"
                name="twitter"
                label="X(twitter)"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.twitter}
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

export default CreateRestaurantForm;

import React from "react";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { userSlice } from "../store/reducers/UserSlice";

const ImageCard = ({ thumbnailUrl, id, imgUrl }) => {
  const dispatch = useDispatch();
  const { deletePhoto, openDialog } = userSlice.actions;
  const deletePhotoHandler = () => {
    dispatch(deletePhoto(id));
  };

  const openDialogHandler = () => {
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => dispatch(openDialog(imgUrl));
  };

  return (
    <>
      <Grid item sm={4} md={3}>
        {" "}
        <Card>
          <CardHeader
            action={
              <IconButton aria-label="settings" onClick={deletePhotoHandler}>
                <DeleteIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <img
                style={{ cursor: "pointer" }}
                src={thumbnailUrl}
                alt=""
                onClick={openDialogHandler}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ImageCard;

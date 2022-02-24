import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { userSlice } from "../store/reducers/UserSlice";
import { useSelector, useDispatch } from "react-redux";

const ImageDialog = () => {
  const { photoDialog } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  const { closeDialog } = userSlice.actions;

  const closeDialogHandler = () => {
    dispatch(closeDialog());
  };

  return (
    <Dialog
      open={photoDialog.open}
      aria-labelledby="alert-dialog-title"
      maxWidth="lg"
      onClose={closeDialogHandler}
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <img src={photoDialog.imgUrl} alt="dialogImage" />
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;

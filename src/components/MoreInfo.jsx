import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MoreInfo(props) {
  const [open, setOpen] = useState(false);
  const [hours, setHours] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (props.moreInfo > 0) {
      handleOpen();
      setHours(formatHours(props.address));
    }
  }, [props.moreInfo]);

  const formatHours = (hours) => {
    return (
      <>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Monday: {hours.monday_close} - {hours.monday_open} <br />
          Tuesday: {hours.tuesday_close} - {hours.tuesday_open} <br />
          Wednesday: {hours.wednesday_close} - {hours.wednesday_open}
          <br />
          Thursday: {hours.thursday_close} - {hours.thursday_open}
          <br />
          Friday: {hours.friday_close} - {hours.friday_open}
          <br />
          Saturday: {hours.saturday_close} - {hours.saturday_open}
          <br />
          Sunday: {hours.sunday_close} - {hours.sunday_open}
          <br />
        </Typography>
      </>
    );
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="mb-2"
          >
            Taco Truck {props.address.id}
          </Typography>
          <Typography>
            {props.address.address}
            <br />
            {props.address.city}, {props.address.state}{" "}
            {props.address.postal_code}
          </Typography>
          <div>{hours}</div>
        </Box>
      </Modal>
    </div>
  );
}

export default MoreInfo;

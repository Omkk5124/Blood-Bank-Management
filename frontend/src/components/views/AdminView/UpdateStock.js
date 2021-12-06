import React, { useState } from "react";
import { Box, TextField, MenuItem, Button } from "@material-ui/core";
import axios from "../../axios";

const UpdateStock = () => {
  const grps = [
    {
      value: "A-",
      label: "A-",
    },
    {
      value: "A+",
      label: "A+",
    },
    {
      value: "B-",
      label: "B-",
    },
    {
      value: "B+",
      label: "B+",
    },
    {
      value: "AB-",
      label: "AB-",
    },
    {
      value: "AB+",
      label: "AB+",
    },
    {
      value: "O-",
      label: "O-",
    },
    {
      value: "O+",
      label: "O+",
    },
  ];

  const [bloodgrp, setBloodGrp] = useState("Select Blood Group");
  const [unit, setUnit] = useState("0");
  const handleChange = (event) => {
    setBloodGrp(event.target.value);
  };
  const handleChange1 = (event) => {
    setUnit(event.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("/updateStock", { bloodgrp: bloodgrp, unit: unit })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <br />
      <h3 className="text-center">Update Blood Unit</h3>
      <br />
      <div>
        <TextField
          id="outlined-select-bloodgrp"
          select
          label="Select Blood Group"
          value={bloodgrp}
          onChange={handleChange}
          variant="outlined"
          style={{ margin: "0 15px" }}
          //helperText="Please select blood group"
        >
          {grps.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          required
          id="outlined-required"
          label="Unit"
          defaultValue="0"
          variant="outlined"
          style={{ margin: "0 15px" }}
          onChange={handleChange1}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          style={{ marginTop: "8px" }}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default UpdateStock;

import React from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

const Filter = ({ albumIds, handleChange }) => {
  return (
    <Box sx={{ minWidth: 12, marginBottom: 2, marginTop: 2 }}>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          defaultValue=""
          label="Filter"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => handleChange(e.target.value)}
        >
          <MenuItem value={null}>All</MenuItem>
          {albumIds.length > 0 &&
            albumIds.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;

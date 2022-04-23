import { useState, cloneElement } from "react";
import { Box, styled, MenuItem, FormControl, Select } from "@mui/material";

const MPFilterItemStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const MPFilterItem = (props) => {
  const { name, label, icon, items = [], filter, setFilter } = props;
  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };
  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  return (
    <MPFilterItemStyled>
      <FormControl
        sx={{ minWidth: 10, border: "none", outline: "none" }}
        size="small"
      >
        <Select
          labelId={label}
          id={name}
          open={openFilter}
          onClose={handleFilterClose}
          value={filter}
          onChange={handleFilterChange}
          displayEmpty
          IconComponent=""
          renderValue={(value) => {
            return (
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                {cloneElement(icon, {
                  onClick: handleFilterOpen,
                  fontSize: "small",
                  sx: {
                    cursor: "pointer",
                  },
                })}

                {value}
              </Box>
            );
          }}
        >
          {items.map((item, index) => (
            <MenuItem value={item.value} key={index}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </MPFilterItemStyled>
  );
};

MPFilterItem.propTypes = {};

export default MPFilterItem;

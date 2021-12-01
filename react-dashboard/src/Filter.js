import React, { useEffect, useState } from "react";
import {
  getData,
  getCities,
  getVariables,
  getYears,
  getCounties,
  getCountyCities,
} from "./data/BackEndConnection";
import {
  Checkbox,
  FormControlLabel,
  Input,
  ListItemText,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import "./styles/filter.css";

const inputs = {
  CITIES: "cities",
  YEARS: "years",
  VARIABLES: "variables",
  COUNTY: "county",
};

const radioButtons = {
  COUNTIES: "counties",
  CITIES: "cities",
  CAPITAL_CITIES: "capital_cities",
};

export function Filter(props) {
  const [open, setOpen] = useState({
    [inputs.CITIES]: false,
    [inputs.YEARS]: false,
    [inputs.VARIABLES]: false,
    [inputs.COUNTY]: false,
  });

  const [loading, setLoading] = useState(false);
  const [variables, setVariables] = useState([]);
  const [cities, setCities] = useState([]);
  const [counties, setCounties] = useState([]);
  const [years, setYears] = useState([]);
  const [filters, setFilters] = useState({
    [inputs.CITIES]: [],
    [inputs.YEARS]: [],
    [inputs.VARIABLES]: [],
    [inputs.COUNTY]: [],
  });

  const [entityType, setEntityType] = useState(radioButtons.COUNTIES);

  useEffect(() => {
    if (variables.length === 0) {
      getVariables().then((value) => {
        setVariables(value);
      });
    }
    if (cities.length === 0) {
      getCities().then((value) => {
        setCities(value);
      });
    }
    if (counties.length === 0) {
      getCounties().then((value) => {
        setCounties(value);
      });
    }
    if (
      filters.cities.length > 0 &&
      filters.variables.length > 0 &&
      filters.years.length > 0
    ) {
      getData(filters.cities, filters.years, filters.variables).then((data) => {
        // console.log(data);
        props.setData(data);
      });
    }
  }, [filters]);

  async function handleVariableFilterChange(variables) {
    return await getYears(variables);
  }

  const handleVariableChange = (input) => {
    props.setSelectedVariables(input.target.value);
    setLoading(true);
    handleVariableFilterChange(input.target.value)
      .then((value) => {
        if (value !== undefined) {
          setYears(value);
          setFilters((prevState) => ({ ...prevState, [inputs.YEARS]: value }));
        }
      })
      .then(() => {
        setLoading(false);
      });
    setFilters((prevState) => ({
      ...prevState,
      [inputs.VARIABLES]: input.target.value,
    }));
  };

  const handleInputChange = (value, input) => {
    const splitStringArray =
      typeof value === "string" ? value.split(",") : value;
    // Updates filters dinamically, with generic value and input
    setFilters((prevState) => ({ ...prevState, [input]: splitStringArray }));
  };

  const handleCountiesChange = (value) => {
    if (entityType === radioButtons.CITIES) {
      getCountyCities(value).then((data) => {
        let cities = [];
        Object.entries(data).forEach((department) => {
          cities.push(...department[1]);
        });
        setCities([...new Set(cities)]);
      });
    }
    setFilters((prevState) => ({ ...prevState, [inputs.COUNTY]: value }));
  };

  const handleClose = (input) => {
    setOpen((prevState) => ({ ...prevState, [input]: false }));
  };

  const handleOpen = (input) => {
    setOpen((prevState) => ({ ...prevState, [input]: true }));
  };

  const showCities = () => {
    if (props.showCountyView || entityType === radioButtons.CAPITAL_CITIES) {
      return (
        <div className="menu-item">
          <button
            id="open-cities-menu"
            className="menu-btn"
            onClick={() => {
              handleOpen(inputs.CITIES);
            }}
          >
            Municipios <i className="fa fa-angle-down"></i>
          </button>
          <Select
            multiple
            value={filters.cities}
            onChange={(input) => {
              handleInputChange(input.target.value, inputs.CITIES);
            }}
            input={<Input id="select-multiple-checkbox" />}
            style={{ display: "none" }}
            open={open.cities}
            onClose={() => {
              handleClose(inputs.CITIES);
            }}
            MenuProps={{
              anchorEl: document.getElementById("open-cities-menu"),
            }}
          >
            {cities.map((name, index) => (
              <MenuItem key={name + index} value={name}>
                <Checkbox checked={filters.cities.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </div>
      );
    }
  };

  const showCounties = () => {
    if (
      entityType === radioButtons.COUNTIES ||
      entityType === radioButtons.CITIES
    ) {
      return (
        <div className="menu-item">
          <button
            id="open-departments-menu"
            className="menu-btn"
            onClick={() => {
              handleOpen(inputs.COUNTY);
            }}
          >
            Departamentos <i className="fa fa-angle-down"></i>
          </button>
          <Select
            multiple
            value={filters.county}
            onChange={(input) => {
              handleCountiesChange(input.target.value);
            }}
            input={<Input id="select-multiple-checkbox" />}
            style={{ display: "none" }}
            open={open.county}
            onClose={() => {
              handleClose(inputs.COUNTY);
            }}
            MenuProps={{
              anchorEl: document.getElementById("open-departments-menu"),
            }}
          >
            {counties.map((name, index) => (
              <MenuItem key={name + index} value={name}>
                <Checkbox checked={filters.county.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </div>
      );
    }
  };

  const onEntityTypeChange = (event) => {
    const radioButtonSelect = event.target.value;
    setEntityType(event.target.value);
    if (radioButtonSelect === radioButtons.CITIES) {
      props.setShowCountyView(true);
    } else {
      props.setShowCountyView(false);
    }
  };

  return (
    <div>
      <div className="menu">
        <div className="menu-item">
          <button className="menu-btn">
            Tipo de Entidad <i className="fa fa-angle-down"></i>
          </button>
          <div className="dropdown-content">
            <RadioGroup
              aria-label="tipo-de-entidad"
              defaultValue="departamento"
              name="radio-buttons-group"
              onChange={onEntityTypeChange}
              value={entityType}
            >
              <FormControlLabel
                value={radioButtons.CITIES}
                control={<Radio />}
                label="Municipio"
              />
            </RadioGroup>
          </div>
        </div>
        <div className="menu-item">
          <button
            id="openMenu"
            className="menu-btn"
            onClick={() => {
              handleOpen(inputs.VARIABLES);
            }}
          >
            Indicadores <i className="fa fa-angle-down"></i>
          </button>
          <Select
            multiple
            value={props.selectedVariables}
            onChange={handleVariableChange}
            input={<Input id="select-multiple-checkbox" />}
            style={{ display: "none" }}
            open={open.variables}
            onClose={() => {
              handleClose(inputs.VARIABLES);
            }}
            MenuProps={{
              anchorEl: document.getElementById("openMenu"),
            }}
          >
            {variables.map((name, index) => (
              <MenuItem key={name + index} value={name}>
                <Checkbox
                  checked={props.selectedVariables.indexOf(name) > -1}
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </div>
        {showCounties()}
        {showCities()}
        <div className="menu-item">
          <button
            id="open-years-menu"
            className="menu-btn"
            disabled={loading}
            onClick={() => {
              handleOpen(inputs.YEARS);
            }}
          >
            {" "}
            Años <i className="fa fa-angle-down"></i>
          </button>
          <Select
            multiple
            value={filters.years}
            onChange={(input) => {
              handleInputChange(input.target.value, inputs.YEARS);
            }}
            input={<Input id="select-multiple-checkbox" />}
            style={{ display: "none" }}
            open={open.years}
            onClose={() => {
              handleClose(inputs.YEARS);
            }}
            MenuProps={{
              anchorEl: document.getElementById("open-years-menu"),
            }}
          >
            {years.map((name, index) => (
              <MenuItem key={name + index} value={name}>
                <Checkbox checked={filters.years.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}

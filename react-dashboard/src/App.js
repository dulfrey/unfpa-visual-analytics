import MapArcgis from "./MapArcgis";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Filter } from "./Filter";
import "./styles/App.css";
import ParallelCoordinates from "./ParallelCoordinates";

const App = () => {
  const [data, setData] = useState([]);
  const [showCountyView, setShowCountyView] = useState(false);
  const [selectedVariables, setSelectedVariables] = useState([]);

  const dataTestForMap = [
    {
      name: "Demo 1",
      layerId: 0,
      values: [
        {
          MPIO_CDPMP: 5893,
          MPIO_CNMBR: "YONDÓ",
          COLOR: "#fc0000",
        },
        {
          MPIO_CDPMP: 5895,
          MPIO_CNMBR: "ZARAGOZA",
          COLOR: "#dd6174",
        },
        {
          MPIO_CDPMP: 23001,
          MPIO_CNMBR: "MONTERÍA",
          COLOR: "#ed9189",
        },
        {
          MPIO_CDPMP: 23068,
          MPIO_CNMBR: "AYAPEL",
          COLOR: "#ea5261",
        },
      ],
    },
    {
      name: "Demo 2",
      layerId: 0,
      values: [
        {
          MPIO_CDPMP: 70820,
          MPIO_CNMBR: "Santiago de",
          COLOR: "#fc0000",
        },
        {
          MPIO_CDPMP: 73001,
          MPIO_CNMBR: "Ibagué",
          COLOR: "#dd6174",
        },
        {
          MPIO_CDPMP: 68895,
          MPIO_CNMBR: "Zapatoca",
          COLOR: "#ed9189",
        },
        {
          MPIO_CDPMP: 63001,
          MPIO_CNMBR: "Armenia",
          COLOR: "#ea5261",
        },
      ],
    },
    {
      name: "Demo 3",
      layerId: 1,
      values: [
        {
          DPTO_CCDGO: 5,
          FIRST_DPTO_CNMBR: "Antioquia",
          COLOR: "#fc0000",
        },
        {
          DPTO_CCDGO: 8,
          FIRST_DPTO_CNMBR: "Atlántico",
          COLOR: "#dd6174",
        },
        {
          DPTO_CCDGO: 13,
          FIRST_DPTO_CNMBR: "Bolívar",
          COLOR: "#ed9189",
        },
        {
          DPTO_CCDGO: 17,
          FIRST_DPTO_CNMBR: "Caldas",
          COLOR: "#ea5261",
        },
      ],
    },
  ];

  const [mapData, setMapData] = useState(dataTestForMap);

  useEffect(() => {
    const layerType = showCountyView ? 0 : 1;
    const newMapData = selectedVariables.map((value) => {
      return {
        name: value,
        layerId: layerType,
        values: [
          {
            DPTO_CCDGO: 5,
            FIRST_DPTO_CNMBR: "Antioquia",
            COLOR: "#fc0000",
          },
          {
            DPTO_CCDGO: 8,
            FIRST_DPTO_CNMBR: "Atlántico",
            COLOR: "#dd6174",
          },
          {
            DPTO_CCDGO: 13,
            FIRST_DPTO_CNMBR: "Bolívar",
            COLOR: "#ed9189",
          },
          {
            DPTO_CCDGO: 17,
            FIRST_DPTO_CNMBR: "Caldas",
            COLOR: "#ea5261",
          },
        ],
      };
    });
    if (newMapData.length > 0) {
      setMapData(newMapData);
    }
  }, [selectedVariables, showCountyView]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Filter
          showCountyView={showCountyView}
          setShowCountyView={setShowCountyView}
          selectedVariables={selectedVariables}
          setSelectedVariables={setSelectedVariables}
          setData={setData}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            height: "calc( 100vh - 52px )",
            overflow: "auto",
          }}
        >
          <ParallelCoordinates data={data} />
        </Grid>
        <Grid
          container
          xs={12}
          md={6}
          style={{ minHeight: "80vh" }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            style={{
              width: "50vw",
              height: "40vh",
            }}
          >
            <MapArcgis
              data={mapData}
              realData={data}
              showCountyView={showCountyView}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              width: "50vw",
              height: "40vh",
            }}
          >
            <div style={{ overflow: "auto" }}>
              <p>Panel detalle indicador</p>
              {data.length && (
                <ul>
                  {data.slice(0, 15).map((d) => (
                    <li>{`${d.Divipola} (${d.Municipio} - ${d.Departamento}) tiene ${d.Mujeres} mujeres`}</li>
                  ))}
                </ul>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;

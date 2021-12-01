import React, { useState, useRef, useEffect } from "react";

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import "./styles/Map.css";

function MapArcgis(props) {
  const [layerToShow, setLayerToShow] = useState({
    layerId: props.data[0].layerId,
    dataToRender: props.data[0].values,
  });

  const layers = props.data;
  const mapDiv = useRef(null);
  const DEFAULT_SYMBOL = { type: "simple-fill", color: "#DCDCDC" };
  useEffect(() => {
    let newLayerId = 0;
    if (props.showCountyView) {
      newLayerId = 1;
    }

    const newData = Object.entries(props.realData).map((value) => {
      const newValue = {
        layerId: newLayerId,
        name: Object.values(value),
      };
    });
  }, [props.realData, props.showCountyView]);

  function getField() {
    let field = "";
    if (layerToShow.layerId === 0) {
      field = "MPIO_CDPMP";
    } else if (layerToShow.layerId === 1) {
      field = "DPTO_CCDGO";
    }
    return field;
  }

  function getCodeToRender(attributes) {
    let codeToRender = "";

    if (layerToShow.layerId === 0) {
      codeToRender = attributes.MPIO_CDPMP;
    } else if (layerToShow.layerId === 1) {
      codeToRender = attributes.DPTO_CCDGO;
    }
    return codeToRender;
  }

  function getDataToRenderFrom(value) {
    let color = value["COLOR"];
    let valueRenderID = value["MPIO_CDPMP"];
    if (layerToShow.layerId === 0) {
      valueRenderID = value["MPIO_CDPMP"];
    } else if (layerToShow.layerId === 1) {
      valueRenderID = value["DPTO_CCDGO"];
    }
    return {
      value: valueRenderID,
      symbol: {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: color,
      },
    };
  }
  function getFields() {
    if (layerToShow.layerId === 0) {
    } else if (layerToShow.layerId === 1) {
    }
  }

  function onClickShape(response, layer, uniqueValueInfos) {
    try {
      let graphic = response.results[0].graphic;
      let attributes = graphic.attributes;
      const field = getField();
      const codeToRender = getCodeToRender(attributes);

      let renderer = {
        type: "unique-value", // autocasts as new SimpleRenderer()
        field: field,
        uniqueValueInfos: [
          {
            value: codeToRender,
            symbol: {
              type: "simple-fill", // autocasts as new SimpleFillSymbol()
              color: "blue",
              outline: {
                color: "orange",
                width: 3,
              },
            },
          },
        ],
        defaultSymbol: DEFAULT_SYMBOL, // autocasts as new SimpleFillSymbol()
      };
      layer.renderer = renderer;
    } catch (error) {
      const field = getField();

      let renderer = {
        type: "unique-value", // autocasts as new SimpleRenderer()
        field: field,
        uniqueValueInfos: uniqueValueInfos,
        defaultSymbol: DEFAULT_SYMBOL,
      };
      layer.renderer = renderer;
    }
  }
  function changeLayer(layer) {
    setLayerToShow({
      layerId: layer.layerId,
      dataToRender: layer.values,
    });
  }
  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const map = new Map({
        basemap: "gray",
      });
      const fl = new FeatureLayer({
        portalItem: {
          // autocasts as new PortalItem()
          id: "1e6958a958ac4fcdac8fb14dd97f8734",
        },
        popupEnabled: false,
        // loads the third item in the given feature service
        layerId: layerToShow.layerId,
      });

      var symbol = new SimpleFillSymbol();
      var outline = new SimpleLineSymbol();
      var uniqueValueInfos = [];

      outline.color = "#999999";
      outline.width = 0.5;
      symbol.outline = outline;
      uniqueValueInfos = layerToShow.dataToRender.map((value) => {
        return getDataToRenderFrom(value);
      });
      let renderer = {
        type: "unique-value", // autocasts as new SimpleRenderer()
        field: getField(),
        uniqueValueInfos: uniqueValueInfos,
        defaultSymbol: DEFAULT_SYMBOL,
      };
      fl.renderer = renderer;
      map.add(fl);
      const view = new MapView({
        container: mapDiv.current,
        map: map,
        center: [-74, 5],
        zoom: 6,
      });
      view.on("click", function (event) {
        // event is the event handle returned after the event fires.
        view.hitTest(event).then((response) => {
          onClickShape(response, fl, uniqueValueInfos, props.doSomenthing);
        });
      });
    }
  }, [layerToShow]);

  return (
    <React.Fragment>
      <div className="t-container">
        <ul className="t-tabs">
          {layers.map((layer) => {
            return (
              <li className="t-tab" onClick={() => changeLayer(layer)}>
                {layer.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="mapDiv"
        style={{ width: "50vw", height: "40vh" }}
        ref={mapDiv}
      ></div>
    </React.Fragment>
  );
}

export default MapArcgis;

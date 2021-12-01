import React, {useEffect, useState} from "react";
import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";


function ParallelCoordinates(props) {
  const [data,setData] = useState([])
  const [variables, setVariables] = useState([{
      key: "municipio",
      type: "point",
      padding: 0,
      values: data.map((d) => d.municipio),
      legend: "Municipio",
      legendPosition: "start",
      legendOffset: -20,
  }])

  useEffect(() => {
      function groupByCounty(rows) {
          return Object.values(
              rows.reduce((grouped, curr) => {
                  const countyName = curr.municipio
                  const county = grouped[countyName]
                  return {
                      ...grouped,
                      [countyName]: {
                          ...county,
                          ...curr
                      }
                  }
              }, {})
          )
      }

    if(props.data !== undefined ){
       let newData =  [];
           Object.entries(props.data).forEach(([variable,city])=>{
           Object.entries(city).forEach(([key,value])=>{
               let cityData = {}
               cityData[variable] = Object.entries(value)[0][1][2];
               cityData["municipio"] = key;
               newData.push(cityData);
           })
        })
        if(newData.length>0){
            setVariables(getVariables())
            setData(groupByCounty(newData));
        }
    }
  }, [props.data]);

  const getVariables = () => {
      let variables = [{
          key: "municipio",
          type: "point",
          padding: 0,
          values: data.map((d) => d.municipio),
          legend: "Municipio",
          legendPosition: "start",
          legendOffset: -20,
          color:"red"
      }]
      if(data.length > 0){
          const otherVariables = Object.keys(data[0]).filter(value => value!=='municipio').map(value => {
              return {
                  key: value,
                  type: "linear",
                  min: "auto",
                  max: "auto",
                  ticksPosition: "before",
                  legend: value,
                  legendPosition: "start",
                  legendOffset: 20,
              }
          })
          variables = variables.concat(otherVariables);
      }
      return variables
    }

  return (
    <div style={{ width: "50vw", height: "1500px" }}>
      <ResponsiveParallelCoordinates
        data={data}
        reverse={true}
        variables = {variables}
        // variables={[
        //   {
        //     key: "municipio",
        //     type: "point",
        //     padding: 0,
        //     values: data.map((d) => d.municipio),
        //     legend: "Municipio",
        //     legendPosition: "start",
        //     legendOffset: -20,
        //   },
        //   {
        //     key: "desercion",
        //     type: "linear",
        //     min: "auto",
        //     max: "auto",
        //     ticksPosition: "before",
        //     legend: "Deserción",
        //     legendPosition: "start",
        //     legendOffset: 20,
        //   },
        //   {
        //     key: "embarazos",
        //     type: "linear",
        //     min: "0",
        //     max: "800",
        //     ticksPosition: "before",
        //     legend: "Embarazos",
        //     legendPosition: "start",
        //     legendOffset: 20,
        //   },
        //   {
        //     key: "rmm",
        //     type: "linear",
        //     min: "auto",
        //     max: "auto",
        //     ticksPosition: "before",
        //     legend: "Tasa de mortalidad materna",
        //     legendPosition: "start",
        //     legendOffset: 20,
        //   },
        // ]}
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        colors={{ scheme: "purple_red" }}
        lineOpacity={1}
      />
    </div>
  );
}

export default ParallelCoordinates;

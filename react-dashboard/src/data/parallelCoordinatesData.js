import desercion_original from "./desercion_municipal.json";
import embarazos_original from "./embarazos_adolescentes.json";
import mortalidad_materna_original from "./tasa_mortalidad_materna.json";

const getParallelCoordinatesData = () => {
  const data = desercion_original.map((d) => ({
    divipola: d.divipola,
    departamento: d.departamento,
    municipio: d.municipio,
    desercion: d.desercion,
    embarazos: 0,
    rmm: 0,
  }));

  const _getIndexOfMunicipality = (divipola) => {
    let index = -1;
    let i = 0;
    while (index < 0 && i < data.length) {
      if (data[i]["divipola"] === divipola) index = i;
      else i++;
    }
    return index;
  };

  embarazos_original.forEach((d) => {
    let index = _getIndexOfMunicipality(d.divipola);
    if (index > 0) {
      data[index]["embarazos"] = d["embarazos_adolescentes_2019"];
    }
  });

  const mortalidad_materna_filtrada = mortalidad_materna_original.filter(
    (d) => d.anio === 2019
  );

  mortalidad_materna_filtrada.forEach((d) => {
    let index = _getIndexOfMunicipality(d.divipola);
    if (index > 0) {
      data[index].rmm = d["rmm"];
    }
  });

  return data.slice(1);
};

export default getParallelCoordinatesData;

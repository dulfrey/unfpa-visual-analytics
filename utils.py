import os
import pandas as pd


files = {
    "young_population": "BDI05 Jovenes.xlsx",
    "maternal_mortality_rate": "RMM.xlsx",
    "school_dropout_rate": "BDI 2.0_25. Deserción Educación municipal.xlsx",
    # Archivos no trabajados porque no tienen fecha estandarizada:
    "dead_or_disappeared_for_disaster": "BDI 2.0_15. ODS 11.5.1.xlsx",
    "fecundity_rate_15-19": "BD_18. TEF_15 a 19 años_2008_2019.xlsx",
    "sexual_abuse_rate": "BD_21. VBG_2014_2020.xlsx",
    # Archivos no encontrados:
    "women_contraceptive_proportion_coverage": "BDI 2.0_20. Métodos anticonceptivos.xlsx",
    # Archivos agregados:
    "multidimensional_poverty": "IPMConIndicador.xlsx",
    "special_work_permit_men": "PEP departamental hombres.xlsx",
    "special_work_permit_women": "PEP departamental mujeres.xlsx",
    "young_population_with_indicator": "PorcentajeJovenesConIndicador.xlsx",
    "departamental_desertion_rate": "TasaDesercopmDepartamental.xlsx",
}

nombre_indicadores = {
    "Cantidad de jovenes por municipio"                                                                    : "Porcentaje jovenes",
    "Indice de pobreza multidimensional"                                                                   : "IPM",
    "Porcentaje Jovenes por municipio"                                                                     : "Porcentaje jovenes",
    "Razon de mortalidad materna"                                                                          : "ValorIndicador",
    "Tasa desercion departamental"                                                                         : "Tasa Deserción",
    "Tasa de desercion municipal"                                                                          : "DESERCION",
    "Tasa de analfabetismo"                                                                                : "Tasa de Analfabetismo (Censo 2018)",
    "Cobertura neta en educacion basica departamental"                                                     : "COBERTURA_NETA",
    "Cobertura neta en educacion basica municipal"                                                         : "Cobertura Neta Educación básica primaria, secundaria y media 2019",
    "Índice de Feminización de la Pobreza Multidimensional"                                                : "IPM por jefatura femenina",
    "Proporción de la estimación de migrantes provenientes de Venezuela con respecto a la población total" : "Proporción estimación población proveniente de Venezuela ",
    "Riesgo integral"                                                                                      : "Riesgo Integral 2018",
    "Vulnerabilidad socioeconómica frente a amenaza por inundación"                                        : "Vulnerabilidad física"
}

archivos = {
    "Cantidad de jovenes por municipio"                                                                    : "BDI05 Jovenes.xlsx",
    "Indice de pobreza multidimensional"                                                                   : "Indice de pobreza multidimensional.xlsx",
    "Porcentaje Jovenes por municipio"                                                                     : "Porcentaje Jovenes por municipio.xlsx",
    "Razon de mortalidad materna"                                                                          : "Razon de mortalidad materna.xlsx",
    "Tasa desercion departamental"                                                                         : "Tasa desercion departamental.xlsx",
    "Tasa de desercion municipal"                                                                          : "Tasa de desercion municipal.xlsx",
    "Tasa de analfabetismo"                                                                                : "Tasa de analfabetismo.xlsx",
    "Cobertura neta en educacion basica municipal"                                                         : "Cobertura neta en educacion basicaMunicipal.xlsx",
    "Índice de Feminización de la Pobreza Multidimensional"                                                : "Índice de Feminización de la Pobreza Multidimensional.xlsx",
    "Proporción de la estimación de migrantes provenientes de Venezuela con respecto a la población total" : "Proporción de la estimación de migrantes provenientes de Venezuela con respecto a la población total.xlsx",
    "Riesgo integral"                                                                                      : "Riesgo integral.xlsx",
    "Tasa de violencia sexual"                                                                             : "Tasa de violencia sexual.xlsx",
    "Vulnerabilidad socioeconómica frente a amenaza por inundación"                                        : "Vulnerabilidad socioeconómica frente a amenaza por inundación.xlsx"
}


def get_json_from_file(filename: str):
    df = pd.read_excel(
        os.path.join("data", filename),
        engine="openpyxl",
    )
    return df.to_json(orient="records")


def filtro_dar_anios(indicadores):
    anios = []
    for indicador in indicadores:
        df = pd.read_excel(
            os.path.join("data", archivos[indicador]),
            engine="openpyxl",
        )
        anios.append(set(df["Anio"].unique()))
    return list(map(int, list(set.intersection(*anios))))


def filtro_dar_municipios(indicadores):
    municipios = []
    for indicador in indicadores:
        df = pd.read_excel(
            os.path.join("data", archivos[indicador]),
            engine="openpyxl",
        )
        municipios.append(set(df["Municipio"].unique()))
    return list(set.intersection(*municipios)).sort()


def filtro_dar_anios_indicadoresymunicipios(indicadores, municipios):
    anios = []
    for indicador in indicadores:
        df = pd.read_excel(
            os.path.join("data", archivos[indicador]),
            engine="openpyxl",
        )
        anios.append(set(df["Anio"].unique()))
    return list(map(int, list(set.intersection(*anios)))).sort()


def dar_indicadores():
    return list(archivos.keys())


def dar_municipios():
    df = pd.read_excel(
        os.path.join("data", "municipiosydepartamentos.xlsx"),
        engine="openpyxl",
    )
    return list(df["Municipio"].unique())


def dar_departamentos():
    df = pd.read_excel(
        os.path.join("data", "municipiosydepartamentos.xlsx"),
        engine="openpyxl",
    )
    return list(df["Departamento"].unique())


def dar_municipios_pertenecientes_departamento(departamentos):
    municipios = {}
    departamentos_excel = pd.read_excel(
        os.path.join("data", "municipiosydepartamentos.xlsx"),
        engine="openpyxl",
    )
    for departamento in departamentos:
        municipios[departamento] = list(
            departamentos_excel.groupby("Departamento").get_group(departamento)["Municipio"])
    return municipios


def dar_datos(indicadores, municipios, anios):
    dic_indicadores = {}
    for indicador in indicadores:
        df = pd.read_excel(
            os.path.join("data", archivos[indicador]),
            engine="openpyxl",
        )
        dic_municipios = {}
        for municipio in municipios:
            dic_anios = {}
            for anio in anios:
                df_filtrado = df[(df["Municipio"] == municipio) & (df["Anio"] == anio)]
                dic_anios[anio] = ((df_filtrado["Indicador"].values)[0], (df_filtrado["Color"].values)[0],
                                   (df_filtrado[nombre_indicadores[indicador]].values)[0],
                                   int((df_filtrado["Divipola"].values)[0]))
            dic_municipios[municipio] = dic_anios
        dic_indicadores[indicador] = dic_municipios
    return dic_indicadores


def indicadores_departamentales():
    return ["Tasa desercion departamental", "Cobertura neta en educacion basica departamental"]

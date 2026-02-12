import { ServiceEnum, type ServiceProps } from "./types";

export const SERVICE_DEFINITIONS: ServiceProps[] = [
  {
    title: "Incorporação",
    backgroundImage: ServiceEnum.INCORPORATION
  },
  {
    title: "Construção",
    backgroundImage: ServiceEnum.CONSTRUCTION
  },
  {
    title: "Gerenciamento de Obra",
    backgroundImage: ServiceEnum.MANAGEMENT
  },
  {
    title: "Elaboração de Projetos",
    backgroundImage: ServiceEnum.PROJECTS
  }
];

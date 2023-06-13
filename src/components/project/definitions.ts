import { ProjectEnum, type ProjectProps } from "./types";

export const PROJECT_DEFINITIONS: ProjectProps[] = [
  {
    title: "Novo Residence",
    text: "Localizado no setor norte de Florianópolis, no bairro João Paulo, perto das praias e do centro de Florianópolis.",
    subtext: "Venha viver essa experiência.",
    background: ProjectEnum.NOVO_RESIDENCE,
    link: "/novo-residence"
  },
  {
    title: "Jabuticabeira ii",
    text: "Localizado no Ribeirão Da Ilha, a 10 min da praia do Novo Campeche e 4 min da praia do Morro das Pedras. Um empreendimento com elegância, qualidade, e arquitetura moderna.",
    subtext: "",
    background: ProjectEnum.JABUTICABEIRA,
    link: "/jabuticabeira-ii"
  },
  {
    title: "View",
    text: "Um empreendimento visionário, para experimentar a vida com um novo olhar.",
    subtext: "",
    background: ProjectEnum.VIEW,
    link: "/view"
  }
];

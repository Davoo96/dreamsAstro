import { type ProjectProps } from "./types";
import novoResidence from "@images/pht-03.png";
import jabuticabeira from "@images/pht-04.png";
import view from "@images/pht-36.png";

export const PROJECT_DEFINITIONS: ProjectProps[] = [
  {
    title: "Novo Residence",
    text: "Localizado no setor norte de Florianópolis, no bairro João Paulo, perto das praias e do centro de Florianópolis.",
    subtext: "Venha viver essa experiência.",
    background: novoResidence,
    link: "/novoresidence"
  },
  {
    title: "Jabuticabeira ii",
    text: "Localizado no Ribeirão Da Ilha, a 10 min da praia do Novo Campeche e 4 min da praia do Morro das Pedras. Um empreendimento com elegância, qualidade, e arquitetura moderna.",
    subtext: "",
    background: jabuticabeira,
    link: "/jabuticabeiraii"
  },
  {
    title: "View",
    text: "Um empreendimento visionário, para experimentar a vida com um novo olhar.",
    subtext: "",
    background: view,
    link: "/view"
  }
];

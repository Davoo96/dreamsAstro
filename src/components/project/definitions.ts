import { type ProjectProps } from "./types";
import novoResidence from "@images/pht-03.png";
import jabuticabeira from "@images/pht-04.png";
import view from "@images/pht-36.png";
import rooftop from "@images/pht-56.jpg";
import rooftop2 from "@images/rooftopPortalRibeirao.jpg";

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
    link: "/jabuticabeira"
  },
  {
    title: "View Residence",
    text: "Um empreendimento visionário, para experimentar a vida com um novo olhar.",
    subtext: "",
    background: view,
    link: "/view"
  },
  {
    title: "Rooftop Residences I",
    text: "Uma nova forma de desfrutar o pôr do sol",
    subtext: "",
    background: rooftop,
    link: "/rooftopresidences"
  },
  {
    title: "Rooftop Residences II",
    text: "Experimentar o pôr do sol ao lado de vistas deslumbrantes",
    subtext: "",
    background: rooftop2,
    link: "/rooftopresidencesii"
  }
];

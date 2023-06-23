export enum ValueEnum {
  TRUST = "TRUST",
  RESPECT = "RESPECT",
  TRANSPARENCY = "TRANSPARENCY",
  QUALITY = "QUALITY",
  ETHICS = "ETHICS",
  COLABORATION = "COLABORATION",
  RESPONSABILITY = "RESPONSABILITY",
  INNOVATION = "INNOVATION"
}

export type ValueProps = {
  label: string;
  icon: ValueEnum;
};

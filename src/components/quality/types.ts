export enum IconName {
  SAFETY = "SAFETY",
  EFFICIENCY = "EFFICIENCY",
  PLANNING = "PLANNING",
  QUALITY = "QUALITY"
}

export type QualitiesProps = {
  title: string;
  text: string;
  iconName: IconName;
};

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
  }[];
}

export type MarketChartDays = 1 | 7 | 30 | 365;
export interface MarketChartDaysList {
  text: string
  value: MarketChartDays
}

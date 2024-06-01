import { MarketChartFormattedData } from "@/api/bitcoin/marketChart.interface";

export const getChartDataset = (data: number[]) => {
  return {
    label: "",
    data,
    borderColor: "#fff",
    backgroundColor: "transparent",
    fill: true,
  };
};

export const getLastArrayValue = (data: MarketChartFormattedData) => {
  return data.price[data.price.length - 1];
};

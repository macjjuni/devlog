import { FormattedData } from "@/api/bitcoin/coinGecko";


export const getChartDataset = (data: number[]) => {
  return {
    label: "",
    data,
    borderColor: "#fff",
    backgroundColor: "transparent",
    fill: true,
  };
};

export const getLastArrayValue = (data: FormattedData) => {
  return data.price[data.price.length - 1];
};

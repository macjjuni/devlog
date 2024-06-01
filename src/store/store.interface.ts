import { MarketChartDays } from "@/component/sidebar/bitcoinChart/bitcoinMarketChart.interface";


export interface ChartData {
  date: number[]
  price: number[]
  timeStamp: number
}

export interface BtcChart {
  "1": ChartData
  "7": ChartData
  "30": ChartData
  "365": ChartData
}

export interface StoreProps {
  isHeaderMini: boolean;
  setIsHeaderMini: (bool: boolean) => void;
  btcChart: BtcChart
  setBtcChart: (value: MarketChartDays, data: ChartData) => void
}

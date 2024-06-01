// 코인게코 API 엔드포인트
import { MarketChartFormattedData, MarketChartParams, MarketChartResponseData } from "@/api/bitcoin/marketChart.interface";
import { useStore } from "@/store/store";
import { MarketChartDays } from "@/component/sidebar/bitcoinChart/bitcoinMarketChart.interface";
import { isOneMinutesPassed } from "@/lib/date";

const url = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart";

// Parameters
function createParams(params: MarketChartParams): URLSearchParams {
  return new URLSearchParams({
    vs_currency: params.vs_currency,
    days: params.days.toString(), // 숫자를 문자열로 변환
  });
}

const params: MarketChartParams = {
  vs_currency: "usd",
  days: 7,
};

export async function getBtcRangeData(days: MarketChartDays): Promise<MarketChartFormattedData> {
  const btcChartData = useStore.getState().btcChart[days];
  const isAllow = isOneMinutesPassed(btcChartData.timeStamp, Date.now());

  if (isAllow) {
    const searchParams = createParams({ ...params, days });

    try {
      const response = await fetch(`${url}?${searchParams.toString()}`);
      const data: MarketChartResponseData = await response.json();

      // 데이터 추출 및 가공
      const formattedData: MarketChartFormattedData = {
        price: data.prices.map((price) => price[1]),
        date: data.prices.map((price) => price[0]),
      };

      useStore.getState().setBtcChart(days, { ...formattedData, timeStamp: Date.now() });

      return formattedData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return { price: [], date: [] };
    }
  } else {
    return {
      price: btcChartData.price,
      date: btcChartData.date,
    };
  }
}

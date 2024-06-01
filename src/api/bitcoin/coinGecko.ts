// 코인게코 API 엔드포인트
const url = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart";

interface CoinGeckoParams {
  vs_currency: string;
  days: number;
}

interface CoinGeckoResponseData {
  market_caps: Array<number[]>;
  prices: Array<number[]>;
  total_volumes: Array<number[]>;
}

export interface FormattedData {
  price: number[];
  date: number[];
}

// Parameters
function createParams(params: CoinGeckoParams): URLSearchParams {
  return new URLSearchParams({
    vs_currency: params.vs_currency,
    days: params.days.toString(), // 숫자를 문자열로 변환
  });
}

const params: CoinGeckoParams = {
  vs_currency: "usd",
  days: 7,
};

export async function getBtcRangeData(days: number): Promise<FormattedData> {
  const searchParams = createParams({...params, days});

  try {
    const response = await fetch(`${url}?${searchParams.toString()}`);
    const data: CoinGeckoResponseData = await response.json();

    // 데이터 추출 및 가공
    const formattedData: FormattedData = {
      price: data.prices.map((price) => price[1]),
      date: data.prices.map((price) => price[0]),
    };

    return formattedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { price: [], date: [] };
  }
}

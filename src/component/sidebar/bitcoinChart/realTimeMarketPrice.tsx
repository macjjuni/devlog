import { memo, useEffect, useMemo } from "react";
import initRealTimeMarketPriceUSD from "@/api/bitcoin/realtimeMarketPriceUSD";
import { useStore } from "@/store/store";

function RealTimeMarketPrice() {
  const btcUSD = useStore((state) => state.realTimeMarketPriceUSD);

  const formattedPrice = useMemo(() => {
    const [integerPart, decimalPart] = btcUSD.split(".");

    const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return decimalPart ? `${integerWithCommas}.${decimalPart}` : integerWithCommas;
  }, [btcUSD]);

  useEffect(() => {
    initRealTimeMarketPriceUSD();
  }, []);

  return <span>{`$${formattedPrice}`}</span>;
}

export default memo(RealTimeMarketPrice);

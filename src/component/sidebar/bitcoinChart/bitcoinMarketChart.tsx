"use client";

import { memo, useState, useRef, useEffect, useCallback, useMemo } from "react";
import useMediaScreen from "@/hook/useMediaScreen";
import { KButton } from "kku-ui";
import { getBtcRangeData } from "@/api/bitcoin/marketChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Tooltip, Legend, LineElement } from "chart.js";
import type { ChartData, MarketChartDaysList } from "@/component/sidebar/bitcoinChart/bitcoinMarketChart.interface";
import { getChartDataset, getLastArrayValue } from "@/component/sidebar/bitcoinChart/chart";
import "./bitcoinMarketChart.scss";

// Chart.js 컴포넌트 등록
ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend, LineElement);

const marketChartDays: MarketChartDaysList[] = [
  { text: "1D", value: 1 },
  { text: "1W", value: 7 },
  { text: "1M", value: 30 },
  { text: "1Y", value: 365 },
];

function BitcoinMarketChart() {
  // region [Hooks]

  const [cost, setCost] = useState<string>("");
  const [days, setDays] = useState<1 | 7 | 30 | 365>(1);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const isTablet = useMediaScreen("md");

  const costRef = useRef<HTMLParagraphElement>(null);
  const chartRef = useRef<ChartJS<"line", number[], string>>();

  // endregion

  // region [Privates]

  const setCostTransparent = useCallback((isTransparent: boolean) => {

    if (!isTransparent) {
      costRef.current?.classList.add("bitcoin__chart__title__cost__loaded");
    } else {
      costRef.current?.classList.remove("bitcoin__chart__title__cost__loaded");
    }
  }, []);

  const isActiveButtonClass = useCallback((value: number) => {

    if (days === value) { return "bitcoin__chart__button--active"; }

    return "";
  }, [days]);

  const calculateDelay = useMemo(() => {

    const dataLength = chartData.datasets[0]?.data.length || 365;

    return dataLength / 900;
  }, [chartData]);

  const changeDays = useCallback((day: 1 | 7 | 30 | 365) => {
    setDays(day);
  }, []);

  // endregion

  // region [Transaction]

  const getListBtcPrice = useCallback(() => {

    setCostTransparent(true);

    getBtcRangeData(days).then((data) => {

      setChartData({
        labels: data.date.map((timestamp) => new Date(timestamp).toLocaleDateString()), // 날짜를 라벨로 설정
        datasets: [getChartDataset(data.price)],
      });

      const costValue = getLastArrayValue(data).toFixed(2);
      setCost(costValue);
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, [days]);

  // endregion

  // region [Events]
  // endregion

  // region [Effects]

  useEffect(() => {
    if (isTablet !== null) { chartRef.current!.resize(); }
  }, [isTablet]);

  useEffect(() => {
    getListBtcPrice();
  }, [days]);

  // endregion

  return (
    <div className={"bitcoin__chart"}>
      <div className={"bitcoin__chart__title"}>
        <p className={"bitcoin__chart__title__text"}>Bitcoin</p>
        <p ref={costRef} className={"bitcoin__chart__title__cost"}>{`$${cost}`}</p>
      </div>
      <Line
        ref={chartRef}
        data={chartData}
        options={{
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          elements: { point: { radius: 0 }, line: { tension: 0.36, borderWidth: 1.5 } },
          scales: { x: { display: false }, y: { display: false } },
          animation: {
            duration: 800,
            easing: "easeInOutQuart",
            onComplete(ctx) {
              if (!ctx.initial) {
                setCostTransparent(false);
              }
            },
          },
          animations: {
            x: {
              type: "number",
              easing: "easeInOutQuart",
              duration: 1000,
              from: NaN, // NaN에서 시작하여 데이터의 처음 값으로 애니메이션
              delay(ctx) {
                if (ctx.type !== "data" || ctx.mode !== "default") {
                  return 0;
                }
                return ctx.dataIndex * calculateDelay;
              },
            },
            y: {
              type: "number",
              easing: "easeInOutQuart",
              duration: 1000,
              from: (ctx) => {
                if (ctx.type === "data" && ctx.mode === "default") {
                  return ctx.chart.scales.y.getPixelForValue(0); // y 축의 시작점을 0으로 설정
                }
              },
            },
          },
        }}
      />
      <div className="bitcoin__chart__button__group">
        {marketChartDays.map((marketChartDay) => (
          <KButton key={marketChartDay.value} className={`bitcoin__chart__button ${isActiveButtonClass(marketChartDay.value)}`} small onClick={() => changeDays(marketChartDay.value)}>
            {marketChartDay.text}
          </KButton>
        ))}
      </div>
    </div>
  );
}

export default memo(BitcoinMarketChart);

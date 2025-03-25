"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import useMediaScreen from "@/hook/useMediaScreen";
import { KButton } from "kku-ui";
import { getBtcRangeData } from "@/api/bitcoin/marketChart";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Tooltip } from "chart.js";
import type { ChartData, MarketChartDaysList } from "@/components/sidebar/bitcoinChart/bitcoinMarketChart.interface";
import RealTimeMarketPrice from "@/components/sidebar/bitcoinChart/realTimeMarketPrice";
import { onlyBtcHref } from "@/config/notion.config";
import "./bitcoinMarketChart.scss";

// Chart.js 컴포넌트 등록
ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend, LineElement);

const marketChartDays: MarketChartDaysList[] = [
  { text: "1D", value: 1 },
  { text: "1W", value: 7 },
  { text: "1M", value: 30 },
  { text: "1Y", value: 365 },
];

export const generateChartData = (data: number[]) => {
  return { label: "", data, borderColor: "#fff", backgroundColor: "transparent", fill: true };
};

function BitcoinMarketChart() {
  // region [Hooks]

  const [days, setDays] = useState<1 | 7 | 30 | 365>(1);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const chartRef = useRef<ChartJS<"line", number[], string>>();

  const isTablet = useMediaScreen("md");

  // endregion

  // region [Privates]

  const isActiveButtonClass = useCallback(
    (value: number) => {
      if (days === value) {
        return "bitcoin__chart__button--active";
      }
      return "";
    },
    [days],
  );

  const applyDayInChart = useCallback((day: 1 | 7 | 30 | 365) => {
    setDays(day);
  }, []);

  // endregion

  // region [Events]

  const onClickChangeDays = useCallback((day: 1 | 7 | 30 | 365) => {
    applyDayInChart(day);
  }, []);

  const onClickBitcoinChart = useCallback(() => {
    const anchorTag = document.createElement("a");

    anchorTag.setAttribute("target", "_blank");
    anchorTag.setAttribute("href", onlyBtcHref);
    anchorTag.click();
  }, []);

  // endregion

  // region [Transaction]

  const getListBtcPrice = useCallback(() => {
    getBtcRangeData(days)
      .then((data) => {
        setChartData({
          labels: data.date.map((timestamp) => new Date(timestamp).toLocaleDateString()), // 날짜를 라벨로 설정
          datasets: [generateChartData(data.price)],
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [days]);

  // endregion

  // region [Effects]

  useEffect(() => {
    if (isTablet !== null) {
      chartRef.current!.resize();
    }
  }, [isTablet]);

  useEffect(() => {
    getListBtcPrice();
  }, [days]);

  // endregion

  return (
    <div className={"bitcoin__chart"}>
      <div className={"bitcoin__chart__title__container"} onClick={onClickBitcoinChart}>
        <p className={"bitcoin__chart__title__text"}>Bitcoin</p>
        <p className={"bitcoin__chart__title__cost"}>
          <RealTimeMarketPrice />
        </p>
      </div>
      <Line
        ref={chartRef}
        data={chartData}
        onClick={onClickBitcoinChart}
        options={{
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          elements: { point: { radius: 0 }, line: { tension: 0.36, borderWidth: 1.5 } },
          scales: { x: { display: false }, y: { display: false } },
          animation: { duration: 800, easing: "easeInOutQuart" },
          animations: {
            x: {
              type: "number",
              easing: "easeInOutQuart",
              duration: 1000,
              from: NaN, // NaN에서 시작하여 데이터의 처음 값으로 시작
              delay({ type, mode, chart, dataIndex }) {
                if (type !== "data" || mode !== "default") {
                  return 0;
                }
                return dataIndex * (1000 / chart.data.datasets[0].data.length);
              },
            },
            y: {
              type: "number",
              easing: "easeInOutQuart",
              duration: 1000,
              from: ({ type, mode, chart }) => {
                if (type === "data" && mode === "default") {
                  return chart.scales.y.getPixelForValue(0); // y 축의 시작점을 0으로 설정
                }
              },
            },
          },
        }}
      />
      <div className="bitcoin__chart__button__group">
        {marketChartDays.map((marketChartDay) => (
          <KButton key={marketChartDay.value} size={"small"} onClick={() => onClickChangeDays(marketChartDay.value)}
            className={`bitcoin__chart__button ${isActiveButtonClass(marketChartDay.value)}`}>
            {marketChartDay.text}
          </KButton>
        ))}
      </div>
    </div>
  );
}

export default memo(BitcoinMarketChart);

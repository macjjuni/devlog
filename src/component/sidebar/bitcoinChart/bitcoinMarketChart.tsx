"use client";

import { memo, useState, useRef, useEffect, useCallback } from "react";
import useMediaScreen from "@/hook/useMediaScreen";
import { KButton } from "kku-ui";
import { getBtcRangeData } from "@/api/bitcoin/marketChart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Tooltip, Legend, LineElement } from "chart.js";
import type { ChartData, MarketChartDaysList } from "@/component/sidebar/bitcoinChart/bitcoinMarketChart.interface";
import { getChartDataset } from "@/component/sidebar/bitcoinChart/chart";
import RealTimeMarketPrice from "@/component/sidebar/bitcoinChart/realTimeMarketPrice";
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

  const [days, setDays] = useState<1 | 7 | 30 | 365>(1);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const chartRef = useRef<ChartJS<"line", number[], string>>();

  const isTablet = useMediaScreen("md");

  // endregion

  // region [Privates]

  const isActiveButtonClass = useCallback((value: number) => {

      if (days === value) { return "bitcoin__chart__button--active"; }
      return "";
    }, [days]);

  // endregion

  // region [Events]

  const onClickChangeDays = useCallback((day: 1 | 7 | 30 | 365) => {
    setDays(day);
  }, []);

  // endregion

  // region [Transaction]

  const getListBtcPrice = useCallback(() => {
    getBtcRangeData(days)
      .then((data) => {
        setChartData({
          labels: data.date.map((timestamp) => new Date(timestamp).toLocaleDateString()), // 날짜를 라벨로 설정
          datasets: [getChartDataset(data.price)],
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [days]);

  // endregion

  // region [Events]
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
      <div className={"bitcoin__chart__title__container"}>
        <p className={"bitcoin__chart__title__text"}>Bitcoin</p>
        <p className={"bitcoin__chart__title__cost"}>
          <RealTimeMarketPrice />
        </p>
      </div>
      <Line
        ref={chartRef}
        data={chartData}
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
              delay(ctx) {
                if (ctx.type !== "data" || ctx.mode !== "default") {
                  return 0;
                }
                // 데이터 포인트의 총 개수
                const totalPoints = ctx.chart.data.datasets[0].data.length;
                // 각 데이터 포인트에 대한 지연 시간 계산
                const totalDuration = 1000; // 전체 애니메이션 시간 (1000ms)
                const delayPerPoint = totalDuration / totalPoints;
                return ctx.dataIndex * delayPerPoint;
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
          <KButton key={marketChartDay.value} small onClick={() => onClickChangeDays(marketChartDay.value)}
            className={`bitcoin__chart__button ${isActiveButtonClass(marketChartDay.value)}`}>
            {marketChartDay.text}
          </KButton>
        ))}
      </div>
    </div>
  );
}

export default memo(BitcoinMarketChart);

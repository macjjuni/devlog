"use client";

import { memo, useState, useRef, useEffect, useCallback, useMemo } from "react";
import useMediaScreen from "@/hook/useMediaScreen";
import { KButton } from "kku-ui";
import { getBtcRangeData } from "@/api/bitcoin/coinGecko";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Tooltip, Legend, LineElement } from "chart.js";
import { type ChartData } from "@/component/sidebar/bitcoinChart/bitcoinChart.interface";
import { getChartDataset, getLastArrayValue } from "@/component/sidebar/bitcoinChart/chart";
import "./bitcoinChart.scss";

// Chart.js 컴포넌트 등록
ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend, LineElement);

function BitcoinChart() {
  // region [Hooks]

  const [cost, setCost] = useState<string>("");
  const [days, setDays] = useState<1 | 7 | 30 | 365>(7);
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
    getBtcRangeData(days)
      .then((data) => {
        setChartData({
          labels: data.date.map((timestamp) => new Date(timestamp).toLocaleDateString()), // 날짜를 라벨로 설정
          datasets: [getChartDataset(data.price)],
        });
        const costValue = getLastArrayValue(data).toFixed(2);
        setCost(costValue);
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
      <div className={"bitcoin__chart__title"}>
        <p className={"bitcoin__chart__title__text"}>{`Bitcoin(${days})`}</p>
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
        <KButton onClick={() => changeDays(1)} className="bitcoin__chart__button" small>
          1D
        </KButton>
        <KButton onClick={() => changeDays(7)} className="bitcoin__chart__button" small>
          1W
        </KButton>
        <KButton onClick={() => changeDays(30)} className="bitcoin__chart__button" small>
          1M
        </KButton>
        <KButton onClick={() => changeDays(365)} className="bitcoin__chart__button" small>
          1Y
        </KButton>
      </div>
    </div>
  );
}

export default memo(BitcoinChart);

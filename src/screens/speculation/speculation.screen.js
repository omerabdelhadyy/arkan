import React from "react";
import style from "./style.module.css";
import Card from "../../component/cardSpeculation/card.component";

export default function Speculation() {
  const dataChart = [
    { name: "Page A", uv: 2000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 5000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 5000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 4080, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 3090, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2090, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 4490, pv: 4300, amt: 2100 },
    { name: "Page C", uv: 4000, pv: 6800, amt: 2290 },
    { name: "Page D", uv: 4080, pv: 7908, amt: 2000 },
    { name: "Page E", uv: 3090, pv: 9800, amt: 2181 },
    { name: "Page F", uv: 2090, pv: 3800, amt: 1500 },
    { name: "Page G", uv: 1090, pv: 4300, amt: 2100 },
  ];
  const dataChart2 = [
    { name: "Page A", uv: 5000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 1000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2500, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 4080, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 3090, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 6090, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 2490, pv: 4300, amt: 2100 },
    { name: "Page C", uv: 4000, pv: 6800, amt: 2290 },
    { name: "Page D", uv: 8080, pv: 7908, amt: 2000 },
    { name: "Page E", uv: 3090, pv: 9800, amt: 2181 },
    { name: "Page F", uv: 7090, pv: 3800, amt: 1500 },
    { name: "Page G", uv: 1090, pv: 4300, amt: 2100 },
  ];
  const dataChart3 = [
    { name: "Page A", uv: 2000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 4000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 9000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 680, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 3090, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2090, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 7490, pv: 4300, amt: 2100 },
    { name: "Page C", uv: 4000, pv: 6800, amt: 2290 },
    { name: "Page D", uv: 8080, pv: 7908, amt: 2000 },
    { name: "Page E", uv: 3090, pv: 9800, amt: 2181 },
    { name: "Page F", uv: 2090, pv: 3800, amt: 1500 },
    { name: "Page G", uv: 2090, pv: 4300, amt: 2100 },
  ];
  const data = [
    {
      email: "A I Blue",
      image:
        "https://cdn.pixabay.com/photo/2021/09/06/12/40/cryptocurrency-6601591__340.jpg",
      FEE: "10%",
      RETURN: "45%",
      POSITIONS: "20%",
      chart: dataChart,
      people: "160",
      Duration: "20",
    },
    {
      email: "Delta - Orange Strategy",
      image:
        "https://previews.123rf.com/images/antiv/antiv1802/antiv180200012/95684351-technological-background-with-the-crypto-currency-bitcoin.jpg",
      FEE: "20%",
      RETURN: "35%",
      POSITIONS: "10%",
      chart: dataChart2,
      people: "120",
      Duration: "35",
    },
    {
      email: "Trade For Impact",
      image:
        "https://thumbs.dreamstime.com/b/technological-background-crypto-currency-bitcoin-d-render-illustration-inscribed-circle-around-surrounded-110874147.jpg",
      FEE: "30%",
      RETURN: "40%",
      POSITIONS: "0%",
      chart: dataChart3,
      people: "100",
      Duration: "40",
    },
  ];
  return (
    <div className={style.continer}>
      {data?.map?.((item, index) => {
        return <Card item={item} />;
      })}
    </div>
  );
}

import React from "react";
import { useGetDashboardQuery } from "../../redux/apis/apis";
import { Chart } from "react-google-charts";

const index = () => {
  const { data } = useGetDashboardQuery();

  const chartData = [
    ["", "Total Todos", "Completed", "Pending"],
    ["", data?.totalTodos, data?.completedTodos, data?.pendingTodos],
  ];
  const options = {
    chart: {
      title: "Todos DashBoard",
      subtitle: "CRUD, Operations Based Todo App",
    },
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-[40vw] p-2">
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={chartData}
          options={options}
        />
      </div>
    </div>
  );
};

export default index;

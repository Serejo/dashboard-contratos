import Grid from "@mui/material/Grid2";
import { ChartCardProps } from "../interfaces/ChartCardProps";
import Chart from "react-apexcharts";

function ExpirationContractsChart() {
  return (
    <Grid size={{ xs: 12, sm: 8, md: 6, lg: 6 }}>
      <ChartCard title="Expiração de Contratos">
        <Chart
          type="line"
          width="640"
          series={[{ name: "Contratos", data: [10, 30, 20, 40, 50] }]}
          options={{
            chart: { id: "contract-expiry-chart" },
            xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
          }}
        />
      </ChartCard>
    </Grid>
  );

  function ChartCard({ title, children }: ChartCardProps) {
    return (
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        {children}
      </div>
    );
  }
}

export default ExpirationContractsChart;

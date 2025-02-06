import Grid from "@mui/material/Grid2";
import { ChartCardProps } from "../interfaces/ChartCardProps";
import Chart from "react-apexcharts";

function MetricsChart() {
  return (
    <Grid size={{ xs: 12, sm: 8, md: 6, lg: 6 }}>
      <ChartCard title="Distribuição por Status">
        <Chart
          type="pie"
          series={[40, 30, 20, 10]}
          width="500"
          options={{
            labels: ["Ativo", "Expirado", "Renovação", "Consultoria"],
          }}
        />
      </ChartCard>
    </Grid>
  );
}

function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}
export default MetricsChart;

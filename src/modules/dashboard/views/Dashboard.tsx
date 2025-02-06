import { useState } from "react";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import Chart from "react-apexcharts";
import { Alarm, EventNote, Money } from "@mui/icons-material";
import { BarChart } from "lucide-react";
import FloatingActionButton from "../components/FloatingActionButton";
import { Contract } from "../interfaces/Contract";
import ContractGrid from "../components/ContractGrid";

function Dashboard() {
  const [contracts] = useState<Contract[]>([
    {
      id: 1,
      client: "Empresa Alpha",
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      status: "Ativo",
      value: 50000,
      type: "Serviço",
    },
    {
      id: 2,
      client: "Empresa Beta",
      startDate: "2024-03-15",
      endDate: "2025-03-15",
      status: "Pendente Renovação",
      value: 30000,
      type: "Consultoria",
    },
  ]);

  const metrics = [
    {
      title: "Total de Contratos",
      value: contracts.length,
      icon: <EventNote />,
    },
    { title: "Contratos Ativos", value: 20, icon: <BarChart /> },
    { title: "Prox. ao Vencimento", value: 5, icon: <Alarm /> },
    {
      title: "Total dos Contratos",
      value: "R$ 100.000,00",
      icon: <Money />,
    },
  ];

  return (
    <>
      <Grid
        container
        style={{
          color: "black",
          maxWidth: "100%",
          overflow: "hidden",
          margin: "1rem",
        }}
      >
        {/* Cartões de Métricas */}
        <Grid
          container
          spacing={2}
          className=""
          size={12}
          style={{
            gap: "1rem",
            justifyContent: "center",
            marginTop: "1rem",
            flexFlow: "nowrap",
          }}
        >
          {metrics.map((metric, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                elevation={0.5}
                sx={{
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  ":hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <IconButton color="primary" size="large">
                    {metric.icon}
                  </IconButton>
                  <div>
                    <Typography fontWeight="bold" noWrap title={metric.title}>
                      {metric.title}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {metric.value}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Gráficos */}
        <Grid container spacing={2} className="my-6" size={{ xs: 12 }}>
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
        </Grid>

        <ContractGrid contracts={contracts} />
      </Grid>
      <FloatingActionButton />
    </>
  );
}

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default Dashboard;

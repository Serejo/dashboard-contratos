import { useState } from "react";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import Chart from "react-apexcharts";
import { Alarm, EventNote, Money } from "@mui/icons-material";
import { BarChart } from "lucide-react";
import FloatingActionButton from "../components/FloatingActionButton";
interface Contract {
  id: number;
  client: string;
  startDate: string;
  endDate: string;
  status: string;
  value: number;
  type: string;
}
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

        {/* Tabela de Contratos */}
        <div
          className="my-6 bg-white rounded shadow-md"
          style={{
            backgroundColor: "#fefefe",
            borderRadius: "1rem",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.01)",
          }}
        >
          <h2 className="text-lg font-bold p-4">Tabela de Contratos</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Cliente</th>
                <th className="p-3">Data de Início</th>
                <th className="p-3">Data de Vencimento</th>
                <th className="p-3">Status</th>
                <th className="p-3">Valor</th>
                <th className="p-3">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {contracts.length > 0 ? (
                contracts.map((contract) => (
                  <tr key={contract.id} className="border-b">
                    <td className="p-3">{contract.id}</td>
                    <td className="p-3">{contract.client}</td>
                    <td className="p-3">{contract.startDate}</td>
                    <td className="p-3">{contract.endDate}</td>
                    <td className="p-3">{contract.status}</td>
                    <td className="p-3">{contract.value}</td>
                    <td className="p-3">{contract.type}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-3 text-center" colSpan={7}>
                    Nenhum contrato cadastrado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Grid>
      <FloatingActionButton />
    </>
  );
}

// interface MetricCardProps {
//   title: string;
//   value: number | string;
// }

// function MetricCard({ title, value }: MetricCardProps) {
//   return (
//     <div className="bg-white p-4 rounded shadow-md">
//       <h3 className="text-lg font-bold text-gray-700">{title}</h3>
//       <p className="text-2xl font-semibold text-blue-600">{value}</p>
//     </div>
//   );
// }

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

import { useState } from "react";
import Grid from "@mui/material/Grid2";

import { Alarm, EventNote, Money } from "@mui/icons-material";
import { BarChart } from "lucide-react";
import FloatingActionButton from "../components/FloatingActionButton";
import { Contract } from "../interfaces/Contract";
import ContractGrid from "../components/ContractGrid";
import MetricsChart from "../components/MetricsChart";
import ExpirationContractsChart from "../components/ExpirationContractsChart";
import { Metric } from "../interfaces/Metric";
import MetricCards from "../components/MetricCards";

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

  const metrics: Metric[] = [
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
        <MetricCards metrics={metrics} />

        <Grid container spacing={2} className="my-6" size={{ xs: 12 }}>
          <MetricsChart />
          <ExpirationContractsChart />
        </Grid>

        <ContractGrid contracts={contracts} />
      </Grid>
      <FloatingActionButton />
    </>
  );
}

export default Dashboard;

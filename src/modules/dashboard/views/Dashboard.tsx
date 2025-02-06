import Grid from "@mui/material/Grid2";

import { Alarm, EventNote, Money } from "@mui/icons-material";
import { BarChart } from "lucide-react";
import FloatingActionButton from "../components/FloatingActionButton";
import ContractGrid from "../components/ContractGrid";
import MetricsChart from "../components/MetricsChart";
import ExpirationContractsChart from "../components/ExpirationContractsChart";
import { Metric } from "../interfaces/Metric";
import MetricCards from "../components/MetricCards";
import FloatingActionFilter from "../components/FloatingActionFilter";
import { contractStore } from "../store";

function Dashboard() {
  const metrics: Metric[] = [
    {
      title: "Total de Contratos",
      value: contractStore.contracts.length,
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

        <Grid
          container
          spacing={2}
          className="my-7"
          size={{ xs: 12 }}
          style={{ marginBottom: "1rem" }}
        >
          <MetricsChart />
          <ExpirationContractsChart />
        </Grid>

        <ContractGrid contracts={contractStore.contracts} />
      </Grid>
      <FloatingActionButton />
      <FloatingActionFilter />
    </>
  );
}

export default Dashboard;

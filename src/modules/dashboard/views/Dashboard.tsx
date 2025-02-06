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
import ContractService from "../services/dashboard_service";
import { useEffect } from "react";
import { contractStore } from "../store";

function Dashboard() {
  useEffect(() => {
    const loadContracts = async () => {
      try {
        const data = await ContractService.fetchContracts();
        data.forEach((contract) => contractStore.addContract(contract));
      } catch (error) {
        console.error("Erro ao carregar contratos:", error);
      }
    };

    loadContracts();
  }, []);

  const contracts = contractStore.contracts;

  const metrics: Metric[] = [
    {
      title: "Total de Contratos",
      value: contracts.length,
      icon: <EventNote />,
    },
    {
      title: "Contratos Ativos",
      value: contracts.filter((contract) => contract.status === "Ativo").length,
      icon: <BarChart />,
    },
    {
      title: "Prox. ao Vencimento",
      value: contracts.filter((contract) => {
        const today = new Date();
        const endDate = new Date(contract.endDate);
        return (
          endDate > today &&
          endDate <= new Date(today.setDate(today.getDate() + 30))
        );
      }).length,
      icon: <Alarm />,
    },
    {
      title: "Total dos Contratos",
      value: `R$ ${contracts
        .reduce((total, contract) => total + contract.value, 0)
        .toLocaleString("pt-BR")}`,
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

        <ContractGrid contracts={contracts} />
      </Grid>
      <FloatingActionButton />
      <FloatingActionFilter />
    </>
  );
}

export default Dashboard;

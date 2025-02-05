import { useState } from "react";
import { Button } from "@mui/material";
import Chart from "react-apexcharts";
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

  return (
    <div className="p-6 bg-gray-50 min-h-screen" style={{ color: "black" }}>
      {/* Cartões de Métricas */}
      <div className="grid grid-cols-4 gap-4 my-6">
        <MetricCard title="Total de Contratos" value={contracts.length} />
        <MetricCard title="Contratos Ativos" value={20} />
        <MetricCard title="Próximos ao Vencimento" value={5} />
        <MetricCard title="Valor Total dos Contratos" value={"R$ 100.000,00"} />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-2 gap-6 my-6">
        <ChartCard title="Expiração de Contratos">
          <Chart
            type="line"
            width="350"
            series={[{ name: "Contratos", data: [10, 30, 20, 40, 50] }]}
            options={{
              chart: { id: "contract-expiry-chart" },
              xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
            }}
          />
        </ChartCard>

        <ChartCard title="Distribuição por Status">
          <Chart
            type="pie"
            series={[40, 30, 20, 10]}
            width="350"
            options={{
              labels: ["Ativo", "Expirado", "Renovação", "Consultoria"],
            }}
          />
        </ChartCard>
      </div>

      {/* Tabela de Contratos */}
      <div className="my-6 bg-white rounded shadow-md">
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

      {/* Botão de Adicionar Contrato */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert("Abrir formulário")}
      >
        Adicionar Contrato
      </Button>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: number | string;
}

function MetricCard({ title, value }: MetricCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-bold text-gray-700">{title}</h3>
      <p className="text-2xl font-semibold text-blue-600">{value}</p>
    </div>
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

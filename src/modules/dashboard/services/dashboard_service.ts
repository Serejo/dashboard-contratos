import { Contract } from "../interfaces/Contract";

const API_URL = "http://localhost:5000/contracts";
// Criar uma classe de Repository para abstrair a comunicação com a API

/*
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
      startDate: "2025-02-01",
      endDate: "2025-03-15",
      status: "Pendente Renovação",
      value: 30000,
      type: "Consultoria",
    },
*/

class DashboardService {
  static async fetchContracts(): Promise<Contract[]> {
    try {
      //   const response = await fetch();
      const response = { ok: true };
      if (!response.ok) {
        throw new Error("Erro ao buscar contratos");
      }
      //Simulando a resposta da API
      //   const data: Contract[] = await response.json();
      const data = [
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
          startDate: "2025-02-01",
          endDate: "2025-03-15",
          status: "Pendente Renovação",
          value: 30000,
          type: "Consultoria",
        },
        {
          id: 3,
          client: "Empresa Gama",
          startDate: "2025-02-01",
          endDate: "2025-03-15",
          status: "Pendente Renovação",
          value: 30000,
          type: "Consultoria",
        },
        {
          id: 4,
          client: "Empresa Delta",
          startDate: "2025-02-01",
          endDate: "2025-03-15",
          status: "Pendente Renovação",
          value: 30000,
          type: "Consultoria",
        },
        {
          id: 5,
          client: "Empresa Epsilon",
          startDate: "2025-02-01",
          endDate: "2025-03-15",
          status: "Pendente Renovação",
          value: 30000,
          type: "Consultoria",
        },
      ];

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async fetchContractById(id: number): Promise<Contract> {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) {
        throw new Error("Erro ao buscar contrato");
      }
      const data: Contract = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async addContract(newContract: Contract): Promise<Contract> {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContract),
      });
      if (!response.ok) {
        throw new Error("Erro ao adicionar contrato");
      }
      const data: Contract = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async updateContract(
    id: number,
    updatedContract: Contract
  ): Promise<Contract> {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedContract),
      });
      if (!response.ok) {
        throw new Error("Erro ao atualizar contrato");
      }
      const data: Contract = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async deleteContract(id: number): Promise<void> {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Erro ao deletar contrato");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default DashboardService;

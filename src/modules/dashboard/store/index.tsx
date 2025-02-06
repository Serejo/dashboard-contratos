// src/stores/contractStore.ts
import { makeAutoObservable } from "mobx";
import { Contract } from "../interfaces/Contract";

class ContractStore {
  contracts: Contract[] = [
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
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addContract(newContract: Contract) {
    this.contracts.push(newContract);
  }

  removeContract(contractId: number) {
    this.contracts = this.contracts.filter(
      (contract) => contract.id !== contractId
    );
  }

  editContract(updatedContract: Contract) {
    const index = this.contracts.findIndex(
      (contract) => contract.id === updatedContract.id
    );
    if (index !== -1) {
      this.contracts[index] = updatedContract;
    }
  }
}

export const contractStore = new ContractStore();

// src/stores/contractStore.ts
import { makeAutoObservable } from "mobx";
import { Contract } from "../interfaces/Contract";

class ContractStore {
  contracts: Contract[] = [];

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

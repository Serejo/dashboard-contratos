# Dashboard Project

Este projeto tem como objetivo exibir uma visão consolidada de contratos, com informações úteis, gráficos e listagens para facilitar o gerenciamento.

## 🚀 Funcionalidades Implementadas

- **Cards de Métricas:** Exibição de dados resumidos sobre os contratos.
- **Tabela de Contratos:** Lista detalhada com informações relevantes sobre cada contrato, incluindo busca e paginação.
- **Gráficos:** Visualização das métricas e vencimentos de contratos.
- **Ações Flutuantes:** Filtros e botões de ação rápida para maior usabilidade.

## 🛠️ Instruções para Instalação, Execução e Teste

### **Instalação**

Certifique-se de ter o Node.js instalado. Para instalar as dependências:

```bash
npm install
```

### **Execução do Projeto**

```bash
npm run dev
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

Os testes serão executados com relatórios no console.

## 🧰 Justificativas das Decisões de Arquitetura

- **Arquitetura de Componentes:** Seguindo o padrão Atomic Design para uma estrutura organizada e escalável.
- **State Management:** Uso de `contractStore` para centralizar o gerenciamento dos contratos usando Mobx.
- **Material UI e Lucide:** Escolha para uma interface moderna e responsiva, com ícones legíveis.
- **Organização Modular:** Separacão clara entre componentes, serviços e interfaces para manutenção simplificada.

## 📚 Desafios Enfrentados e Soluções Aplicadas

- **Carregamento de Dados na Tabela:**

  - **Problema:** Os dados não eram exibidos na `DataGrid`.
  - **Solução:** Ajustei o mapeamento dos contratos para garantir IDs únicos.

- **Gestão de Contratos no Store:**

  - **Problema:** Dificuldade em sincronizar o estado com a interface.
  - **Solução:** Adotei um padrão reativo com mapeamento direto das respostas da API.

- **Design das Métricas:**
  - **Problema:** As métricas precisavam ser calculadas com filtros dinâmicos.
  - **Solução:** Implementei funções específicas para filtrar e exibir informações de vencimento e status.

## 🤖 Uso de IA no Desenvolvimento

- **Correção de Problemas:** Com auxílio de IA, identifiquei soluções para falhas no carregamento de dados.
- **Melhorias em Componentes:** Sugestões para ajustar o código a boas práticas de desenvolvimento.

## 📧 Dúvidas ou Sugestões

Caso tenha alguma dúvida ou sugestão, fique à vontade para entrar em contato!

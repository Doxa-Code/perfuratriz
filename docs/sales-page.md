# Implementação de criação/edição de Tabelas de Venda

Este PR implementa e estabiliza o fluxo de **criação e edição de Tabelas de Venda**, além de fortalecer a base de testes da aplicação.

---

## Principais mudanças

### `ModalCreateSale` (create / edit sales table)

- **Controle de abertura do modal**
  - Ajusta o controle de abertura do modal com `isSaleModalOpen = isOpen(MODAL_CREATE_SALE_TABLE)`, garantindo que os `useEffect` disparem corretamente na criação e na edição.

- **Preenchimento do formulário em modo edição**
  - Reseta os campos com os dados do `register` selecionado.
  - Usa `selectedProduct` baseado em `productId` e, como fallback, em `register.product` para garantir que o nome/TID exibidos sejam sempre os corretos.

- **Comportamento do `Popover` de produto**
  - Fecha o popover ao entrar em modo de edição e ao fechar o modal (`setProductPopoverOpen(false)`).
  - Evita loop de updates ao digitar TID em modo edição (ignora o efeito de auto-seleção por TID quando `register` existe).

- **Exibição de "Última importação"**
  - Mantém `lastImportationAt` em um `input` hidden para submissão.
  - Exibe o valor formatado (`lastImportationDisplay`) em um `Input` desabilitado, com mensagem amigável quando não há importação.

---

## Schemas & testes (create sales table)

- Cria `__tests__/sale-table-schema.test.ts` cobrindo:
  - **`createSaleTableInputSchema`**: transformação de strings (valores monetários e datas) em `number`/`Date`.
  - **`saleTableSchema`**: pré-processamento de campos de data em `Date`.
  - **`saleTableImportInfoOutputSchema`**: validação de payload de info de importação (incluindo `null`).

---

## Infra de testes e remoção de dependência de banco

- **Configuração do Vitest**
  - Ajusta `vitest.config.ts` para usar alias `@` via `resolve.alias`, corrigindo imports absolutos nos testes.

- **Refatoração de testes que dependiam de Postgres para testes de domínio puro**
  - `__tests__/expense.test.ts`: testa `Expense.create` sem `ExpenseDatabaseRepository`.
  - `__tests__/ncm.test.ts`: testa `NCM.create`, preenchendo todos os campos exigidos.
  - `__tests__/product.test.ts`: adapta para usar `Product.create` com `tid`/`description` e estrutura correta de NCM.
  - `__tests__/invoice.test.ts`: remove o teste de integração com DB, mantendo apenas o teste de domínio da `Invoice`.
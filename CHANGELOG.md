# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog,
and this project adheres to Semantic Versioning.

## [Unreleased]

## [2025-12-09]

### Changed
- **Lógica de Importação (Backend)**: A busca pela "Última importação" foi ajustada para considerar apenas Declarações de Importação (DIs) com o status "encerrada".
  - O método `findLastImportation` no repositório foi refatorado para aceitar um filtro de status.
  - A `server action` `getSaleTableImportInfoAction` agora utiliza este filtro para garantir a nova regra de negócio.
- **Usabilidade da Sidebar (Mobile)**: A sidebar em dispositivos móveis agora se fecha automaticamente após o clique em um link, melhorando o fluxo de navegação.
- **Animações da Sidebar**: A animação dos textos dos links foi refinada para ser mais consistente, mantendo-os sempre visíveis no desktop e animando suavemente no mobile.

### Fixed
- **Bug de Hover na Sidebar (Desktop)**: Corrigido um problema onde os links da sidebar "piscavam" ou desapareciam ao mover o cursor sobre eles. Um pequeno atraso no evento `onMouseLeave` foi implementado para estabilizar o comportamento.
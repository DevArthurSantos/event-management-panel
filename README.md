# AuraEvent

**Painel moderno de gestão de eventos** desenvolvido com Next.js 15, TypeScript e foco em regras de negócio complexas e experiência de usuário refinada.

---

## ✨ Visão Geral

O **AuraEvent** é uma aplicação completa para gerenciamento de eventos, projetada com ênfase em escalabilidade, performance e aplicação rigorosa de regras de negócio do mundo real.

A interface foi construída priorizando usabilidade, clareza visual e feedback em tempo real, oferecendo uma experiência profissional tanto para organizadores quanto para participantes.

link: [AuraEvent](https://event-management-panel.vercel.app)
---

## 🚀 Funcionalidades

### 📌 Gestão de Eventos
- Listagem avançada com busca, filtros e ordenação por data
- Estados completos: carregamento, vazio e erro
- Visualização detalhada do evento

### 📊 Dashboard
- Cards com métricas em tempo real
- Gráfico de presença utilizando Recharts
- Indicadores de performance do evento

### 👥 Participantes
- Lista dinâmica com ações de check-in/out
- Controle completo de entrada e saída

---

## 🧠 Regras de Negócio

- **Participante Normal**  
  Apenas um check-in permitido por evento.

- **Participante VIP**  
  Múltiplas entradas e saídas permitidas, com obrigatoriedade de saída antes de um novo check-in.

- **Evento Encerrado**  
  Bloqueio total de novas ações de check-in.

---

## 🛠️ Stack Tecnológica

- **Frontend**: Next.js 15 (App Router) + TypeScript
- **Estilização**: Tailwind CSS
- **Gerenciamento de Estado**: TanStack Query
- **Gráficos**: Recharts
- **Notificações**: Sonner
- **Validação**: Zod

## ⚙️ Ambiente de Desenvolvimento

### 🟢 Frontend
```bash
npm run dev
```
- Executa a aplicação Next.js na porta 3000.

### 🟡 Backend Mock

```bash
npm run server
```
- Inicia o JSON Server na porta 3001 (usado apenas em desenvolvimento).

### ⚡ Modo Completo (Frontend + Backend)
```bash
npm run start:dev
```

### 🧪 Testes

- Vitest + React Testing Library
- Foco principal na validação das regras de negócio

### 🔮 Melhorias Futuras

- Autenticação e autorização
- Exportação de relatórios (PDF/Excel)
- Suporte a PWA
- Testes E2E com Playwright
- Migração para banco de dados real

### 📦 Como Executar

```bash
git clone https://github.com/DevArthurSantos/event-management-panel.git
cd auraevent
npm install
npm run dev
```
- A aplicação estará disponível em: http://localhost:3000
- Observação: Em produção, a aplicação utiliza a API integrada do Next.js (deploy na Vercel).

### 🤖 Uso de Inteligência Artificial
A IA foi utilizada como ferramenta de apoio nas seguintes etapas:
- Estruturação de componentes
- Modelagem e organização das regras de negócio
- Refinamento da experiência do usuário
- Redação e padronização da documentação

Todas as decisões técnicas e de design foram revisadas e definidas manualmente.
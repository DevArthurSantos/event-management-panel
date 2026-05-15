# AuraEvent

**Painel moderno de gestão de eventos construído com Next.js 15, TypeScript e foco em regras de negócio complexas e UX refinada.**

---

## ✨ Visão Geral

O **AuraEvent** é uma aplicação de gerenciamento de eventos com foco em escalabilidade, experiência do usuário e aplicação rigorosa de regras de negócio reais, simulando um sistema corporativo.

---

## 🚀 Funcionalidades

### 📌 Gestão de Eventos
- Listagem com busca, filtros e ordenação por data
- Estados completos: loading, vazio e erro
- Visualização detalhada do evento

### 📊 Dashboard
- Cards com métricas em tempo real
- Gráfico de presença (Recharts)
- Indicadores de performance do evento

### 👥 Participantes
- Lista dinâmica com ações de check-in
- Controle de entrada e saída

---

## 🧠 Regras de Negócio

- **Participante Normal**
  - Apenas um check-in permitido

- **Participante VIP**
  - Pode entrar e sair múltiplas vezes
  - Deve sair antes de um novo check-in

- **Evento Encerrado**
  - Bloqueia completamente novas ações

---

## 🛠️ Stack

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Estado/API:** TanStack Query
- **Gráficos:** Recharts
- **UI Feedback:** Sonner
- **Validação:** Zod

---

## ⚙️ Decisões Técnicas

- Arquitetura orientada a componentes reutilizáveis
- Regras de negócio isoladas em helpers (`canCheckin`, etc.)
- Cache e sincronização via React Query
- UX com feedbacks em tempo real (toasts)
- Design responsivo mobile-first
- Foco em acessibilidade (ARIA + navegação por teclado)

---

## 🧪 Testes

- Vitest + React Testing Library (em andamento)
- Cobertura focada em regras de negócio

---

## 🔮 Melhorias Futuras

- Autenticação de usuários
- Exportação de relatórios (PDF/Excel)
- PWA (modo offline)
- Testes

---

## 🤖 Uso de IA

A IA foi utilizada como suporte para:
- Refino de estrutura de componentes
- Sugestões de organização de regras de negócio
- Apoio na revisão de UX e escrita de documentação

Todas as decisões finais de arquitetura e implementação foram feitas manualmente.

---

## 📦 Como rodar

```bash
git clone https://github.com/DevArthurSantos/event-management-panel
cd auraevent
npm install
npm run dev
```

A aplicação roda em: http://localhost:3000
---
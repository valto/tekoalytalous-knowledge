# AI economy market-formation model v1.0

Status: ML-1 research model approved; unpublished
Methodology: `market-lab/1.1`
Version: 1.0
Evidence cutoff: 2026-08-31
Next review: 2026-11-30 (planned)
Owner approval: Valto Loikkanen, 2026-08-31

## Research status

This is an owner-approved top-down, falsifiable market-structure hypothesis and the prior model for ML-2. Approval accepts it as the programme's current research baseline; it does not publish it on the website or add it to an immutable OKF release. It is not a forecast of company winners, an investment recommendation, or an assertion that the proposed roles will remain separate. It does not define a new executable capability and therefore does not require a CRD.

The machine-readable representation is in [`knowledge/market-models/`](../knowledge/market-models/index.md).

## Central hypothesis

AI-economy layers with high fixed costs, scarce physical inputs, and utilization economies tend toward concentration. Layers whose value depends on customer context, identity, governance, domain integration, language, trust, and continuing operations retain stronger reasons to remain distributed, regional, sector-specific, or internal.

This is a boundary hypothesis, not a claim that every layer becomes an independent market. Platform bundling, open models, public compute, regulation, and customer make-or-buy choices may merge or move the boundaries.

## Observed evidence versus inference

### Observed by the evidence cutoff

- The IEA estimates data-centre electricity consumption at about 415 TWh in 2024 and projects roughly 945 TWh by 2030 in its base case. Energy and grid access therefore constrain the scale-intensive part of the value chain.
- Stanford AI Index reports that industry produced more than 90% of notable models in 2025, while training compute continued rapid growth. Frontier development is already capital- and infrastructure-intensive.
- The same Stanford evidence shows leading-model performance converging. Concentrated production does not imply one permanent model winner, and model-level differentiation may narrow.
- The UK Competition and Markets Authority estimated that AWS and Microsoft together held roughly 80–90% of UK infrastructure-as-a-service supply in 2024 and identified technical and commercial barriers to switching and multi-cloud use.
- Eurostat reports that 52.7% of EU enterprises used paid cloud services in 2025, while 20% used AI technologies. Large-enterprise AI use was much higher than small-enterprise use, indicating that deployment capability remains uneven.
- EU Data Act cloud-switching obligations, EuroHPC AI Factories, and the AI Act create counter-forces to pure hyperscaler concentration through portability, public capacity, and jurisdiction-specific governance.
- NIST's AI Agent Standards Initiative treats agent identity and authorization as distinct standardization problems. This supports the existence of an operational control layer beyond model access alone.

### Inference in this model

- Scale-intensive production will probably consolidate into relatively few global or regional suppliers.
- Customer-near operating responsibility will probably be shared among external AI operators, integrators, vertical providers, and internal teams rather than belonging entirely to model producers.
- Context and memory infrastructure can become a separable control point only if portability, identity, and auditability remain meaningful across model and cloud suppliers.
- The AI-operator role becomes a durable market only where customers value accountable continuity and multi-provider operation more than a single integrated platform bundle.

## Role map

| ID  | Proposed role                               | Core responsibility                                                        | Expected structure                        | Primary boundary forces                                         |
| --- | ------------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------- |
| R1  | Model producers                             | Train, evaluate, maintain, and expose general or specialist models         | Concentrated global and regional groups   | Training capital, talent, data, compute, performance            |
| R2  | Token-compute providers                     | Convert energy and hardware capacity into available inference and training | Highly concentrated, with public niches   | Energy, chips, utilization, financing, location, sovereignty    |
| R3  | Context and memory infrastructure providers | Store, govern, retrieve, and move durable customer context                 | Contested infrastructure layer            | Data ownership, portability, identity, privacy, switching       |
| R4  | AI operators                                | Provide accountable model access, continuity, billing, support, and policy | Potentially regional, sectoral, or local  | Trust, support, regulation, distribution, multi-provider need   |
| R5  | Agentic-system builders and integrators     | Design workflows, agents, controls, and enterprise integration             | Fragmented with consolidation pressure    | Domain integration, installed systems, project-to-product shift |
| R6  | Vertical AI products and services           | Deliver outcomes for a defined customer problem or sector                  | Numerous category markets                 | Workflow ownership, domain data, regulation, distribution       |
| R7  | Internal organisational AI operations       | Own policies, context, adoption, vendor portfolio, and operating outcomes  | Distributed inside adopting organisations | Strategic control, risk, existing capabilities, make-or-buy     |

These roles describe responsibilities, not necessarily separate companies. One organization may occupy several roles, while one responsibility may be split across suppliers and internal teams.

## Market forces

| ID  | Force                                 | Direction in the base case                                                    |
| --- | ------------------------------------- | ----------------------------------------------------------------------------- |
| F1  | Capital intensity                     | Concentrates frontier models and hyperscale compute                           |
| F2  | Energy, grid, and chip constraints    | Concentrates supply but creates geographic and sovereign capacity niches      |
| F3  | Utilization economies                 | Rewards shared infrastructure and large demand pools                          |
| F4  | Model convergence and falling prices  | Commoditizes some model access and strengthens orchestration and distribution |
| F5  | Context ownership and portability     | Supports a separable customer-controlled context layer                        |
| F6  | Identity, authorization, and audit    | Creates durable operational responsibility beyond raw inference               |
| F7  | Regulation and sector obligations     | Favors accountable local or specialist implementation capacity                |
| F8  | Interoperability and switching rules  | Weakens lock-in when technically and commercially effective                   |
| F9  | Customer trust, language, and support | Favors regional, sectoral, and relationship-based providers                   |
| F10 | Domain workflow integration           | Favors integrators, vertical products, and internal operating teams           |
| F11 | Sovereignty and resilience            | Sustains regional compute, cloud, and data-control alternatives               |
| F12 | Platform bundling and installed base  | Pulls context, agents, tools, and operations back into global platforms       |

## Assumption register

| ID  | Assumption                                                                 | Current confidence | Falsification signal                                                         |
| --- | -------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------- |
| A1  | Frontier training and hyperscale inference retain material scale economies | High               | Small providers repeatedly match cost, reliability, and capacity at scale    |
| A2  | Customers retain meaningful control over durable context and identity      | Medium             | Most context becomes inseparable from one model or productivity platform     |
| A3  | Multi-model or multi-provider operation remains valuable                   | Medium             | One integrated supplier consistently dominates quality, cost, and governance |
| A4  | Governance and support remain costly enough to sustain specialist roles    | Medium             | Self-service automation removes most operating and compliance burden         |
| A5  | Regulation and portability rules have practical market effects             | Medium             | Formal rights fail to reduce switching cost or supplier dependency           |
| A6  | Organisations keep strategic AI operating responsibility                   | Medium-high        | External providers assume most accountability without customer-side capacity |

## Hypotheses and counter-hypotheses

- [H1 — Scale concentrates; context and operations distribute](../knowledge/market-models/scale-concentrates-context-distributes.md)
- [C1 — Integrated platforms absorb the operator and context layers](../knowledge/market-models/platforms-absorb-operator-layer.md)
- [C2 — Open and sovereign infrastructure diffuses upstream market power](../knowledge/market-models/open-sovereign-infrastructure-diffuses-power.md)

The counter-hypotheses are not rhetorical objections. ML-2 and later studies must collect evidence capable of making either counter-hypothesis the preferred explanation.

## Boundary questions for ML-2

1. Which customer responsibilities cannot be safely delegated to a model or cloud supplier?
2. Is durable context economically and technically portable across providers?
3. Who carries incident response, access control, billing accountability, and continuity obligations?
4. Does an operator reduce total cost and risk, or merely add another intermediary margin?
5. Can integrated platforms bundle the same responsibilities more cheaply and credibly?
6. Which Finnish or European conditions materially differ from the global base case?

## Review schedule

- Next planned review: 2026-11-30.
- Earlier review trigger: material change in frontier-model concentration, cloud-switching enforcement, EU AI Act implementation, public AI-factory capacity, agent identity standards, or enterprise AI adoption.
- ML-2 must preserve this model as the prior hypothesis and record evidence that supports, narrows, or rejects it.

## Sources

- International Energy Agency, [Key Questions on Energy and AI](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary), 2025.
- Stanford Institute for Human-Centered AI, [2026 AI Index — Research and Development](https://hai.stanford.edu/ai-index/2026-ai-index-report/research-and-development), 2026.
- Stanford Institute for Human-Centered AI, [2026 AI Index — Technical Performance](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance), 2026.
- Stanford Institute for Human-Centered AI, [2026 AI Index — Economy](https://hai.stanford.edu/ai-index/2026-ai-index-report/economy), 2026.
- UK Competition and Markets Authority, [Cloud services market investigation — summary of final decision](https://assets.publishing.service.gov.uk/media/6888af191dd2f1da1d2c2f3c/Cloud_services_market_investigation_-_summary_of_final_decision.pdf), 2025.
- Eurostat, [20% of EU enterprises use AI technologies](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2), 2025.
- Eurostat, [Cloud computing in the EU: a threefold increase since 2014](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260203-1), 2026.
- European Commission, [Data Act explained](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained), updated 2025.
- European Commission, [Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act), updated 2026.
- NIST, [AI Agent Standards Initiative](https://www.nist.gov/caisi/ai-agent-standards-initiative), 2026.
- EuroHPC Joint Undertaking, [AI Factories](https://eurohpc-ju.europa.eu/ai-factories_en), 2026.

## Known limitations

- The evidence is strongest for infrastructure concentration and weakest for the still-emerging AI-operator role.
- The model does not estimate market sizes, margins, customer willingness to pay, or company-level entry probabilities.
- Enterprise adoption statistics do not reveal whether capability is internal, purchased, experimental, or production-grade.
- Regulatory implementation may differ materially from formal rules.
- The model is global with an EU emphasis and is not yet a Finnish market study.

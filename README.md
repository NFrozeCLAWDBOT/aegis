# Aegis

**Live:** [aegis.nfroze.co.uk](https://aegis.nfroze.co.uk)

![Live](video/aegis.gif)

Cross-framework AI regulatory compliance mapping that typically requires a specialist consultant, delivered as a free, instant, self-service tool.

## Overview

UK companies deploying AI systems into EU markets face a fragmented regulatory landscape: the EU AI Act, UK GDPR, ICO guidance, NIST AI RMF, OWASP GenAI governance, and the Equality Act 2010 all impose overlapping and sometimes conflicting obligations. Mapping which requirements apply to a specific deployment, cross-referencing them, and identifying gaps between frameworks is the kind of work that costs hundreds per hour from a regulatory consultant.

Aegis replaces that process with a structured questionnaire (system type, data sensitivity, deployment geography, sector, and automated decision-making scope) and a client-side compliance engine that filters 70+ obligations across six frameworks, groups them by applicability, deduplicates cross-referenced requirements using a Union-Find algorithm, and surfaces coverage gaps. The output is a personalised compliance dashboard with a framework heatmap, expandable obligation checklists linked to source legislation, and a gap analysis panel showing risk areas where no framework provides coverage.

This project was produced through Jarvis, an automated end-to-end pipeline: brief, hero art, cinemagraph animation, dark glassmorphic frontend, serverless infrastructure, Terraform deployment. One shot, no manual intervention.

## Architecture

The application is entirely client-side with zero backend dependencies. Regulatory data is compiled as TypeScript modules at build time rather than fetched from APIs, eliminating runtime costs entirely.

The compliance engine pipeline runs in the browser: questionnaire answers pass through a condition-based filter (each obligation declares `ApplicabilityCondition` arrays with field/operator/value matching), applicable obligations are grouped by framework, a Union-Find algorithm detects cross-reference clusters across frameworks, gap analysis checks both predefined risk templates and essential category coverage, and per-framework completion percentages are calculated in real time as users check off obligations.

Infrastructure is Terraform-provisioned: an S3 bucket configured for static website hosting in `eu-west-2`, with Cloudflare handling DNS and SSL termination via proxied CNAME.

## Tech Stack

**Frontend**: React 19, TypeScript, Tailwind CSS v4, Vite 7, Motion (Framer Motion), React Router v7

**Regulatory Data**: 6 frameworks, 70+ obligations compiled as TypeScript modules with declarative applicability conditions and cross-references

**Infrastructure**: Terraform, AWS S3 static hosting, Cloudflare DNS/SSL

**Design**: Dark glassmorphism, animated cinemagraph hero, Space Grotesk + IBM Plex Sans + JetBrains Mono typography

## Key Decisions

- **Zero-backend architecture**: All regulatory data and the compliance engine run entirely in the browser. No API calls, no Lambda functions, no database. Monthly hosting cost is under $2. The trade-off is that regulatory updates require a rebuild and redeploy, but for a dataset that changes on legislative timescales, this is acceptable.

- **Union-Find for cross-reference detection**: Obligations across different frameworks that cover the same requirement (e.g., EU AI Act transparency and ICO transparency guidance) are linked via cross-reference IDs. A Union-Find (disjoint set) algorithm groups these into clusters, allowing the UI to show which obligations from other frameworks overlap without O(n^2) pairwise comparison.

- **Declarative applicability conditions**: Rather than hardcoding filtering logic per obligation, each obligation declares an array of conditions (`field`, `operator`, `value`). The engine evaluates these generically, meaning new obligations or entire frameworks can be added to the data layer without modifying engine code.

- **Code-split results dashboard**: The results page (heatmap, framework cards, 70+ obligation items, gap analysis) is lazy-loaded via `React.lazy` and `Suspense`, keeping the landing page and questionnaire bundle fast while deferring the heaviest view until it's needed.

## Built By

**Jarvis** — AI build system designed by [Noah Frost](https://noahfrost.co.uk)

This project was produced through an automated end-to-end pipeline: brief, hero art, cinemagraph, build spec, deployed webapp. One shot. No manual intervention.

&rarr; System architect: [Noah Frost](https://noahfrost.co.uk)
&rarr; LinkedIn: [linkedin.com/in/nfroze](https://linkedin.com/in/nfroze)
&rarr; GitHub: [github.com/nfroze](https://github.com/nfroze)

# MuzPayroll — Salary Slip (Employee Portal) Business Requirements Document

## Document Control

| | |
|---|---|
| Module | Employee Self-Service Portal → Salary Slip |
| Status | Draft — confirmed content only; 4 items remain open pending stakeholder sign-off |
| Source documents | `14_Salary_Slip.md` — a single sentence, the thinnest source in this BRD set — cross-referenced against the Process Module (Salary Head composition, Payroll Verification) and the Employee Portal's own overview text (Payroll & Salary feature grouping) |
| Companion document | `SalarySlip_BRD_Questionnaire.html` — every OPEN item below is numbered against this file's live 4-question list; regenerate this BRD if further answers are recorded there |

## 1. Purpose

This document defines the confirmed business requirements for the MUZPAYROLL Salary Slip module in the Employee Self-Service (ESS) portal. The source material for this module is exceptionally thin — one sentence, naming only the generate/download action, a period filter, and a partial format list — so almost every operational detail here is an open item rather than a confirmed fact. This document consolidates the two things the source does confirm, and separates that from everything still awaiting a stakeholder decision.

## 2. Scope

### 2.1 In Scope

- **Salary Slip** — the single employee-facing screen for generating and downloading a payslip for a chosen period.

### 2.2 Out of Scope

- **Payroll calculation itself** (Gross Salary, Salary Head allowances/deductions, PF/ESI/PT/TDS, Bonus, Gratuity) — already covered by `ProcessModule_BRD.md`; referenced here only to inform what a slip's content might include (§5).
- **Payroll Verification** — already covered by `ProcessModule_BRD.md` as a confirmed, irreversible step; referenced here only for its bearing on slip availability (§6).

## 3. How to Read This Document

Every requirement below is written as a firm statement (*"The system SHALL…"*) because the source material confirms it without ambiguity. Anything not yet resolved is called out in an **OPEN** box immediately under the relevant topic:

- **OPEN — Questionnaire Q#** — the decision is already posed as a question in `SalarySlip_BRD_Questionnaire.html`; the box restates the question and its three options. Do not build against a guessed option — wait for the recorded answer.

## 4. Salary Slip — Generation & Download

**SS-001.** The system SHALL allow an employee to generate a salary slip by choosing a period. *(The exact granularity and range of "period" is OPEN; see §4.2.)*

**SS-002.** The generated slip SHALL be downloadable in more than one format, with PDF confirmed as one of them. *(The complete format list is OPEN; see §4.1.)*

### 4.1 Download Format List

> **OPEN — Questionnaire Q1.** "Including pdf" names one format within an unspecified larger set — what are the other formats?
> **A)** PDF only for this phase — the other-formats phrasing is aspirational, not current scope. **B)** PDF plus a spreadsheet format (Excel/CSV) — specify which in the notes field. **C)** A different, specific set — list it in the notes field.

### 4.2 Period Selection Scope

**Confirmed (source, cross-referenced).** The Employee Portal's own overview text names "Payroll & Salary — Download payslips, view salary structure, tax projections, and annual salary reports" as one combined feature grouping, with no other module document covering tax projections or annual salary reports.

> **OPEN — Questionnaire Q2.** Does "period" mean a single month, a date range of several months, or does this screen also cover the annual/tax-projection views named in the same overview grouping?
> **A)** Single month only; tax projections and annual reports are separate, out-of-scope screens not yet described anywhere. **B)** Single month, plus a date-range option to bundle multiple months' payslips together. **C)** This screen also covers annual reports and tax projections — describe the exact scope in the notes field.

## 5. Slip Content

**Confirmed (source):** none — the source names no field, line item, or section that appears on the slip.

> **OPEN — Questionnaire Q3.** What does the salary slip actually contain — which of the Process module's confirmed Salary Head components appear, in what layout, and what else (employee identification, bank details, leave balance) is included?
> **A)** Standard layout — Gross Salary broken into earning components, deductions (PF/ESI/PT/TDS/LOP), Net Pay, employee identification, and pay period; no additional sections. **B)** The above, plus a leave balance summary (EL/OH/Comp-Off) alongside the earnings/deductions breakdown. **C)** A different field/section list — describe in the notes field.

## 6. Availability Relative to Payroll Verification

**Confirmed (source, cross-referenced).** The Process module confirms Payroll Verification is an irreversible, final step in the payroll cycle for a given period. This module is silent on whether slip generation depends on that step having completed for the chosen period.

> **OPEN — Questionnaire Q4.** Can a slip be generated for a period whose payroll hasn't been verified yet, and if so, is it distinguished from a final, post-verification slip?
> **A)** Gated on verification — a period isn't selectable until its Payroll Verification is complete. **B)** Available before verification, but clearly marked provisional/subject to change. **C)** Available before verification, with no distinction — a later re-download simply reflects whatever the current figures are.

## 7. Open Items Register

| # | Questionnaire Q# | Topic | One-line summary |
|---|---|---|---|
| 1 | Q1 | Download format | What are the "different formats" beyond PDF? |
| 2 | Q2 | Period selection | Single month, date range, or does this screen also cover annual/tax-projection views? |
| 3 | Q3 | Slip content | What fields/sections does the slip actually contain? |
| 4 | Q4 | Availability | Can a slip be generated before that period's Payroll Verification completes? |

**Resolved items:** none yet — this is the first pass through this module's source document.

## 8. Source References

- `14_Salary_Slip.md` — primary source for this module (a single sentence).
- `00_Index.md` — Employee Portal overview text naming "tax projections" and "annual salary reports" alongside "Download payslips" (§4.2).
- `ProcessModule_BRD.md` — confirmed Salary Head composition (§5) and Payroll Verification's irreversibility (§6).
- `SalarySlip_BRD_Questionnaire.html` — the live, numbered list of the 4 open questions this document references; regenerate this BRD if further answers are recorded there.

---

*This document consolidates the two facts `14_Salary_Slip.md` actually confirms into requirement form. Every remaining unresolved decision is cross-referenced to its exact question in `SalarySlip_BRD_Questionnaire.html`. No requirement above an OPEN box assumes an answer to any open item.*

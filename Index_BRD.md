# MuzPayroll — Index & Roadmap Business Requirements Document

## Document Control

| | |
|---|---|
| Module | Index & Roadmap — cross-cutting scope, naming, build-sequencing, and source-material questions raised by the project's own table of contents |
| Status | Draft — confirmed content only; 5 items remain open pending stakeholder sign-off |
| Source documents | `00_Index.md`, cross-referenced against this output directory's own built questionnaires and BRDs (all 9 modules completed so far) |
| Companion document | `Index_BRD_Questionnaire.html` — every OPEN item below is numbered against this file's live 5-question list; regenerate this BRD if further answers are recorded there |

## 1. Purpose

Unlike every other document in this set, `00_Index.md` is not a feature specification — it is the table of contents that splits the original consolidated MuzPayroll PRD/BRD into one file per module. It has no workflow, formula, or screen of its own to gap-analyze in the usual sense. What it does have are structural gaps: capabilities named in its own overview prose with no module document behind them, an internal naming inconsistency, and a self-admitted limitation about source material. This document captures those, plus a direct comparison of the Index's own module list against what has actually been built so far, to keep the overall roadmap honest.

## 2. Scope

### 2.1 In Scope

- Capabilities named in the Index's overview or Key Features prose that have no corresponding numbered module document
- Naming inconsistencies within the Index itself
- A cross-check of the Index's 14-item module list against this directory's actual built questionnaires/BRDs
- The Index's own admission that original screenshots/diagrams were not carried into the split module files

### 2.2 Out of Scope

- Any feature-level gap belonging to one of the 14 individual modules — those are each covered by that module's own BRD (`EmployeeManagement_BRD.md`, `AttendanceLeave_BRD.md`, `ProcessModule_BRD.md`, `SystemManagement_BRD.md`, `LeaveManagementESS_BRD.md`, `CompensatoryOffs_BRD.md`, and others as they're built). This document does not duplicate or re-litigate those.

## 3. How to Read This Document

Every requirement below is written as a firm statement (*"The system SHALL…"* or *"The Index confirms…"*) because the source material states it without ambiguity. Anything not yet resolved is called out in an **OPEN** box, in the same form used across this BRD set:

- **OPEN — Questionnaire Q#** — the decision is already posed as a question in `Index_BRD_Questionnaire.html`; the box restates the question and its three options. Do not build against a guessed option — wait for the recorded answer.

## 4. Confirmed Structure

**IDX-001.** The MuzPayroll PRD/BRD SHALL be organized as two portals: an Employer Portal (7 numbered items: Dashboard, Employee Management, Attendance & Leave Management, Advance Management, Process, Statutory Compliance – Reports, System Management) and an Employee Self-Service Portal (7 numbered items: Dashboard/My Dashboard, Team Dashboard, Leave Management, Time Sheet Management, Compensatory Offs, Day Off Management, Salary Slip).

**IDX-002.** System Management (Employer Portal item 7) SHALL be treated as split into two source documents: `07_Masters.md` (screenshot-based, superseding the original Masters text) and `07_System_Management.md` (Settings, User Rights, and Database Back Up — the original thin BRD text, pending a fresh PM-authored replacement). This split, and its rationale, is confirmed directly in the Index's own text and matches what `SystemManagement_BRD.md` §2.2 independently found when that module was processed.

**IDX-003.** Screenshots and diagrams embedded in the original consolidated `.docx` SHALL NOT be assumed present in any of the 14 split module files — the Index confirms directly that only text content was carried over. *(Whether the original screenshots can still be sourced is OPEN; see §7.)*

## 5. Scope Completeness — Capabilities Without a Module

**IDX-010 [confirmed gap, not itself resolved].** The Index's overview paragraph names "direct bank transfers," "reimbursements," and "full-and-final settlements" as payroll-module capabilities. Gratuity, bonus, and salary arrears — named in the same sentence — are confirmed as covered within the Process module (per `ProcessModule_BRD.md`). Direct bank transfers, reimbursements, and full-and-final settlement have no corresponding module document among the 14 listed items.

> **OPEN — Questionnaire Q1.** Are these three capabilities in scope as their own module documents, deferred to a later phase, or already intended as a sub-feature of an existing module?
> **A)** All three are in scope and need their own module documents. **B)** Deferred to a later phase, not part of the current BRD effort. **C)** Partially already covered inside an existing module — specify which in the notes field.

**IDX-011 [confirmed gap, not itself resolved].** The Employee Portal's Key Features prose names "Submit investment declarations and access Form 16" — this does not appear in the same section's own Features List, nor as any of the 7 numbered Employee Portal module documents.

> **OPEN — Questionnaire Q2.** Is investment declaration/Form 16 in scope as its own module, out of scope for this phase, or intended as part of the existing Salary Slip module?
> **A)** In scope, needs its own module (add as module 15). **B)** Out of scope for this phase. **C)** Intended as part of Salary Slip — confirm explicitly for when that module is analyzed.

## 6. Naming Consistency

**IDX-020 [confirmed gap, not itself resolved].** This single document names what appears to be one Employee Portal feature three different ways: "Off Day Swap" (Key Features prose), "Off Day Management" (Features List), and "Day Off Management" (the numbered module link, matching the actual filename `13_Day_Off_Management.md`).

> **OPEN — Questionnaire Q3.** Are all three names the same feature, or is "Swap" a distinct sub-capability within Day Off Management?
> **A)** Same feature, inconsistent naming only — "Day Off Management" is authoritative. **B)** "Swap" is a real, distinct sub-capability to flag specifically when `13_Day_Off_Management.md` is gap-analyzed. **C)** A different relationship — describe in the notes field.

## 7. Build Roadmap & Source Material

**IDX-030 [confirmed, verified against this directory — updated since first written].** As of this document, 10 of the Index's 14 numbered items have a completed questionnaire and BRD: Employee Management, Masters, Attendance & Leave Management, Advance Management, Process, System Management (both halves), Leave Management, Time Sheet Management, Compensatory Offs, Day Off Management, and Salary Slip. Four remain, and they are not all the same kind of "remaining":
> - **Dashboard (Employer Portal), Dashboard/My Dashboard (Employee Portal), Team Dashboard** — genuinely not yet processed; each has real source text describing dashboard tiles/widgets, just not yet run through gap analysis.
> - **Statutory Compliance – Reports** — a different situation. On attempting this module, its source document (`06_Statutory_Compliance_Reports.md`) turned out to contain no screens, fields, or behaviour at all — just the source's own note that it "needs a from-scratch requirements discovery with the business stakeholder before it can be scheduled or built." The stakeholder confirmed (2026, this session) that this module should be **left alone for now** rather than gap-analyzed from invented content — there is nothing in this project's source material to build a text-grounded questionnaire against. No `StatutoryComplianceReports_BRD_Questionnaire.html` or `.md` exists, and none should be built until real source material (a PRD section, a stakeholder session, or a live screen to reference) becomes available.

*Day Off Management and Salary Slip were processed directly, roughly matching the priority order suggested in Q4's option A below (data-producing modules before the dashboards that summarize them) — Q4 itself remains unanswered/unconfirmed, this note only keeps the completed-count accurate.*

> **OPEN — Questionnaire Q4.** Is this the correct remaining scope, and in what order should the three genuinely-pending modules be processed? (Statutory Compliance – Reports is excluded from this question — see IDX-030 above; it isn't a sequencing decision, it's blocked on stakeholder input.)
> **A)** Confirmed list; process data-producing modules before the dashboards that summarize them (Team Dashboard, My Dashboard, Dashboard). **B)** Confirmed list, different priority order — specify in the notes field. **C)** The list itself needs correction — specify in the notes field.

> **OPEN — Questionnaire Q5.** The Index admits screenshots/diagrams were not carried into the split files. Several already-open questions in other modules (e.g. Muster Roll's undefined "L" status code) are exactly the kind of ambiguity a source screenshot would likely resolve directly. Are the original screenshots available to supply?
> **A)** Yes, the original `.docx` is available — supply it and revisit already-open items a screenshot could resolve. **B)** No screenshots exist or are accessible — continue text-only as done so far. **C)** Screenshots exist for some modules but not others — specify which in the notes field.

## 8. Open Items Register

| # | Questionnaire Q# | Area | One-line summary |
|---|---|---|---|
| 1 | Q1 | Scope Completeness | Are direct bank transfers, reimbursements, and full-and-final settlement in scope, and do they need their own module documents? |
| 2 | Q2 | Scope Completeness | Is investment declaration/Form 16 in scope as its own module? |
| 3 | Q3 | Naming Consistency | Are "Off Day Swap," "Off Day Management," and "Day Off Management" the same feature? |
| 4 | Q4 | Build Roadmap | Is the 6-module remaining list correct, and what's the priority order? |
| 5 | Q5 | Source Material | Are original screenshots/diagrams available to supply for already-built and remaining modules? |

## 9. Source References

- `00_Index.md` — primary source for this document.
- This output directory's `index.html` and all `*_Questionnaire.html` / `*_BRD.md` files — cross-referenced directly to verify IDX-030's build-completeness claim.
- `ProcessModule_BRD.md` — confirms gratuity/bonus/arrears coverage referenced in §5.
- `SystemManagement_BRD.md` — confirms the Masters/Settings split referenced in IDX-002.
- `Index_BRD_Questionnaire.html` — the live, numbered list of the 5 open questions this document references; regenerate this BRD if further answers are recorded there.

---

*This document consolidates confirmed structural facts from `00_Index.md`, cross-checked directly against this directory's actual build state. Every remaining unresolved decision is cross-referenced to its exact question in `Index_BRD_Questionnaire.html`. No requirement above an OPEN box assumes an answer to any open item.*

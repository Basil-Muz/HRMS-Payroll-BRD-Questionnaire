# MuzPayroll — Process Module Business Requirements Document

## Document Control

| | |
|---|---|
| Module | Employer Portal → Process (Payroll Process, Monthly Allowances & Deductions, Payroll Process Verification, Bonus Process, Gratuity Process, Salary Arrear Process, Incentives Process) |
| Status | Draft — confirmed content only; 21 items remain open pending stakeholder sign-off |
| Source documents | `05_Process.md`, cross-referenced against the Employee Screen (Statutory Information, Location/Reporting), System Management Settings (Branch Wage Settings, Salary Head Group, Attendance and Leave Group), Masters (Salary Head, Advance Type), and the Advance Management module |
| Companion document | `ProcessModule_BRD_Questionnaire.html` — every OPEN item below is numbered against this file's live 21-question list; regenerate this BRD if further answers are recorded there |

## 1. Purpose

This document defines the confirmed business requirements for the MUZPAYROLL Process module — the employer-portal engine that computes and disburses monthly payroll, and separately processes bonus, gratuity, salary arrears, and incentives. It consolidates everything established with certainty from the source material, and separates that from everything still awaiting a stakeholder decision.

## 2. Scope

### 2.1 In Scope

- **Payroll Process** — the monthly salary computation, statutory deduction, and disbursement engine
- **Monthly Allowances & Deductions** — the ad-hoc entry screen for variable, non-repetitive items
- **Payroll Process Verification** — the month-close, irreversible verification step
- **Bonus Process** — annual statutory bonus under the Payment of Bonus Act, 1965
- **Gratuity Process** — statutory gratuity under the Payment of Gratuity Act, 1972
- **Salary Arrear Process** — discretionary arrears on delayed increments
- **Incentives Process** — monthly performance/project incentive disbursement, detached from payroll

### 2.2 Out of Scope

- **Masters and System Management Settings** — the underlying Salary Head, Salary Head Group, Profession Tax Group, and Branch Wage Settings this module reads from are already covered by the Masters BRD; only referenced here where they bear directly on a Process gap.
- **Employee Screen's Statutory Information** — the PF/ESI numbers, nominee, and per-employee statutory fields this module's calculations depend on; referenced here only as cross-reference evidence for the PF/ESI open items (§4, §6).
- **Advance Management** — referenced only for its confirmed cross-module approval structure, not re-scoped here.

## 3. How to Read This Document

Every requirement below is written as a firm statement (*"The system SHALL…"*) because the source material confirms it without ambiguity. Anything not yet resolved is called out in an **OPEN** box immediately under the relevant topic, in the same form used across this BRD set:

- **OPEN — Questionnaire Q#** — the decision is already posed as a question in `ProcessModule_BRD_Questionnaire.html`; the box restates the question and its three options. Do not build against a guessed option — wait for the recorded answer.

## 4. CTC & Payroll Fundamentals

**PR-001.** Gross Salary SHALL consist of Basic, DA, HRA, Travelling Allowance, Bonus, and other configured allowances, with Basic and DA treated as a single combined component.

**PR-002.** All allowances SHALL apply to every employee except Position Allowance and Washing Allowance: Washing Allowance SHALL apply only to ESI-covered employees, and Position Allowance only to ESI-exempted employees.

**PR-003.** Basic, DA, and CCA SHALL be mandatory salary-structure components and SHALL form part of the minimum-wages calculation.

> **OPEN — Questionnaire Q1.** CTC is defined once as "gross salary plus employer contributions to PF and ESI," but later sections imply Incentives and Employer NPS should also count. What is the complete, authoritative CTC formula?
> **A)** Gross + Employer PF + Employer ESI + Incentives only. **B)** The fuller list — also Employer NPS and Welfare Fund employer contribution. **C)** Gross + Employer PF + Employer ESI only; later "included in CTC" mentions are a documentation error.

> **OPEN — Questionnaire Q2.** Payroll period is stated as calendar-month, with a "certain companies use 25th-to-25th" aside never confirmed as Muziris's own practice or a system requirement. Which applies?
> **A)** Calendar month only. **B)** Configurable per company/branch. **C)** Muziris actually uses 25th-to-25th; the document's opening line is wrong.

> **OPEN — Questionnaire Q3.** The LOP formula's denominator is stated as "No. Of working days or Month Days" — an unresolved either/or.
> **A)** Month Days, matching Branch Wage Settings' confirmed "Wage Calculation Type: Month Days." **B)** Working Days, varying by month and employee off-day pattern. **C)** Configurable per branch, read dynamically from Wage Calculation Type.

## 5. Formula-Based Allowances

**PR-010.** Allowances SHALL currently be fixed amounts only, with no formula or percentage-based calculation mechanism, confirmed independently by this document, the Masters BRD (Salary Head has no rate/formula field), and System Management Settings (Salary Head Group's formula mechanism is not yet built for most allowances).

> **OPEN — Questionnaire Q4.** Given the triple-corroborated finding above, is formula-based allowance calculation ("Basic shall be 40% of Gross Salary") a confirmed, must-build requirement for this phase?
> **A)** Yes, full scope. **B)** Yes, but scoped to a named subset of allowances. **C)** Confirmed real, but deferred to a future phase.

> **OPEN — Questionnaire Q5.** Is DA's variable-rate mechanism (DA Base Point/Rate + DA Index Settings, confirmed in System Management) actually wired to payroll computation, or is DA still a plain fixed amount like every other allowance?
> **A)** Still fixed — DA Settings exist but aren't connected to payroll yet. **B)** Already wired — DA is the one exception already computed from Settings. **C)** Neither — DA Settings serve a different purpose.

## 6. PF Contribution

**PR-020.** Statutory Employee PF contribution SHALL be 12% of PF Gross, capped at ₹1,800/month. PF Gross SHALL be derived by topping up Basic+DA with other allowances to reach ₹15,000 where Basic+DA alone is below that ceiling.

**PR-021.** HRA and Bonus SHALL be excludable from the PF Gross calculation, provided their combined value does not exceed 20% of Basic plus DA.

**PR-022.** Employees SHALL be permitted a voluntary PF contribution up to a maximum of 100% of Basic plus DA, in addition to the statutory contribution.

**PR-023.** Employer PF contribution SHALL match the employee statutory rate (12% of PF Gross); the employer SHALL have no obligation to voluntarily match an employee's voluntary contribution.

> **OPEN — Questionnaire Q6.** A cross-referenced Employee-screen requirement asks for three selectable PF contribution bases (statutory-limit / full-PF-salary / fixed amount) applying to both employee and employer sides — not reflected in this document's own PF section. Confirm scope.
> **A)** All three options apply, independently, to both employee and employer PF. **B)** All three apply to the employee side only; employer stays statutory-only. **C)** Deferred — PF stays exactly as described in this document for this phase.

> **OPEN — Questionnaire Q7.** The Employee screen separately asks for a provision to enter Employer Voluntary PF Contribution, with no field for it described anywhere in this document. Confirm as in scope.
> **A)** Yes, add a dedicated field. **B)** Not needed this phase — employer stays statutory-only. **C)** Needed, but resolve together with Q6's three-option structure.

## 7. TDS & Tax Regime

**PR-030.** TDS SHALL be calculated using the New Tax Regime (Section 115BAC) slabs for FY 2025-26: 0% up to ₹4,00,000; 5% to ₹8,00,000; 10% to ₹12,00,000; 15% to ₹16,00,000; 20% to ₹20,00,000; 25% to ₹24,00,000; 30% above, with a ₹75,000 standard deduction for salaried individuals.

> **OPEN — Questionnaire Q8.** The document states a TDS calculator "recently incorporated... but not integrated with payroll process," implying something already exists elsewhere — but no location is named, and System Management's own account reads as if nothing exists at all. Where does it exist, and is this integration work or a ground-up build?
> **A)** A calculator genuinely exists elsewhere; this is integration work. **B)** Nothing exists yet; build from scratch and integrate in one effort. **C)** Partially exists — describe what, in the notes field.

> **OPEN — Questionnaire Q9.** Only New Regime slabs are given, yet the document separately says "HRA and LTA has TDS implications as employees can claim exemption" — an Old Regime concept. Can employees choose their regime?
> **A)** New Regime only, mandatory; the HRA/LTA line is a documentation error. **B)** Employees can choose; both regimes need supporting. **C)** New Regime only for this phase; track HRA/LTA exemption as a future request.

## 8. ESI Edge Cases

**PR-040.** Employee ESI contribution SHALL be 0.75% of Gross Salary, with Washing Allowance excludable from the base. Eligibility SHALL require Gross Salary ≤ ₹21,000. Two contribution periods SHALL apply: April–September and October–March; if salary crosses ₹21,000 mid-period, coverage SHALL continue to the end of that period, contributing on the new gross salary minus Washing Allowance.

**PR-041.** Employer ESI contribution SHALL be 3.25% of the same base, with all other rules matching the employee side.

> **OPEN — Questionnaire Q10.** A cross-referenced Employee-screen requirement asks for a reminder during April/October payroll processing when gross salary exceeds ₹21,000 and the employee hasn't been marked Out of Coverage — not present in this document's own ESI section. Confirm as in scope.
> **A)** Yes — inline payroll-process warning. **B)** Yes — but as a standalone report, not inline. **C)** Not needed this phase.

> **OPEN — Questionnaire Q11.** A cross-referenced requirement specifies that when an employee is both Out of Coverage and later Relieved, only RELIEVED should appear on the ESI report for that month — confirm this as the general rule, not just the one example given.
> **A)** General rule — Relieved always takes priority. **B)** Specific to the given month-sequence only; other sequences need their own rule. **C)** Needs more real-world examples before confirming a general rule.

## 9. Profession Tax

**PR-050.** Profession Tax SHALL be calculated using the confirmed half-yearly slab table (Not Applicable up to ₹11,999; ₹320 at ₹12,000–17,999; ₹450 at ₹18,000–29,999; ₹600 at ₹30,000–44,999; ₹750 at ₹45,000–99,999; ₹1,000 at ₹1,00,000–1,24,999; ₹1,250 above), based on Gross Salary.

**PR-051.** The employer SHALL remit PT for April–September by August 31 and October–March by February 28, with the sixth month's salary estimated since the due date precedes month-end. Employee-side deduction SHALL currently occur in August and February.

**PR-052.** If an employee is relieved in a month other than March or September, the half-yearly PT accrued up to that month SHALL be deducted from their final salary.

**PR-053 [specification confirmed; scope is OPEN — see Q12].** If Monthly PT Deduction is built, it SHALL spread the half-yearly PT amount evenly across 6 months, apply any rounding adjustment in the sixth month, and use jurisdiction-dependent period boundaries: Panchayat periods run September 1–February 28 and March 1–August 31; Municipality/Corporation periods run October 1–March 31 and April 1–September 30.

> **OPEN — Questionnaire Q12.** Is Monthly PT Deduction (PR-053) in scope for this phase given its complexity, and where should the PT slab table live as its single source of truth — this document, the Profession Tax Group master, or both?
> **A)** In scope now, full jurisdiction-dependent complexity; Profession Tax Group master is the source of truth. **B)** In scope now, but simplified to a single period-boundary convention first. **C)** Deferred — keep the current half-yearly deduction for this phase.

## 10. Employer NPS Contribution

**PR-060.** Employer NPS Contribution, where applicable, SHALL be tax-exempt up to 14% of Basic plus DA under the New Regime (10% under the Old Regime).

> **OPEN — Questionnaire Q13.** NPS appears in exactly one sentence, nowhere else in this BRD set — no NPS Salary Head, Settings group, or Employee-screen field exists anywhere. Is it genuinely in scope, or informational only?
> **A)** Genuinely in scope — new Salary Head, employee statutory fields, and formula needed. **B)** Informational only this phase; no build required. **C)** Needed, but scoped down to a manual/ad-hoc entry mechanism only.

## 11. Bonus Process

**PR-070.** Bonus SHALL be governed by the Payment of Bonus Act, 1965 (and the Kerala Shops and Commercial Establishments Act, 1960), applying to establishments with 10 or more employees. Employees drawing Basic+DA up to ₹21,000/month SHALL be eligible, subject to a minimum 30 days worked in the accounting year.

**PR-071.** Bonus SHALL be calculated at a minimum of 8.33% and a maximum of 20% of annual wages/salary, capped at ₹7,000/month or the applicable minimum wage, whichever is higher.

**PR-072.** A company SHALL be exempt from bonus payment for its first five years while loss-making; after that period, bonus payment SHALL be mandatory regardless of profitability.

**PR-073.** Bonus SHALL be paid within 8 months of the close of the financial year.

> **OPEN — Questionnaire Q14.** The document itself flags Set-off/Set-on (carrying forward excess/shortfall bonus over 4 years) as needing client discussion — the source's own admitted open item. What are the actual mechanics?
> **A)** Full 4-year rolling statutory ledger, built as specified. **B)** Simplified — statutory minimum or a manual percentage, no automatic carry-forward this phase. **C)** Not needed — Muziris doesn't intend to use set-off/set-on at all.

> **OPEN — Questionnaire Q15.** "Bonus" also appears as a monthly salary-head allowance ("included to cover the bonus liability") — how does it reconcile with the annual statutory Bonus Process?
> **A)** Same liability — monthly allowance is a running accrual, reconciled at year-end. **B)** Unrelated — a separate discretionary component; the shared name is coincidental. **C)** Same liability, but the payslip line only appears in the actual payout month.

> **OPEN — Questionnaire Q16.** Unlike Payroll Process, no screen/field/access-control detail is given for Bonus Process at all. What does the screen actually look like?
> **A)** Same select/Process/Delete pattern as Payroll Process, run once a year. **B)** A different, year-level entry screen (profit %, set-off/set-on ledger). **C)** Needs a live-system walkthrough before it can be specified.

## 12. Gratuity & Salary Arrears

**PR-080.** Gratuity SHALL be governed by the Payment of Gratuity Act, 1972, applying to establishments with 10 or more employees, and payable on retirement, resignation, death, disablement, or termination (except misconduct) after a minimum of 5 years' continuous service (waived for death or disablement).

**PR-081.** Gratuity SHALL be calculated as `(15 × Last Drawn Salary × Years of Service) / 26`, where Last Drawn Salary is Basic plus DA and Years of Service is rounded to the nearest full year (6+ months counts as a full year), capped at ₹20 lakh and tax-free up to that limit.

**PR-082.** The employer SHALL pay gratuity within 30 days of it becoming due; late payment SHALL attract interest and penalties.

**PR-083.** The four existing gratuity processing modes — On exit, As on date (organisation liability), On superannuation, and On a specific date — SHALL be retained.

**PR-084.** Salary Arrears SHALL be calculated by multiplying the increment amount by the number of months delayed, applied entirely at the company's discretion and tied to the increment-due month already captured on the employee screen.

> **OPEN — Questionnaire Q17.** No field-level detail exists for the Gratuity Process screen beyond the four retained modes. What does each mode's screen actually need?
> **A)** One screen, mode selector, shared calculation and output. **B)** Four distinct screens, since the modes behave quite differently (especially "As on date"). **C)** Needs a live-system walkthrough before specifying.

> **OPEN — Questionnaire Q18.** The arrears formula assumes an increment isolated to one component — does it need to account for formula-derived allowances (per §5) once those exist, cascading an arrear through dependent allowances?
> **A)** Single-component only, by design, even after formula-based allowances exist. **B)** Should cascade through formula-linked allowances once built. **C)** Not a real concern — increments are always given as a flat Basic/Gross revision in practice.

## 13. Payroll Verification & Other Screens

**PR-090.** Payroll Process Verification SHALL support verifying all, one, or a subset of employees for a given month. Once verified, that month's payroll process SHALL NOT be deletable or reprocessable, and Salary Slip generation SHALL only be available after verification.

**PR-091.** Incentives SHALL be a fixed monthly amount for a defined period, processed monthly but detached from the payroll run (credited on a separate date), and SHALL appear on the payslip labelled as project incentives — excluded from Gross Salary but included in CTC.

> **OPEN — Questionnaire Q19.** No correction path is described for an error discovered after payroll verification (PR-090), despite the rule's explicit irreversibility. Is there any mechanism?
> **A)** No direct correction — errors are corrected via a later month's Monthly Allowances & Deductions entry. **B)** A formal amendment/correction mechanism is needed, similar to the Employee module's pattern. **C)** Reprocessing should be allowed with a Super Admin override.

> **OPEN — Questionnaire Q20.** Monthly Allowances & Deductions is described in a single sentence, with no field list, access control, or stated relationship to Salary Head Group's "Variable" classification.
> **A)** Employee, Salary Head, Amount, Month, Reason fields, HR Admin access; the sole entry point for anything marked Variable. **B)** Same as A, but bulk-entry capable. **C)** Broader — also the general-purpose post-verification correction mechanism (per Q19), not limited to Variable components.

> **OPEN — Questionnaire Q21.** A screenshot elsewhere shows Incentive Process columns (Process Month/Year, Employee Code/Name, Credit/Payout Frequency, Incentive Amount, Process Amount, Deduction, Payout Amount) never described in this document's own text — confirm the field list and what Process Amount/Deduction mean.
> **A)** Screenshot's field list is complete and correct; Process Amount is the pro-rated run amount, Deduction is TDS/withholding on the incentive. **B)** Close but needs adjustment — describe in notes. **C)** Process Amount and Deduction need business clarification before confirming.

## 14. Open Items Register

| # | Questionnaire Q# | Topic | One-line summary |
|---|---|---|---|
| 1 | Q1 | CTC & Payroll Fundamentals | What is the complete, authoritative CTC formula? |
| 2 | Q2 | CTC & Payroll Fundamentals | Payroll period — calendar month only, or configurable? |
| 3 | Q3 | CTC & Payroll Fundamentals | LOP formula — Working Days or Month Days denominator? |
| 4 | Q4 | Formula-Based Allowances | Confirm scope/priority for formula-based allowance calculation. |
| 5 | Q5 | Formula-Based Allowances | Is DA's variable-rate mechanism actually wired to payroll? |
| 6 | Q6 | PF Contribution | Which PF contribution-basis options apply, employee and employer? |
| 7 | Q7 | PF Contribution | Confirm Employer Voluntary PF Contribution as in scope. |
| 8 | Q8 | TDS & Tax Regime | Does a TDS calculator already exist elsewhere, or build from scratch? |
| 9 | Q9 | TDS & Tax Regime | Old vs New Tax Regime — can employees choose? |
| 10 | Q10 | ESI Edge Cases | Confirm ESI ceiling-crossing reminder as in scope. |
| 11 | Q11 | ESI Edge Cases | Confirm ESI report conflict priority rule (Out of Coverage vs Relieved). |
| 12 | Q12 | Profession Tax | Monthly PT Deduction — scope, priority, slab data source. |
| 13 | Q13 | Employer NPS | Is Employer NPS Contribution genuinely in scope? |
| 14 | Q14 | Bonus Process | What are the Set-off/Set-on mechanics (BRD's own flagged item)? |
| 15 | Q15 | Bonus Process | How does the monthly Bonus allowance reconcile with annual Bonus Process? |
| 16 | Q16 | Bonus Process | What does the Bonus Process screen actually look like? |
| 17 | Q17 | Gratuity Process | What field-level detail does the Gratuity Process screen need? |
| 18 | Q18 | Salary Arrears | Does the arrears formula need to account for formula-derived allowances? |
| 19 | Q19 | Payroll Verification | Is there any post-verification correction path? |
| 20 | Q20 | Monthly Allowances & Deductions | What fields and access control does the screen need? |
| 21 | Q21 | Incentives Process | Confirm field list against the screenshot; clarify Process Amount/Deduction. |

## 15. Source References

- `05_Process.md` — primary source for this module (verified word-for-word identical to the Process Module section of the earlier consolidated PRD used to originally build the questionnaire).
- Employee Screen (consolidated PRD, Statutory Information / Location) — cross-referenced for the PF three-option basis, Employer Voluntary PF, ESI ceiling reminder, and ESI report-conflict open items (Q6, Q7, Q10, Q11), none of which appear in `05_Process.md` itself.
- `Masters_BRD.md` / `07_Masters.md` — Salary Head (no rate/formula field, corroborating Q4) and Advance Type cross-references.
- System Management Settings — Branch Wage Settings ("Wage Calculation Type: Month Days," Q3), Salary Head Group (formula mechanism, Q4/Q5), Profession Tax Group (Q12).
- `ProcessModule_BRD_Questionnaire.html` — the live, numbered list of the 21 open questions this document references; regenerate this BRD if further answers are recorded there.

---

*This document consolidates confirmed facts from `05_Process.md` into requirement form. Every remaining unresolved decision is cross-referenced to its exact question in `ProcessModule_BRD_Questionnaire.html`. No requirement above an OPEN box assumes an answer to any open item.*

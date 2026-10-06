# MuzPayroll — System Management Business Requirements Document

## Document Control

| | |
|---|---|
| Module | System Management — Settings (Payroll Group, Minimum Wages, DA, Attendance & Leave Group, Holiday & Off Day, Shift, Salary Head, Profession Tax, Payroll Settings, Act Abstract, Report Definition, Incentives Settings) and User Rights Management (User Group, Location Group, User/Location Group Rights, User Settings, Authorization User Allocation, Employee And User Linking, Company Allocation), plus Database Back Up |
| Status | Draft — confirmed content only; 13 items remain open pending stakeholder sign-off |
| Source documents | `07_System_Management.md` (Settings and User Rights Management sections only — see §2.2), cross-referenced against Process Module, Attendance & Leave Management, and Compensatory Offs BRDs |
| Companion document | `SystemManagement_BRD_Questionnaire.html` — every OPEN item below is numbered against this file's live 13-question list; regenerate this BRD if further answers are recorded there |

## 1. Purpose

This document defines the confirmed business requirements for the MUZPAYROLL System Management module's Settings and User Rights Management areas — the screens where payroll administrators configure groups, statutory parameters, working-hours and wage rules, incentive mechanics, and access control for both the employer and employee portals. It consolidates everything established with certainty from the source material, and separates that from everything still awaiting a stakeholder decision.

## 2. Scope

### 2.1 In Scope

- **Settings** — Payroll Group, Minimum Wages Group, DA Base Point/Rate and Index Settings, Attendance & Leave Group, Holiday & Off Day Group, Shift Group, Salary Head Group, Profession Tax Group, Payroll Settings (Company and Branch), Act Abstract, Report Definition, Incentives Settings
- **User Rights Management** — User Group, Location Group, User Group Rights, Location Group Rights, User Settings, Location And Group Rights Matching, Authorization User Allocation, Employee And User Linking, Company Allocation
- **Database Back Up** — named as a System Management sub-item; treated here as an open item per the source's own note (§13)

### 2.2 Out of Scope

- **Masters** — `07_System_Management.md` opens with its own supersession note: *"The Masters section below is the original, too-thin BRD text. A proper Masters BRD, built from the live screen screenshots, now lives in `07_Masters.md` — use that one."* This document therefore excludes the Masters content entirely; it is already covered by `Masters_BRD_Questionnaire.html` (22 questions, 12 sections).
- **A note on durability:** the same source note also states *"The Settings and User Rights Management content further down this file still stands for now, but the Product Manager has agreed to prepare a fresh BRD for Settings, which will supersede it too."* This BRD and its companion questionnaire were built on the current, standing content per that note — some items here may be superseded once that fresh Settings BRD arrives. Re-run this module's gap analysis against the new source when it's available.

## 3. How to Read This Document

Every requirement below is written as a firm statement (*"The system SHALL…"*) because the source material confirms it without ambiguity. Anything not yet resolved is called out in an **OPEN** box immediately under the relevant screen, in the same form used across this BRD set:

- **OPEN — Questionnaire Q#** — the decision is already posed as a question in `SystemManagement_BRD_Questionnaire.html`; the box restates the question and its three options. Do not build against a guessed option — wait for the recorded answer.

## 4. Payroll Group

**SM-001.** The system SHALL support creating payroll groups for eight distinct purposes: Minimum Wages, DA Industry, Attendance & Leave, Holiday, Shift, Off Day, Salary Head, and Profession Tax. A group SHALL be mandatory for every purpose, even where only one group is common to all employees.

**SM-002.** Muziris's current groups SHALL be: Minimum Wages — one group, "IT industry"; DA Industry — one group, "Shops" (Shops & Establishment classification); Attendance & Leave — two groups, Confirmed and Probationer; Holiday — one group, "General"; Shift — one group, "General" (with two shift timings attached — see §7); Off Day — three groups (Off Day Group 1 & 3: Sunday + 1st/3rd Saturday; Off Day Group 2 & 4: Sunday + 2nd/4th Saturday; Off Day Sunday: Sunday only); Salary Head — grouped by PF/ESI coverage combination (Only PF, Both PF & ESI, No PF and ESI); Profession Tax — one group, "General."

No open item applies to this screen; the description is complete as given.

## 5. Minimum Wages Group

**SM-010.** The system SHALL allow entry and verification of minimum wages applicable to each Government Job Grade, for each Minimum Wages payroll group. This data SHALL also be accessed by the Bonus process, where bonus calculation depends on minimum wages. Amendments SHALL be supported when the government revises minimum wages, without discarding the prior rate.

### 5.1 Minimum-Wages Cross-Check Enforcement

> **OPEN — Questionnaire Q1.** A cross-check against the minimum wage is stated as needed when an employee is created or their salary is amended, to ensure Basic + DA meets the applicable minimum — but no enforcement behavior (block vs. warn) is described.
> **A)** Hard block, no override. **B)** Warning only, still saveable. **C)** Hard block with an authorized-override path.

## 6. DA Settings

**SM-020.** DA Base Point and Rate SHALL be defined per DA group, with support for state-specific variation and a Wage Type selection (monthly or daily); Muziris currently defines this only for the Shops & Commercial Establishments classification.

**SM-021.** DA Index Settings SHALL allow entry of the price index for each DA center within a state, supporting multiple states/centers; Muziris currently uses only the Ernakulam DA center, matching its single processing location.

No open item applies to either screen; both are complete as described.

## 7. Attendance & Leave Group

**SM-030.** The system SHALL define, per Attendance & Leave payroll group (Confirmed, Probationer), the leaves applicable, their quantum, and when they are credited. Earned Leave quantum SHALL be 24/year for Confirmed employees and 12/year for Probationers. All leave types (Optional Holiday, Maternity Leave, Loss of Pay, and the comp-off family — Holiday Comp Off, Sunday Comp Off, Rest Day) SHALL be applicable to every employee; only Earned Leave quantum differs between the two groups.

### 7.1 Per-Type Carry-Forward, Encashment, and Expiry Rules

> **OPEN — Questionnaire Q2.** This screen's own introduction names carry-forward, encashment, and expiry date as what it defines per leave type, but none of the three is actually specified for any type in this document — and this is the authoritative settings source two other modules' open items expected to resolve against.
> **A)** The rules exist on the live screen but were omitted here — supply them. **B)** Not yet actually configurable per type; still hardcoded elsewhere. **C)** A different situation — describe in the notes field.

## 8. Holiday & Off Day Group

**SM-040.** Holidays for the current leave year SHALL be defined at the beginning of the year via this settings screen, with both a tile view and a list view (entry via list view). Off days SHALL be defined per Off Day payroll group via the same screen, including a "Set Off Day" option for applying Sunday/Saturday patterns by group. Both holidays and off days SHALL be defined as of the 1st day of the leave year.

No open item applies to this screen. (Its interaction with the Attendance & Leave Management module's holiday-declared-after-muster-roll-save defect is already tracked in `AttendanceLeave_BRD.md` §5.3, not duplicated here.)

## 9. Shift Group

**SM-050.** Different shifts and shift timings SHALL be definable via this settings screen. Muziris currently has one Shift group ("General") with two shift timings attached: one for all employees except housekeeping staff, and a separate timing for housekeeping staff.

**SM-051 [confirmed — corroborating cross-reference].** As documented here directly ("Apart from creating the shift, it doesn't seem to have any implications elsewhere in the system"), Shift Group configuration currently has no downstream effect on attendance or payroll processing. This is now confirmed from three independent sources across this project: this document, and twice independently in the Attendance & Leave Management BRD (Varying Shift Allocation, and Muster Roll's 7:30-hrs standard — see `AttendanceLeave_BRD.md` §5.1, §7.2). No new question is raised here; both open items in that BRD already cover the implications.

### 9.1 Cross-Module Note — Working Hours May Also Vary by Branch, Not Only by Shift

**SM-052 [confirmed fact, cross-module implication — not itself open].** Payroll Settings' Branch Wage settings (§11) confirms "Full day working hours" and "Half day working hours" are branch-level fields, distinct from Shift Group. This is new evidence bearing on `AttendanceLeave_BRD_Questionnaire.html` Q5 (whether the Muster Roll 7:30-hrs standard is fixed system-wide or varies by shift) — none of that question's three options considered branch-level variation as a possibility. This is noted here as a cross-module flag per this skill's guardrails; `AttendanceLeave_BRD.md` and its questionnaire are not edited as part of this pass.

## 10. Salary Head Group

**SM-060.** The system SHALL support defining, per Salary Head payroll group, the allowances (fixed, variable, or formula-calculated by selecting component allowances and a percentage; certain allowances excluded from gross salary are marked as internally calculated), deductions (statutory deductions such as PF and ESI are calculated via a rules-section formula; Profession Tax is internally calculated from the Profession Tax group), and company contributions (PF and ESI company contributions, calculated via a rules-section formula).

**SM-061 [confirmed — corroborating cross-reference].** TDS deduction is confirmed here as currently set to "variable," since "TDS calculation is not currently covered in payroll solution" and a TDS calculator "needs to be included in the new system." This independently corroborates the Process Module BRD's own TDS & Tax Regime open items from a second source; TDS formula specifics remain that module's scope, not this one's.

**SM-062.** A rounding factor SHALL be provided, since Loss of Pay calculation may produce recurring decimal amounts. *(Its exact methodology and scope of application are OPEN; see §10.1.)*

### 10.1 Rounding Factor Methodology

> **OPEN — Questionnaire Q4.** No rounding rule (nearest rupee, always down, always up, decimal precision) is stated, nor whether it applies only to LOP or to other formula-calculated components too.
> **A)** Nearest rupee, applied across the whole payslip. **B)** 2 decimals, always rounded down, LOP-specific. **C)** A different rule/scope — describe in the notes field.

## 11. Wage & Working-Hours Settings (Payroll Settings)

**SM-070.** Payroll Settings SHALL provide Company-level General settings (leave year definition — currently January–December for Muziris) and Wage settings (attaching the company's Minimum Wages group, DA Industry group, and DA Center).

**SM-071.** Payroll Settings SHALL provide Branch-level settings across six sections: General (applicable acts/laws, establishment number, LIN), Wage (Wage Calculation Type — currently "Month Days" for Muziris — plus No. Of month days, group attachments for Minimum Wages/DA Industry/DA Center/Salary Head/Profession Tax/Attendance & Leave/Holiday/Off Day/Shift, CCA applicability and minimum CCA, advance limits, salary payment date, full-day and half-day working hours, off-day-settings and time-sheet applicability toggles), PF, ESI, WF (Welfare Fund), and Bonus settings (each with their own establishment number and rate/limit fields as named in the source).

**SM-072 [confirmed — corroborates a different module's open item].** "Currently, the leave year start month is given as January" (SM-070) directly confirms the Leave Year Start Month is a live, currently-set field — corroborating (not resolving) `AttendanceLeave_BRD_Questionnaire.html` Q12's open question of whether Yearly Opening's "1st January" applicable date is tied to this setting or hardcoded independently of it.

### 11.1 "No. Of Month Days" — Calendar-Derived or Manual?

> **OPEN — Questionnaire Q3.** This field sits alongside "Wage Calculation Type - Month Days," but its data source (auto-computed vs. manually maintained) is not stated, despite directly feeding the Process Module's already-open LOP formula denominator question.
> **A)** Auto-derived from the calendar. **B)** Manually maintained each month. **C)** Manually set once to a standard value, not calendar-tracked.

### 11.2 "Time Sheet Applicable" — Alternative Process When Off

> **OPEN — Questionnaire Q5.** This branch-level toggle implies a branch could run without the Time Sheet Upload → Muster Roll pipeline, but no alternative attendance-capture workflow is described for that case.
> **A)** No real alternative exists yet — every branch has it on today. **B)** An alternative exists — direct Muster Roll entry by HR. **C)** A different mechanism — describe in the notes field.

## 12. Statutory Coverage & Incentives

**SM-080.** Profession Tax slabs SHALL be entered per Profession Tax group (Muziris: one "General" group), forming the basis of the half-yearly Profession Tax calculation. Act Abstract SHALL allow a brief description of each applicable labour law/act to be entered and stored. Report Definition SHALL allow the allowances and deductions appearing in a given report to be selected.

### 12.1 Statutory Compliance Checklist

> **OPEN — Questionnaire Q6.** The system is stated to require "all the labour laws" be covered for statutory compliance, but no definitive, enumerated checklist of required acts is given anywhere, and Act Abstract's own entry screen is free-text/open-ended.
> **A)** A definitive checklist exists elsewhere (legal/compliance) — supply it. **B)** No fixed checklist; intentionally open-ended. **C)** Treat the acts already named elsewhere in this BRD set as the checklist unless legal identifies more.

**SM-081.** Incentives Settings SHALL allow entry, per employee, of incentive amount, start date, end date, credit frequency, and payout frequency. At least two credit/payout combinations are confirmed to exist: credited monthly and paid out monthly; and credited monthly but paid out half-yearly.

### 12.2 Incentive Credit/Payout Mechanics

> **OPEN — Questionnaire Q7.** What "credited" means when no payout follows that month, and what other credit/payout frequency combinations are actually supported, is not explained.
> **A)** Accrual-only ledger entry until payout, then shown as payslip income. **B)** Always shown as payslip income at credit time, regardless of payout timing. **C)** A different mechanism — describe in the notes field, including the full supported frequency list.

## 13. User Rights Management

**SM-090.** User Group SHALL allow creation of groups such as Employees, HRD, and Team Leads, used to group employees for rights assignment. *(Whether this list is fixed or freely extensible is OPEN; see §13.1.)*

**SM-091.** Location Group SHALL allow employees to be grouped by working location, for rights assignment based on location. Location And Group Rights Matching SHALL map a company location to its corresponding location group.

**SM-092.** User Group Rights and Location Group Rights SHALL each allow Add/Edit/Delete rights to be assigned to a group, separately for the employer portal and the employee portal, per screen/option. *(Whether this is the complete permission model is OPEN; see §13.2.)*

**SM-093.** User Settings SHALL allow each employee to be mapped to one or more User Groups and one or more Location Groups, granting the union of access those groups provide. *(The conflict-resolution rule when groups disagree is OPEN; see §13.3.)*

**SM-094.** Authorization User Allocation SHALL allow verification/authorization rights over specific options to be assigned to the employees responsible for them. *(Its relationship to User/Location Group Rights, and whether it governs Payroll Verification specifically, is OPEN; see §13.4.)*

**SM-095 [confirmed — explicitly out of scope].** Company Allocation is confirmed by the source as created for a different implementation ("Norms") and not used in Muziris. No requirement or open item is raised for it.

### 13.1 User Group — Fixed or Extensible?

> **OPEN — Questionnaire Q8.** "Like Employees, HRD, Team Leads etc" reads as illustrative, not an exhaustive list — but nothing confirms whether new groups can actually be created freely.
> **A)** Freely creatable by any administrator. **B)** Fixed set; new groups require a change request. **C)** Creatable, but only by a specific elevated role.

### 13.2 Rights Granularity vs. Approval Workflows

> **OPEN — Questionnaire Q9.** Only Add/Edit/Delete are named as assignable rights, while most workflows documented elsewhere in this project (Leave, Compensatory Offs, Advance Management) are approval chains, where Approve/Reject is a distinct action from Edit.
> **A)** Add/Edit/Delete is genuinely complete; Edit covers approval-status changes. **B)** The list is incomplete — supply the actual full verb list. **C)** Approval rights are governed separately, via Authorization User Allocation.

### 13.3 Multi-Group Conflict Resolution

> **OPEN — Questionnaire Q10.** An employee can belong to multiple User and Location Groups, but no rule is given for what happens when their groups disagree on a right for the same screen.
> **A)** Most permissive wins. **B)** Most restrictive wins. **C)** Most permissive by default, with explicit deny overriding.

### 13.4 Relationship Between the Three Rights Screens

> **OPEN — Questionnaire Q11.** User Group Rights, Location Group Rights, and Authorization User Allocation are each described in isolation, with no stated precedence or combination rule — and no confirmation of which one (if any) governs the Process Module's confirmed-irreversible Payroll Verification step.
> **A)** Layered — group rights give baseline access; Authorization User Allocation is a narrower verification-specific layer covering Payroll Verification. **B)** Independent, non-overlapping screen sets. **C)** A different relationship — describe in the notes field, and confirm what governs Payroll Verification specifically.

## 14. Employee And User Linking

**SM-100.** The system SHALL link the employee user account (generated at employee creation) to the employee record; this linking SHALL normally happen automatically as part of employee creation itself. A manual linking screen SHALL also be available for the cases where automatic linking does not occur. *(The exact trigger for needing manual linking is OPEN; see §14.1.)*

### 14.1 Manual Linking Trigger

> **OPEN — Questionnaire Q12.** "Normally happens while employee creation itself" implies an exception case requiring manual linking, which is never described.
> **A)** Needed when a record is created without an immediate portal login (e.g. bulk upload). **B)** Needed as an error-recovery path when auto-generation fails. **C)** A different trigger — describe in the notes field.

## 15. Database Back Up

> **OPEN — Questionnaire Q13.** Database Back Up is listed as a System Management sub-item with no description anywhere in the source body — no schedule, retention, restore flow, or authorization is given. The source's own closing note flags this directly as "an open item for BRD Finalization," the highest-confidence kind of gap in this document.
> **A)** Automatic scheduled backup with a defined retention window; restore limited to a System Administrator right. **B)** Manual, on-demand backup before high-risk operations, no fixed schedule. **C)** Out of scope for this BRD — an infrastructure/hosting-level concern.

## 16. Open Items Register

| # | Questionnaire Q# | Screen | One-line summary |
|---|---|---|---|
| 1 | Q1 | Minimum Wages Group | Is the minimum-wage cross-check a hard block or a warning, and against what figure? |
| 2 | Q2 | Attendance & Leave Group | Where are the per-leave-type carry-forward, encashment, and expiry rules? |
| 3 | Q3 | Payroll Settings — Branch Wage | Is "No. Of month days" auto-derived from the calendar, or manually maintained? |
| 4 | Q4 | Salary Head Group | What rounding methodology does the rounding factor apply, and to which calculations? |
| 5 | Q5 | Payroll Settings — Branch | What attendance process does a branch use when "Time Sheet applicable" is off? |
| 6 | Q6 | Act Abstract / Payroll Settings | Is there a definitive statutory-coverage checklist, or is it open-ended? |
| 7 | Q7 | Incentives Settings | How does "credited monthly, paid out half-yearly" actually work? |
| 8 | Q8 | User Group | Is the User Group list fixed, or freely creatable? |
| 9 | Q9 | User Group Rights | Is Add/Edit/Delete the complete permission model, given how many workflows are approval-based? |
| 10 | Q10 | User Settings | When an employee's multiple groups disagree on a right, which rule wins? |
| 11 | Q11 | User/Location Group Rights, Authorization User Allocation | How do these three rights-assignment screens combine, and what governs Payroll Verification? |
| 12 | Q12 | Employee And User Linking | When is manual linking required instead of automatic? |
| 13 | Q13 | Database Back Up | What's the trigger, schedule, retention, and restore flow? |

**Confirmed cross-references, not open items:** SM-051 corroborates `AttendanceLeave_BRD.md`'s Shift Group findings from a third independent source; SM-052 flags new branch-level evidence bearing on that same BRD's still-open Q5, without editing it; SM-061 corroborates the Process Module BRD's TDS open items from a second source; SM-072 corroborates (without resolving) `AttendanceLeave_BRD_Questionnaire.html` Q12; SM-095 confirms Company Allocation as explicitly out of scope for Muziris.

## 17. Source References

- `07_System_Management.md` — primary source for this module (Settings and User Rights Management sections only; Masters section excluded per the document's own supersession note — see §2.2).
- `07_Masters.md` / `Masters_BRD_Questionnaire.html` — the authoritative Masters BRD this document defers to; not touched by this pass.
- `ProcessModule_BRD.md` — cross-referenced for the LOP formula denominator (§11.1) and TDS (§10) corroborations.
- `AttendanceLeave_BRD.md` — cross-referenced for Shift Group (§9.1), Attendance & Leave Group per-type rules (§7.1), and Leave Year Start Month (§11) corroborations.
- `CompensatoryOffs_BRD.md` — cross-referenced for the Attendance & Leave Group carry-forward/encashment/expiry gap (§7.1).
- `SystemManagement_BRD_Questionnaire.html` — the live, numbered list of the 13 open questions this document references; regenerate this BRD if further answers are recorded there.

---

*This document consolidates confirmed facts from `07_System_Management.md`'s Settings and User Rights Management content into requirement form; its Masters content is intentionally excluded per the source's own note. Every remaining unresolved decision is cross-referenced to its exact question in `SystemManagement_BRD_Questionnaire.html`. No requirement above an OPEN box assumes an answer to any open item.*

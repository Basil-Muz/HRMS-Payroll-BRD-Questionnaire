# MuzPayroll — Attendance & Leave Management Business Requirements Document

## Document Control

| | |
|---|---|
| Module | Attendance & Leave Management (Employer Portal) — Employee Time Sheet Upload, Muster Roll, Attendance Conflict Management, Varying Weekly Off/Shift Allocation, Compensatory Off Entry, Holiday Compensatory Off Entry, Leave Allocation/Deallocation, Leave Encashment, Leave Year End Process |
| Status | Draft — confirmed content only; 21 items remain open pending stakeholder sign-off |
| Source documents | `03_Attendance_and_Leave_Management.md`, cross-referenced against Masters (Attendance and Leave codes, Salary Head codes), System Management Settings (Shift Group, Payroll Settings/Leave Year Start Month) |
| Companion document | `AttendanceLeave_BRD_Questionnaire.html` — every OPEN item below is numbered against this file's live 21-question list; regenerate this BRD if further answers are recorded there |

## 1. Purpose

This document defines the confirmed business requirements for the MUZPAYROLL Attendance & Leave Management module in the employer portal — the HR-facing screens that convert employee-submitted time sheets into official attendance records, manage shift and off-day allocation, process compensatory-off crediting, allocate and deallocate leave, and run the annual leave year-end close. It consolidates everything established with certainty from the source material, and separates that from everything still awaiting a stakeholder decision.

## 2. Scope

### 2.1 In Scope

- **Employee Time Sheet Upload** — fetch and review employee-submitted time sheet data ahead of conversion to attendance
- **Muster Roll** — the four-tab (Time Sheet / Attendance-Leave / Over Time / Short Time) screen that converts saved time sheets into the official attendance record
- **Attendance Conflict Management** — post-save review of irregular entries (e.g. hours logged on an off day or holiday)
- **Varying Weekly Off / Varying Shift Allocation** — non-standard off-day and shift assignment for individual employees or groups
- **Compensatory Off Entry / Holiday Compensatory Off Entry** — HR-side crediting and approval of comp-offs
- **Leave Allocation/Deallocation** — the four transaction types: Employee Joining, Yearly Opening, Promotion Leave, Special Leave
- **Leave Encashment** — comp-off encashment initiated from the employer portal
- **Leave Year End Process** — annual carry-forward/lapse close-out

### 2.2 Out of Scope

- **Leave Management (Employee Self-Service)** — the employee-facing leave application/withdrawal/cancellation flow; covered by `LeaveManagementESS_BRD.md`. Referenced here only where this module's own text names it as a data source (e.g. Muster Roll's Attendance/Leave tab fetching leave data from the "Leave Application Module").
- **Compensatory Offs (Employee Self-Service)** — the employee-facing comp-off claim/recommendation/approval flow; covered by `CompensatoryOffs_BRD.md`, which this module's Compensatory Off Entry screen receives sanctioned claims from.
- **Time Sheet Management (Employee Self-Service)** — the employee-facing time sheet entry screen this module's Level 2 handling fetches from; covered by its own separate BRD.

## 3. How to Read This Document

Every requirement below is written as a firm statement (*"The system SHALL…"*) because the source material confirms it without ambiguity. Anything not yet resolved is called out in an **OPEN** box immediately under the relevant screen, in the same form used across this BRD set:

- **OPEN — Questionnaire Q#** — the decision is already posed as a question in `AttendanceLeave_BRD_Questionnaire.html`; the box restates the question and its three options. Do not build against a guessed option — wait for the recorded answer.

## 4. Employee Time Sheet Upload

**Purpose:** fetch, review, and manage employee-submitted time sheet entries ahead of conversion to attendance.

**AL-001.** The system SHALL allow authorized users to filter and view time sheet data by month, department, or date range before saving it for further processing.

**AL-002.** The screen SHALL provide four actions: Cancel (exit without saving), Refresh (reload current data), Proceed (advance to the next stage), and Apply (apply the selected filters and proceed).

**AL-003.** The system SHALL distinguish two handling levels: Level 1 (Senior Management), whose time sheets are automatically populated, and Level 2 (Other Employees), whose time sheets are those already entered by the employee in the employee portal, fetched here for review. *(The exact classification rule and Level 1's data source are OPEN; see §4.1.)*

**AL-004.** The system SHALL provide a Remove Upload action, allowing deletion of a supervisor-entered time sheet upload for selected employees, to permit correction.

**AL-005.** Once reviewed, saved time sheet data SHALL be used as the input to Muster Roll's attendance conversion.

### 4.1 Level 1 / Level 2 Classification

> **OPEN — Questionnaire Q2.** What field or rule determines whether a given employee is Level 1 or Level 2, and where does Level 1's auto-populated data actually come from?
> **A)** Same as Designation's Level field, above a stated threshold; Level 1 auto-populates as fixed full-day hours every working day. **B)** A separate, new classification field, not tied to Designation's Level. **C)** Role-based, determined dynamically from reporting hierarchy, not a stored field.

### 4.2 Biometric / Mobile-Punch Data Sources

> **OPEN — Questionnaire Q1.** Employee Time Sheet Upload's own flagged open item states time data is not fetched from any external tool (biometric punching, login tools). Muster Roll separately describes "Multiple Attendance Input Sources: Biometric, Mobile App Punch" under a bare "New requirement from Norms" flag — the same label-only flagging pattern this document uses elsewhere for confirmed-unbuilt multi-bullet clusters. Read that way, the two passages agree (neither exists yet) rather than contradict — but the flag's exact boundary is inferred from formatting, not stated explicitly, and needs confirming. The reading also determines whether three further bullet-clusters (Holiday/Off-Day Integration's NFH-timing fix, Attendance Display's colour-coding, OT/ST Enhancements — see §5.4) are likewise unbuilt.
> **A)** Not built, and not actually a contradiction — the flag covers this passage and the three clusters that follow it. **B)** Already built — the flag does not extend this far; both data sources already feed the time sheet. **C)** Partially built — specify which source exists in the notes field.

## 5. Muster Roll

**Purpose:** converts saved time sheet data into the official attendance record, across four tabs, filterable by Employee, Leave Group (Confirmed/Probationer), Gender, Department, Location, and date range.

**AL-010.** The Time Sheet tab SHALL display month-wise saved time sheet data, showing each employee's total hours and total working days; clicking an employee's name SHALL open a popup showing that employee's leave balance as of that month. Saving this tab SHALL populate data into the Attendance/Leave tab.

**AL-011.** The Attendance/Leave tab SHALL mark entries of 7:30 hrs/day as Present, SHALL fetch additional leave data from the Leave Application module, and SHALL constitute the official record that determines payroll implications. It SHALL show total LOP days and total working days per employee, and SHALL show a weekly attendance summary when an employee row is highlighted. *(Whether the 7:30 hrs threshold varies by shift is OPEN; see §5.1.)*

**AL-012.** Confirmed final attendance status codes SHALL include at minimum P (Present), LOP (Loss of Pay), H (Holiday), and OD (Off Day); an additional "L" code is described but its mapping to the Masters BRD's specific leave-type codes (EL, OH, etc.) is unresolved, and the full code list is not confirmed complete. *(See §5.2.)*

**AL-013.** The Over Time tab SHALL display each employee's daily and monthly total overtime hours. The Short Time tab SHALL display instances of an employee working less than 7:30 hrs/day.

**AL-014.** The Set option (correction tool) SHALL allow HR to delete or update an incorrect leave/attendance entry by selecting the affected dates, choosing a Leave Group, marking the attendance field with a hyphen, and clicking Set; it SHALL be applicable to a specific day or a date range, and to a single employee or all employees.

### 5.1 7:30-Hrs Standard Workday

> **OPEN — Questionnaire Q5.** Does the 7:30 hrs Present/Overtime/Short-Time threshold vary by an employee's assigned shift (per Settings' Shift Group, which allows differing shift timings), or is it one fixed value for every employee regardless of shift?
> **A)** Fixed system-wide; Shift Group's timings are scheduling-only. **B)** Varies by shift; Shift Group needs its own expected-hours field driving this calculation. **C)** Fixed today, shift-based variation is a new requirement for later.

### 5.2 NFH and the "L" Status Code

> **OPEN — Questionnaire Q3.** What does NFH stand for, and how does it differ from the plain "H – Holiday" status? It appears only in a colour-coding list and in a described defect, with no definition given.
> **A)** No Formal Holiday — a distinct status for a holiday declared after the fact (e.g. a Hartal). **B)** Effectively a display synonym for H; the described defect is a timing bug, not a missing status. **C)** A different meaning — describe in the notes field.

> **OPEN — Questionnaire Q4.** Muster Roll's generic "L" status doesn't match the Masters BRD's specific leave-type code list (EL, ML, OH, etc., plus CO/COH/SCO for comp-off variants). What does "L" actually represent?
> **A)** Shorthand for whichever specific Masters code applies — each cell should show the real code, not a generic "L". **B)** A genuine aggregate "any leave" status by design, with the specific type available only in the detail popup. **C)** The listing is incomplete regardless — a live walkthrough is needed to confirm every code Muster Roll actually shows.

### 5.3 Holiday Declared After Muster Roll Save

**AL-015 [confirmed — not itself open].** In scenarios such as a Hartal or sudden strike, a holiday can be declared after that day's muster roll has already been entered and saved. The source confirms that when this happens, the system does not correctly reflect NFH status for the affected day — this is a known defect, whose fix depends on §5.2's NFH definition and on §4.2's flag-scope finding (this passage sits inside the same flagged cluster as the biometric/mobile-punch bullet).

### 5.4 Colour-Coding and OT/Short-Time Enhancements

**AL-016 [pending — see §4.2].** The source additionally describes colour-coded attendance cells (matching master leave/attendance head colours) and two OT/Short-Time enhancements (allowing OT marking on OD/Leave days; including colour in the OT and ST tabs). Per §4.2's finding, these sit within the same "New requirement from Norms" flag as the biometric/mobile-punch bullet and are most likely unbuilt new requirements rather than confirmed current behaviour — pending Q1's answer.

## 6. Attendance Conflict Management

**AL-020.** After Muster Roll is saved, the system SHALL provide an Attendance Conflict Management view listing irregular time sheet entries — specifically, hours worked by an employee on an Off Day or a Holiday (typically due to work exigencies) — for review and rectification. No open item applies to this screen; the description is complete as given.

## 7. Shift & Off-Day Allocation

**AL-021.** Varying Weekly Off Allocation SHALL allow HR to assign a non-standard weekly off, for an individual employee or a group, on a monthly basis, when that employee's Fixed Off Day flag is unchecked in the employee master; a permanent (non-monthly) varying pattern SHALL instead be configured via the common Off Day Group.

**AL-022.** Varying Shift Allocation SHALL allow HR to assign a non-standard shift to an employee when that employee's Fixed Shift flag is unchecked in the employee master. As documented, this currently has no downstream effect on attendance or payroll processing — it is not connected to the attendance management process — corroborated independently by the System Management BRD's own description of Shift Group.

### 7.1 Weekly-Off Conflict Defect

> **OPEN — Questionnaire Q7.** The flagged item under Varying Weekly Off Allocation describes an actual defect (fixed-off employee master conflicting with a varying-off leave group, incorrectly showing LOP instead of the correct off-day status) rather than a new capability. Should this be tracked and prioritized as a standalone bug fix, separate from other new-requirement work in this module?
> **A)** Yes — standalone defect, high priority; it affects pay via incorrect LOP. **B)** No — bundle with the rest of the Weekly Off/Shift Allocation new-requirement work. **C)** Needs investigation first, to confirm the exact trigger condition.

### 7.2 Varying Shift Allocation — Scope

> **OPEN — Questionnaire Q6.** Four substantial new-requirement clusters (Auto Shift Reallocation, Bulk Shift Upload via Excel, Colour-coded Shift Screen, Punch-based shift validation) follow a feature confirmed by two independent documents to currently have no downstream effect. Are these genuinely in scope now, given they mean building a new integration from nothing rather than enhancing an existing one?
> **A)** Yes — build the full integration now, all four clusters. **B)** Defer entirely — Shift stays standalone this phase. **C)** Partial — specify which clusters in the notes field.

## 8. Compensatory Off

**AL-030.** Compensatory Off Entry SHALL present, for HR view and approval, overtime-based comp-off applications that have already been recommended and sanctioned by the employee's supervisor via the employee portal. Entries SHALL be viewable for selected employees, departments, and a selected period, including previously approved comp-offs, and SHALL support sorting by project and by comp-off type.

**AL-031.** Holiday Compensatory Off SHALL be credited automatically to an employee's leave account, in the month of the coinciding holiday, whenever a listed company holiday falls on that employee's off Saturday, per Muziris holiday policy; the crediting action SHALL be performed via a select-all-and-save operation over the list of eligible employees. Holiday Compensatory Off SHALL have no encashment and no carry-forward — it SHALL be available for use only within the leave year it was credited.

### 8.1 Rejection Path

> **OPEN — Questionnaire Q8.** Compensatory Off Entry is described as "view and approval" only, with no rejection path mentioned anywhere in the OT → supervisor → HR chain. Can HR reject an entry at this stage, and if so, what happens to the underlying overtime record?
> **A)** No rejection at HR stage — supervisor sanction is effectively final. **B)** HR can reject — specify whether it returns to the supervisor or cancels the record. **C)** Rejection happens further upstream; this screen's approval is a formality.

### 8.2 Holiday Comp Off Expiry Notification

> **OPEN — Questionnaire Q9.** The forfeiture rule (use within the same leave year, no carry-forward, no encashment) is clear, but the source doesn't say what happens if an employee simply never uses it — silent lapse, or a warning before expiry?
> **A)** Silent lapse — no notification mechanism needed. **B)** Warned before expiry, via a reminder to employee and/or HR. **C)** Shown in the balance popup at all times, but no separate proactive warning.

## 9. Leave Allocation/Deallocation

Four transaction types, each with distinct logic: Employee Joining, Yearly Opening, Promotion Leave, Special Leave.

### 9.1 Employee Joining

**AL-040.** The system SHALL allocate Earned Leave (EL) and Optional Holiday (OH) to a newly joined employee, dated by that employee's Date of Joining (for EL eligibility) and governed by the following confirmed quantum rules:
- Confirmed employees SHALL accrue 2 EL/month (24 EL/year); Probationers SHALL accrue 1 EL/month (12 EL/year).
- An employee joining after the 5th of a month SHALL NOT be eligible for EL in that joining month.
- OH allocation SHALL follow: 2 OH for an employee joining on January 1st; 1 OH for an employee joining January 2nd through July 1st; 0 OH for an employee joining after July 1st.

**AL-041.** The employee drop-down for this transaction SHALL list only employees whose profile joining date exactly matches the date range being processed; where multiple employees join in the same month, allocation SHALL currently be performed individually per employee by their specific joining date.

> **OPEN — Questionnaire Q10.** Given the EL/OH quantum rule above is fully deterministic, should the leave count be auto-populated now from Employee Type and Joining Date (as requested), or does manual entry stay for this phase?
> **A)** Automate now, with HR override still allowed. **B)** Automate now, locked — exceptions go through a separate correction process. **C)** Keep manual entry for this phase.

### 9.2 Promotion Leave

**AL-042.** The system SHALL allocate an additional Earned Leave amount when an employee's status changes from Probationer to Confirmed, applicable from the beginning of the month; the employee's current EL and OH balances SHALL be viewable on this screen. Confirmed employees are eligible for 24 EL/year (2/month).

> **OPEN — Questionnaire Q11.** No formula is given for what the "additional" leave count on promotion actually equals numerically — unlike Employee Joining, where the full rule is stated.
> **A)** (Confirmed rate − Probationer rate) × months remaining in the leave year from the promotion date — future accrual only. **B)** A full retroactive top-up recalculating the whole current leave year as if Confirmed from day one. **C)** A different formula — describe in the notes field.

## 10. Leave Allocation — Yearly Opening & Special Leave

### 10.1 Yearly Opening

**AL-050.** The system SHALL allocate Earned Leave and Optional Holiday at the start of a new leave year: Confirmed employees SHALL receive 24 EL; Probationers SHALL receive 12 EL; employees present in the muster roll on January 1st SHALL receive 2 OH.

> **OPEN — Questionnaire Q12.** Yearly Opening's applicable date is written as the literal date "1st January." Settings separately exposes a configurable Leave Year Start Month. If that setting changed, would Yearly Opening's date move with it, or does this transaction type only work correctly for a January-start leave year?
> **A)** Tied to the setting — always the first day of the configured Leave Year Start Month. **B)** Fixed at January 1st regardless of the setting. **C)** The setting doesn't drive anything yet; every leave-year calculation is currently hardcoded to a calendar year.

**AL-051.** Three deallocation scenarios are named for cases where full-year leave was already allocated but circumstances change:

> **OPEN — Questionnaire Q13.** The first scenario ("a long leave of a month or more" triggers "proportional" deallocation) states neither what counts as a qualifying long leave nor the exact proportional formula — unlike the two scenarios that follow it, which at least state a concrete duration.
> **A)** Any continuous leave spell of 30+ days, any type including LOP; proportional by days falling in the current leave year, at the EL accrual per-day rate. **B)** LOP specifically; a month-or-more block of paid leave does not trigger deallocation. **C)** A different trigger/formula — describe in the notes field.

> **OPEN — Questionnaire Q14.** The second scenario states a flat 6-month deallocation window for Maternity Leave, where the Maternity Benefit Act's actual entitlement varies by child count (26 weeks first two children, 12 weeks from the third). Is 6 months a fixed system assumption or does it need to vary by circumstance?
> **A)** Fixed 6 months for all cases, a deliberate Muziris simplification. **B)** Must vary by the actual statutory entitlement granted per the Special Leave transaction. **C)** Company-configurable, independent of both.

> **OPEN — Questionnaire Q15.** The third scenario states a flat 3-month reduced-EL window for employees on notice period, where notice period is otherwise a configurable per-employee field elsewhere in the system. Does this rule use the employee's actual notice period, or is 3 months a separate fixed assumption?
> **A)** Use the employee's actual recorded notice period. **B)** Fixed 3 months regardless of the employee record's own value. **C)** 3 months is the typical/default case — confirm whether the rule should still read the actual field for exceptions.

### 10.2 Special Leave

**AL-052.** The system SHALL allow allocation of a Special Leave type against a selected employee, a Date From and Date To, and a manually entered leave count; currently the only available Special Leave type is Maternity Leave. A Special Leave allocation SHALL apply only within the leave year it is entered in; where a maternity period crosses into the next leave year, the remaining portion currently requires a separate allocation entered at the start of that next leave year (an explicitly flagged open item requests a single cross-year entry instead, not yet built).

> **OPEN — Questionnaire Q16.** "CL" (Casual Leave) appears exactly once, in a parenthetical example, with no quantum, eligibility, or carry-forward rule, and doesn't appear in either other source document's leave-type list. Is it a genuine leave type or a documentation slip?
> **A)** Real and new — needs its own full specification (describe in the notes field). **B)** Documentation error — the bullet meant an already-defined leave type; correct the text instead. **C)** Out of scope for this phase regardless of which leave type was meant.

> **OPEN — Questionnaire Q17.** Special Leave is introduced as if extensible ("currently the available leave is maternity leave") but every field and rule described is written specifically in maternity terms, with no generic Leave Type selector. Should it be built extensible now, or maternity-only for now?
> **A)** Build extensible now, with a Special Leave Type field/master from the start. **B)** Maternity-only for now; generalize later if a second type is actually needed. **C)** Already effectively extensible via Settings' existing Attendance & Leave Group leave types, no purpose-built screen needed.

## 11. Leave Encashment

**AL-060.** The system SHALL make Leave Encashment available, in current Muziris practice, only for compensatory offs (not for Earned Leave or Optional Holiday directly through this screen). Leave type and employee SHALL be selectable from a search screen, and previous encashments SHALL be viewable via a "show entered data" option.

**AL-061.** The encashment amount SHALL be calculated as: (Salary in the comp-off's earning month ÷ number of days in that month) × number of comp-offs encashed. *(The exact definition of "Salary" for this formula is OPEN; see §11.1.)*

### 11.1 "Salary (CTC)" Definition

> **OPEN — Questionnaire Q18.** The encashment formula's one input variable, "Salary (CTC)," is never defined exactly — Gross Salary, Basic + DA only, or full CTC including employer contributions?
> **A)** Gross Salary — all earning-side Salary Head components, excluding employer PF/ESI. **B)** Basic + DA only. **C)** Full CTC, including employer contributions.

### 11.2 LENCASH / ELENCASH Salary Heads

> **OPEN — Questionnaire Q19.** The Masters BRD's Salary Head master lists LENCASH (Leave Encashment) and ELENCASH (Leaves Encashment) in addition to COENCASH (CompOff Encashment) — but this module describes a business process only for comp-off encashment. What are the other two codes actually for?
> **A)** Vestigial — unused legacy codes; only comp-off encashment exists or is needed. **B)** A real, undocumented capability — Earned Leave/OH encashment needs its own screen, eligibility rule, and formula. **C)** A different purpose entirely — describe in the notes field.

## 12. Leave Year End Process

**AL-070.** At the end of the leave year, the system SHALL transfer eligible carry-forward leave balances to the new leave year and lapse non-carry-forward balances. Of an employee's total Earned Leave and Optional Holiday balance, exactly two leaves SHALL carry forward: the EL balance SHALL be used first (up to 2), and if EL balance is below 2, the shortfall SHALL be made up from the OH balance.

**AL-071.** The Leave Year End Process screen SHALL display, for review, the list of employees and the leave amounts to be transferred, actioned via a select-all-and-save operation.

### 12.1 Comp-Off Carry-Forward Contradiction

> **OPEN — Questionnaire Q20.** The source states, in consecutive sentences, both "all compensatory offs are carry forward to next year" and "No carry forward for Sunday comp off, holiday comp off, rest day" — three of the four comp-off codes named in the exclusion. These cannot both be true as written. What is the actual rule?
> **A)** Only plain CO carries forward; the exclusion list is authoritative. **B)** All comp-off types carry forward; the exclusion list is the error. **C)** A different split — describe in the notes field.

## 13. Documentation Consistency

### 13.1 Un-Flagged New-Requirement-Style Bullets

> **OPEN — Questionnaire Q21.** Several bullet clusters throughout this document read exactly like the explicitly-flagged "New requirement" items (imperative language: sorting for Compensatory Off Entry, OT marking on OD/Leave days, etc.) but are not wrapped in the document's own flagging convention. Should every such bullet be treated the same as the explicitly flagged ones, or does the absence of a flag mean it's confirmed, current-phase scope?
> **A)** Treat every imperative/aspirational bullet the same regardless of flagging — the flag's absence is a documentation gap, not a scope signal. **B)** Trust the flag literally — only flagged items are new requirements. **C)** Case-by-case — each needs individual confirmation.

## 14. Open Items Register

| # | Questionnaire Q# | Screen | One-line summary |
|---|---|---|---|
| 1 | Q1 | Employee Time Sheet Upload / Muster Roll | Is biometric/mobile-punch integration already built, or still a new requirement? |
| 2 | Q2 | Employee Time Sheet Upload | What determines Level 1 vs Level 2 employee classification? |
| 3 | Q3 | Muster Roll | What does NFH mean, and how does it differ from Holiday? |
| 4 | Q4 | Muster Roll | How does the "L" status code map to the confirmed Attendance & Leave codes? |
| 5 | Q5 | Muster Roll | Is the 7:30 hrs standard fixed system-wide, or does it vary by shift? |
| 6 | Q6 | Varying Shift Allocation | Is real shift-integration scope in scope now, given it's confirmed functionally dead today? |
| 7 | Q7 | Varying Weekly Off Allocation | Confirm the fixed/varying-off conflict as a defect, and its fix priority. |
| 8 | Q8 | Compensatory Off Entry | Is there a rejection path at the HR stage, or approval only? |
| 9 | Q9 | Holiday Compensatory Off | What happens if an unused Holiday Comp Off isn't used within the leave year? |
| 10 | Q10 | Leave Allocation — Employee Joining | Build leave-count auto-population now, or keep manual entry? |
| 11 | Q11 | Leave Allocation — Promotion Leave | What is the exact formula for the additional leave count? |
| 12 | Q12 | Leave Allocation — Yearly Opening | Is "1st January" fixed, or tied to the configurable Leave Year Start Month? |
| 13 | Q13 | Leave Allocation — Yearly Opening | What counts as "long leave," and what is the exact proportional deallocation formula? |
| 14 | Q14 | Leave Allocation — Yearly Opening | Is the Maternity Leave 6-month deallocation window fixed, or statutorily/company configurable? |
| 15 | Q15 | Leave Allocation — Yearly Opening | Does the notice-period EL rule use the employee's actual notice period, or a fixed 3 months? |
| 16 | Q16 | Leave Allocation — Special Leave | Is "CL" a real leave type, or a documentation error? |
| 17 | Q17 | Leave Allocation — Special Leave | Should Special Leave be built extensible now, or maternity-only for now? |
| 18 | Q18 | Leave Encashment | Which exact figure does "Salary (CTC)" mean in the encashment formula? |
| 19 | Q19 | Leave Encashment | What business process actually triggers the LENCASH / ELENCASH salary heads? |
| 20 | Q20 | Leave Year End Process | Which comp-off types actually carry forward — resolve the self-contradiction. |
| 21 | Q21 | Documentation Consistency | How should un-flagged new-requirement-style bullets be treated? |

## 15. Source References

- `03_Attendance_and_Leave_Management.md` — primary source for this module.
- `Masters_BRD.md` / `07_Masters.md` — Attendance and Leave code list (P, LOP, EL, H, OH, CO, OD, ML, RD, COH, SCO, T), Salary Head codes (COENCASH, LENCASH, ELENCASH).
- `07_System_Management.md` — Shift Group settings, Payroll Settings' Leave Year Start Month.
- `AttendanceLeave_BRD_Questionnaire.html` — the live, numbered list of the 21 open questions this document references; regenerate this BRD if further answers are recorded there.

---

*This document consolidates confirmed facts from `03_Attendance_and_Leave_Management.md` into requirement form. Every remaining unresolved decision is cross-referenced to its exact question in `AttendanceLeave_BRD_Questionnaire.html`. No requirement above an OPEN box assumes an answer to any open item.*

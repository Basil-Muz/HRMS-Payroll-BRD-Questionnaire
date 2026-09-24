# MuzPayroll — Time Sheet Management (Employee Portal) Business Requirements Document

## Document Control

| | |
|---|---|
| Module | Employee Self-Service Portal → Time Sheet Management (Time Log Management, Time Sheet Entry, Time Sheet Approval) |
| Status | Draft — confirmed content only; 8 items remain open pending stakeholder sign-off |
| Source documents | `11_Time_Sheet_Management.md`, cross-referenced against Attendance & Leave Management (Employee Time Sheet Upload, Muster Roll), Compensatory Offs, Day Off Management, and the Leave Management (ESS) BRD in the consolidated PRD |
| Companion document | `TimeSheetManagement_BRD_Questionnaire.html` — every OPEN item below is numbered against this file's live 8-question list; regenerate this BRD if further answers are recorded there |

## 1. Purpose

This document defines the confirmed business requirements for the MUZPAYROLL Time Sheet Management module in the Employee Self-Service (ESS) portal — the employee-facing screen for entering daily working hours and submitting them monthly, and the supervisor-facing screen for reviewing, approving, and uploading those time sheets for downstream attendance processing. It consolidates everything established with certainty from the source material and separates that from everything still awaiting a stakeholder decision.

## 2. Scope

### 2.1 In Scope

- **Time Log Management** — the module's introductory feature summary (daily time entry, approval workflow, integration with attendance/payroll); whether this names a distinct screen or is purely an umbrella heading for the two screens below is itself Questionnaire Q4.
- **Time Sheet Entry** — the employee-facing screen for entering monthly working hours on a daily basis, saving as draft, and submitting for supervisor approval.
- **Time Sheet Approval** — the supervisor-facing screen for reviewing direct reports' time sheets, approving them, removing approval for correction, and uploading a completed month for attendance processing.

### 2.2 Out of Scope

- **Employee Time Sheet Upload, Muster Roll, Attendance Conflict Management** — the employer-portal/HR-facing continuation of the time sheet lifecycle, already covered by `AttendanceLeave_BRD_Questionnaire.html`; referenced here only where needed to resolve a Time Sheet Management question (the Level 1/Level 2 split in §6.2, the upload hand-off in §7.4).
- **Compensatory Off Management, Day Off Management, Leave Management, Salary Slip** — named as sibling Employee Portal modules in the same consolidated PRD; each is its own numbered source document. Compensatory Offs and Day Off Management are referenced here only to resolve this module's own open items (the overtime/start-time field question in §6.3, and the "off day swap request" blocking condition in §7.5) — neither has been independently processed as its own questionnaire yet.

## 3. How to Read This Document

Every requirement below is written as a firm statement (*"The system SHALL…"*) because the source material confirms it without ambiguity. Anything not yet resolved is called out in an **OPEN** box immediately under the relevant screen:

- **OPEN — Questionnaire Q#** — the decision is already posed as a question in `TimeSheetManagement_BRD_Questionnaire.html`; the box restates the question and its three options. Do not build against a guessed option — wait for the recorded answer.

## 4. Requirements Common to This Module

**TS-001.** Time sheets in this module SHALL require only one level of approval — unlike Leave, Advance, Compensatory Off, and Off Day Management, which route through the two-level Reporting Person (recommend) / Reporting Head (approve) pair configured on the Employee screen's Official Info → Location tab. *Which of those two configured roles performs Time Sheet Approval's single required sign-off is not stated in the source — see the OPEN box in §6.1.*

## 5. Time Log Management

**Purpose:** the module's introductory section, describing daily time entry, an approval workflow run by "reporting managers or team leads," and integration with attendance and payroll calculations.

**Confirmed (source):** logged hours are linked to attendance records and payroll calculations to ensure accurate payment for regular and extra hours.

> **OPEN — Questionnaire Q4.** Is "Time Log Management" simply this module's umbrella heading for the Time Sheet Entry + Time Sheet Approval pair described immediately after it, or a distinct, still-undescribed daily-entry-and-approval screen that needs its own requirements gathering?
> **A)** Same feature — purely an introductory heading; no separate screen exists or needs to be built. **B)** A distinct, still-undescribed screen requiring its own requirements gathering. **C)** Same feature now, but the separate framing is intentional groundwork for a future finer-grained daily-approval feature.

## 6. Time Sheet Entry

**Purpose:** the employee-facing screen for entering monthly working hours on a daily basis.

**TS-010.** An employee SHALL be able to enter working hours for each day of a month, save the in-progress entry as a draft, and submit it for supervisor approval.

**TS-011.** Once a time sheet has been submitted for approval and the supervisor approves it, the employee SHALL NOT be able to modify those entries directly — a modification SHALL require the supervisor to first remove the approval (see TS-021).

**TS-012.** By month end, the employee SHALL be required to complete and submit entries for every day of the month, as part of a full-month approval submission.

**TS-013.** Time Sheet Entry SHALL provide a per-day provision to mark whether the employee worked from office or home.

### 6.1 Approval Role — Reporting Person or Reporting Head

> **OPEN — Questionnaire Q8.** "Only one level approval is needed for time sheets," but the Employee screen configures two distinct roles (Reporting Person, Reporting Head) already confirmed elsewhere as the shared routing source for two-level approvals. Which role performs time sheet approval?
> **A)** Reporting Person only. **B)** Reporting Head only. **C)** Configurable per employee — whichever role is that employee's actual day-to-day supervisor.

### 6.2 Level 1 / Level 2 Employee Scope

**Confirmed (source):** this module's Time Sheet Entry and Time Sheet Approval sections describe one uniform flow with no Level 1/Level 2 distinction. The Attendance & Leave Management module, however, frames Level 1 (Senior Management) time sheets as automatically populated and Level 2 (Other Employees) as entered by employees in their employee portal.

> **OPEN — Questionnaire Q2.** Does a Level 1 employee ever use this module's Time Sheet Entry / Time Sheet Approval screens, or are they bypassed entirely?
> **A)** Level 1 employees never use this module — fully excluded. **B)** Level 1 employees use the same screens as everyone else; the Level 1/2 split only affects which employer-portal fetch HR uses afterward. **C)** Level 1 employees can optionally use Time Sheet Entry as an override/exception path.
>
> *Complements, does not duplicate, the already-open Q2 in `AttendanceLeave_BRD_Questionnaire.html`, which asks how the Level 1/2 classification itself is determined and where Level 1's auto-populated data comes from.*

### 6.3 Start-Time / End-Time Fields & Comp-Off Verification

**Confirmed (source):** Time Sheet Entry, as described here, captures total working hours per day only — no start-time or end-time fields are named.

> **OPEN — Questionnaire Q3.** The Compensatory Offs module flags, as its own new requirement, that "the time sheet" needs start-time/end-time fields so comp-off claims can be verified against it. Is that field addition in scope for this build?
> **A)** Not in scope now — Time Sheet Entry stays total-hours-only; Comp Off's cross-verification requirement stays deferred. **B)** In scope — add start-time/end-time fields to Time Sheet Entry, and have Comp Off Approval/Rejection cross-validate against them. **C)** Partial — capture the fields now, defer the cross-verification logic itself.

## 7. Time Sheet Approval

**Purpose:** the supervisor-facing screen for reviewing, approving, correcting, and uploading direct reports' time sheets.

**TS-020.** This screen SHALL list all of a supervisor's direct reports and display each one's time sheet for a chosen month; a submitted time sheet SHALL be approved by the supervisor clicking Save.

**TS-021.** If an already-approved time sheet needs to change, the supervisor SHALL be able to select the employee and remove the approval, after which the employee can make changes. *(Whether this correction path still works once the month has already been uploaded is Questionnaire Q5 — see §7.1.)*

**TS-022.** By month end, the supervisor SHALL ensure that a full month's time sheet has been submitted by every team member before uploading that month's time sheets for attendance processing. *(What happens if one team member's submission is incomplete is Questionnaire Q6 — see §7.2.)*

**TS-023.** Time Sheet Approval SHALL highlight work-from-home days within the list. *(Whether this marking carries any policy or payroll consequence beyond display is Questionnaire Q7 — see §7.3.)*

**TS-024.** The supervisor SHALL be blocked from uploading a month's time sheets if any leave application or off day swap request (per the Day Off Management module's Off Day Swap Request) is pending for that particular month.

**TS-025.** After a successful upload, the supervisor's time sheet list SHALL be cleared, and the uploaded time sheets SHALL become available in the employer portal. *(The exact relationship between this upload and the employer-portal Employee Time Sheet Upload screen is Questionnaire Q1 — see §7.4.)*

### 7.1 Correction After Upload

> **OPEN — Questionnaire Q5.** Remove-approval correction (TS-021) is described only for the pre-upload list. Can a time sheet still be corrected once it's been uploaded to the employer portal?
> **A)** Correction stops at upload; further correction must go through Muster Roll's own Set Option tool. **B)** Remove-approval still works post-upload, independent of the employer-portal side. **C)** Blocked once attendance/payroll has consumed the data (i.e. after Muster Roll conversion specifically, not merely after upload).

### 7.2 Incomplete Month-End Submission

> **OPEN — Questionnaire Q6.** Does one team member's incomplete time sheet block the supervisor's entire month-end upload for the whole team, or can complete employees be uploaded individually?
> **A)** All-or-nothing — the whole batch is blocked until everyone is complete. **B)** Per-employee, partial upload allowed. **C)** Not yet handled — flag as a genuine open design question.

### 7.3 Work-From-Home Marking — Consequence

> **OPEN — Questionnaire Q7.** Is the office/home marking (TS-013, TS-023) purely informational, or does it drive an approval requirement or payroll/allowance consequence?
> **A)** Purely informational — self-declared, no approval or payroll effect. **B)** Requires prior approval elsewhere; Time Sheet Entry only reflects an already-approved WFH status. **C)** Drives a concrete payroll/allowance difference that needs to be specified.

### 7.4 Cross-Portal Hand-Off

> **OPEN — Questionnaire Q1.** Is the supervisor's month-end upload (TS-025) the same action that populates the employer-portal Employee Time Sheet Upload screen's Level 2 fetch, or are these two independent, sequential steps?
> **A)** One combined step — supervisor's Upload lands the batch already fetched; HR's Save is the next click in the same pipeline. **B)** Two independent steps — HR must separately fetch (Level 2) and re-save before Muster Roll sees the data. **C)** Level-dependent — Level 2 follows the two-step path; Level 1 bypasses Time Sheet Entry/Approval entirely.

### 7.5 "Off Day Swap Request" Reference

**Confirmed (source, cross-referenced):** the Day Off Management module defines Off Day Swap Request as an employee-initiated request to swap a designated off Saturday for a working Saturday, requiring single-level immediate-supervisor approval — this is the same term TS-024 blocks on. No open item is raised here since the term is fully defined in that sibling module.

## 8. Open Items Register

| # | Questionnaire Q# | Screen | One-line summary |
|---|---|---|---|
| 1 | Q1 | Time Sheet Approval → Employee Time Sheet Upload | Is the supervisor's upload the same step as HR's employer-portal fetch, or two sequential steps? |
| 2 | Q2 | Time Sheet Entry, Time Sheet Approval | Do Level 1 (Senior Management) employees use this module's screens at all? |
| 3 | Q3 | Time Sheet Entry | Are start-time/end-time fields (for Comp Off verification) in scope for this build? |
| 4 | Q4 | Time Log Management | Distinct screen, or just this module's summary heading? |
| 5 | Q5 | Time Sheet Approval | Can a time sheet still be corrected after month-end upload? |
| 6 | Q6 | Time Sheet Approval | Does one incomplete team member block the whole team's upload? |
| 7 | Q7 | Time Sheet Entry, Time Sheet Approval | Does WFH marking carry any approval/payroll consequence? |
| 8 | Q8 | Time Sheet Approval | Which configured role — Reporting Person or Reporting Head — performs the single approval? |

**Resolved items:** none yet — this is the first pass through this module's source document.

## 9. Source References

- `11_Time_Sheet_Management.md` — primary source for this module (Time Log Management, Time Sheet Entry, Time Sheet Approval).
- `03_Attendance_and_Leave_Management.md` — cross-referenced for Employee Time Sheet Upload's Level 1/Level 2 split (§6.2, §7.4) and Muster Roll's work-from-home highlight and Set Option correction tool (§7.1, §7.3).
- `12_Compensatory_Offs.md` — cross-referenced for its own flagged "New requirement" around time sheet start/end-time fields and comp-off verification (§6.3).
- `13_Day_Off_Management.md` — cross-referenced to confirm the definition of "Off Day Swap Request" used in TS-024 (§7.5).
- Leave Management (ESS) BRD (`LeaveManagementESS_BRD.md`) — cross-referenced for the confirmed Reporting Person/Reporting Head two-level routing configuration (§4, §6.1).
- `TimeSheetManagement_BRD_Questionnaire.html` — the live, numbered list of the 8 open questions this document references; regenerate this BRD if further answers are recorded there.

---

*This document consolidates confirmed facts from `11_Time_Sheet_Management.md`, cross-referenced against the Attendance & Leave Management, Compensatory Offs, Day Off Management, and Leave Management (ESS) modules, into requirement form. Every remaining unresolved decision is cross-referenced to its exact question in `TimeSheetManagement_BRD_Questionnaire.html`. No requirement above an OPEN box assumes an answer to it.*

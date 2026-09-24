# MuzPayroll — Leave Management (Employee Portal) Business Requirements Document

## Document Control

| | |
|---|---|
| Module | Employee Self-Service Portal → Leave Management (Leave Application/Withdrawal, Leave Approval/Rejection, Leave Sanctioning Cancellation) |
| Status | Draft — confirmed content only; 12 items remain open pending stakeholder sign-off |
| Source documents | `10_Leave_Management.md`, cross-referenced against the Employee Screen (Official Info → Location, Leave), Attendance & Leave Management, Advance Management, Time Sheet Management, and Process modules in the consolidated PRD |
| Companion document | `LeaveManagementESS_BRD_Questionnaire.html` — every OPEN item below is numbered against this file's live 12-question list; regenerate this BRD if further answers are recorded there |

## 1. Purpose

This document defines the confirmed business requirements for the MUZPAYROLL Leave Management module in the Employee Self-Service (ESS) portal — the employee-facing screens for applying for leave, withdrawing or cancelling it, and the supervisor-facing screens for approving and sanctioning those requests. It consolidates everything established with certainty from the source material and the stakeholder's own confirmed answers, and separates that from everything still awaiting a decision.

## 2. Scope

### 2.1 In Scope

- **Leave Application/Withdrawal** — the employee-facing screen for applying for new leave (`Proceed`) and viewing/withdrawing previously submitted applications (`Show Entered Data`)
- **Leave Approval/Rejection** — the supervisor-facing two-level recommend/approve screen
- **Leave Sanctioning Cancellation** — the supervisor-facing screen for approving cancellation requests against already-approved leave

### 2.2 Out of Scope

- **Time Log Management, Compensatory Off Management, Off Day Management, Salary Slip** — named as sibling Employee Portal modules in the same consolidated PRD, but each is its own numbered source document not yet processed; only referenced here where they help resolve a Leave Management question (e.g. Compensatory Off's 7-day claim deadline, used as a comparison point in §6.3 and §7.4).
- **Leave Allocation/Deallocation, Muster Roll, Attendance & Leave Group** — the employer-portal side of the leave lifecycle (granting/allocating balances, converting time sheets to attendance); already covered by the separate `AttendanceLeave_BRD_Questionnaire.html`.

## 3. How to Read This Document

Every requirement below is written as a firm statement (*"The system SHALL…"*) either because the source material confirms it without ambiguity, or because the stakeholder has since given a direct answer resolving a formerly-open question (marked **Confirmed by stakeholder**, distinct from **Confirmed (source)**). Anything not yet resolved is called out in an **OPEN** box immediately under the relevant screen, in the same form used across this BRD set:

- **OPEN — Questionnaire Q#** — the decision is already posed as a question in `LeaveManagementESS_BRD_Questionnaire.html`; the box restates the question and its three options. Do not build against a guessed option — wait for the recorded answer.

## 4. Requirements Common to This Module

**LM-001.** Every leave-related approval workflow (Leave, and — per the stakeholder's confirmed answer in §6.1 — Advance, Compensatory Off, and Off Day) SHALL route through the same two-level Reporting Head / Reporting Person pair configured on the Employee screen's Official Info → Location tab, not a separate per-module configuration.

**LM-002.** Whenever a two-level approval structure applies (per LM-001), a request SHALL be approved at the first level (immediate supervisor/team lead — "recommend") before being forwarded to the second level (manager/reporting head — "approve"). If the first- and second-level approver configured for an employee is the same person, the request SHALL be considered approved at the first level, with no separate second step.

## 5. Leave Application/Withdrawal

### 5.1 Type of Leave & Half-Day Rules — Confirmed by Stakeholder

**Purpose:** the employee-facing form for applying for new leave, reached via the `Proceed` option.

**Confirmed (source):** the form's fields are Type of Leave (dropdown), Date From/Date To, Session (Forenoon/Afternoon, for half-day leave), Leave Days, Reason for Leave, Status (auto-filled `Applied`), and Reason for Rejection/Cancellation (relevant only in later stages).

> This screen's own source material was internally inconsistent — the written field description named five Type of Leave options (Leave / Optional Holiday / Holiday Comp Off / Sunday Comp Off / Rest Day) while the accompanying screenshot showed only three (LEAVE / LOSS OF PAY / OPTIONAL HOLIDAY), with Loss of Pay appearing only in the screenshot and the three Comp Off variants appearing only in the text. This was Questionnaire Q1 (now resolved and removed from the live questionnaire) and Q3 (Half-Day Session applicability, likewise resolved and removed).

**LM-010 [Confirmed by stakeholder — resolves former Questionnaire Q1].** The Type of Leave dropdown SHALL contain the union of both source descriptions — all six types: Leave, Loss of Pay, Optional Holiday, Holiday Comp Off, Sunday Comp Off, and Rest Day.

**LM-011 [Confirmed by stakeholder — resolves former Questionnaire Q1].** An employee SHALL be able to select Loss of Pay directly from the Type of Leave dropdown and submit it as a self-initiated application, in the same manner as any other leave type — LOP is not exclusively a system-computed consequence of exhausted balance in this module.

**LM-012 [Confirmed by stakeholder — resolves former Questionnaire Q3].** The half-day Session field (Forenoon/Afternoon) SHALL apply uniformly to every Type of Leave value, including every Comp Off variant (Holiday Comp Off, Sunday Comp Off, Rest Day). A 0.5-day deduction against a Comp Off balance is a valid, supported outcome, not restricted to Earned Leave/Optional Holiday only.

### 5.2 Leave Days Calculation

**Confirmed (source):** Leave Days is described as "Auto-calculated or manually input," without stating which governs in which circumstance.

> **OPEN — Questionnaire Q1** (formerly Q2). When does manual override of the auto-calculated Leave Days value apply — never, always available to the employee, or only for specific leave types (e.g. Comp Off variants, which may be claimed in increments not tied to a date range)?
> **A)** Always auto-calculated, no employee-facing override. **B)** Auto-calculated by default but freely editable by the employee before submission. **C)** Depends on leave type — Earned Leave/Optional Holiday always auto-calculated, Comp Off types require manual entry.

### 5.3 Multi-Row Submissions

**Confirmed (source):** `Add New Row` lets an employee apply for multiple leave periods — potentially of different Types of Leave, per §5.1's now-confirmed six-type dropdown — within a single submission.

> **OPEN — Questionnaire Q2** (formerly Q4). Does each row created via Add New Row move independently through approval (per LM-002), or does the whole multi-row submission move as a single unit?
> **A)** Each row is an independent record with its own status. **B)** The whole submission shares one status; approved/rejected as a unit. **C)** Depends on Type of Leave — same-type rows move together, different-type rows split into separate records.

### 5.4 Status Lifecycle

**Confirmed (source):** the basic states named are Applied, Approved, Rejected, and Withdrawn (the last available only while a request is Applied). A separately-described, more recently implemented facility lets an employee request cancellation of an already-*approved* leave via application history, and that cancellation request can itself be withdrawn. The `Show Entered Data` status filter, however, only exposes four checkboxes (Applied, Withdrawn, Approved, Rejected) — no filterable state corresponds to a pending or completed cancellation.

**LM-020.** The word "Cancel" SHALL be treated as three distinct, non-interchangeable concepts in this module's design and documentation going forward: (i) the `Cancel` action that exits a screen without saving; (ii) the `Reason for Rejection/Cancellation` field on the application form; (iii) requesting cancellation of an already-approved leave via Leave Sanctioning Cancellation (§7).

> **OPEN — Questionnaire Q3** (formerly Q5). What is the complete, authoritative set of leave statuses and the transitions allowed between them — does a distinct Cancellation Requested/Canceled status pair exist (with the Show Entered Data filter simply missing them), does cancellation reuse the existing Withdrawn status, or does the full status model need to be redesigned as part of this BRD?
> **A)** Six statuses — Applied, Approved, Rejected, Withdrawn, Cancellation Requested, Canceled — with the filter's omission being a documentation gap only. **B)** No separate cancellation status — an approved cancellation reuses Withdrawn; withdrawing a cancellation request is not itself a tracked transition. **C)** Redesign the full status set fresh as part of this BRD rather than reverse-engineering current behaviour.

*The following four items (§5.5–§5.8) were surfaced in a subsequent, independent review pass over the same source document (`10_Leave_Management.md`) — they are additive to §5.2–§5.4 and do not duplicate any of them.*

### 5.5 Earned Leave Balance Display

**Confirmed (source):** the module's own Key Features summary promises real-time balances "including earned leaves, optional holidays, compensatory offs, and rest days," but the detailed Proceed screen field list for Leave Balances names only Optional holidays, Compensatory offs, and Rest days/Sunday comp offs — Earned Leave is absent from the detailed list, and Show Entered Data's balance panel is stated to mirror Proceed's.

> **OPEN — Questionnaire Q9.** Is Earned Leave balance actually displayed on these screens, or is its omission from the detailed field list intentional?
> **A)** Yes — the detailed list is incomplete; all four balances (including Earned Leave) should display together. **B)** No — intentionally omitted; the module summary's wording is loose, not a literal field list. **C)** Conditionally — shown only once "Leave" is selected as the Type of Leave.

### 5.6 Draft State

**Confirmed (source):** the Proceed screen's Actions Available list both `Proceed` (initiates the application) and, separately, `Save` (to save the entered data) as two distinct actions. The module's only defined statuses (Applied, Approved, Rejected, Withdrawn — see §5.4) do not include a Draft state.

> **OPEN — Questionnaire Q10.** Does `Save` create a genuine, retrievable draft application distinct from `Proceed`'s submission, and if so, does the status model (§5.4, already the subject of Q3) need a fifth Draft value?
> **A)** Yes — Save creates a genuine Draft; a fifth status needs to be added to the model and the Show Entered Data filter. **B)** No — Save only commits in-progress row(s) within the same not-yet-submitted application; nothing is retrievable until Proceed is clicked. **C)** No — Save and Proceed are functionally identical; both submit immediately.

### 5.7 Show Entered Data Status Control

**Confirmed (source):** withdrawal is described as "Selecting 'Withdraw' from the Status drop-down in the relevant row" — implying an editable, not read-only, per-row Status control.

> **OPEN — Questionnaire Q11.** Which status values can an employee actually select from that drop-down, and is this constrained client-side, server-side, both, or neither?
> **A)** Single-purpose — only "Withdraw" is ever exposed/enabled, and only when status is Applied. **B)** Multi-valued in the UI, but server-validated — only a genuine Applied→Withdrawn transition is accepted regardless of what's clickable. **C)** Not yet specified — a genuine open validation/security question.

### 5.8 "New Page" Action Definition

**Confirmed (source):** Show Entered Data's Actions Available list includes `New Page: Navigate back to the previous screen` — the label and its own stated definition point in opposite directions (forward vs. back), with no further elaboration anywhere else in the source.

> **OPEN — Questionnaire Q12.** What does `New Page` actually do — literally navigate back as defined, advance to a new page of paginated results, or reset to a fresh filter view?
> **A)** Literally as defined — navigates back to the previous/landing screen; the label is a carried-over legacy name. **B)** Pagination — advances to the next page of results; the "navigate back" wording is a documentation error. **C)** Fresh filter view — resets filters and reloads a blank search.

## 6. Leave Approval/Rejection

### 6.1 Two-Level Structure & Cross-Module Reporting Head — Confirmed by Stakeholder

**Purpose:** the supervisor-facing screen for recommending/approving leave applications from direct or indirect reports.

**Confirmed (source):** immediate supervisor/team lead recommends; manager/reporting head gives final approval; if the same person holds both roles, the request is approved at the first level (see LM-002). Approved/rejected leave history can be viewed from this screen.

> This screen's clean, unambiguous two-level description was cross-referenced against the Employee screen's own "Reporting Head & Person" configuration (Official Info → Location) and against the Advance Management module's similarly-shaped but differently-named "Reporting Head" / "Recommendation Authority" pair, whose relationship to each other was Questionnaire Q6 (now resolved and removed from the live questionnaire).

**LM-030 [Confirmed by stakeholder — resolves former Questionnaire Q6].** The Employee screen's Reporting Head / Reporting Person configuration is the single source of truth driving two-level approval routing across every module that uses it — Leave, Advance Management, Compensatory Off, and Off Day Management alike. Differing terminology across those modules' own source documents (e.g. Advance Management's "Recommendation Authority") refers to the same underlying configured relationship, not a separate field. *This finding also resolves the equivalent open items in the already-published Advance Management questionnaire (its Q13/Q14) — that document should be updated to reflect this confirmed answer.*

### 6.2 Loss of Pay Approval — Confirmed by Stakeholder

**Confirmed (source):** the approval section makes no distinction between leave types; it describes one uniform workflow for "leave applications" in general. Whether an LOP application (per §5.1's confirmed dropdown) is exempt from this, and what rejecting one would mean operationally, was Questionnaire Q8 (now resolved and removed from the live questionnaire).

**LM-031 [Confirmed by stakeholder — resolves former Questionnaire Q8].** An LOP application SHALL go through the exact same two-level recommend/approve workflow (per LM-002) as every other Type of Leave — it is not auto-approved and does not bypass approval. Rejecting an LOP application SHALL require the underlying absence to be reclassified (for example, covered against an available leave balance instead) or left flagged as unauthorised pending HR review, rather than the rejection having no operational effect.

### 6.3 Approval SLA

**Confirmed (source):** no deadline, reminder, or escalation behaviour is described anywhere for how long a supervisor may leave a leave request pending. For comparison, the sibling Compensatory Off Management module (out of this BRD's scope, but referenced in the same consolidated PRD) does specify a deadline pattern — comp off claims must be approved only after the 7th of the following month, tied to a 7-day claim submission window.

> **OPEN — Questionnaire Q4** (formerly Q7). Should Leave approval carry any SLA or escalation behaviour, or is an indefinitely pending request the intended design?
> **A)** No SLA — handled manually by HR outside the system, as currently described. **B)** A reminder only, with no automatic reassignment of approval authority. **C)** A full escalation path — an unactioned request automatically moves to the next-level approver after a defined window.

## 7. Leave Sanctioning Cancellation

**Purpose:** the supervisor-facing screen for reviewing and approving cancellation requests raised against already-*approved* leave (the newer facility referenced in §5.4).

**Confirmed (source):** cancellation requests from team members are listed for the accessing supervisor; approving one cancels the corresponding already-approved leave application.

### 7.1 Approval Level

**Note:** the stakeholder was explicitly asked whether this screen should mirror §6.1's two-level structure and confirmed that **a real difference exists** — this screen's approval level is *not* assumed equal to Leave Approval/Rejection's, and remains an open decision rather than being folded into LM-002.

> **OPEN — Questionnaire Q5** (formerly Q9). Does cancelling an already-approved leave require the same two-level recommend/approve structure as the original application (LM-002), or is a single supervisor's approval sufficient?
> **A)** Single-level — one supervisor's approval is enough, intentionally simpler than the original application flow. **B)** Same two-level structure as the original application, mirrored in reverse. **C)** Depends on who initiates the cancellation — employee-initiated is single-level, HR/supervisor-initiated unilateral cancellation requires the full two-level process.

### 7.2 Balance Restoration

**Confirmed (source):** the section states only that the approved leave application "will be canceled" — it does not state what happens to the leave balance originally debited when that leave was approved.

> **OPEN — Questionnaire Q6** (formerly Q10). Is the leave balance restored automatically and immediately on cancellation approval, automatically but deferred to the next leave-processing cycle, or only via a separate manual HR step?
> **A)** Automatic and immediate, in the same transaction as the cancellation approval. **B)** Automatic, but deferred to the next scheduled leave-balance recalculation. **C)** Manual — HR must separately restore the balance through a different screen (e.g. Leave Allocation/Deallocation).

### 7.3 Interaction with Payroll Verification

**Confirmed (source):** no time window or interaction rule is stated for cancelling a leave whose month has already been payroll-processed. The Process module (already covered by a separate questionnaire) confirms Payroll Process Verification is explicitly irreversible ("cannot be deleted or reprocessed").

> **OPEN — Questionnaire Q7** (formerly Q11). When a cancellation request targets a leave in a month whose payroll has already been verified, is the cancellation blocked, or allowed with a downstream correction elsewhere?
> **A)** Blocked — cancellation is only permitted for leaves in months not yet payroll-verified. **B)** Allowed regardless; any resulting discrepancy is corrected via a later month's Monthly Allowances & Deductions entry. **C)** Not yet considered — flag as a genuine open design question.

### 7.4 Cancellation Time Window

**Confirmed (source):** no deadline is stated for how long after approval (or after the leave date itself) a cancellation may be requested — unlike Compensatory Off's explicit 7-day claim window in the sibling module.

> **OPEN — Questionnaire Q8** (formerly Q12). Is there any deadline for requesting cancellation of an approved leave?
> **A)** No fixed deadline, subject only to §7.3's payroll-verification rule. **B)** Only before the leave's start date. **C)** Bounded by the same leave year the leave falls in.

## 8. Open Items Register

| # | Questionnaire Q# | Screen | One-line summary |
|---|---|---|---|
| 1 | Q1 | Leave Application/Withdrawal | When does manual override of auto-calculated Leave Days apply? |
| 2 | Q2 | Leave Application/Withdrawal | Multi-row submissions — independent or single-unit approval? |
| 3 | Q3 | Leave Application/Withdrawal, Show Entered Data | Full authoritative leave status lifecycle, incl. cancellation states |
| 4 | Q4 | Leave Approval/Rejection | Any SLA/escalation for a pending approval? |
| 5 | Q5 | Leave Sanctioning Cancellation | Single-level or two-level approval for cancellation? |
| 6 | Q6 | Leave Sanctioning Cancellation | Does the leave balance auto-restore, and when? |
| 7 | Q7 | Leave Sanctioning Cancellation | What happens when cancelling a leave in an already-verified payroll month? |
| 8 | Q8 | Leave Sanctioning Cancellation | Is there a deadline for requesting cancellation? |
| 9 | Q9 | Leave Application/Withdrawal (Proceed) | Is Earned Leave balance actually shown on the application screen? |
| 10 | Q10 | Leave Application/Withdrawal (Proceed) | Does `Save` create a genuine draft, and does the status model need a Draft value? |
| 11 | Q11 | Leave Application/Withdrawal (Show Entered Data) | Which status values can an employee actually select from the per-row drop-down? |
| 12 | Q12 | Leave Application/Withdrawal (Show Entered Data) | What does the "New Page" action actually do? |

**Resolved items** (confirmed by the stakeholder, no longer open — see §5.1, §6.1, §6.2 for the requirements they produced): former Questionnaire Q1 (Type of Leave dropdown contents and LOP self-application), Q3 (half-day Session applies to every leave type), Q6 (Reporting Head/Person is the single cross-module approval-routing source), and Q8 (LOP goes through the same two-level approval as every other type).

**Provenance note:** Q1–Q8 came from the original gap-analysis pass over `10_Leave_Management.md` (which also had access to a companion screenshot, since resolved via LM-010–LM-012). Q9–Q12 came from a second, independent pass over the same text-only source document, run separately and merged in without altering or renumbering Q1–Q8.

**Follow-up action for a different document:** LM-030 (§6.1) resolves the still-open Reporting Head/Recommendation Authority question already posed in `AdvanceManagement_BRD_Questionnaire.html` (its Q13/Q14) — that questionnaire has not been edited as part of this pass, since it lies outside this module's document, but its answers should be reconciled with LM-030 when next revisited.

## 9. Source References

- `10_Leave_Management.md` — primary source for this module (Leave Application/Withdrawal, Leave Approval/Rejection, Leave Sanctioning Cancellation).
- Consolidated PRD (Employee Screen §2.3 Location; Attendance & Leave Management; Advance Management; Process modules) — used for cross-referencing the Reporting Head/Person configuration (§6.1), the payroll-verification interaction (§7.3), and the Compensatory Off deadline comparison (§6.3, §7.4).
- `LeaveManagementESS_BRD_Questionnaire.html` — the live, numbered list of the 12 remaining open questions this document references; regenerate this BRD if further answers are recorded there.

---

*This document consolidates confirmed facts from `10_Leave_Management.md`, together with the stakeholder's direct answers to four formerly-open questionnaire items, into requirement form. Every remaining unresolved decision is cross-referenced to its exact question in `LeaveManagementESS_BRD_Questionnaire.html`. No requirement above assumes an answer to any OPEN item.*

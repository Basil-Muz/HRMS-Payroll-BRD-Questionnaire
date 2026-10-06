# MuzPayroll — Day Off Management (Employee Portal) Business Requirements Document

## Document Control

| | |
|---|---|
| Module | Employee Self-Service Portal → Day Off Management (Off Day Swap Request, Off Day Swap Request Approval, Off Day Swap Sanctioning Cancellation) |
| Status | Draft — confirmed content only; 5 items remain open pending stakeholder sign-off |
| Source documents | `13_Day_Off_Management.md`, cross-referenced against the Leave Management (Employee Portal) BRD (two-level approval structure), Attendance & Leave Management (Muster Roll attendance codes), Time Sheet Management, and Compensatory Offs (both independently missing a rejection path) |
| Companion document | `DayOffManagement_BRD_Questionnaire.html` — every OPEN item below is numbered against this file's live 5-question list; regenerate this BRD if further answers are recorded there |

## 1. Purpose

This document defines the confirmed business requirements for the MUZPAYROLL Day Off Management module in the Employee Self-Service (ESS) portal — the employee-facing screen for requesting a swap of a designated off Saturday for a working Saturday, and the supervisor-facing approval and cancellation screens around it. It consolidates everything established with certainty from the source material, and separates that from everything still awaiting a stakeholder decision.

## 2. Scope

### 2.1 In Scope

- **Off Day Swap Request** — the employee-facing screen for requesting a swap of one or both designated off Saturdays for a working Saturday
- **Off Day Swap Request Approval** — the supervisor-facing screen for approving swap requests from direct reports
- **Off Day Swap Sanctioning Cancellation** — the mechanism for canceling an already-approved swap

### 2.2 Out of Scope

- **Off Day Group configuration** (which Saturdays are designated off per group) — already covered by `SystemManagement_BRD.md` (Payroll Group, §4) and the Attendance & Leave Management module; referenced here only as the basis for which Saturdays a swap request can name.
- **Muster Roll's full attendance status code list** — already an open item in `AttendanceLeave_BRD_Questionnaire.html` (Q4); referenced here only where this module's own Real-Time Update feature bears on it (§5.1 below).

## 3. How to Read This Document

Every requirement below is written as a firm statement (*"The system SHALL…"*) because the source material confirms it without ambiguity. Anything not yet resolved is called out in an **OPEN** box immediately under the relevant screen:

- **OPEN — Questionnaire Q#** — the decision is already posed as a question in `DayOffManagement_BRD_Questionnaire.html`; the box restates the question and its three options. Do not build against a guessed option — wait for the recorded answer.

## 4. Off Day Swap Request

**Purpose:** the employee-facing screen for requesting a swap of a designated off Saturday for a working Saturday.

**DOM-001.** The system SHALL allow an employee to raise a swap request naming a reason and a preferred date, with both of that employee's designated off Saturdays listed on the request screen.

**DOM-002.** A single request SHALL be able to cover a swap of one or both of the employee's designated off Saturdays.

### 4.1 Swap Timing Boundary

> **OPEN — Questionnaire Q1.** Can a swap pair dates across a calendar month or off-day-cycle boundary, or must both dates fall within the same month/cycle?
> **A)** Same calendar month only. **B)** Any date, no boundary — each date reflects independently in its own month's attendance. **C)** Bounded by the Off Day Group's own cycle rather than the calendar month — specify in the notes field.

## 5. Off Day Swap Request Approval

**Purpose:** the supervisor-facing screen for approving swap requests from direct reports.

**DOM-010.** Swap requests SHALL be routed to the requesting employee's immediate supervisor for review. *(Whether this is genuinely single-level, and which of the two configured Employee-screen roles performs it, is OPEN; see §5.2.)*

**DOM-011.** Once approved, the swap SHALL be reflected in the employee's attendance schedule without further manual processing (Real-Time Update). *(How this is represented in Muster Roll's attendance status codes is OPEN; see §7.)*

### 5.1 Audit Trail

**DOM-012.** Every swap request and its approval SHALL be logged for future reference and compliance tracking.

### 5.2 Approval Level — Contradicts an Already-Confirmed Cross-Module Answer

**Confirmed (source, cross-referenced) — a genuine conflict, not yet resolved.** This module's own text states plainly: *"Off day swap requests by direct reports are approved by immediate supervisor. This requires single level approval."* But `LeaveManagementESS_BRD.md`'s stakeholder-confirmed **LM-030** states that the Employee screen's Reporting Head / Reporting Person configuration drives two-level approval routing "across every module that uses it — Leave, Advance Management, Compensatory Off, and Off Day Management alike" — explicitly naming Off Day Management as a two-level module. LM-030 was confirmed before this module's own source text had been read, so its inclusion of Off Day Management there was a generalization from the other three modules, not a fact verified against this document.

> **OPEN — Questionnaire Q2.** Which is correct — is Off Day Management genuinely single-level (as this document states), or actually two-level (as LM-030 states)?
> **A)** Single-level, as this document states — a genuine exception to the shared structure; Reporting Person's approval is final; LM-030 should be amended to exclude Off Day Management. **B)** Single-level, but performed by Reporting Head, not Reporting Person — still an exception to LM-030's claim. **C)** Actually two-level, as LM-030 states — this document's "single level approval" line is the error; a Reporting Head sanction step exists here too, undocumented in this text.
>
> *Whichever way this resolves, it has a direct implication for `LeaveManagementESS_BRD.md`'s already-confirmed LM-030, which this pass does not alter — any amendment to that requirement needs its own explicit go-ahead, not a silent edit made from here.*

### 5.3 Rejection Path

> **OPEN — Questionnaire Q3.** Only "approved" is described — is there a distinct reject/decline action for a swap request, or does an unwanted request simply go unactioned?
> **A)** No separate reject action — an unapproved request stays pending or expires. **B)** A genuine reject action exists or is needed, with a reason and employee notification. **C)** Rejection happens informally, outside the system, before a request is ever acted on.
>
> *This is the fourth independent instance of the same missing-rejection-path pattern found across this project: Attendance & Leave Management's Compensatory Off Entry, Compensatory Offs' own Comp Off Approval/Rejection, and Time Sheet Management's Time Sheet Approval all share it.*

## 6. Off Day Swap Sanctioning Cancellation

**Purpose:** allows an already-approved swap to be canceled.

**DOM-020.** An approved swap SHALL be cancelable, for either of two named reasons: the employee changes their mind, or work requirements force the cancellation.

### 6.1 Cancellation After the Swapped Dates Have Passed

> **OPEN — Questionnaire Q4.** Does cancellation still work after the employee has already worked the original off-Saturday or already taken the new day off, given Real-Time Update means attendance was already altered on approval?
> **A)** Cancellation only works before either swapped date arrives; correction after that point requires a manual fix via Muster Roll's Set Option tool. **B)** Cancellation still works after the fact, and automatically corrects both days' attendance back to their pre-swap status. **C)** Cancellation works after the fact but doesn't auto-correct attendance — the approval record and the attendance record are not automatically linked.

## 7. Attendance Representation of a Swap

> **OPEN — Questionnaire Q5.** Does an approved swap get a distinct status/flag in Muster Roll, or does it simply move the ordinary OD (Off Day) status to the new date while the worked original off-Saturday shows as ordinary P (Present)?
> **A)** No distinct code — the swap is traceable only via the separate request/approval log, not via the attendance status itself. **B)** A distinct status/flag exists on both affected days, identifying them as swap-affected. **C)** Something else — describe in the notes field.
>
> *This bears on `AttendanceLeave_BRD_Questionnaire.html`'s still-open Q4 (Muster Roll's complete attendance status code list) without resolving it — that document is not edited as part of this pass.*

## 8. Open Items Register

| # | Questionnaire Q# | Screen | One-line summary |
|---|---|---|---|
| 1 | Q1 | Off Day Swap Request | Can a swap span a month or off-day-cycle boundary? |
| 2 | Q2 | Off Day Swap Request Approval | Single-level (as stated) or two-level (as LM-030 states) — and which role approves? |
| 3 | Q3 | Off Day Swap Request Approval | Is there a reject path, or approval only? |
| 4 | Q4 | Off Day Swap Sanctioning Cancellation | Does cancellation still work after the swapped dates have passed? |
| 5 | Q5 | Off Day Management (Real-Time Update) | Does a swap get a distinct Muster Roll status, or just a moved OD flag? |

**Confirmed cross-references, not open items:** DOM-001/002/012 draw directly and unambiguously from the source with no open question attached.

## 9. Source References

- `13_Day_Off_Management.md` — primary source for this module.
- `LeaveManagementESS_BRD.md` — LM-030, the stakeholder-confirmed cross-module approval-routing answer this module's own text conflicts with (§5.2).
- `AttendanceLeave_BRD.md` / `AttendanceLeave_BRD_Questionnaire.html` — Muster Roll's still-open attendance status code list (§7), and the rejection-path pattern's first instance (§5.3).
- `CompensatoryOffs_BRD.md` — the rejection-path pattern's second instance (§5.3).
- `TimeSheetManagement_BRD.md` — the rejection-path pattern's third instance, and the "correction after an already-consumed step" pattern this module's §6.1 shares (its own Q6).
- `DayOffManagement_BRD_Questionnaire.html` — the live, numbered list of the 5 open questions this document references; regenerate this BRD if further answers are recorded there.

---

*This document consolidates confirmed facts from `13_Day_Off_Management.md` into requirement form. Every remaining unresolved decision is cross-referenced to its exact question in `DayOffManagement_BRD_Questionnaire.html`. No requirement above an OPEN box assumes an answer to any open item.*

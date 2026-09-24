# MuzPayroll — Compensatory Offs (Employee Portal) Business Requirements Document

## Document Control

| | |
|---|---|
| Module | Employee Self-Service Portal → Compensatory Offs (Claim Compensatory Off, Recommendations & Rejections, Comp Off Approval/Rejection, Claim Comp Off Register) |
| Status | Draft — confirmed content only; 8 items remain open pending stakeholder sign-off |
| Source documents | `12_Compensatory_Offs.md`, cross-referenced against Masters (Attendance and Leave codes), System Management Settings (Attendance and Leave Group), the Attendance & Leave Management module (Compensatory Off Entry, Leave Encashment), and the Leave Management (Employee Portal) module (two-level approval structure) |
| Companion document | `CompensatoryOffs_BRD_Questionnaire.html` — every OPEN item below is numbered against this file's live 8-question list; regenerate this BRD if further answers are recorded there |

## 1. Purpose

This document defines the confirmed business requirements for the MUZPAYROLL Compensatory Offs module in the Employee Self-Service (ESS) portal — the employee-facing screen for claiming compensatory off against overtime worked, and the supervisor-facing screens for recommending, approving, and crediting those claims. It consolidates everything established with certainty from the source material, and separates that from everything still awaiting a stakeholder decision.

## 2. Scope

### 2.1 In Scope

- **Claim Compensatory Off** — the employee-facing screen for logging overtime and applying for a comp-off
- **Recommendations & Rejections** — the first-level supervisor screen that recommends or rejects claims
- **Comp Off Approval/Rejection** — the second-level (reporting head) screen that finalises approval on a monthly-consolidated basis
- **Claim Comp Off Register** — the employee-portal report showing claim status

### 2.2 Out of Scope

- **Time Sheet Management** — named as a dependency by this module's own open items ("In the time sheet, provision for start time and end time needs to be available") but covered by its own separate BRD (`TimeSheetManagement_BRD_Questionnaire.html`); only referenced here where it bears directly on a Compensatory Offs gap (§4.1, §4.2).
- **Compensatory Off Entry (employer portal)** — the HR-facing crediting screen this module hands off to; already lightly covered by the Attendance & Leave Management BRD, and only extended here where this module's own text adds new detail (§5.4).
- **Leave Encashment (employer portal)** — the existing HR-initiated encashment mechanism this module's own open item asks to extend; already covered by the Attendance & Leave Management BRD, referenced here only for the employee-initiation question (§6.2).

## 3. How to Read This Document

Every requirement below is written as a firm statement (*"The system SHALL…"*) because the source material confirms it without ambiguity. Anything not yet resolved is called out in an **OPEN** box immediately under the relevant screen, in the same form used across this BRD set:

- **OPEN — Questionnaire Q#** — the decision is already posed as a question in `CompensatoryOffs_BRD_Questionnaire.html`; the box restates the question and its three options. Do not build against a guessed option — wait for the recorded answer.

## 4. Claim Compensatory Off

**Purpose:** the employee-facing screen for logging overtime hours and applying for a compensatory off.

**Confirmed (source):** fields are Comp Off Type, Date, Start Time, End Time, Break Hours, and Work Details.

**CO-001.** The system SHALL require a Comp Off Type selection on every claim, drawn from the confirmed Attendance and Leave codes (Masters): Compensatory Off, Sunday Compensatory Off, or Rest Day. Holiday Compensatory Off SHALL NOT appear as a selectable claim type here, since it is credited automatically by HR (per the Attendance & Leave Management module) rather than claimed by the employee.

**CO-002.** If the claimed overtime duration exceeds 4 hours, the system SHALL require a Break Hours value before the claim can be submitted.

**CO-003.** The system SHALL reject a comp-off claim submitted more than 7 days after the overtime work it claims against.

**CO-004 [confirmed — not routed to the questionnaire, since the source names only one workable interpretation].** The Start Time and End Time fields SHALL be entered and displayed in 12-hour format, not 24-hour format, resolving the source's own explicitly flagged confusion.

### 4.1 Attendance/Time-Sheet Integration

> **OPEN — Questionnaire Q1.** Does the "Integration with Attendance" cross-check the module's Key Features claims already exists, or is it — as the module's own later open item requests — still to be built, and does it depend on Time Sheet Management first supporting start/end time entry?
> **A)** Not built yet — genuine new requirement, likely blocked on Time Sheet Management. **B)** Already built in some form — the open item wants a stronger version. **C)** Not needed this phase — approval continues to rely on manager judgement alone.

### 4.2 Overtime Spanning Midnight

> **OPEN — Questionnaire Q2.** How should a continuous overtime shift crossing midnight be logged, given the source states plainly this isn't currently possible as a single entry?
> **A)** Allow a single cross-midnight entry with start/end dates that differ. **B)** Keep two linked claims, one per calendar date, evaluated together for the break-mandatory and quantum rules. **C)** Keep two independent, unlinked claims — each evaluated on its own hours only.

## 5. Recommendations & Rejections / Comp Off Approval/Rejection

**Purpose:** the two-level supervisor workflow — an immediate supervisor recommends or rejects each claim as it arrives; the reporting head gives final approval once a month, against the calendar month's consolidated claims.

**CO-010.** Comp-off claim approval SHALL follow the same two-level Reporting Head / Reporting Person structure already confirmed for every other approval workflow in this project (per `LeaveManagementESS_BRD.md` LM-001/LM-002) — this module's own text ("Comp off approval is a two level process similar to leave applications") is a third independent confirmation of that same structure, alongside Leave and Advance Management.

**CO-011.** The reporting head's approval screen SHALL consolidate all of an employee's claims within a single calendar month into one view, with From Date as the date of that month's first claim and To Date as the date of its last claim.

**CO-012.** The system SHALL classify overtime into comp-off quantum using the two named thresholds: 4 hours of overtime qualifies for a half-day comp-off; 7.5 hours qualifies for a full-day comp-off. *(The exact application of these thresholds — per-claim or against the monthly total — is OPEN; see §5.1.)*

**CO-013.** The reporting head SHALL be able to view every individual claim within a consolidated month by drilling into the comp-off day total, to verify claim authenticity before approving or rejecting.

### 5.1 Comp-Off Quantum Formula

> **OPEN — Questionnaire Q3.** Do the 4h/7.5h thresholds apply per individual claim (then summed for the month), or against the single monthly consolidated total — and what happens to hours below 4h or between the named thresholds?
> **A)** Per-claim, then summed; sub-4h claims earn nothing. **B)** Against the monthly total only, in 7.5h steps with a 4h+ remainder as a half day. **C)** A different formula — specify in the notes field.

### 5.2 HR's Crediting Step

> **OPEN — Questionnaire Q4.** After reporting-head approval, HR credits the claim to the employee's leave count via the employer-portal Comp Off Entry screen — is that a genuine third approval gate, or purely administrative?
> **A)** Purely administrative — always credits what was approved. **B)** A genuine gate — HR can decline, needing its own rejection-reason and notification behaviour. **C)** A gate in principle, exercised only for policy exceptions, not routine second-guessing.

### 5.3 7th-of-the-Month Deadline Enforcement

> **OPEN — Questionnaire Q5.** The source admits a real risk ("probability of employee losing the overtime hours") if a month is approved before the 7th — is there an actual system guard against this, or is it purely procedural?
> **A)** Not currently enforced — add a date guard blocking approval until the 8th. **B)** Already enforced — the warning describes a bypass scenario, not a live gap. **C)** Intentionally left procedural, to allow an authorised exception.

### 5.4 Employer-Portal Hand-Off

**CO-014 [confirmed cross-reference — not itself open].** The Attendance & Leave Management module's own account of the employer-portal Compensatory Off Entry screen additionally flags a need for sorting by project and comp-off type on that screen; that requirement belongs to the Attendance & Leave Management BRD, not this one, and is noted here only as context for §5.2's open item.

## 6. Balance, Expiry & Encashment

### 6.1 Expiry & Carry-Forward

> **OPEN — Questionnaire Q6.** The module's own "Utilization & Expiry" section never states the expiry rule for ordinary Compensatory Off or Sunday Comp Off — only Holiday Comp Off's same-year, no-carry-forward rule is confirmed elsewhere. What's the actual rule?
> **A)** Same as Holiday Comp Off — same leave year only, no carry-forward, manual encashment only before lapse. **B)** More lenient — carries forward up to a configured limit; specify the limit. **C)** No fixed expiry at all — accumulates indefinitely.

### 6.2 Employee-Initiated Encashment

> **OPEN — Questionnaire Q7.** Corroborated by two independent sources (this module, and the Attendance & Leave Management module's Leave Encashment section, almost verbatim) — confirm scope and approval routing for letting employees initiate their own comp-off encashment.
> **A)** In scope now, same two-level approval as a claim. **B)** In scope now, single-step HR approval only (a payout decision, not a leave-balance decision). **C)** Confirmed as real, but deferred — encashment stays HR-initiated-only for this phase.

## 7. Claim Comp Off Register

**Confirmed (source):** a report in the employee portal showing the status of all comp-off claims, filterable to all / availed / unavailed.

> **OPEN — Questionnaire Q8.** No column list or additional filter is given anywhere. What fields and filters does this report actually need?
> **A)** Date, Comp Off Type, Hours Claimed, Quantum Allocated, Status, with date-range and status filters. **B)** The above, plus a Comp Off Type filter and traceability into which leave application/encashment consumed each availed entry. **C)** Minimal — just date, hours, status, with the all/availed/unavailed filter already stated.

## 8. Open Items Register

| # | Questionnaire Q# | Screen | One-line summary |
|---|---|---|---|
| 1 | Q1 | Claim Compensatory Off | Is attendance/time-sheet cross-check already built, or still a new requirement? |
| 2 | Q2 | Claim Compensatory Off | How should overtime spanning midnight be logged? |
| 3 | Q3 | Comp Off Approval/Rejection | Per-claim or monthly-total comp-off quantum formula? |
| 4 | Q4 | Comp Off Approval/Rejection | Is HR's crediting step a real gate or administrative sync? |
| 5 | Q5 | Comp Off Approval/Rejection | Is the 7th-of-the-month deadline system-enforced? |
| 6 | Q6 | Utilization & Expiry | What's the expiry/carry-forward rule for ordinary Compensatory Off? |
| 7 | Q7 | Recommendations & Rejections | Confirm scope for employee-initiated encashment. |
| 8 | Q8 | Claim Comp Off Register | What fields/filters does the report need? |

**Confirmed cross-references, not open items:** CO-010 extends `LeaveManagementESS_BRD.md`'s LM-001/LM-002 (the shared two-level Reporting Head/Person approval structure) with a third independent confirming source; CO-014 notes a related-but-out-of-scope requirement belonging to the Attendance & Leave Management BRD.

## 9. Source References

- `12_Compensatory_Offs.md` — primary source for this module.
- `Masters_BRD.md` / `07_Masters.md` — Attendance and Leave code list (CO, COH, SCO, RD).
- `07_System_Management.md` — Attendance and Leave Group settings (Expiry Type, Validity Period, Carry Forward Limit, Accumulation, Encashment fields per comp-off type).
- Attendance & Leave Management module (consolidated PRD) — Compensatory Off Entry (employer portal), Leave Encashment.
- `LeaveManagementESS_BRD.md` — LM-001/LM-002, the confirmed cross-module two-level approval structure.
- `CompensatoryOffs_BRD_Questionnaire.html` — the live, numbered list of the 8 open questions this document references; regenerate this BRD if further answers are recorded there.

---

*This document consolidates confirmed facts from `12_Compensatory_Offs.md` into requirement form. Every remaining unresolved decision is cross-referenced to its exact question in `CompensatoryOffs_BRD_Questionnaire.html`. No requirement above an OPEN box assumes an answer to any open item.*

# MuzPayroll — Masters Module Business Requirements Document

## Document Control

| | |
|---|---|
| Module | System Management → Masters (Payroll, Organisation, Status Update, User Rights) |
| Status | **1 open item (Employee Attribute Value's parent-link mechanism, §5.14) — all other known gaps resolved.** All 22 questionnaire items resolved (Nisha Varghese: 19; Basil: the final 3 — see §10); Company, Branch, Location, Reset Password, Reminder Item, Status Update, and User all confirmed directly from screenshots; 7 non-questionnaire items resolved by direct stakeholder statement in an earlier pass (MR-062/063/066/067/068/070/071); 6 more resolved via a live `brd-build` session (MR-072 through MR-078); 2 further items caught during a self-audit (MR-079/MR-080), with MR-080 corrected once and a structural placement bug fixed afterward; Reports and Letters' real field list confirmed by screenshot, correcting MR-041/MR-074's earlier text-only Category claim (MR-081), with its last remaining field-correspondence question also resolved by comprehensive screenshot coverage (MR-082); the action rail's permission-based enable/disable layer confirmed by direct statement during a `prd-build` session on this document's PRD counterpart, cross-referencing `SystemManagement_BRD.md` SM-092/MR-068 for the first time, with its remaining icon-to-right-type mapping explicitly redirected to that document's own open §13.2 Q8 rather than duplicated here (MR-083); the System Defined concept removed entirely by a further direct stakeholder statement, retracting MR-032/MR-070 and the System Defined exception clause in MR-045, with a flagged-but-accepted deactivation risk on Basic Salary as a result (MR-084); a full consistency re-check then caught and resolved the trash icon's stale hide-not-disable wording (MR-044, amended) and an unaddressed shared-reference-data question between DA Centre's and Reports and Letters' State fields (MR-085, new); screenshot evidence for Employee Attribute, Employee Attribute Value, Activity, and Evaluation Factor then retracted MR-042 and moved all four from Out of Scope to In Scope with confirmed field lists (MR-086 through MR-090), leaving one new, genuinely open point on Employee Attribute Value's parent-link mechanism — see §10 |
| Source documents | `07_Masters.md` (screenshot + PRD-extraction analysis, referencing `MuzPayroll_Masters_Settings_PRDEXTRACTION (4).docx`); stakeholder answers from `MUZPAYROLL_Masters_BRD_Answers.docx` (round 1) and `MUZPAYROLL_Masters_BRD_Answers (2).docx` (round 2); 25 live-screen screenshots supplied directly by the stakeholder (Company, Branch, Location, Reset Password, Employee Reminders, Status Update, Attendance and Leave, User — see §11 for the full breakdown), plus several direct stakeholder statements not accompanied by a screenshot |
| Companion document | `Masters_BRD_Questionnaire.html` — fully resolved; converted to a read-only completed summary (same directory) |
| Reconciled by | `gap-analysis` + `brd-finalize` (rounds 1–4, MR-001–070), then four `brd-build` live sessions conducted in a parallel working copy and reconciled back into this canonical document via `brd-finalize` (MR-071–080 — see §11 for a session-by-session breakdown); MR-081/082 added from screenshot evidence volunteered directly in chat; MR-083 and MR-084 added from direct stakeholder statements made during a `prd-build` session on this document's own PRD counterpart; MR-085 added, and MR-044 amended, via `AskUserQuestion` during a full-document consistency re-check in the same broader session; MR-086 through MR-090 added from screenshot evidence volunteered directly in chat, retracting MR-042 and moving four masters from Out of Scope to In Scope |

## 1. Purpose

This document defines the confirmed business requirements for the MUZPAYROLL Masters module — the reference/configuration data the Payroll, Employee, and Organisation areas of the system depend on. It consolidates everything established with certainty from the source screenshots and BRD text, and explicitly separates that from everything still awaiting a stakeholder decision.

## 2. Scope

### 2.1 In Scope

- 16 Payroll-section masters: Designation, Department, Job Grade, Government Job Grade, Employee Type, Attendance and Leave, Salary Head, Advance Type, Reports and Letters, DA Centre, Reminder Item, Project, Employee Attribute, Employee Attribute Value, Activity, Evaluation Factor — all 16 confirmed In Scope as of MR-086/MR-089/MR-090 (§5.13–§5.16); the last four were originally excluded on a "zero evidence" basis that screenshot evidence has since corrected — see §2.2's note
- 6 Organisation masters: Company, Branch, Location, Company List, Branch List, Location List
- Status Update (System Management → Masters)
- User Rights masters: User, Reset Password

### 2.2 Out of Scope

- **Settings** (Payroll Groups, Payroll Settings, User Rights Management) — explicitly deferred to a separate BRD, per the Product Manager's own direction recorded in `07_Masters.md`. Branch-level wage/PF/ESI/WF/Bonus parameters are Settings, not Masters, and are excluded here, confirmed by stakeholder (MR-048) — this content belongs exclusively to the separate Settings BRD and is already documented there (`SystemManagement_BRD.md` SM-071).
- **License Agreement** — confirmed by stakeholder (MR-047) as not needed; this master SHALL NOT be built.

**Moved back into scope, no longer excluded:** Activity, Evaluation Factor, Employee Attribute, and Employee Attribute Value were previously excluded here — Activity/Evaluation Factor on a "zero descriptive text anywhere in the source material" basis, Employee Attribute/Value on MR-042's "no new screen needed" basis. Screenshot evidence volunteered directly in chat has since corrected both bases: real, functioning Masters-level screens exist for all four, with confirmed field lists. See §5.13–§5.16 (MR-086 through MR-090) for the corrected, final requirements; MR-042 is retracted, not deleted, at §5.13.

## 3. How to Read This Document

Every requirement below is written as a firm statement (*"The system SHALL…"*) only where the source material confirms it without ambiguity. Anything not yet resolved is called out in an **OPEN** box immediately under the relevant master, in one of two forms:

- **OPEN — Questionnaire Q#** — the decision is already posed as a question in `Masters_BRD_Questionnaire.html`; the box restates the question and its three options. Do not build against a guessed option — wait for the recorded answer.
- **OPEN — not yet a questionnaire item** — a real gap surfaced during analysis that has no corresponding question in the current questionnaire. Flagged here so it is not silently assumed; add a question for it if it becomes blocking.

Field lists are labeled **Confirmed (screenshot)** when taken directly from a live-screen screenshot in the source material, or left as **OPEN** when no such evidence exists anywhere.

## 4. Requirements Common to Every Master

**MR-001.** The system SHALL present every master's list view as a card/tile grid by default, with view-mode controls to switch between Grid, List, and Tree layouts, and a search box.

**MR-002.** Each master's list card SHALL display, top to bottom: Code (with a verification checkmark and last-modified date), Name, Short Name, and Description (for masters that have a Description field). Department (§5.2), Company (§6.1), Branch (§6.2), and Location (§6.3) are the confirmed exceptions with no Description field — their list cards stop at Short Name. **User (§8.1) is a further exception**: its card shows Code, Name, Mobile Number, and Email instead — it has no Short Name or Description field at all (MR-078).

**MR-003.** Each Payroll-section master's edit screen SHALL present a modal with the core field set Code, Name, Short Name, Description, Active Date, and Authorization, plus the master-specific fields documented in its own section below. The modal SHALL close via a save action or a cancel/deactivate action. **Exception — Company, Branch, and Location (§6.1–§6.3) do not follow this shape.** They are confirmed as full pages, not modals, split into three panels (General Info / Address / Contact Info), with no Description field and their own parent-link dropdowns (Company on Branch; Company and Branch on Location) in place of it.

**MR-004.** Each master record SHALL carry an Authorization (maker-checker) state of either `ENTRY` (created, not yet approved) or `VERIFIED <date>` (approved, with the approval date shown).

**MR-063 [Confirmed by stakeholder — direct statement].** The action rail's icon set is intentionally screen-specific, not a design inconsistency: each screen shows only the actions actually available on it, so the icon set SHALL vary accordingly. 5 distinct variants have been sighted: generic master list (5 icons: add/search/circle-with-slash/trash/star — §4), Company edit (6 icons: save/search/circle-with-slash/trash/refresh/print — §6.1, MR-050), Company List (5 icons: save/search/circle-with-slash/trash/print — §6.4, MR-051), Status Update (4 icons: search/circle-with-slash/trash/refresh — §7, MR-061), Reset Password (5 icons: search/circle-with-slash/trash/refresh/print — §8.2, MR-058). This explains which icons a screen is structurally capable of showing at all; it does not by itself explain whether a shown icon renders enabled or disabled for a given user — see MR-083.

**MR-083 [Confirmed by stakeholder — direct statement].** A button/icon confirmed present on a screen (per MR-063's screen-type inventory above) SHALL always render on that screen — permission SHALL NOT hide it. Permission instead governs only whether it renders enabled (clickable) or disabled: a user without the relevant right sees the icon, greyed out and non-interactive, not absent. This permission is assigned per screen/page, to a group — not configured within this module. *Cross-reference: this corroborates `SystemManagement_BRD.md` SM-092 (User Group Rights and Location Group Rights, assigned per screen/option, to a group), and identifies MR-068's (§6.3) "Location And Group Rights Matching" screen as that assignment's own UI — two previously-unconnected confirmed facts, now linked. SM-092 confirms the identical mechanism applies to User Group Rights too, but no equivalent screen is named anywhere in either document for that half — flagged here as an asymmetry in the evidence, not assumed away. A User Group Rights assignment screen presumably exists somewhere in the Settings surface, the same way Location Group's does, but nothing in this BRD or `SystemManagement_BRD.md` confirms its name or shape.*

This requirement confirms the mechanism's shape, not its full mapping. SM-092 confirms only three right types — Add, Edit, Delete — while this module's action rail has at least seven distinct icon types across its confirmed variants (save, add, search, circle-with-slash, trash, star, refresh, print) plus the Verify action (MR-062), which is role-gated rather than Add/Edit/Delete-gated. Trash maps cleanly to Delete and save/add to Add/Edit; search, refresh, print, circle-with-slash, star, and Verify have no confirmed mapping to any of the three. This is not a gap this document can close: `SystemManagement_BRD.md` itself already flags this exact question as open (§13.2, Q8 — "Is Add/Edit/Delete the complete permission model, given how many workflows are approval-based?"), unresolved there. This module's own register remains at 0 open items on the basis that this is a confirmed structural fact with a known external dependency, not an unresolved question posed to this module's own stakeholder — the same basis MR-039 used for the Settings/AttendanceLeave leave-rules redirect.

**MR-072 [Confirmed by stakeholder — direct statement, brd-build run].** The circle-with-slash and star icons' specific purposes are explicitly deferred — this is a planned future deliverable, not an open gap to keep chasing. Not treated as unconfirmed/blocking; closed out of the open-questions register on that basis.

**MR-062 [Confirmed by stakeholder — direct statement].** A master record SHALL be Verified before it can be referenced elsewhere in the system (e.g. an unverified Designation cannot yet be assigned to an employee). HR Admin SHALL be the role authorised to verify a master record.

## 5. Payroll Masters

### 5.1 Designation

**Purpose:** defines the various designations within the company across all levels and hierarchy.

**Confirmed fields (screenshot):** Code, Name, Short Name, Description, Active Date, Authorization.

**MR-010.** The Designation master SHALL capture Code, Name, Short Name, Description, Active Date, and Authorization for every designation record.

**Sample data (abbreviated):** AFO/Admin Executive – Front Office, AMT/Assistant Manager – Technical, GM/General Manager, and further records — a flat list of job titles.

**MR-026 [Confirmed by stakeholder — resolves former Questionnaire Q1].** A Designation SHALL be linkable to one or more specific Departments, but not necessarily all — a designation is not required to be company-wide, nor restricted to exactly one department.

**MR-027 [Confirmed by stakeholder — resolves former Questionnaire Q2].** Job Grade and Designation SHALL remain two distinct, independent masters: Job Grade represents a level/band (e.g. Grade 1, Grade 2), and Designation represents the job title (e.g. Manager, Analyst). An employee record SHALL carry both independently.

---

### 5.2 Department

**Purpose:** defines all departments currently existing in the company.

**Confirmed fields (screenshot):** Code, Name, Short Name, Active Date, Authorization. **No Description field** — the only confirmed master without one.

**MR-011.** The Department master SHALL capture Code, Name, Short Name, Active Date, and Authorization for every department record, with no Description field.

**Sample data:** ADMIN/Administration, BCQ/Business Consulting, DES/Designing, ENT/Enterprise, FC/Finance Consulting, HK/House Keeping, HR/Human Resources, MAR/Marketing, QA/Quality Assurance, SYS/Systems, TECH/Technical — a flat list of 11 departments; no parent/hierarchy field or nested example is shown anywhere in the source material.

**MR-012.** The Department master SHALL be a flat list with no parent/hierarchy field, matching the confirmed field set and sample data above.

No open items — Department's shape is settled directly from the source material's own confirmed screenshots.

---

### 5.3 Job Grade

**Purpose:** represents the job grades in the organisation across all departments.

**Confirmed fields (screenshot):** Code, Name, Short Name, Description, Active Date, Authorization.

**MR-013.** The Job Grade master SHALL capture Code, Name, Short Name, Description, Active Date, and Authorization for every job grade record.

**MR-014.** Confirmed data pattern: Job Grade's Name field mirrors its Code (e.g. Code `E1`, Name `E1`), while the human-readable meaning is carried in Description (e.g. `JUNIOR EXECUTIVES - LEVEL 1`) — the inverse of Designation's pattern, where Name carries the full title and Description mirrors Name. See MR-043 (§9) — this exact inconsistency is now resolved: both fields become independently-purposed (Short Name = abbreviation, Description = explanatory note) going forward.

**Sample data:** A1/Assistants, E1–E5 (Junior Executives Level 1/2, Executives Level 1/2, Senior Executives), M1–M4 (Junior/Middle Management Levels 1–3), T1/Top Management.

**See MR-027 (§5.1) — Confirmed by stakeholder.**

**MR-028 [Confirmed by stakeholder — resolves former Questionnaire Q3].** A Job Grade record SHALL have optional Minimum Salary and Maximum Salary fields for banding — HR Admin MAY populate them or leave them blank; they are not mandatory.

---

### 5.4 Government Job Grade

**Purpose:** defines the job grade as assigned by the government to different industry sectors; this is the "minimum wages by government grade" reference the Minimum Wages Group setting reads from.

**Confirmed fields (screenshot):** Code, Name, Short Name, Description, Active Date, Authorization.

**MR-015.** The Government Job Grade master SHALL capture Code, Name, Short Name, Description, Active Date, and Authorization for every record.

**MR-016.** Confirmed data pattern: Name carries a formatted label (e.g. `GRADE B`), Short Name mirrors Code, and Description carries the actual role meaning (e.g. `Middle Manager`) — a third distinct Short Name/Description pattern; see MR-043 (§9) — now resolved the same way as MR-014's pattern.

**Sample data:** A/Grade A–Senior Manager, B/Grade B–Middle Manager, C/Grade C–Junior Manager, D/Grade D–Senior Executive, E/Grade E–Executive, F/Grade F–Junior Executive, G/Grade G–Assistants, H/Grade H–House Keeping, I/Grade I–Cleaner.

**See MR-045 (§9) — Confirmed by stakeholder.** Whether Govt. Job Grade is HR-Admin-editable or Super-Admin/fixed is covered by the general extensibility answer: it is open to HR Admin by default, with no named exception for this master specifically.

---

### 5.5 Employee Type

**Purpose:** specifies the categories of employees.

**Confirmed fields (screenshot):** Code, Name, Short Name, Description, Active Date, Authorization.

**MR-017.** The Employee Type master SHALL capture Code, Name, Short Name, Description, Active Date, and Authorization for every record.

**Sample data (all three confirmed records):** PER/Permanent, PRO/Probationer, TRA/Trainee.

**MR-018 [unblocked — MR-029/MR-030 now confirmed].** The main BRD separately references a new "Apprentice" employee category not present in this master's confirmed record set. Per MR-029, Apprentice SHALL be added as a fixed contract type alongside Permanent and Trainee (not a lifecycle phase like Probationer).

**MR-029 [Confirmed by stakeholder — resolves former Questionnaire Q4].** Employee Type SHALL behave as both a classification and a lifecycle status: Permanent and Trainee are fixed contract types, while Probationer is a lifecycle phase that a Permanent-track employee passes through before confirmation.

**MR-030 [Confirmed by stakeholder — resolves former Questionnaire Q5].** "Permanent" and "Regular" SHALL be treated as the same concept; the new system SHALL use "Permanent" as the display label going forward.

**See MR-045 (§9) — Confirmed by stakeholder.** HR Admin can add new Employee Types (e.g. Apprentice, per MR-018) freely; this master is not named as a locked exception.

---

### 5.6 Attendance and Leave

**Purpose:** establishes the attributes related to attendance and leave; this is the colour source for the Attendance & Leave Management module's colour-coded cells.

**Confirmed fields (screenshot):** Code, Name, Short Name, **Category** (dropdown — only `On Duty` observed), Description, **Full Day Color** (swatch picker with custom-colour option and live preview), **Display Type** (dropdown — only `Include in reports` observed), Active Date, Authorization.

**MR-019.** The Attendance and Leave master SHALL capture Code, Name, Short Name, Category, Description, Full Day Color, Display Type, Active Date, and Authorization for every record.

**Sample data (confirmed codes, each with its own assigned colour):** P/Present, LOP/Loss of Pay, EL/Leave, H/Holiday, OH/Optional Holiday, CO/Compensatory Off, OD/Off Day, ML/Maternity Leave, RD/Rest Day, COH/Holiday Compensatory Off, SCO/Sunday Compensatory Off, T/Travel (Hartal/Bandh/Strike).

**MR-020.** This confirmed code list SHALL be used as the master's seed data.

**MR-033 [Confirmed by stakeholder — resolves former Questionnaire Q8].** The Category field SHALL determine how an attendance/leave code is treated in payroll. For example, "On Duty" means the employee is considered working that day, regardless of whether they worked from office, remotely, or while travelling to a client site.

**MR-073 [Confirmed by stakeholder — screenshot, brd-build run].** The Category dropdown SHALL offer, in full: On Duty, Annual Leave, Casual Leave, Compensatory Off, Sick Leave, Parenting Leave, Holiday, Loss of Pay, Weekly Off, and Other Leaves (10 values, confirmed from the opened dropdown). No separate Half Day Color field exists on the edit form — Full Day Color is the only colour field confirmed, corroborated by the list cards, which each show a single colour-coded badge, not two.

**See MR-045 (§9) — Confirmed by stakeholder.** HR Admin can add new attendance/leave codes freely, consistent with the Q8 answer's own note that "leaves can be extended as per requirement."

---

### 5.7 Salary Head

**Purpose:** defines the components of the salary structure (allowances, deductions, company contributions).

**Confirmed structure:** the edit screen has three tabs — **Allowance** / **Deduction** / **Comp Contribution**.

**Confirmed fields (screenshot):** Code, Name, Short Name, Description, **Order in Report**, **Sub Type** (dropdown — `Gross Salary` observed), Active Date, Authorization, and a **System Defined** flag (confirmed shown on Basic Salary) — per MR-084, this flag SHALL NOT be carried into the new build.

**MR-021 [amended by a later direct statement, MR-084].** The Salary Head master SHALL capture Code, Name, Short Name, Description, Order in Report, Sub Type, Active Date, and Authorization for every component, organised under the Allowance/Deduction/Comp Contribution tabs. **No System Defined flag is built** — one was observed in the legacy screenshot above, but the stakeholder has since confirmed it is not carried forward; see MR-084.

**MR-022.** The Salary Head master SHALL represent individual salary components (e.g. Basic Salary, HRA, PF), each defined once under the appropriate tab.

**Sample data (30 confirmed components):** ADV/Advance Recovery, BASIC/Basic Salary, BON/Bonus, CCA/City Compensatory Allowance, COENCASH/CompOff Encashment, CON/Conveyance Allowance, DA/Dearness Allowance, EREF/EPF Employer Share, ERPFS/EPS Employer Share, ESI/ESI Employee Share, ERESI/ESI Employer Share, FLD/Field Allowance, HRA/House Rent Allowance, LENCASH/Leave Encashment, LTA/Leave Travel Allowance, ELENCASH/Leaves Encashment, MED/Medical Allowance, OTHA/Other Allowance, OTH/Other Deductions, PF/PF Employee Share, EPF/PF Employer Share, PSN/Position Allowance, PT/Profession Tax, ROUNDING/Rounding, TDS/Tax Deductible at Source, TRA/Travelling Allowance, WASH/Washing Allowance.

**MR-031 [Confirmed by stakeholder — resolves former Questionnaire Q6 (was critical)].** Whether a Salary Head component is formula-based or a fixed amount SHALL depend on the nature of that specific component — neither is universal. Neither the rate/formula/amount itself SHALL live on the Masters-level Salary Head record: it is configured in Settings, specifically the Salary Head Group screen. *Cross-reference: this corroborates `SystemManagement_BRD.md` SM-060, which already confirms Salary Head Group settings carry fixed/variable/formula-calculated allowance configuration — no action needed there, this is independent confirmation from the Masters side.*

**MR-032 [Confirmed by stakeholder — partially resolves former Questionnaire Q7; retracted by a later direct statement, MR-084].** This requirement originally confirmed that a Salary Head component flagged System Defined (e.g. Basic Salary) SHALL be immutable — not editable or deletable through the normal UI by any role — because such components are tied to statutory minimum-wage compliance. **This is now retracted:** the stakeholder has since confirmed there is no System Defined category at all. See MR-084 for the final, confirmed answer; this entry is kept for audit history rather than deleted.

**MR-046 [Confirmed by stakeholder — resolves second-round Questionnaire Q1, originally the narrowed Q7; qualifier corrected by a later direct statement, MR-084].** Both Super Admin and HR Admin SHALL be able to create a new Salary Head component — per MR-084, this now includes Basic Salary itself; there is no longer a non-ordinary category to distinguish it from. Once created, no role SHALL be able to edit or delete that component through the normal UI — the only available change is toggling it between Active and Inactive. This is a Salary-Head-specific rule, stricter than the general cross-cutting immutability baseline (MR-044, which locks only Code/Name once Verified): for Salary Head, the stakeholder's answer locks the entire record against edit/delete regardless of field, not just Code/Name.

**MR-064 [Confirmed by stakeholder — direct statement, corroborates MR-046].** The stakeholder's note that "all the Salary Heads are created by the HR Admin or Super Admin" independently corroborates MR-046's creation-permission rule from the Reminder Item answer round. Per MR-084, this now applies without exception, Basic Salary included.

**MR-070 [Confirmed by stakeholder — direct statement; retracted by a later direct statement, MR-084].** This requirement originally confirmed Basic Salary as the only System Defined Salary Head, with every other component being ordinary. **This is now retracted:** the stakeholder has since confirmed there is no System Defined category at all, and Basic Salary is created and governed identically to every other Salary Head component (MR-046, MR-064). See MR-084 for the final, confirmed answer; this entry is kept for audit history rather than deleted.

---

### 5.8 Advance Type

**Purpose:** specifies the types of advances available (Salary Advance, Travel Advance), with a Recovery Head linking each type to the Salary Head that recovers it.

**Confirmed fields (screenshot):** Code, Name, Short Name, **Recovery Head** (dropdown, linked to a Salary Head record — `Advance Recovery` observed), Description, Active Date, Authorization.

**MR-023.** The Advance Type master SHALL capture Code, Name, Short Name, Recovery Head (a reference to a Salary Head record), Description, Active Date, and Authorization for every record.

**Sample data:** SAL/Salary Advance, TRA/Travel Advance.

**MR-035 [Confirmed by stakeholder — resolves former Questionnaire Q10].** Each Advance Type SHALL enforce: a maximum amount, a maximum number of repayment installments, an interest rate (0% for Salary Advance; configurable for loan-type advances), and eligibility criteria (e.g. confirmed employees only). *Stakeholder note: this detailed rule engine can be scheduled for a later development phase rather than the current one — the rule itself is confirmed, its build timing is a separate roadmap decision.*

---

### 5.9 DA Centre

**Purpose:** the dearness allowance centre allocated by the Kerala government; currently only Ernakulam is used.

**Confirmed fields (screenshot):** Code, Name, **State** (dropdown — `Kerala` observed), Short Name, Description, **Order**, Active Date, Authorization.

**MR-024.** The DA Centre master SHALL capture Code, Name, State, Short Name, Description, Order, Active Date, and Authorization for every record. Per MR-085 (§9), this State field shares its reference lookup table with Reports and Letters' own State field (§5.10) rather than maintaining an independent list.

**Sample data:** EKM/Ernakulam (the only confirmed record).

**MR-034 [Confirmed by stakeholder — resolves former Questionnaire Q9 (was critical)].** DA Centre's rate SHALL NOT live on this Masters-level record. The rate is defined through the DA settings screens in System Management. *Cross-reference: this corroborates `SystemManagement_BRD.md` SM-020/SM-021 (DA Base Point and Rate Settings, DA Index Settings), which already document this. The stakeholder explicitly noted that Masters and Settings need to be considered together for DA — Masters defines the DA Centre identity (e.g. EKM/Ernakulam), Settings defines its actual rate.*

---

### 5.10 Reports and Letters

**Purpose:** any statutory or important reports and letters can be uploaded to the system and retrieved for future reference.

**Confirmed fields (screenshot, stakeholder-supplied directly — not routed through the questionnaire):** a modal, consistent with MR-003's generic shape, but with a materially different field composition than first assumed from text alone — see MR-081.

**MR-041 [Confirmed by stakeholder — resolves former Questionnaire Q17; field list corrected by screenshot evidence, MR-081].** Reports and Letters SHALL be a repository for uploaded documents. Its original text-derived description listed a field set of (Name, Category, File, Effective Date, Uploaded By) plus a Company or Branch tag — screenshot evidence (MR-081) has since shown no "Category" field exists as such; see MR-081 for the confirmed field list. Whether Effective Date/Uploaded By/the Company-or-Branch tag correspond to anything on the confirmed screen is resolved below — MR-082 confirms none of the three exist.

Confirmed cross-reference: this master appears as a selectable "Master" option, with an assignable approving user, in a separate Authorization User Allocation screen (that screen itself is out of this BRD's scope).

**MR-074 [Confirmed by stakeholder — direct statement, brd-build run; corrected by screenshot evidence, MR-081].** Reports and Letters SHALL NOT have a Category dropdown — this corrects the earlier version of this requirement, which assumed one existed with values like Statutory/Policy/Certificate/Other. The actual mechanism, confirmed by screenshot, is a **Report / Letter** type toggle plus a separate **Statutory** checkbox (see MR-081). This also means this document's "three same-named Category fields" disambiguation (Attendance and Leave's payroll-treatment Category, §5.6; Reminder Item's backend-only Category, §5.11, MR-060) was never really three — Reports and Letters never had one.

**MR-081 [Confirmed by stakeholder — screenshot, direct submission].** The Reports and Letters master's edit screen SHALL capture: a **Report / Letter** type toggle, a **Statutory** checkbox, Name, Short Name, **Upload File** (file attachment), **Act** (dropdown), **State** (dropdown), **Submission Month** (dropdown), **Submission Day** (dropdown), Description, Active Date, and Authorization. Notably, **no Code field exists anywhere on this form** — the only confirmed Payroll-section master without one, breaking the universal baseline every other Payroll master has had (MR-003). Per MR-085 (§9), this State dropdown shares its reference lookup table with DA Centre's own State field (§5.9) rather than maintaining an independent list.

**MR-082 [Confirmed by stakeholder — screenshot, direct submission].** None of MR-041's originally-claimed Effective Date, Uploaded By, or Company-or-Branch tag fields exist on the Reports and Letters screen — confirmed by comprehensive coverage across 8 total screenshots (both the Report and Letter toggle states, the full scroll range of the modal from header to Save/Cancel, and the list view), none of which show anything resembling these three. MR-081's field list (§5.10) is complete as stated; no further fields remain to find on this screen.

**Naming note:** the tile grid labels this "Reports and Letters"; the numbered list text uses "Reports & Letters." Neither source reconciles the two forms.

---

### 5.11 Reminder Item (Employee Reminders)

**Purpose:** undocumented beyond its own name in the original source material; its edit screen is titled "Employee Reminders," matching the numbered-list naming (see the Naming note below).

**Confirmed fields (screenshot, stakeholder-supplied directly — not routed through the questionnaire):** a modal, matching the generic Payroll-section shape (MR-003) — unlike Company/Branch/Location, which deviate from it.

**MR-059 [Confirmed by stakeholder — screenshot, direct submission].** The Reminder Item master SHALL capture Code, Name, Short Name, Category (dropdown), DataType (dropdown), Description, Active Date, and Authorization. Category and DataType are the two fields beyond the generic MR-003 baseline.

**MR-060 [Confirmed by stakeholder — screenshot + direct statement].** Reminder Item's Category dropdown SHALL offer at least **Asset** and **Checklist** as values (confirmed from the opened dropdown; more values may exist below the visible list). The Category value list SHALL NOT be managed through any Masters UI screen — the stakeholder confirmed this is a backend-only reference table, with new values inserted directly via the database rather than through a screen. This also resolves the open question of whether this is the same concept as Attendance and Leave's Category field (§5.6): it is not — that field's values describe payroll-day treatment (e.g. "On Duty"), while this one describes a reminder's subject type (e.g. "Checklist"); the two share a field name but not a domain. A third, separately-named "Category" field exists on Reports and Letters (§5.10, MR-041) — MR-074 (§5.10) confirms it's unrelated to either of these two as well.

**MR-040 [Confirmed by stakeholder — resolves former Questionnaire Q16].** Employee Reminders SHALL support both automated, event-based reminders from a predefined list (e.g. birthday, probation end, document expiry, work anniversary) and ad-hoc manual reminders that HR Admin can add for any employee.

**MR-065 [Confirmed by stakeholder — screenshot, direct submission].** Reminder Item's DataType dropdown SHALL offer exactly three values: **Text**, **Numeric**, and **Yes/No** — confirmed from the opened dropdown. With this and Category's value list (MR-060) both confirmed, Reminder Item's field documentation is now complete.

**Naming note:** the tile grid labels this "Reminder Item"; the numbered list text and the edit screen's own modal title use "Employee Reminders." Neither source reconciles the two forms.

---

### 5.12 Project

**Purpose:** creates the project teams currently available in the company.

**Confirmed fields (screenshot):** Code, Name, Short Name, Description, Active Date, Authorization.

**MR-025.** The Project master SHALL capture Code, Name, Short Name, Description, Active Date, and Authorization for every record, with no additional fields (no dates, no manager link).

**Sample data:** ACC/Accounts, ADMIN/Admin, AGRO/Agroms, ENT/Enterprise, HCIS, HSKP/Housekeeping, HR, JUEL/JuelIS, MARK/Marketing, MRETAIL, OTHERS, PAYROLL, RETAILS, SYST/Systems.

No open items — matches the confirmed field set directly.

---

### 5.13 Employee Attribute ("Attribute")

**Purpose:** defines the dynamic attribute types that can be assigned to employees (e.g. Disability, Disability Type, Voluntary PF) — the type-level definition that Employee Attribute Value (§5.14) supplies values for.

**Confirmed fields (screenshot, volunteered directly in chat):** Code, Name, **Sort Order**, **DataType** (dropdown), Description, **Mandatory Yes/No** (checkbox), Active Date, Authorization. No Short Name field.

**MR-042 [Confirmed by stakeholder — resolves former Questionnaire Q18; retracted by screenshot evidence, MR-086].** This requirement originally confirmed that Employee Attribute / Employee Attribute Value needed no separate Masters-level screen, on the stated basis that the Employee module's existing dynamic-attribute mechanism already satisfied the need. **This is now retracted:** screenshot evidence shows real, functioning Masters-level screens for both exist in the live legacy system, with their own confirmed field lists. See MR-086/MR-087/MR-088 for the corrected, final answer; this entry is kept for audit history rather than deleted.

**MR-086 [Confirmed by stakeholder — screenshot, direct submission].** Employee Attribute ("Attribute") and Employee Attribute Value ("Attribute Value") SHALL each be built as real Masters-level screens — MR-042's "no new screen needed" premise does not hold. Both appear as separate menu options (adjacent `opid` values, 228 and 229, in the legacy system), each with its own list view and edit modal, matching the generic card/tile-grid and modal shapes (MR-001, MR-003) used elsewhere in this module.

**MR-087 [Confirmed by stakeholder — screenshot, direct submission].** The Employee Attribute master's edit screen SHALL capture: Code, Name, Sort Order, DataType (dropdown), Description, Mandatory Yes/No (checkbox), Active Date, and Authorization. No Short Name field exists. The list card SHALL show four lines: Code (with verification checkmark and date), Name, Sort Order, Description — a further confirmed exception to MR-002's generic 3-line pattern, alongside Department/Company/Branch/Location (no Description) and User (no Short Name).

**Sample data (3 confirmed records):** DISABILITY/Disability/Sort Order 2/"Employee with disability"; DISABILITY_TYPE/DISABILITY TYPE/Sort Order 3/DISABILITY TYPE; VPF/Voluntary PF/Sort Order 10/Voluntary PF.

---

### 5.14 Employee Attribute Value ("Attribute Value")

**Purpose:** defines the individual selectable values under a given Employee Attribute (e.g. Hearing, Locomotive, and Visual as values under the Disability Type attribute).

**Confirmed fields (screenshot, volunteered directly in chat):** Code, Name, Description, Active Date, Authorization. No Short Name, Sort Order, or DataType field — a simpler field set than its parent Attribute master.

**MR-088 [Confirmed by stakeholder — screenshot, direct submission].** The Employee Attribute Value master's edit screen SHALL capture: Code, Name, Description, Active Date, and Authorization. The list card SHALL show three lines: Code (with verification checkmark and date), Name, Description — no Short Name line, a further exception to MR-002's generic pattern. The list view's Advanced Search panel SHALL filter by a single **Attribute** dropdown field (confirmed from the opened dropdown, showing "Disability Type" as a selectable option), confirming Attribute Value is scoped to a parent Attribute record.

**OPEN — not yet a questionnaire item.** Whether the parent-Attribute relationship is also captured as a field on the Attribute Value edit modal itself (so a new value is explicitly linked to its parent Attribute at creation time) is not resolved by the evidence supplied — the submitted screenshot of the create form shows only Code/Name/Description/Active Date/Authorization, with no visible Attribute dropdown. The Advanced Search panel confirms the relationship exists at the list-filtering level; how a new record actually gets linked to its parent (an implicit field not visible in the screenshot, a different creation entry point from within the parent Attribute's own screen, or something else) is not yet confirmed. Do not assume either mechanism — ask or request a further screenshot (e.g. the create form reached via a specific Attribute's own "Add Value" action, if one exists) if this becomes blocking.

**Sample data (3 confirmed records, all under the Disability Type attribute):** HEARING/HEARING/"HEARING"; LOCOMOTIVE/LOCOMOTIVE/"LOCOMOTIVE"; VISUAL/VISUAL/"VISUAL" — Code, Name, and Description are identical literal values for each record in the confirmed sample.

---

### 5.15 Activity

**Purpose:** undocumented beyond its own name and confirmed field evidence; sample data (ACCOUNTS, LAPTOP, DONGLE, ID CARD, LOGBOOKS, SIM CARD, SOURCE, WORK) suggests this tracks exit/offboarding checklist items (asset return, access revocation) rather than a general-purpose activity log.

**Confirmed fields (screenshot, volunteered directly in chat):** Code, Name, Short Name, Description, Active Date, Authorization — the full generic Payroll-master baseline (MR-003), with no additional fields. **This corrects §2.2's earlier basis for excluding this master** ("zero descriptive text anywhere in the source material") — that basis no longer holds now that screenshot evidence exists.

**MR-089 [Confirmed by stakeholder — screenshot, direct submission; moves Activity from Out of Scope (§2.2) to In Scope (§2.1)].** The Activity master SHALL capture Code, Name, Short Name, Description, Active Date, and Authorization for every record, matching the generic Payroll-master baseline exactly, with no master-specific fields beyond it.

**Sample data (9 confirmed records):** ACCOUNTS/Accounts Settlement, DOCS/Documents Handed Over, DONGLE/Dongle Returned, IDCARD/ID Card Returned, LAPTOP/Laptop Returned, LOGBOOKS/Log Books Returned, SIMCARD/SIM Card Returned, SOURCE/Source Handed Over, WORK/Work Transfer Completed.

---

### 5.16 Evaluation Factor

**Purpose:** undocumented beyond its own name and confirmed field evidence; sample data (Communication, Customer Management Skills, Business and Domain Knowledge, Decision Making, Efficiency, Integrity, Grasping Ability, etc.) suggests this is a reference list of competency/appraisal evaluation criteria.

**Confirmed fields (screenshot, volunteered directly in chat):** Code, Name, Short Name, Description, Active Date, Authorization — the full generic Payroll-master baseline (MR-003), identical in shape to Activity (§5.15), with no additional fields. **This corrects §2.2's earlier basis for excluding this master**, the same way MR-089 does for Activity.

**MR-090 [Confirmed by stakeholder — screenshot, direct submission; moves Evaluation Factor from Out of Scope (§2.2) to In Scope (§2.1)].** The Evaluation Factor master SHALL capture Code, Name, Short Name, Description, Active Date, and Authorization for every record, matching the generic Payroll-master baseline exactly, with no master-specific fields beyond it.

**Sample data (abbreviated — at least 18 confirmed records, more visible below the submitted screenshot's scroll range):** AWA/Ability to work in adverse conditions, COC/Communication and Collaboration, CMS/Customer Management Skills, HR2/Achieving Recruitment Targets, COS/Communication Skills (Oral...), BDK/Business and Domain Knowledge, CPN/Competency in Designation..., PLN/Effectiveness in Planning..., CAS/Core Accounting Skills, DPS/Decision Making, Problem Solving, GRA/Grasping Ability, HSA/House Keeping, Systematic..., EFF/Efficiency, FMS/Financial Management Skills, ITY/Integrity, KCA/Knowledge and..., GEN/Innovative Thinking, INT/Innovative Thinking (a second, distinct record from GEN — naming overlap in the source data, not a duplicate-entry error), HR4/Knowledge and...

## 6. Organisation Masters

### 6.1 Company

**Purpose:** Company can be created using this master screen.

**Confirmed fields (screenshot, stakeholder-supplied directly — not routed through the questionnaire):** the edit screen has two tabs, **General Info** and **Documents Info**, with General Info split into three panels.

**MR-049 [Confirmed by stakeholder — screenshot, direct submission].** The Company master's General Info tab SHALL capture, across three panels:
- **General Info panel:** Code, Name, Short Name, Active Date, Image upload (company logo/image attachment).
- **Address panel** (legacy screenshot shows this locked by default behind its own checkbox + "Edit" toggle — per MR-075, this lock SHALL NOT be carried into the new build): Address (3 stacked lines/fields, no individual labels confirmed), Country, State, District, Place, Pincode.
- **Contact Info panel** (same legacy lock, same MR-075 override): Landline Number, Mobile Number, Email.

**MR-071 [Confirmed by stakeholder — direct statement, brd-build run].** The Image upload control is Company-specific — Branch and Location do NOT have this field. This resolves what was previously unconfirmed for both masters (§6.2, §6.3).

The record also carries an Authorization dropdown (`ENTRY`/`VERIFIED`, consistent with MR-004) and a numbered row (observed as "1" with a date) — see MR-066 below for its confirmed meaning.

**MR-050 [Confirmed by stakeholder — screenshot, direct submission].** The Company master's Documents Info tab SHALL be a repeatable grid, separate from General Info, with columns: #, Document Type, Document, Document No, Document Expiry, File Upload, File Download, Remarks. Company's own screenshot showed this grid fully empty, with no default row — MR-067 below explains how this compares to Branch and Location. This screen's action rail shows yet another distinct icon set: save, search, circle-with-slash, trash, refresh, print (6 icons) — see MR-063 (§4) for the full list of icon-set variants sighted across screen types.

**MR-066 [Confirmed by stakeholder — direct statement].** The numbered green badge is an **amend number** (an amendment/revision sequence counter), and the adjacent date is the record's **Verified date** — together forming a revision-history row, not a sequence entry or anything editable by the user directly.

**MR-075 [Confirmed by stakeholder — direct statement, brd-build run].** The Address/Contact Info "Edit" lock toggle, observed in the legacy screenshots for Company, Branch, and Location (MR-049, MR-052, MR-055), SHALL NOT be carried into the new build. All three panels — General Info, Address, Contact Info — SHALL be uniformly editable, with no separate unlock step. This is a forward build decision overriding the legacy design, not an explanation of why the old screen worked that way.

**MR-067 [Confirmed by stakeholder — direct statement].** The Documents Info grid's page design is identical across Company, Branch, and Location — the row-vs-empty difference seen in the screenshots (MR-050, MR-053, MR-056) is a **data-state difference, not a design difference**: documents are actually being added to Branch and Location in practice, but not to Company, which is why Company's grid showed no row while the other two did.

### 6.2 Branch

**Purpose:** different branches of the company can be created.

**Confirmed fields (screenshot, stakeholder-supplied directly — not routed through the questionnaire):** the edit screen has the same two-tab shape as Company (§6.1) — **General Info** and **Documents Info** — with General Info again split into three panels.

**MR-052 [Confirmed by stakeholder — screenshot, direct submission].** The Branch master's General Info tab SHALL capture, across three panels:
- **General Info panel:** Company (dropdown, linking the Branch to its parent Company — this field has no equivalent on Company itself), Code, Name, Short Name, Active Date. No Image upload control exists here — confirmed Company-specific, not shared by Branch (MR-071).
- **Address panel** (same legacy lock pattern as Company, overridden by MR-075 for the new build): a single Address text field (not the 3 stacked lines confirmed for Company — a genuine difference between the two masters, not a transcription assumption), Country, State, District, Place, Pincode.
- **Contact Info panel** (same legacy lock, same MR-075 override): Landline Number and Email are directly confirmed from the screenshots; Mobile Number is presumed to sit between them (matching Company's identical field set) but was not directly visible in either submitted screenshot — flagged here rather than silently treated as equally confirmed.

The same Authorization dropdown and numbered-badge-plus-date row ("1" / date) seen on Company (MR-049) also appear here — a second, corroborating sighting that this is a generic cross-master pattern, not something specific to Company. Its purpose is confirmed by MR-066 (§6.1): an amend number paired with the Verified date.

**MR-053 [Confirmed by stakeholder — screenshot, direct submission].** The Branch master's Documents Info tab SHALL use the same grid columns as Company (MR-050): #, Document Type, Document, Document No, Document Expiry, File Upload, File Download, Remarks. Unlike Company's fully empty grid, the Branch screenshot shows a default row already present with **"Upload File"** / **"Download File"** action buttons under the File Upload / File Download columns respectively, plus a 3-icon toolbar (add/duplicate/delete row) at the grid's bottom-left. This is confirmed for Branch specifically; MR-067 (§6.1) explains the difference against Company as a data-state difference, not a design difference.

**Scope note — not an open item.** Per MR-048 (§9), Branch's separately-scoped Settings surface (General/Wage/PF/ESI/WF/Bonus) is out of this BRD's scope entirely — it belongs to the separate Settings BRD, already documented there (`SystemManagement_BRD.md` SM-071). Nothing above duplicates that content; this is a resolved confirmation, not a pending question.

### 6.3 Location

**Purpose:** if a branch has different locations, that can be created using this.

**Confirmed fields (screenshot, stakeholder-supplied directly — not routed through the questionnaire):** the edit screen has the same two-tab shape as Company and Branch (§6.1, §6.2) — **General Info** and **Documents Info** — with General Info again split into three panels.

**MR-055 [Confirmed by stakeholder — screenshot, direct submission].** The Location master's General Info tab SHALL capture, across three panels:
- **General Info panel:** Company (dropdown), Branch (dropdown), Code, Name, Short Name, Active Date. This confirms the hierarchy stated in Location's own Purpose text: Company → Branch → Location, each level adding one parent-link dropdown over the one below (Company has neither; Branch has Company only; Location has both). No Image upload control exists here either — confirmed Company-specific (MR-071).
- **Address panel** (same legacy lock pattern as Company/Branch, overridden by MR-075 for the new build): a single Address text field — matching Branch's single-line pattern, not Company's 3-line one — plus Country, State, District, Place, Pincode.
- **Contact Info panel** (same legacy lock, same MR-075 override): Landline Number, **Mobile Number**, and Email — all three directly visible this time. This independently confirms the 3-field Contact Info pattern that had to be inferred for Branch (MR-052), where Mobile Number wasn't directly visible in either submitted screenshot.

The same Authorization dropdown and numbered-badge-plus-date row seen on Company and Branch also appear here — a third corroborating sighting of what MR-066 (§6.1) confirms: an amend number paired with the Verified date.

**MR-056 [Confirmed by stakeholder — screenshot, direct submission].** The Location master's Documents Info tab SHALL use the same grid columns as Company and Branch (MR-050, MR-053): #, Document Type, Document, Document No, Document Expiry, File Upload, File Download, Remarks. Like Branch, and unlike Company's empty screenshot, Location's screenshot shows a default row present with "Upload File" / "Download File" buttons and the same add/duplicate/delete row toolbar — a second data point consistent with MR-067's (§6.1) explanation: a data-state difference against Company, not a design difference.

**MR-068 [Confirmed by stakeholder — direct statement].** "Location And Group Rights Matching" SHALL be where access rights are assigned to a Location Group — i.e. Location Group is a grouping construct over Locations, and this screen is its rights-matrix, not an independent concept. This clarifies the relationship between those two Settings screens.

**MR-076 [Confirmed by stakeholder — direct statement, brd-build run].** Location Group assignment SHALL happen from the Location Group screen itself (a Settings screen) — existing Locations are added into a group there, not from the Location master's own edit screen (§6.3). The Location master carries no Location Group field of its own.

### 6.4 Company List

**Purpose:** list view of the Company master; the entry point into an individual Company record.

**MR-051 [Confirmed by stakeholder — screenshot, direct submission].** Company List SHALL use the same Grid/List/Tree view-mode toggle and search box as every other master's list view (per MR-001). Each card SHALL display, top to bottom: Code (clickable, with a verification checkmark and date), Name, Short Name — with no Description line, consistent with Company having no Description field (MR-049). Clicking a company's card/row SHALL navigate directly to that Company's own edit screen (General Info / Documents Info tabs, §6.1), showing its full confirmed details. This corrects the prior placeholder text below, which assumed no separate create/edit action existed — Company List is in fact the entry point into exactly that screen, not a dead-end read-only grid.

This screenshot's action rail shows five icons (save, search, circle-with-slash [shown active/red], trash, print) — a different set from §4's generic description (add, search, circle-with-slash, trash, star/favourite). Per MR-063 (§4), this variation is confirmed intentional — each screen shows only its own available actions.

**MR-079 [Confirmed by stakeholder — direct statement, brd-build run].** Company List SHALL have no Advanced Search filter at all — confirmed absent, not merely unconfirmed. This is consistent with Company having no parent-link field of its own to filter by.

### 6.5 Branch List

**Purpose:** list view of the Branch master; the entry point into an individual Branch record.

**MR-054 [Confirmed by stakeholder — screenshot, direct submission].** Branch List SHALL use the same Grid/List/Tree view-mode toggle and search box as Company List and every other master's list view (per MR-001, MR-051). Each card SHALL display the same 3-line pattern as Company List: Code (clickable, with a verification checkmark and date), Name, Short Name — no Description line, corroborating that Branch has no Description field (MR-052). Clicking a branch's card/row SHALL navigate to that Branch's own edit screen (§6.2), matching Company List's confirmed behaviour (MR-051).

Branch List additionally has a 4th icon, beyond the Grid/List/Tree toggle, that opens a right-side **Advanced Search** panel with a **Company** dropdown field and an Apply button — letting the list be filtered to a single parent Company. This lines up with Branch's own Company field (MR-052).

### 6.6 Location List

**Purpose:** list view of the Location master; the entry point into an individual Location record.

**MR-057 [Confirmed by stakeholder — screenshot, direct submission].** Location List SHALL use the same Grid/List/Tree view-mode toggle, search box, and Advanced Search icon as Branch List (MR-054). Each card SHALL display the same 3-line pattern as Company List and Branch List — Code (clickable, with a verification checkmark and date), Name, Short Name, no Description line — a third corroborating sighting of this generic pattern, consistent with Location having no Description field (MR-055).

Location List's Advanced Search panel shows only a **Company** filter field in the submitted screenshot — the same single field as Branch List's panel — even though Location itself carries both a Company and a Branch dropdown (MR-055).

**MR-080 [Confirmed by stakeholder — direct statement, brd-build run; corrects an earlier version of this same answer].** Location List's Advanced Search panel SHALL include only a **Company** filter field — the same single field confirmed on Branch List's panel (§6.5). No Branch filter field exists or is planned. An earlier version of this requirement called for adding a non-mandatory Branch filter alongside Company; the stakeholder corrected that in a follow-up message, and this is the final, confirmed answer.

### 6.7 License Agreement — Out of Scope

**MR-047 [Confirmed by stakeholder — resolves second-round Questionnaire Q2, originally Q11].** The License Agreement master screen SHALL NOT be built — the stakeholder confirmed this screen is not needed. It is moved from In Scope (§2.1) to Out of Scope (§2.2) on that basis.

A same-named "License Agreement Details" grid (columns: User Code, User Name, Company) appears inside an unrelated, explicitly-unused settings screen ("Company Allocation" — recorded as "created for Norms, not used in Muziris"); the two were never confirmed to be related, and the question is now moot since this master is not being built.

## 7. Status Update

**Purpose:** masters that are created can be deactivated if they become redundant, from a single cross-master utility screen under System Management → Masters (not nested under Payroll or Organisation).

**Confirmed fields (screenshot, stakeholder-supplied directly — not routed through the questionnaire):** the screen opens directly into a Search panel (not a results grid) with an **Option** dropdown — selecting which master's records to act on, consistent with this being a single cross-master utility rather than one screen per master — and a **Status** radio toggle (Active / Inactive, Active selected by default), followed by an Apply button.

**MR-061 [Confirmed by stakeholder — screenshot, direct submission].** Status Update SHALL require the user to first select a target master via the Option dropdown, then filter by Active or Inactive status, before any records are listed — it has no default "show everything" view. This screen's action rail shows a fifth distinct icon set (search, circle-with-slash, trash, refresh — no save, no print), yet another corroborating sighting that the action rail's icon set is not uniform across screen types (see MR-063, §4).

**MR-036 [Confirmed by stakeholder — resolves former Questionnaire Q12].** The system SHALL block deactivation of a master record (e.g. a Designation) while any employee is currently assigned to it. HR Admin SHALL be required to reassign all affected employees before deactivation can proceed. *Cross-reference: MR-084 (§9) confirms this block does not cleanly extend to Salary Head, which has no per-employee assignment relationship for this rule to key off — Salary Head's own deactivation exposure is tracked there as an accepted risk, not covered by this rule.*

**MR-069 [Confirmed by stakeholder — screenshot, direct submission].** Status Update's Option dropdown SHALL list, alphabetically: Activity, Advance Type, Attendance and Leave, Branch, Company, DA Centre, Department, Designation, Employee Attribute, Employee Attribute Value, Employee Type, Evaluation Factor, Govt. Job Grade, Job Grade, Location, Location Group, Payroll Group, Project, Reports and Letters, Salary Head, Shift Group, User, User Group. *Cross-module note: this list spans beyond this BRD's own Masters scope — Payroll Group and Shift Group are Settings-scope entities (§2.2, deferred to the separate Settings BRD). Status Update's own scope is therefore wider than Masters alone; flagged here rather than silently expanding this document's scope to cover those entities.*

## 8. User Rights Masters

### 8.1 User

**Purpose:** lists all system users; new employee users can be created manually if not generated automatically.

Confirmed cross-references (not this screen's own field list): the Employee screen has a "Generate user" checkbox stating a user is automatically generated when an employee is created; the Employee screen's Verification action is described as triggering "creation of official login credentials" — confirmed by MR-037 below to be the same User record, not a separate mechanism; a separate Settings screen, "Employee and User Linking," manually links an auto-generated user to its employee record.

**MR-037 [Confirmed by stakeholder — resolves former Questionnaire Q13].** When HR Admin verifies an employee record, the system SHALL automatically create a login and email the credentials to the employee's personal email address. This SHALL be the same User record documented under this Masters → User Rights screen — not a separate mechanism.

**MR-077 [Confirmed by stakeholder — screenshot, brd-build run].** The User master's manual create/edit screen SHALL capture: User Code (with an "@MUZIRIS" suffix shown alongside it, suggesting a login-handle convention), User Name, User Type (dropdown), Mobile No, Email, Password (enforcing the same policy already confirmed for Reset Password — MR-058: minimum 5 characters, at least one digit, one letter, one special character), a "Change password on next login" checkbox, Active Date, and Authorization. This doesn't cleanly match any of the three originally-drafted options (it's neither the full standard-master shape nor a bare login-only form) — written directly from the screenshot rather than forced into one.

**MR-078 [Confirmed by stakeholder — screenshot, brd-build run].** User List's card SHALL show 4 lines — User Code (clickable, with a verification checkmark and date), User Name, Mobile Number, Email — not the standard 3-line Code/Name/Short Name pattern used elsewhere (MR-002), since User has no Short Name field. This is a second confirmed exception to MR-002's generic list-card shape, alongside Department/Company/Branch/Location's Description-field exception.

### 8.2 Reset Password

**Purpose:** user password can be reset and a new password assigned using this master.

**Confirmed fields (screenshot, stakeholder-supplied directly — not routed through the questionnaire):** a standalone form, not the General Info/Documents Info tab shape used by other masters.

**MR-058 [Confirmed by stakeholder — screenshot, direct submission].** The Reset Password screen SHALL capture: User (a User Code field — admin selects the target user, consistent with MR-038's admin-override path), New Password, and Confirm Password, followed by a Reset action button. The screen SHALL enforce, and display as on-screen guidance, a password policy of: minimum 5 characters, with at least one digit, one alphabetic character, and one special character from the set `@ . / # - $ _ % : * &`.

This screen's action rail shows yet another distinct icon set (search, circle-with-slash, trash, refresh, print — no save, no add) — see MR-063 (§4) for the full list of icon-set variants sighted across screen types.

**MR-038 [Confirmed by stakeholder — resolves former Questionnaire Q14].** A user SHALL be able to request a password reset themselves via a "forgot password" self-service flow. HR Admin and Super Admin SHALL also be able to force a reset directly from this screen as an admin override.

## 9. Cross-Cutting Requirements

These apply across multiple masters at once rather than to a single one.

**MR-039 [Confirmed by stakeholder — resolves former Questionnaire Q15].** PT Slabs and Leave Types SHALL be configured in different places: PT Slabs under Branch Settings; Leave Types under Masters → Attendance and Leave. *Stakeholder note: leave type **identity** (which types exist) is created through Masters, but leave **rules** (quantum, carry-forward, expiry) are defined under Settings. This confirms the structural split but does not supply the rule values themselves. `SystemManagement_BRD.md`'s own former Q2 (which had asked exactly this) is now resolved — not by supplying values there, but by a scope redirect (SM-031): those rules actually belong to, and are substantially already confirmed in, `AttendanceLeave_BRD.md` (AL-070, AL-031, AL-060/061), with that module's own Q18/Q20 as the real remaining open threads. This MR-039 answer still isn't what resolves those — it only confirms the Masters/Settings structural split.*

**MR-043 [Confirmed by stakeholder — resolves former Questionnaire Q19].** Short Name and Description SHALL remain independently editable on every master, but their purpose SHALL be redefined: Short Name becomes a true abbreviation (not necessarily identical to Code), and Description becomes a true explanatory note (not necessarily identical to Name). Existing legacy data SHALL be reviewed and cleaned up against this redefined purpose, keeping only what is actually required — the previous system's own conventions do not need to be carried forward unchanged.

**MR-044 [Confirmed by stakeholder — resolves former Questionnaire Q20; trash-icon visibility corrected for consistency with MR-083].** Both Code and Name SHALL become immutable once a master record is Verified — any change SHALL require deactivating the old record and creating a new one. No master record SHALL ever be hard-deleted; records can only be deactivated. The action rail's trash icon SHALL apply only to records still in ENTRY (unverified) state — once Verified, the trash icon renders **disabled (greyed out, non-interactive), not hidden**, consistent with MR-083's rule that an action's denial disables an icon rather than removing it; Status Update's deactivate toggle remains the only route that actually succeeds on a Verified record. *This corrects the original wording ("unavailable," read as hidden), which predated MR-083 and was never reconciled against it until now.*

**MR-045 [Confirmed by stakeholder — resolves former Questionnaire Q21; its System Defined exception retracted by a later direct statement, MR-084].** HR Admin SHALL be able to freely add new records to any master by default. This requirement originally named one exception — records (not entire masters) flagged System Defined, which would remain locked (Employee Type, Govt. Job Grade, and Attendance & Leave codes were never singled out as categorically locked; the exception was the System Defined flag itself, wherever it was set). **That exception is now retracted along with the flag itself (MR-084):** no record anywhere carries it, so HR Admin's ability to add new records now has no exception at all. *Corroborated by the Q8 answer (MR-033's source note: "Leaves can [be] extended as per requirement"), consistent with Attendance & Leave codes being HR-extensible rather than fixed.*

**MR-048 [Confirmed by stakeholder — Option A — resolves second-round Questionnaire Q3, originally Q22].** Branch-level Settings content (General/Wage/PF/ESI/WF/Bonus, roughly 30 parameters) SHALL be removed entirely from Masters scope and belongs exclusively to the separate Settings BRD. This document's Branch section (§6.2) keeps only Branch's own master fields, once confirmed, with a cross-reference note instead of the full detail. *Cross-reference: this content is already independently documented in `SystemManagement_BRD.md` SM-071 (Payroll Settings' six Branch-level sections) — nothing is lost by removing it here; it corroborates rather than requires new work.*

**MR-084 [Confirmed by stakeholder — direct statement; retracts MR-032, MR-070, and the System Defined exception clause in MR-045].** There is no "System Defined" category anywhere in this module — not on Salary Head (§5.7), and not as the general cross-cutting exception MR-045 above had named. Basic Salary, the only record MR-070 had ever named as System Defined, SHALL be created, and governed thereafter, by the exact same rule as every other Salary Head component (MR-046/MR-064): creatable by Super Admin or HR Admin; once created, not editable or deletable through the normal UI by any role; the only available change is toggling it Active/Inactive. HR Admin's ability to freely add new records to any master (MR-045) now has no exception at all — the System Defined flag it carved out never had a second instance beyond Basic Salary, and that instance is retracted here too.

The System Defined flag observed in the legacy screenshot on Basic Salary's Salary Head record (§5.7's own "Confirmed fields (screenshot)" line) SHALL NOT be carried into the new build — a forward build decision overriding the legacy design, not an explanation of why the old screen worked that way, the same pattern already used for the Address/Contact Info Edit-lock toggle (MR-075).

**Risk flagged, not resolved here.** MR-032's lock existed specifically because Basic Salary is tied to statutory minimum-wage compliance. Removing it means Basic Salary becomes toggleable to Inactive by Super Admin or HR Admin — reachable directly through Status Update, which already lists "Salary Head" as an Option dropdown value (MR-069) — with no remaining safeguard: MR-036's deactivation block applies only while an employee is "currently assigned to" a record, a mechanism that doesn't cleanly apply to Salary Head, a shared, org-wide calculation definition rather than a per-employee foreign key. No replacement safeguard was requested, so none is added here; this requirement documents the stakeholder's explicit choice to accept that exposure, not a design that mitigates it.

**MR-085 [Confirmed by stakeholder — direct statement].** DA Centre's State field (§5.9, MR-024) and Reports and Letters' State field (§5.10, MR-081) SHALL share a single State reference lookup table — not two independently-managed lists. Both screens reference the same underlying master data (India's states); a value added via either screen's lookup becomes available to both, rather than needing to be added twice.

## 10. Open Items Register

**Resolved, round 1 (19 of 22), by stakeholder answer (Nisha Varghese, via `MUZPAYROLL_Masters_BRD_Answers.docx`):** Q1→MR-026, Q2→MR-027, Q3→MR-028, Q4→MR-029, Q5→MR-030, Q6→MR-031, Q8→MR-033, Q9→MR-034, Q10→MR-035, Q12→MR-036, Q13→MR-037, Q14→MR-038, Q15→MR-039, Q16→MR-040, Q17→MR-041, Q18→MR-042, Q19→MR-043, Q20→MR-044, Q21→MR-045. Q7 was partially resolved (MR-032) and narrowed rather than fully closed in that round.

**Resolved, round 2 (the final 3), by stakeholder answer (Basil, via `MUZPAYROLL_Masters_BRD_Answers (2).docx`):** second-round Q1 (originally the narrowed Q7) → MR-046; second-round Q2 (originally Q11) → MR-047; second-round Q3 (originally Q22) → MR-048.

**All 22 original questionnaire items are now resolved.** `Masters_BRD_Questionnaire.html` has been converted to a read-only completed summary.

**Resolved, round 3 (direct stakeholder statements + 2 screenshots):** verification-mandatory (MR-062); action-rail icon-set variability rationale (MR-063); Reminder Item's DataType value list (MR-065); the numbered-badge/date row (MR-066); the Documents Info grid discrepancy (MR-067); the Location Group / Location And Group Rights Matching relationship (MR-068); Status Update's Option dropdown full value list (MR-069).

**Resolved, round 4 (direct stakeholder statement):** which Salary Heads are System Defined — Basic Salary only (MR-070).

**Resolved, round 5 (`brd-build` live session, parallel working copy, reconciled here via `brd-finalize`):** whether Branch or Location have an Image upload control like Company does — confirmed Company-only (MR-071).

**Resolved, round 6 (`brd-build` live session — answers given against a companion open-questions working file):** icon-button purposes explicitly deferred as a future deliverable, not an open gap (MR-072); Attendance Category's full value list + no separate Half Day Color field (MR-073); Reports and Letters' Category confirmed as its own independent document-type dropdown (MR-074); the Address/Contact Edit-lock toggle confirmed as legacy behaviour **not** carried into the new build (MR-075); Location Group assignment confirmed as happening from the Location Group screen itself, not the Location master (MR-076); the User master's manual create/edit field list, confirmed from screenshot (MR-077); plus User List's own 4-line card exception to MR-002 (MR-078).

**All 6 items raised in that working session are now resolved** and folded into this document; the working file itself was specific to that side-session and isn't duplicated here.

**Resolved, round 7 (`brd-build` self-audit re-run — caught 2 unconfirmed threads that existed in the prose but had never been promoted to a tracked item):** whether Company List has an Advanced Search filter — confirmed absent (MR-079); whether Location List's Advanced Search panel should include a Branch filter alongside Company — initially confirmed yes, then corrected: Company only, no Branch filter (MR-080, final answer).

**Resolved, round 8 (`brd-build` self-audit re-run — caught a structural placement bug):** MR-079 had been physically placed inside the §6.5 Branch List section despite being entirely about Company List; relocated into §6.4 where it belongs. No content change, structure only.

**Resolved, round 9 (screenshot evidence volunteered directly in chat):** Reports and Letters' actual edit-screen field list, confirmed from screenshot for the first time (MR-081) — this corrected two previously-confirmed but text-derived claims: MR-041's field list and MR-074's Category-dropdown claim, both of which assumed a "Category" field that does not actually exist. Also surfaced: Reports and Letters has no Code field, the only Payroll-section master without one.

**Resolved, round 10 (5 more screenshots volunteered directly in chat, covering both Report/Letter toggle states and the full modal scroll range):** MR-041's originally-claimed Effective Date, Uploaded By, and Company-or-Branch tag fields confirmed absent — they don't exist anywhere on the Reports and Letters screen (MR-082).

**Resolved, round 11 (direct stakeholder statement, during a `prd-build` session's analysis of this document's PRD counterpart):** the action rail's button-visibility/enable-disable mechanism — buttons always render per screen type (MR-063); permission (assigned per screen/page, to a group, owned by a separate module) governs only enabled/disabled state, never visibility (MR-083). This also connects MR-068's "Location And Group Rights Matching" to `SystemManagement_BRD.md` SM-092 for the first time. The deeper icon-to-right-type mapping remains unresolved, but that gap is owned by, and already tracked as, `SystemManagement_BRD.md`'s own §13.2 Q8 — not duplicated here, following the same redirect precedent as MR-039/SM-031.

**Resolved, round 12 (direct stakeholder statement, same `prd-build` session, following a reported contradiction):** the System Defined category is removed entirely — not just for Basic Salary (MR-070, retracted), but as the general cross-cutting exception type MR-045 had named (its exception clause retracted). Basic Salary is created and governed identically to every other Salary Head component (MR-084). The operational risk this reopens — Basic Salary becoming deactivatable with no remaining safeguard — was reported to the stakeholder before this was finalized; the stakeholder's answer accepted that exposure rather than asking for a replacement safeguard, so MR-084 documents the decision and the accepted risk together rather than inventing a mitigation nobody asked for.

**Resolved, round 13 (`AskUserQuestion`, during a full-document consistency re-check requested after round 12):** two unreconciled inconsistencies surfaced on a full read-through and were resolved live. (1) MR-044's trash icon previously hid outright once a record was Verified — predating MR-083's "disabled, not hidden" rule and never reconciled against it; corrected so the trash icon now follows the same rule (MR-044, amended). (2) DA Centre's and Reports and Letters' independently-confirmed State dropdowns were never said to share reference data; confirmed they SHALL share a single State lookup table (MR-085, new). Three further issues from the same re-check were purely cross-reference/completeness gaps, not requiring a stakeholder decision, and were fixed directly: MR-036 now cross-references MR-084's Salary Head carve-out; MR-083 now flags the Location-Group-vs-User-Group screen-naming asymmetry explicitly rather than leaving it silent.

**Resolved, round 14 (9 screenshots volunteered directly in chat, covering Employee Attribute, Employee Attribute Value, Activity, and Evaluation Factor):** all four masters previously excluded as Out of Scope are confirmed to have real Masters-level screens with confirmed field lists. MR-042 (no new screen needed for Employee Attribute/Value) is retracted (MR-086/MR-087/MR-088). Activity's and Evaluation Factor's "zero descriptive text" exclusion basis (§2.2) is corrected (MR-089/MR-090) — both confirmed as the standard generic Payroll-master baseline, no master-specific fields.

**Non-questionnaire gaps still open: 1 — Employee Attribute Value's parent-link mechanism (§5.14), not yet confirmed whether it's a field on the edit modal itself, a different creation entry point, or something else. Flagged, not guessed at.**

## 11. Source References

- `07_Masters.md` — primary source; built from 21 screenshots ("Masters Screens" folder) for the 10 confirmed Payroll masters, plus `MuzPayroll_Masters_Settings_PRDEXTRACTION (4).docx` for Reports and Letters, Reminder Item, the 7 Organisation masters, Status Update, User, and Reset Password.
- `MUZPAYROLL_Masters_BRD_Answers.docx` — round-1 stakeholder (Nisha Varghese) answers resolving 19 of the original 22 questionnaire items. Its cover-page stats showed "26 Total Questions / 10 Sections," which didn't match its own body content (Q1–Q22, 12 sections) — this traced back to a hardcoded bug in `Masters_BRD_Questionnaire.html`'s own DOCX-generation script (a stale `26`/`10` baked into the stats-table code, disconnected from the live 22-question/12-section array), not a mismatch in the submitted answers themselves. Fixed as part of the round-1 update.
- `MUZPAYROLL_Masters_BRD_Answers (2).docx` — round-2 stakeholder (Basil) answers resolving the final 3 questionnaire items (MR-046, MR-047, MR-048).
- Company master screenshots (4 images, supplied directly by stakeholder, not routed through the questionnaire) — General Info tab (General Info / Address / Contact Info panels), Documents Info tab, and Company List, confirming MR-049/MR-050/MR-051.
- Branch master screenshots (5 images, supplied directly by stakeholder, not routed through the questionnaire) — General Info tab (both scroll positions), Documents Info tab, and Branch List (including its Advanced Search panel), confirming MR-052/MR-053/MR-054.
- Location master screenshots (5 images, supplied directly by stakeholder, not routed through the questionnaire) — Documents Info tab, General Info tab (both scroll positions), and Location List (including its Advanced Search panel), confirming MR-055/MR-056/MR-057.
- Reset Password screenshot (1 image, supplied directly by stakeholder, not routed through the questionnaire), confirming MR-058.
- Employee Reminders screenshots (4 images, supplied directly by stakeholder, not routed through the questionnaire) — edit modal, list view, the opened Category dropdown, and the opened DataType dropdown, plus a direct stakeholder statement that Category is backend/DB-managed, confirming MR-059/MR-060/MR-065.
- Status Update screenshots (3 images, supplied directly by stakeholder, not routed through the questionnaire) — the Search panel and the opened Option dropdown (2 scroll positions), confirming MR-061/MR-069.
- Direct stakeholder statements (not accompanying any screenshot) confirming MR-062 (verification mandatory, HR Admin verifies), MR-063 (action-rail icon-set variability is intentional), MR-066 (the numbered badge is an amend number, paired with the Verified date), MR-067 (the Documents Info grid difference is a data-state difference, not a design difference), MR-068 (Location And Group Rights Matching assigns rights to a Location Group), and MR-070 (Basic Salary is the only System Defined Salary Head) — the last clarified via `AskUserQuestion` after the stakeholder's first phrasing of this answer read ambiguously.
- `brd-build` live session 1 (`AskUserQuestion`, parallel working copy) — confirmed MR-071 (Image upload is Company-specific) and deferred the remaining 6 open items to a companion working file.
- `brd-build` live session 2 (direct answers against that working file, plus 3 new screenshots): Attendance and Leave's opened Category dropdown (1 image, confirming MR-073) and the User master's edit modal and list view (2 images, confirming MR-077/MR-078). Direct statements (no screenshot) confirmed MR-072 (icon purposes deferred), MR-074 (Reports and Letters Category is independent), MR-075 (Edit-lock toggle not carried into the new build), and MR-076 (Location Group assignment happens from the Location Group screen).
- `brd-build` live session 3 (self-audit re-run, direct statements, no screenshot): confirmed MR-079 (Company List has no Advanced Search filter) and an initial version of MR-080 (Location List's Advanced Search panel gets a Branch filter, non-mandatory, alongside Company).
- `brd-build` live session 4 (direct statement, no screenshot): corrected MR-080 — Location List's Advanced Search panel SHALL include only Company, not Branch, reversing session 3's answer. Also caught and fixed a structural bug: MR-079 had been written into the §6.5 Branch List section instead of §6.4 Company List. All four sessions ran in a parallel working copy and were reconciled into this canonical document via `brd-finalize`.
- Reports and Letters screenshots (8 images total, supplied directly by stakeholder, not routed through the questionnaire, across two batches) — the edit modal in both Report and Letter toggle states, across the full scroll range, plus the list view, confirming MR-081/MR-082 and correcting MR-041/MR-074.
- Direct stakeholder statement (made during a `prd-build` session working on this document's PRD counterpart, no screenshot) confirming MR-083 — the action rail's permission-based enable/disable mechanism, and its cross-reference to `SystemManagement_BRD.md` SM-092/MR-068.
- Direct stakeholder statement (same `prd-build` session, following a reported contradiction with the then-confirmed MR-032/MR-070, no screenshot) confirming MR-084 — removing the System Defined category entirely, including its cross-cutting exception clause in MR-045, and accepting the resulting Basic-Salary deactivation risk rather than requesting a replacement safeguard.
- `AskUserQuestion` (two questions, same broader session, following a requested full-document consistency re-check that surfaced 7 issues): confirmed MR-044's amendment (trash icon disabled, not hidden, once Verified — aligning it with MR-083) and MR-085 (DA Centre and Reports and Letters share one State lookup table, not two).
- `SystemManagement_BRD.md` — cross-referenced for SM-020/SM-021 (DA rate settings, corroborating MR-034), SM-060 (Salary Head Group formula/fixed configuration, corroborating MR-031), SM-071 (Branch-level Payroll Settings sections, corroborating MR-048's removal of Branch-level Settings from Masters scope), SM-031 (its own former Q2, now resolved by redirect to `AttendanceLeave_BRD.md` rather than by MR-039, which only confirms the Masters/Settings structural split), and SM-092 (User Group Rights/Location Group Rights assigned per screen/option, corroborating MR-083 and identifying MR-068's own screen as its assignment UI) — that document's own §13.2 Q8 (is Add/Edit/Delete the complete permission model?) remains open there, not resolved by MR-083.
- `Masters_BRD_Questionnaire.html` — now a read-only completed summary; all 22 original questions resolved (same directory).
- Employee Attribute, Employee Attribute Value, Activity, and Evaluation Factor screenshots (9 images total, volunteered directly in chat, not routed through the questionnaire) — Attribute Value's edit modal, list view, and Advanced Search panel; Attribute's edit modal and list view; Activity's edit modal and list view; Evaluation Factor's edit modal and list view — confirming MR-086/MR-087/MR-088/MR-089/MR-090 and retracting MR-042.

---

*This document consolidates confirmed facts from `07_Masters.md` into requirement form, stakeholder-confirmed answers from both rounds of `MUZPAYROLL_Masters_BRD_Answers.docx` / `MUZPAYROLL_Masters_BRD_Answers (2).docx`, four live `brd-build` resolution sessions (run in a parallel working copy and reconciled here via `brd-finalize`), and direct stakeholder statements and screenshots captured outside those sessions (including MR-081–090). The questionnaire is fully resolved; one genuine open item remains in this document's own register — Employee Attribute Value's parent-link mechanism (§5.14) — flagged rather than guessed at, alongside MR-084's separately-flagged, stakeholder-accepted operational risk, which is a different kind of entry (a resolved decision with an accepted consequence, not an open question).*

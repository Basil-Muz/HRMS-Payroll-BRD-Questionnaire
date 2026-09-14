# MuzPayroll — Masters Module Business Requirements Document

## Document Control

| | |
|---|---|
| Module | System Management → Masters (Payroll, Organisation, Status Update, User Rights) |
| Status | Draft — confirmed content only; 22 items remain open pending stakeholder sign-off, plus Company and Branch field lists awaiting direct stakeholder input (not routed through the questionnaire) |
| Source documents | `07_Masters.md` (screenshot + PRD-extraction analysis, referencing `MuzPayroll_Masters_Settings_PRDEXTRACTION (4).docx`) |
| Companion document | `Masters_BRD_Questionnaire.html` — every OPEN item below is numbered against this file's live 22-question list; regenerate this BRD once answers are recorded there |

## 1. Purpose

This document defines the confirmed business requirements for the MUZPAYROLL Masters module — the reference/configuration data the Payroll, Employee, and Organisation areas of the system depend on. It consolidates everything established with certainty from the source screenshots and BRD text, and explicitly separates that from everything still awaiting a stakeholder decision.

## 2. Scope

### 2.1 In Scope

- 16 Payroll-section masters: Designation, Department, Job Grade, Government Job Grade, Employee Type, Attendance and Leave, Salary Head, Advance Type, Reports and Letters, DA Centre, Reminder Item, Project (Employee Attribute, Employee Attribute Value, Activity, and Evaluation Factor are named on the same landing page but individually marked Out of Scope — see §2.2)
- 7 Organisation masters: Company, Branch, Location, Company List, Branch List, Location List, License Agreement
- Status Update (System Management → Masters)
- User Rights masters: User, Reset Password

### 2.2 Out of Scope

- **Settings** (Payroll Groups, Payroll Settings, User Rights Management) — explicitly deferred to a separate BRD, per the Product Manager's own direction recorded in `07_Masters.md`. Branch-level wage/PF/ESI/WF/Bonus parameters are Settings, not Masters, and are excluded here pending OPEN-22's resolution.
- **Activity** and **Evaluation Factor** — appear only as landing-page tiles with zero descriptive text anywhere in the source material; not scoped for this pass.
- **Employee Attribute** / **Employee Attribute Value** field-level design — likely already delivered by the Employee module's existing dynamic-attribute feature; see OPEN-18 before scoping any new build.

## 3. How to Read This Document

Every requirement below is written as a firm statement (*"The system SHALL…"*) only where the source material confirms it without ambiguity. Anything not yet resolved is called out in an **OPEN** box immediately under the relevant master, in one of two forms:

- **OPEN — Questionnaire Q#** — the decision is already posed as a question in `Masters_BRD_Questionnaire.html`; the box restates the question and its three options. Do not build against a guessed option — wait for the recorded answer.
- **OPEN — not yet a questionnaire item** — a real gap surfaced during analysis that has no corresponding question in the current 24-item questionnaire. Flagged here so it is not silently assumed; add a question for it if it becomes blocking.

Field lists are labeled **Confirmed (screenshot)** when taken directly from a live-screen screenshot in the source material, or left as **OPEN** when no such evidence exists anywhere.

## 4. Requirements Common to Every Master

**MR-001.** The system SHALL present every master's list view as a card/tile grid by default, with view-mode controls to switch between Grid, List, and Tree layouts, and a search box.

**MR-002.** Each master's list card SHALL display, top to bottom: Code (with a verification checkmark and last-modified date), Name, Short Name, and Description (for masters that have a Description field — Department is the one confirmed exception; see §5.2).

**MR-003.** Each master's edit screen SHALL present a modal with the core field set Code, Name, Short Name, Description, Active Date, and Authorization, plus the master-specific fields documented in its own section below. The modal SHALL close via a save action or a cancel/deactivate action.

**MR-004.** Each master record SHALL carry an Authorization (maker-checker) state of either `ENTRY` (created, not yet approved) or `VERIFIED <date>` (approved, with the approval date shown).

> **OPEN — not yet a questionnaire item.** The list screen's right-hand action rail shows five icons (add, search, circle-with-slash, trash, star/favourite). Questionnaire Q20 resolves the trash icon's delete-vs-deactivate semantics once answered, but the circle-with-slash and star icons' functions are undocumented anywhere in the source material and have no corresponding questionnaire item yet.

> **OPEN — not yet a questionnaire item.** Whether Authorization/verification is mandatory before a master record can be referenced elsewhere in the system (e.g. an unverified Designation assigned to an employee), and who is authorised to verify a master record, are undocumented anywhere in the source material.

## 5. Payroll Masters

### 5.1 Designation

**Purpose:** defines the various designations within the company across all levels and hierarchy.

**Confirmed fields (screenshot):** Code, Name, Short Name, Description, Active Date, Authorization.

**MR-010.** The Designation master SHALL capture Code, Name, Short Name, Description, Active Date, and Authorization for every designation record.

**Sample data (abbreviated):** AFO/Admin Executive – Front Office, AMT/Assistant Manager – Technical, GM/General Manager, and further records — a flat list of job titles.

> **OPEN — Questionnaire Q1.** Is a Designation linked to a specific Department, or company-wide?
> **A)** Company-wide, no department link. **B)** Department-specific — one designation belongs to one department. **C)** Flexible — a designation can link to one or more departments but not necessarily all.

> **OPEN — Questionnaire Q2** (shared with §5.3 Job Grade). Are Job Grade and Designation different things?
> **A)** Different — Grade is a level/band, Designation is the job title; independent. **B)** Effectively the same — one master can be removed. **C)** Different purpose — Grade drives salary banding/minimum wage, Designation is the payslip/org-chart title.

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

**MR-014.** Confirmed data pattern: Job Grade's Name field mirrors its Code (e.g. Code `E1`, Name `E1`), while the human-readable meaning is carried in Description (e.g. `JUNIOR EXECUTIVES - LEVEL 1`) — the inverse of Designation's pattern, where Name carries the full title and Description mirrors Name. See OPEN-19 (§9) for the system-wide policy question this raises.

**Sample data:** A1/Assistants, E1–E5 (Junior Executives Level 1/2, Executives Level 1/2, Senior Executives), M1–M4 (Junior/Middle Management Levels 1–3), T1/Top Management.

> **OPEN — Questionnaire Q2.** See §5.1 above (shared question).

> **OPEN — Questionnaire Q3.** Does a Job Grade record have a Minimum/Maximum Salary for banding?
> **A)** Yes, with a payroll warning if salary falls outside the band. **B)** No salary band — classification only. **C)** Optional fields, not mandatory.

---

### 5.4 Government Job Grade

**Purpose:** defines the job grade as assigned by the government to different industry sectors; this is the "minimum wages by government grade" reference the Minimum Wages Group setting reads from.

**Confirmed fields (screenshot):** Code, Name, Short Name, Description, Active Date, Authorization.

**MR-015.** The Government Job Grade master SHALL capture Code, Name, Short Name, Description, Active Date, and Authorization for every record.

**MR-016.** Confirmed data pattern: Name carries a formatted label (e.g. `GRADE B`), Short Name mirrors Code, and Description carries the actual role meaning (e.g. `Middle Manager`) — a third distinct Short Name/Description pattern; see OPEN-19 (§9).

**Sample data:** A/Grade A–Senior Manager, B/Grade B–Middle Manager, C/Grade C–Junior Manager, D/Grade D–Senior Executive, E/Grade E–Executive, F/Grade F–Junior Executive, G/Grade G–Assistants, H/Grade H–House Keeping, I/Grade I–Cleaner.

> **OPEN — Questionnaire Q21** (the general Fixed List or Extensible question, §9). Whether Govt. Job Grade is HR-Admin-editable or Super-Admin/fixed — it maps to an external government definition — is folded into Q21's general extensibility question rather than asked separately for this master.

---

### 5.5 Employee Type

**Purpose:** specifies the categories of employees.

**Confirmed fields (screenshot):** Code, Name, Short Name, Description, Active Date, Authorization.

**MR-017.** The Employee Type master SHALL capture Code, Name, Short Name, Description, Active Date, and Authorization for every record.

**Sample data (all three confirmed records):** PER/Permanent, PRO/Probationer, TRA/Trainee.

**MR-018 [BLOCKED pending Q4/Q5].** The main BRD separately references a new "Apprentice" employee category not present in this master's confirmed record set; adding it is blocked on OPEN-4/OPEN-5 below, since how it should be classified depends on their answers.

> **OPEN — Questionnaire Q4.** Does Employee Type describe a fixed contract classification, or a changing lifecycle status?
> **A)** Contract type, fixed at joining. **B)** Lifecycle status, changes over time (e.g. Probationer → Permanent). **C)** Both — Permanent/Trainee fixed, Probationer a lifecycle phase.

> **OPEN — Questionnaire Q5.** Are "Permanent" (BRD) and "Regular" (current system) the same concept?
> **A)** Same concept, use Permanent going forward. **B)** Different — Permanent is narrower than a broader Regular category. **C)** Permanent is a sub-type of Regular.

> **OPEN — Questionnaire Q21.** Can HR Admin add new Employee Types (e.g. Apprentice), or is the list fixed? — see the consolidated Fixed List or Extensible question in §9.

---

### 5.6 Attendance and Leave

**Purpose:** establishes the attributes related to attendance and leave; this is the colour source for the Attendance & Leave Management module's colour-coded cells.

**Confirmed fields (screenshot):** Code, Name, Short Name, **Category** (dropdown — only `On Duty` observed), Description, **Full Day Color** (swatch picker with custom-colour option and live preview), **Display Type** (dropdown — only `Include in reports` observed), Active Date, Authorization.

**MR-019.** The Attendance and Leave master SHALL capture Code, Name, Short Name, Category, Description, Full Day Color, Display Type, Active Date, and Authorization for every record.

**Sample data (confirmed codes, each with its own assigned colour):** P/Present, LOP/Loss of Pay, EL/Leave, H/Holiday, OH/Optional Holiday, CO/Compensatory Off, OD/Off Day, ML/Maternity Leave, RD/Rest Day, COH/Holiday Compensatory Off, SCO/Sunday Compensatory Off, T/Travel (Hartal/Bandh/Strike).

**MR-020.** This confirmed code list SHALL be used as the master's seed data.

> **OPEN — Questionnaire Q8.** What does the Category field actually control?
> **A)** Payroll-relevant (affects salary calculation). **B)** Leave-balance-relevant only. **C)** Display/reporting grouping only, no computational effect.

> **OPEN — not yet a questionnaire item.** Category's full value list (only `On Duty` was observed) and whether a separate Half Day colour exists distinct from Full Day Color are undocumented.

> **OPEN — Questionnaire Q21.** Can HR Admin add new attendance/leave codes? — see §9.

---

### 5.7 Salary Head

**Purpose:** defines the components of the salary structure (allowances, deductions, company contributions).

**Confirmed structure:** the edit screen has three tabs — **Allowance** / **Deduction** / **Comp Contribution**.

**Confirmed fields (screenshot):** Code, Name, Short Name, Description, **Order in Report**, **Sub Type** (dropdown — `Gross Salary` observed), Active Date, Authorization, and a **System Defined** flag (confirmed shown on Basic Salary).

**MR-021.** The Salary Head master SHALL capture Code, Name, Short Name, Description, Order in Report, Sub Type, Active Date, Authorization, and a System Defined flag for every component, organised under the Allowance/Deduction/Comp Contribution tabs.

**MR-022.** The Salary Head master SHALL represent individual salary components (e.g. Basic Salary, HRA, PF), each defined once under the appropriate tab.

**Sample data (30 confirmed components):** ADV/Advance Recovery, BASIC/Basic Salary, BON/Bonus, CCA/City Compensatory Allowance, COENCASH/CompOff Encashment, CON/Conveyance Allowance, DA/Dearness Allowance, EREF/EPF Employer Share, ERPFS/EPS Employer Share, ESI/ESI Employee Share, ERESI/ESI Employer Share, FLD/Field Allowance, HRA/House Rent Allowance, LENCASH/Leave Encashment, LTA/Leave Travel Allowance, ELENCASH/Leaves Encashment, MED/Medical Allowance, OTHA/Other Allowance, OTH/Other Deductions, PF/PF Employee Share, EPF/PF Employer Share, PSN/Position Allowance, PT/Profession Tax, ROUNDING/Rounding, TDS/Tax Deductible at Source, TRA/Travelling Allowance, WASH/Washing Allowance.

> **OPEN — Questionnaire Q6 (critical — blocks payroll computation).** None of the confirmed fields above carry a rate, percentage, or fixed-amount value.
> **A)** Formula-only; a percentage field is missing and needs to be added. **B)** Fixed-amount-only; an amount field is missing and needs to be added. **C)** Neither lives on this master — the actual rate is set elsewhere (e.g. a per-employee Salary Structure assignment not yet described anywhere), which needs its own screen.

> **OPEN — Questionnaire Q7.** Who can create/edit Salary Head components?
> **A)** Super Admin only. **B)** HR Admin for non-System-Defined records; Super Admin for all, including System Defined. **C)** HR Admin creates; only Super Admin deletes; edits need Super Admin approval.

> **OPEN — not yet a questionnaire item.** Which specific Salary Heads (beyond the confirmed example of Basic Salary) are System Defined/locked is undocumented.

---

### 5.8 Advance Type

**Purpose:** specifies the types of advances available (Salary Advance, Travel Advance), with a Recovery Head linking each type to the Salary Head that recovers it.

**Confirmed fields (screenshot):** Code, Name, Short Name, **Recovery Head** (dropdown, linked to a Salary Head record — `Advance Recovery` observed), Description, Active Date, Authorization.

**MR-023.** The Advance Type master SHALL capture Code, Name, Short Name, Recovery Head (a reference to a Salary Head record), Description, Active Date, and Authorization for every record.

**Sample data:** SAL/Salary Advance, TRA/Travel Advance.

> **OPEN — Questionnaire Q10.** What rules (max amount, installments, interest, eligibility) apply per Advance Type?
> **A)** Simple — max amount/installments, no interest, manual approval. **B)** Detailed — max amount/installments, interest rate, eligibility criteria. **C)** No system rules beyond the Recovery Head link — amounts/repayment entered manually per request.

---

### 5.9 DA Centre

**Purpose:** the dearness allowance centre allocated by the Kerala government; currently only Ernakulam is used.

**Confirmed fields (screenshot):** Code, Name, **State** (dropdown — `Kerala` observed), Short Name, Description, **Order**, Active Date, Authorization.

**MR-024.** The DA Centre master SHALL capture Code, Name, State, Short Name, Description, Order, Active Date, and Authorization for every record.

**Sample data:** EKM/Ernakulam (the only confirmed record).

> **OPEN — Questionnaire Q9 (critical — blocks DA computation).** None of the confirmed fields carry a rate/percentage/amount. Does DA Centre drive salary calculation, and if so where is the rate set?
> **A)** A rate field is missing from this master and needs to be added, effective-dated. **B)** The rate lives on a separate master/Settings parameter not yet described. **C)** DA Centre is informational only; no rate belongs here.

---

### 5.10 Reports and Letters

**Purpose:** any statutory or important reports and letters can be uploaded to the system and retrieved for future reference.

No entry-form or list-screen screenshot exists for this master anywhere in the source material.

> **OPEN — Questionnaire Q17.** What fields/file types does this master store, and who can retrieve documents?
> **A)** Simple attachment list (Name/File/Upload Date/Uploaded By), HR Admin/Super Admin only. **B)** Categorised document master (adds Category, Effective Date), category drives visibility. **C)** Company/Branch-scoped repository, adding a Company/Branch tag.

Confirmed cross-reference: this master appears as a selectable "Master" option, with an assignable approving user, in a separate Authorization User Allocation screen (that screen itself is out of this BRD's scope).

**Naming note:** the tile grid labels this "Reports and Letters"; the numbered list text uses "Reports & Letters." Neither source reconciles the two forms.

---

### 5.11 Reminder Item (Employee Reminders)

**Purpose:** undocumented — the only Payroll master with zero descriptive text anywhere in the source material, beyond its own name.

No entry-form or list-screen screenshot exists for this master.

> **OPEN — Questionnaire Q16.** What does this feature do (trigger, recipient, channel)?
> **A)** Automated system reminders (birthday, probation end, document expiry, anniversary). **B)** Manual one-off HR reminders per employee. **C)** Both — automated predefined list plus ad-hoc manual reminders.

**Naming note:** the tile grid labels this "Reminder Item"; the numbered list text uses "Employee Reminders." Neither source reconciles the two forms.

---

### 5.12 Project

**Purpose:** creates the project teams currently available in the company.

**Confirmed fields (screenshot):** Code, Name, Short Name, Description, Active Date, Authorization.

**MR-025.** The Project master SHALL capture Code, Name, Short Name, Description, Active Date, and Authorization for every record, with no additional fields (no dates, no manager link).

**Sample data:** ACC/Accounts, ADMIN/Admin, AGRO/Agroms, ENT/Enterprise, HCIS, HSKP/Housekeeping, HR, JUEL/JuelIS, MARK/Marketing, MRETAIL, OTHERS, PAYROLL, RETAILS, SYST/Systems.

No open items — matches the confirmed field set directly.

---

### 5.13–5.16 Employee Attribute, Employee Attribute Value, Activity, Evaluation Factor

These four appear only as landing-page tiles with no accompanying screenshot and no descriptive text anywhere in the source material. Per §2.2, **Activity** and **Evaluation Factor** are Out of Scope for this pass.

> **OPEN — Questionnaire Q18.** Are Employee Attribute / Employee Attribute Value the same mechanism as the Employee module's already-built Super-Admin-only dynamic attribute type/value feature?
> **A)** Same feature, no new build needed, just document the cross-reference. **B)** A different, more general key-value mechanism. **C)** Overlapping — a bulk-assignment tool distinct from the existing one-employee-at-a-time editing.

## 6. Organisation Masters

### 6.1 Company

**Purpose:** Company can be created using this master screen.

No field-level screenshot exists for this master. Indirect evidence only: company-level payroll configuration (Leave Year Start Month, Minimum Wages Group, DA Industry Group, DA Centre) is documented under Payroll Settings — out of this BRD's scope per §2.2.

> **OPEN — field list to be supplied directly.** The Company master's field list is not being resolved through the questionnaire; the stakeholder will provide the confirmed field set separately. This BRD section will be updated with `MR-0xx` once received.

### 6.2 Branch

**Purpose:** different branches of the company can be created.

No field-level screenshot exists for the Branch master's own create/edit screen. Indirect evidence only: Branch appears as a dropdown field in several other screens, and has a separately-scoped, richly-documented Settings surface (General/Wage/PF/ESI/WF/Bonus) — see OPEN-22 (§9) for whether that belongs in this BRD at all.

> **OPEN — field list to be supplied directly.** The Branch master's field list is not being resolved through the questionnaire; the stakeholder will provide the confirmed field set separately. This BRD section will be updated with `MR-0xx` once received.

### 6.3 Location

**Purpose:** if a branch has different locations, that can be created using this.

> **OPEN — not yet a questionnaire item.** No field-level screenshot or field list exists for the Location master's own create/edit screen anywhere in the source material — this master has zero confirmed fields, and no questionnaire item currently covers it. It is also unclear whether "Location" (this Organisation master), "Location Group" (a separate Settings screen), and "Location And Group Rights Matching" (another separate Settings screen) are related; the source material describes all three as distinct screens without stating a relationship between them.

### 6.4 Company List / 6.5 Branch List / 6.6 Location List

**Purpose:** read-only list views of the Company/Branch/Location masters respectively. No field-level or column-level screenshot exists for any of the three; each is treated here as a standard read-only grid over its parent master's own confirmed (or OPEN) field set once resolved, with no separate create/edit action.

### 6.7 License Agreement

**Purpose:** undocumented — the only Organisation master with no descriptive sentence anywhere in the source material.

A same-named "License Agreement Details" grid (columns: User Code, User Name, Company) appears inside an unrelated, explicitly-unused settings screen ("Company Allocation" — recorded as "created for Norms, not used in Muziris"); the two are not confirmed to be related.

> **OPEN — Questionnaire Q11.** What is this screen for?
> **A)** Read-only display of MUZPAYROLL's own software licence terms, no data entry. **B)** Module licensing — which MUZPAYROLL modules are licensed, driving screen visibility. **C)** Document upload/acknowledgement of a company-specific licence document.

## 7. Status Update

**Purpose:** masters that are created can be deactivated if they become redundant, from a single cross-master utility screen under System Management → Masters (not nested under Payroll or Organisation).

**Confirmed:** the list view shows active/inactive masters and their active/inactive dates.

> **OPEN — Questionnaire Q12.** What happens to employees currently assigned to a deactivated master record (e.g. a deactivated Designation)?
> **A)** Employees keep it; deactivation is always permitted. **B)** Deactivation is blocked while any employee is assigned. **C)** Deactivation proceeds with a warning; affected employees are flagged for reassignment.

## 8. User Rights Masters

### 8.1 User

**Purpose:** lists all system users; new employee users can be created manually if not generated automatically.

Confirmed cross-references (not this screen's own field list): the Employee screen has a "Generate user" checkbox stating a user is automatically generated when an employee is created; the Employee screen's Verification action is described as triggering "creation of official login credentials" (not explicitly confirmed to be the same User record); a separate Settings screen, "Employee and User Linking," manually links an auto-generated user to its employee record.

> **OPEN — Questionnaire Q13.** Is automatic user creation triggered by employee Verification (and is it the same User record as this master), always manual, or triggered by Date of Joining?
> **A)** Automatic on Verification; same User record. **B)** Always manual. **C)** Automatic on Date of Joining.

> **OPEN — not yet a questionnaire item.** The User master's own manual create/edit field list (for the "if not generated automatically" path) has no confirmed screenshot anywhere in the source material.

### 8.2 Reset Password

**Purpose:** user password can be reset and a new password assigned using this master.

No field-level screenshot exists.

> **OPEN — Questionnaire Q14.** Who can reset a user's password, and how does the user learn the new one?
> **A)** HR Admin and Super Admin both can; new password emailed automatically; user must change it on next login. **B)** Super Admin only; resets logged for audit. **C)** Self-service request plus admin override.

## 9. Cross-Cutting Requirements

These apply across multiple masters at once rather than to a single one.

> **OPEN — Questionnaire Q15.** Where are PT (Profession Tax) Slabs and Leave Types configured — neither appears under any Masters screen in the BRD, though both exist in the Data Specification?
> **A)** Both belong under Masters (PT Slabs under Payroll, Leave Types under Attendance and Leave) — just missing from the BRD document. **B)** Both belong under Settings, not Masters. **C)** Split — PT Slabs under Branch Settings, Leave Types under Masters → Attendance and Leave.

> **OPEN — Questionnaire Q19.** Short Name and Description do not follow one consistent population rule across masters (see MR-014/MR-016 above for the concrete Designation vs Job Grade contrast). Should the system enforce one consistent rule, or preserve the current per-master inconsistency?
> **A)** Auto-derive consistently (Short Name = Code, Description = Name) everywhere going forward. **B)** Keep independently editable per master, preserving the current inconsistency. **C)** Independently editable everywhere, but redefine their purpose as true abbreviation/explanatory-note fields, requiring a legacy data cleanup.

> **OPEN — Questionnaire Q20.** No master documents Code uniqueness, post-Verify editability, or hard-delete-vs-deactivate behaviour.
> **A)** Code unique + immutable once Verified; Name/Description stay editable; trash icon disabled for in-use records, Status Update is the only removal path for those. **B)** Stricter — Code and Name both immutable once Verified; nothing is ever hard-deleted, only deactivated. **C)** Rules vary per master, captured individually.

> **OPEN — Questionnaire Q21.** Can HR Admin freely add new records to every master, or are some (Employee Type, Govt. Job Grade, Attendance & Leave codes) locked to a fixed/system-defined list?
> **A)** Fully open except Salary Head's individual System Defined records. **B)** Mixed — Govt. Job Grade and Attendance & Leave codes (working assumption) are Super-Admin-only/seeded. **C)** System Defined applies more broadly, per-record, across every master.

> **OPEN — Questionnaire Q22.** Does Branch-level Settings (General/Wage/PF/ESI/WF/Bonus, roughly 30 parameters) belong in this BRD's scope at all, given the document's own stated Settings deferral (§2.2)?
> **A)** Remove it entirely; move to the separate Settings BRD. **B)** Keep it here; Branch's configuration scope is inseparable from the Masters entity. **C)** Split — keep a cross-reference/summary here, move the full detail to the Settings BRD.

## 10. Open Items Register

| # | Questionnaire Q# | Master(s) | One-line summary |
|---|---|---|---|
| 1 | Q1 | Designation | Linked to a specific Department, or company-wide? |
| 2 | Q2 | Designation, Job Grade | Are Job Grade and Designation different things? |
| 3 | Q3 | Job Grade | Salary band (min/max) attached? |
| 4 | Q4 | Employee Type | Classification (fixed) or lifecycle status (changes)? |
| 5 | Q5 | Employee Type | "Permanent" (BRD) vs "Regular" (system) — same concept? |
| 6 | Q6 | Salary Head | Formula, fixed amount, or neither — where does the rate live? **(critical)** |
| 7 | Q7 | Salary Head | Who can create/edit components? |
| 8 | Q8 | Attendance and Leave | What does Category actually control? |
| 9 | Q9 | DA Centre | Does it affect salary; where is the rate set? **(critical)** |
| 10 | Q10 | Advance Type | What rules (amount/interest/eligibility) apply? |
| 11 | Q11 | License Agreement | What is this screen for? |
| 12 | Q12 | Status Update | Consequence for employees on a deactivated master? |
| 13 | Q13 | User | Automatic (on Verification/DOJ) or manual user creation? |
| 14 | Q14 | Reset Password | Who can reset; how is the new password delivered? |
| 15 | Q15 | PT Slabs, Leave Types | Where are these configured? |
| 16 | Q16 | Reminder Item | What does this feature do? |
| 17 | Q17 | Reports and Letters | What fields/file types; who can retrieve? |
| 18 | Q18 | Employee Attribute(s) | Same as the already-built dynamic-attributes feature? |
| 19 | Q19 | All masters | Short Name/Description — consistent rule, or keep as-is? |
| 20 | Q20 | All masters | Code uniqueness, post-Verify edits, hard delete vs deactivate |
| 21 | Q21 | Employee Type, Govt. Job Grade, Attendance and Leave, Salary Head | Fixed list or HR-Admin-extensible, per master? |
| 22 | Q22 | Branch | Does Branch-level Settings belong in this BRD's scope? |

**Additional gaps with no current questionnaire item** (see inline OPEN boxes above for detail): the action rail's circle-with-slash/star icon behaviour (§4); verification-mandatory-before-use and who may verify (§4); Attendance Category's full value list and a possible Half Day colour (§5.6); which specific Salary Heads are System Defined beyond Basic Salary (§5.7); the Location master's field list and its relationship to Location Group / Location And Group Rights Matching (§6.3); the User master's own manual create/edit field list (§8.1).

## 11. Source References

- `07_Masters.md` — primary source; built from 21 screenshots ("Masters Screens" folder) for the 10 confirmed Payroll masters, plus `MuzPayroll_Masters_Settings_PRDEXTRACTION (4).docx` for Reports and Letters, Reminder Item, the 7 Organisation masters, Status Update, User, and Reset Password.
- `Masters_BRD_Questionnaire.html` — the live, numbered list of the 24 open questions this document references; regenerate this BRD once answers are recorded there.

---

*This document consolidates confirmed facts from `07_Masters.md` into requirement form and cross-references every unresolved decision to its exact question in `Masters_BRD_Questionnaire.html`. No requirement above assumes an answer to any OPEN item.*

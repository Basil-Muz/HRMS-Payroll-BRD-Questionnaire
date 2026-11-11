# MUZPAYROLL · HRMS & Payroll Platform

## Product Requirements Document — Masters Module (System Management → Masters)

| Field | Value |
|---|---|
| Document | PRD v1.0 — Masters Module (Payroll, Organisation, Status Update, User Rights) |
| Product | MUZPAYROLL — HRMS & Payroll Platform |
| Source BRD | `Masters_BRD.md` (canonical) — **1 open item**, 90 confirmed requirements (MR-010 through MR-090). Clarifications: Nisha Varghese (round 1, 19 answers) and Basil (round 2 onward, 71 answers across four `brd-build` sessions, direct statements, and screenshot evidence) |
| Superseded structure | This replaces the earlier `PRD-001`–`PRD-051` numbering used in prior drafts of this document. Every requirement below still cites the exact BRD requirement(s) it derives from, so nothing from that earlier pass is lost — only renumbered and regrouped into this module's standard PRD shape (matching `MUZPAYROLL_PRD_v3_7_EmployeeScreen.docx`, the PRD that fed the `001-employee-screen` spec) |
| Runtime | Java 21 |
| Framework | Spring Boot 4.x · Spring Data JPA · Maven |
| Company Framework | `muziris-commons-ui` 6.0.0.0-SNAPSHOT · MuzirisAbstractEntity / Service / Repository |
| Frontend | React 18 + Vite · Tailwind CSS |
| Database | MySQL 8 |
| API | REST JSON under `/api/v1/` · DTOs mandatory — entities never exposed directly |
| Classification | CONFIDENTIAL — Internal Use Only |
| Status | **DRAFT — 3 open questions in Section 15.** Two are cross-module dependencies this PRD cannot close on its own; a third (FR-073, Employee Attribute Value's parent-link mechanism) is a genuine evidence gap within this module's own scope, flagged by `Masters_BRD.md` rather than guessed at. |

### What is in scope for this PRD

- 16 Payroll masters: Designation, Department, Job Grade, Government Job Grade, Employee Type, Attendance and Leave, Salary Head, Advance Type, Reports and Letters, DA Centre, Reminder Item, Project, Employee Attribute, Employee Attribute Value, Activity, Evaluation Factor — the last four confirmed in scope by screenshot evidence correcting an earlier exclusion [MR-086–MR-090].
- 6 Organisation masters: Company, Branch, Location, Company List, Branch List, Location List.
- Status Update — the single cross-master deactivation utility under System Management → Masters.
- User Rights masters: User, Reset Password.
- The action-rail button model that spans every screen above: per-screen-type icon inventory, record-state gating (Verified vs Entry), and the permission-based enable/disable layer.

---

## Section 1 — Introduction & Overview

The Masters module is the reference/configuration layer every other MUZPAYROLL module reads from. It does not run payroll, does not calculate leave, and does not compute statutory deductions — it defines the stable identities (a Designation, a Salary Head component, a Company) that those calculations key off. Getting this module's field shapes and lifecycle rules right is a precondition for every downstream module; getting them wrong propagates silently, since nothing downstream re-validates a master's own identity.

Masters splits into four functional groups, each with its own screen shape and lifecycle:

- **Payroll masters** — the largest group (12 masters), almost all sharing one generic modal shape (Code/Name/Short Name/Description/Active Date/Authorization, plus master-specific fields).
- **Organisation masters** — Company, Branch, Location, and their three list views. These deliberately do not follow the generic modal shape; they are full pages with a General Info / Address / Contact Info panel structure, plus a separate Documents Info tab.
- **Status Update** — a single cross-master utility, not a master itself: the only path to deactivate a Verified record, across every master in the system (not just this module's own 12+6).
- **User Rights masters** — User and Reset Password, the two screens that create and manage system login access, distinct from every other master because they touch credentials rather than business reference data.

## Section 2 — Goals

| ID | Goal | Description |
|---|---|---|
| G-1 | Single, stable identity per reference concept | Every Designation, Salary Head, Company, etc. exists exactly once per company, with a maker-checker lifecycle that gates when it becomes safe to reference elsewhere. |
| G-2 | No record is ever silently lost | Nothing is hard-deleted. A master record is retired via deactivation, never erased — matching this module's own confirmed audit posture (MR-044). |
| G-3 | Screen-shape consistency where the evidence supports it, documented exceptions where it doesn't | Every Payroll master shares one generic modal and list-card shape by default; Company/Branch/Location, User, and a handful of field-level exceptions are called out explicitly rather than silently papered over. |
| G-4 | Button behavior is predictable across every screen | A button's presence is a function of screen type; its enabled/disabled state is a function of the viewer's permission and the record's lifecycle state — never a third, undocumented factor. |
| G-5 | No requirement is invented past what the evidence confirms | Every field, validation rule, and lifecycle rule in this PRD traces to a specific BRD requirement, itself traced to a screenshot or a direct stakeholder statement — never a convenient assumption. |
| G-6 | Cross-module boundaries are explicit, not implied | Where a Masters screen's data is completed elsewhere (Salary Head's rate in Settings, DA Centre's rate in Settings), that boundary is named, not left for a future reader to rediscover. |

## Section 3 — Scope

### 3.1 In Scope

- **Payroll masters (12):** Designation (§6.2.1), Department (§6.2.2), Job Grade (§6.2.3), Government Job Grade (§6.2.4), Employee Type (§6.2.5), Attendance and Leave (§6.2.6), Salary Head (§6.2.7), Advance Type (§6.2.8), DA Centre (§6.2.9), Reports and Letters (§6.2.10), Reminder Item (§6.2.11), Project (§6.2.12).
- **Organisation masters (6):** Company, Branch, Location, plus their three list views (§6.3).
- **Status Update** (§6.4) — single cross-master deactivation utility.
- **User Rights masters:** User, Reset Password (§6.5).
- **Cross-cutting rules** (§6.6): field-redefinition, immutability, free-add-by-default, action-rail button behavior.

### 3.2 Out of Scope

- **Settings** (Payroll Groups, Payroll Settings, User Rights Management, Salary Head Group's rate/formula configuration, DA rate settings, Branch-level Wage/PF/ESI/WF/Bonus parameters) — a separate module (`SystemManagement_BRD.md`), deliberately excluded per the Product Manager's own direction [MR-048].
- **License Agreement** — confirmed not needed; SHALL NOT be built [MR-047].

**No longer excluded:** Activity, Evaluation Factor, Employee Attribute, and Employee Attribute Value were previously listed here — the first two on a "zero descriptive evidence" basis, the latter two on MR-042's "no new work needed" basis. Screenshot evidence corrected both bases; see §6.2.13–§6.2.16 (FR-069–FR-075).

## Section 4 — User Roles

Only two roles are confirmed anywhere in this module's evidence. No third role (Finance, Manager, Payroll Officer) is named with any Masters-specific permission — inventing one here would be exactly the kind of unsupported requirement this PRD exists to avoid.

**ROLE-01 — HR Admin.** The primary operator of every Masters screen.

| Permissions | Restrictions |
|---|---|
| Create a new record on any master by default, with no exception remaining anywhere [MR-045, MR-084] | Cannot edit or delete a Verified record's Code/Name [MR-044] |
| Verify an `ENTRY`-state record, the only role authorised to do so [MR-062] | Cannot edit or delete *any* Salary Head component once created — Basic Salary included — only toggle Active/Inactive [MR-046, MR-084] |
| Force-reset a user's password as an admin override [MR-038] | Cannot deactivate a record while an employee is currently assigned to it, for masters with that relationship [MR-036] |

**ROLE-02 — Super Admin.** Shares Salary Head's creation permission with HR Admin; no Masters-specific permission is confirmed beyond that.

| Permissions | Restrictions |
|---|---|
| Create a new, ordinary Salary Head component, Basic Salary included [MR-046, MR-064, MR-084] | Same post-creation lock as HR Admin on that component — the permission is shared, not escalated [MR-046] |
| Force-reset a user's password as an admin override [MR-038] | — |

## Section 5 — User Stories

| Epic | Title | Stories (Masters scope) |
|---|---|---|
| A. Payroll reference setup | Define the identities Payroll and Employee screens key off | As HR Admin, I create a Designation, Department, Job Grade, Government Job Grade, Employee Type, Attendance/Leave code, Advance Type, DA Centre, Reports and Letters template, Reminder Item, or Project record, so downstream screens have something real to reference. |
| B. Maker-checker lifecycle | Keep unverified data from leaking into production use | As HR Admin, I verify a newly-created master record before any other screen can reference it, so a half-entered Designation can never be assigned to an employee [MR-062]. |
| C. Organisation setup | Establish the Company → Branch → Location hierarchy | As HR Admin, I create a Company, then Branches under it, then Locations under each Branch, each level adding exactly the parent-link dropdown the one below needs [MR-055]. |
| D. Retiring stale records | Deactivate what's no longer needed without destroying history | As HR Admin, I deactivate a master record via Status Update once nothing references it, and the system blocks me if an employee is still assigned [MR-036, MR-061]. |
| E. User access management | Create and recover login access | As HR Admin, I create a manual User record when auto-provisioning didn't apply, and reset a user's password on request without going through self-service [MR-077, MR-038]. |
| F. Extending reference data safely | Add new values without a code change | As HR Admin, I add a new Attendance/Leave code or Employee Type without needing a developer, because nothing in this module locks ordinary records against being added [MR-045]. |

## Section 6 — Functional Requirements

*Priority: **Must** = confirmed business requirement, required for this module to be considered built · **Should** = confirmed but explicitly phased later · **Blocked** = cannot be implemented yet, pending an open question in Section 15.*

### 6.1 Foundation — Requirements Common to Every Master

| ID | Title | Area | Requirement | Pri |
|---|---|---|---|---|
| FR-001 | List view default shape | Foundation | Every master's list view defaults to a card/tile grid, with Grid/List/Tree view-mode controls and a search box. [MR-001] | Must |
| FR-002 | List card content | Foundation | A list card shows Code (verification checkmark + last-modified date), Name, Short Name, Description — except Department/Company/Branch/Location (no Description field, stop at Short Name) and User (Code, Name, Mobile Number, Email instead — no Short Name/Description at all). [MR-002, MR-078] | Must |
| FR-003 | Edit screen shape | Foundation | Every Payroll-section master's edit screen is a modal: Code, Name, Short Name, Description, Active Date, Authorization, plus master-specific fields, closed by save or cancel/deactivate. Company, Branch, and Location are the confirmed exception — full pages, three panels (General Info / Address / Contact Info), no Description field. [MR-003] | Must |
| FR-004 | Field validation standard | Foundation | Code ≤20 chars, alphanumeric + hyphen; Name ≤100 chars free text; Short Name ≤30 chars free text; Description ≤500 chars free text — applied uniformly unless a master's own screenshot evidence says otherwise (none does). [confirmed by stakeholder, no BRD equivalent — refines MR-003] | Must |
| FR-005 | Authorization state machine | Foundation | Every master record carries `ENTRY` (created, unapproved) or `VERIFIED <date>` (approved). No third state exists. [MR-004] | Must |
| FR-006 | Verification gates referenceability | Foundation | An `ENTRY`-state record cannot be referenced elsewhere in the system (e.g. assigned to an employee) until Verified. Only HR Admin may verify. [MR-062] | Must |
| FR-007 | Action-rail icon inventory is screen-type-specific | Foundation | The action rail's icon set is a function of screen type, not a design inconsistency: generic list (add/search/circle-with-slash/trash/star), Company edit (save/search/circle-with-slash/trash/refresh/print), Company List (save/search/circle-with-slash/trash/print), Status Update (search/circle-with-slash/trash/refresh), Reset Password (search/circle-with-slash/trash/refresh/print). An icon confirmed present for a screen type always renders — it is never conditionally hidden. [MR-063] | Must |
| FR-008 | Action-rail enable/disable is permission-driven | Foundation | A rendered icon's enabled/disabled state is governed by the current user's assigned rights (User Group or Location Group, assigned per screen/option in a separate module — `SystemManagement_BRD.md` SM-092). Denial disables an icon; it never hides it. Trash → Delete right, Save/Add → Add/Edit right are the only two confirmed mappings; search, refresh, print, circle-with-slash, star, and Verify have no confirmed right-type mapping — **see OQ-01**. [MR-083] | Must (partial — see OQ-01) |
| FR-009 | Circle-with-slash / star icons ship as safe no-ops | Foundation | Both icons' real function is an explicitly deferred future deliverable, not an open gap to keep chasing. They render on every applicable screen, visibly disabled, until that function is defined — independent of, and in addition to, whatever permission FR-008 would otherwise grant. [MR-072] | Should (Phase 2+ for real function) |
| FR-010 | Trash icon disables, does not hide, once Verified | Foundation | The trash icon always renders; it is enabled only while a record is `ENTRY`, and renders disabled (not hidden) once `VERIFIED` — consistent with FR-008's permission-denial rule, corrected from an earlier version that hid it outright. Status Update's deactivate path remains the only route that succeeds on a Verified record. [MR-044, amended for consistency with MR-083] | Must |

### 6.2 Payroll Masters

**6.2.1 Designation**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-011 | Core fields | Code, Name, Short Name, Description, Active Date, Authorization. [MR-010] | Must |
| FR-012 | Multi-Department link | Linkable to zero, one, or several Departments — never required to be company-wide or restricted to exactly one. [MR-026] | Must |
| FR-013 | Distinct from Job Grade | Job Grade (level/band) and Designation (job title) remain two independent masters; an Employee record carries both independently. [MR-027] | Must |

**6.2.2 Department**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-014 | Core fields, no Description | Code, Name, Short Name, Active Date, Authorization — **no Description field**, the only confirmed master without one. [MR-011] | Must |
| FR-015 | Flat list | No parent/hierarchy field of any kind. [MR-012] | Must |

**6.2.3 Job Grade**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-016 | Core fields | Code, Name, Short Name, Description, Active Date, Authorization. Legacy data pattern (Name mirrors Code, Description carries the explanatory meaning) is superseded going forward by FR-064's redefinition. [MR-013, MR-014] | Must |
| FR-017 | Optional salary banding | Minimum Salary / Maximum Salary — optional, no cross-field ordering rule confirmed. [MR-028] | Must |

**6.2.4 Government Job Grade**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-018 | Core fields | Code, Name, Short Name, Description, Active Date, Authorization. Legacy data pattern (Short Name mirrors Code, Description carries the role meaning) is superseded going forward by FR-064's redefinition. [MR-015, MR-016] | Must |
| FR-019 | HR-Admin-extensible | No locked-record exception named for this master. [MR-045] | Must |

**6.2.5 Employee Type**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-020 | Core fields | Code, Name, Short Name, Description, Active Date, Authorization. [MR-017] | Must |
| FR-021 | Apprentice is a fixed type, not a lifecycle phase | Apprentice ships alongside Permanent/Trainee as a fixed contract type; Probationer remains a lifecycle phase within the Permanent track. [MR-018, MR-029] | Must |
| FR-022 | "Permanent" supersedes "Regular" | Both concepts are the same; the system displays "Permanent" only. [MR-030] | Must |

**6.2.6 Attendance and Leave**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-023 | Core + specific fields | Code, Name, Short Name, Category (dropdown), Description, Full Day Color (swatch), Display Type (dropdown), Active Date, Authorization. No separate Half Day Color field exists. [MR-019, MR-073] | Must |
| FR-024 | Category's full value set and payroll meaning | On Duty, Annual Leave, Casual Leave, Compensatory Off, Sick Leave, Parenting Leave, Holiday, Loss of Pay, Weekly Off, Other Leaves (10 values) — built as a genuine, admin-manageable lookup, not a hardcoded enum. Category determines how a code is treated in payroll (e.g. "On Duty" counts as working regardless of office/remote/travel). [MR-033, MR-073] | Must |
| FR-025 | Display Type is a genuine lookup | Only "Include in reports" is observed, but the field is a real, extensible lookup, not hardcoded to one value. [MR-019] | Must |
| FR-026 | Seed data | The 12 confirmed codes (P, LOP, EL, H, OH, CO, OD, ML, RD, COH, SCO, T), each with its own colour. [MR-020] | Must |

**6.2.7 Salary Head**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-027 | Core + specific fields | Code, Name, Short Name, Description, Order in Report, Sub Type, Active Date, Authorization — under Allowance/Deduction/Comp Contribution tabs, each component defined once under its own tab. **No System Defined flag is built** — observed in the legacy screenshot, explicitly not carried forward. [MR-021, MR-022, MR-084] | Must |
| FR-028 | Rate/formula lives in Settings, not here | Neither a fixed amount nor a formula is captured on this record — Settings' Salary Head Group screen owns that, per a separate module. [MR-031] | Must |
| FR-029 | No special-case lock on any component | Basic Salary is created and governed identically to every other component: creatable by Super Admin or HR Admin; once created, not editable or deletable by any role — only toggleable Active/Inactive. This reverses an earlier confirmed answer (System Defined, immutable Basic Salary) on direct stakeholder instruction. [MR-046, MR-064, MR-084 — retracts MR-032, MR-070] | Must |
| FR-030 | Sub Type is a genuine lookup | Only "Gross Salary" is observed; the field is a real, extensible lookup. [MR-021] | Must |

**6.2.8 Advance Type**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-031 | Core + specific fields | Code, Name, Short Name, Recovery Head (reference to a Salary Head record), Description, Active Date, Authorization. [MR-023] | Must |
| FR-032 | Rule engine fields now, enforcement later | Max amount, max installments, interest rate, and eligibility criteria are captured in Phase 1; actual enforcement of those rules ships in Phase 2. [MR-035] | Should (Phase 2 for enforcement) |

**6.2.9 DA Centre**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-033 | Core + specific fields | Code, Name, State (dropdown), Short Name, Description, Order, Active Date, Authorization. [MR-024] | Must |
| FR-034 | Rate lives in Settings, not here | The DA rate is defined through System Management's DA settings screens, not on this record. [MR-034] | Must |
| FR-035 | State is a shared lookup, not an independent one | DA Centre's State field and Reports and Letters' State field (§6.2.10) SHALL draw from one shared State reference table — not two independently-managed lists. [MR-085] | Must |

**6.2.10 Reports and Letters**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-036 | Full confirmed field set, no Code field | A repository for uploaded documents; also a selectable "Master" option with an assignable approving user in a separate Authorization User Allocation screen (out of this module's scope). Fields: Report/Letter type toggle, Statutory checkbox, Name, Short Name, Upload File, Act (dropdown), State (dropdown, shared per FR-035), Submission Month, Submission Day, Description, Active Date, Authorization. **No Code field exists** — the sole Payroll master without one. [MR-041, MR-081] | Must |
| FR-037 | No Category, Effective Date, Uploaded By, or Company/Branch tag | All four were originally assumed from text alone and disproven by 8 screenshots across both toggle states and the full scroll range. None are built. [MR-074, MR-082] | Must |
| FR-038 | Act is a genuine lookup | No specific values are confirmed yet, but the dropdown is a real, admin-manageable lookup, not a hardcoded enum. [MR-081] | Must |

**6.2.11 Reminder Item (Employee Reminders)**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-039 | Core + specific fields | Code, Name, Short Name, Category (dropdown), DataType (dropdown), Description, Active Date, Authorization. [MR-059] | Must |
| FR-040 | Category is backend-managed only — the one deliberate exception | At least Asset and Checklist are confirmed values. Unlike every other dropdown in this module, Category's value list SHALL NOT get an admin-facing management screen — new values are inserted directly via the database. [MR-060] | Must |
| FR-041 | DataType is a closed 3-value set | Text, Numeric, Yes/No — exactly three, built as a hardcoded enum, not a lookup, since no extensibility signal exists. [MR-065] | Must |
| FR-042 | Automated + ad-hoc reminders | Supports both predefined automated events (birthday, probation end, document expiry, work anniversary) and ad-hoc manual reminders HR Admin adds per employee. [MR-040] | Must |

**6.2.12 Project**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-043 | Core fields only | Code, Name, Short Name, Description, Active Date, Authorization — no additional fields of any kind. [MR-025] | Must |

**6.2.13 Employee Attribute ("Attribute")**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-069 | Core + specific fields | Code, Name, Sort Order, DataType (dropdown), Description, Mandatory Yes/No (checkbox), Active Date, Authorization — no Short Name field exists. [MR-087] | Must |
| FR-070 | List card — 4-line exception | Code (checkmark + date), Name, Sort Order, Description — a further confirmed exception to the generic 3-line card pattern (FR-002), alongside Department/Company/Branch/Location and User. [MR-087] | Must |

**6.2.14 Employee Attribute Value ("Attribute Value")**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-071 | Core fields, simpler than parent | Code, Name, Description, Active Date, Authorization — no Short Name, Sort Order, or DataType; a simpler field set than its parent Attribute master. [MR-088] | Must |
| FR-072 | Advanced Search by parent Attribute | The list view's Advanced Search panel filters by a single Attribute dropdown — confirming Attribute Value is scoped to a parent Attribute record. [MR-088] | Must |
| FR-073 | Parent-link mechanism on the edit modal — blocked | Not yet confirmed whether a new Attribute Value is explicitly linked to its parent Attribute via a field on the edit modal itself, a different creation entry point (e.g. reached from within the parent Attribute's own screen), or something else — the submitted screenshot of the create form shows no such field. Do not build against a guessed mechanism; see Section 15's Open Items entry. [MR-088, OPEN box] | Blocked |

**6.2.15 Activity**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-074 | Core fields only | Code, Name, Short Name, Description, Active Date, Authorization — the standard generic baseline, no master-specific fields beyond it. [MR-089] | Must |

**6.2.16 Evaluation Factor**

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-075 | Core fields only | Code, Name, Short Name, Description, Active Date, Authorization — the standard generic baseline, identical in shape to Activity (6.2.15). [MR-090] | Must |

### 6.3 Organisation Masters

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-044 | Company — General Info | Three panels: General Info (Code, Name, Short Name, Active Date, Image upload), Address (3 stacked lines, Country/State/District/Place/Pincode), Contact Info (Landline/Mobile/Email). Image upload is Company-specific — Branch and Location do not have it. [MR-049, MR-071] | Must |
| FR-045 | Documents Info — Company, Branch, Location | Repeatable grid: #, Document Type, Document, Document No, Document Expiry, File Upload, File Download, Remarks. Shared grid design across all three masters — a populated-vs-empty difference (Company's screenshot shows it empty; Branch's and Location's show a default row) is data-state, not design. [MR-050, MR-053, MR-056, MR-067] | Must |
| FR-046 | Uniform editability, no legacy lock | All three panels (General Info/Address/Contact Info), across Company, Branch, and Location, are editable at all times — the legacy "Edit" unlock toggle is explicitly not carried into the new build. [MR-075] | Must |
| FR-047 | Amend number + Verified date | The numbered badge is an amendment/revision counter; the adjacent date is the Verified date — a revision-history row, not user-editable. [MR-066] | Must |
| FR-048 | Branch — General Info | Company (dropdown, parent link), Code, Name, Short Name, Active Date; Address single-line (differs from Company's 3-line pattern); Contact Info Landline/Mobile/Email. [MR-052] | Must |
| FR-049 | Location — General Info | Company + Branch (dropdowns, Branch filtered to selected Company), Code, Name, Short Name, Active Date; Address single-line; Contact Info Landline/Mobile/Email, all three directly confirmed. [MR-055] | Must |
| FR-050 | No Location Group field on Location itself | Location Group assignment happens from the Location Group screen (Settings), not from this master's own edit screen. "Location And Group Rights Matching" is that screen's rights-matrix, not an independent concept — Location Group is a grouping construct over Locations. [MR-068, MR-076] | Must |
| FR-051 | Company List | Same Grid/List/Tree + search as every list view; card stops at Short Name (no Description); clicking navigates to the full edit screen. **No Advanced Search filter of any kind** — confirmed absent. [MR-051, MR-079] | Must |
| FR-052 | Branch List | Same card pattern; Advanced Search panel with a single Company filter + Apply. [MR-054] | Must |
| FR-053 | Location List | Same card pattern; Advanced Search panel includes **only** Company — no Branch filter, despite Location itself carrying both. A non-mandatory Branch filter was drafted and then explicitly reversed by the stakeholder. [MR-057, MR-080] | Must |
| FR-054 | License Agreement SHALL NOT be built | Confirmed not needed; moved from In Scope to Out of Scope on that basis. [MR-047] | — (not built) |

### 6.4 Status Update

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-055 | No default view | Requires selecting a target master (Option dropdown) and a Status filter (Active/Inactive) before any record list renders — there is no "show everything" default. [MR-061] | Must |
| FR-056 | Full Option dropdown value list | Activity, Advance Type, Attendance and Leave, Branch, Company, DA Centre, Department, Designation, Employee Attribute, Employee Attribute Value, Employee Type, Evaluation Factor, Govt. Job Grade, Job Grade, Location, Location Group, Payroll Group, Project, Reports and Letters, Salary Head, Shift Group, User, User Group — spanning beyond this module's own scope (Payroll Group, Shift Group are Settings-scope). [MR-069] | Must |
| FR-057 | Deactivation blocked while referenced — scoped | Blocked while an employee is currently assigned to the record, for masters with that relationship (e.g. Designation). **Does not extend to Salary Head**, which has no per-employee assignment relationship — see R-01. [MR-036, scoped against MR-084] | Must |

### 6.5 User Rights Masters

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-058 | Auto-provisioning on employee verification | Verifying an Employee record auto-creates a login and emails credentials to the employee's personal email — the same User record this screen manages, not a separate mechanism. [MR-037] | Must |
| FR-059 | User manual create/edit fields | User Code (see FR-060), User Name, User Type (dropdown), Mobile No, Email, Password (same policy as Reset Password), a "Change password on next login" checkbox, Active Date, Authorization. [MR-077] | Must |
| FR-060 | User Code's "@MUZIRIS" suffix is system-appended | The user types only the local part; the system appends `@MUZIRIS` on save/display — never typed manually. [confirmed by stakeholder — refines MR-077] | Must |
| FR-061 | User List's 4-line card | Code, User Name, Mobile Number, Email — not the generic 3-line pattern, since User has no Short Name field. [MR-078] | Must |
| FR-062 | Reset Password fields + policy | User (User Code), New Password, Confirm Password, Reset button. Policy: minimum 5 characters, ≥1 digit, ≥1 letter, ≥1 special character from `@./#-$_%:*&`. [MR-058] | Must |
| FR-063 | Self-service + admin override | A user can self-service "forgot password"; HR Admin/Super Admin can force-reset any user directly from this screen. [MR-038] | Must |

### 6.6 Cross-Cutting Rules

| ID | Title | Requirement | Pri |
|---|---|---|---|
| FR-064 | Short Name / Description redefined | Short Name becomes a true abbreviation (not necessarily = Code); Description a true explanatory note (not necessarily = Name). Legacy data gets a one-time cleanup pass against this definition. [MR-043] | Must |
| FR-065 | Code/Name immutable once Verified, no hard delete | Changing either requires deactivating the old record and creating a new one. No record is ever hard-deleted — only deactivated. [MR-044] | Must |
| FR-066 | Free-add by default, no exception remaining | HR Admin can add a new record to any master with no locked exception anywhere — the one exception that existed (System Defined) is fully retracted. [MR-045, MR-084] | Must |
| FR-067 | Branch Settings entirely out of this module | General/Wage/PF/ESI/WF/Bonus (~30 parameters) belong exclusively to the Settings module. [MR-048] | Must |
| FR-068 | PT Slabs vs. Leave Types — structural split only | PT Slabs live under Branch Settings; Leave Type *identity* lives under Masters → Attendance and Leave; leave *rules* (quantum, carry-forward, expiry) live under Settings and are substantially confirmed in `AttendanceLeave_BRD.md`, not here. [MR-039] | Must |

## Section 7 — Technology Stack & Architecture Standards

**MANDATORY — no exceptions without a documented, approved deviation in the governing constitution.**

- **Runtime/Framework:** Java 21, Spring Boot 4.x, Spring Data JPA, Maven (standard directory layout). `muziris-commons-ui` 6.0.0.0-SNAPSHOT is a mandatory dependency in every `pom.xml`.
- **Layered architecture:** Controllers → Services → Repositories. Each layer owns exactly one concern.
- **Constructor injection is mandatory** — field injection (`@Autowired` on fields) is prohibited.
- **No circular dependencies. No `@ManyToMany`** — model as bidirectional `@OneToMany`/`@ManyToOne`.
- **Frontend:** React 18, Vite, Tailwind CSS. No inline styles, no ad-hoc `<style>` blocks — Tailwind utilities or a co-located CSS module.
- **Security:** no hardcoded secrets; no PII/credentials in logs (directly relevant to User and Reset Password, §6.5); raw exception messages never surface to API clients — `@ControllerAdvice` translates to curated messages.
- **Docker-based deployment from inception; `/actuator/health` required.**
- **Testing:** unit tests mandatory for all service-layer business logic (every rule, branch, state transition in this document); integration tests mandatory for every custom repository query, run against Testcontainers with synthetic fixtures.

## Section 8 — Design Considerations

- **List views** default to a card/tile grid with Grid/List/Tree toggles and a search box (FR-001), consistently across every master.
- **Edit screens** split into two confirmed shapes: the generic Payroll-master modal (FR-003), and Company/Branch/Location's full-page, three-panel layout — the two shapes are never mixed within one master.
- **Action rail** composition is screen-type-specific (FR-007) and permission-filtered (FR-008) — see Section 6.1 for the full model.
- **No visual design reference exists for this module yet.** `MUZPAYROLL_UI_SDD_v4_7.docx` is scoped entirely to the Employee Screen module — every mention of a Masters concept in it (Salary Head Group, Designation, Department) is the Employee Screen *consuming* that master as a read-only reference dropdown, not a specification of the master's own screen. Per the governing constitution (§IV), every colour, font, spacing, and dimension value used in code must trace to a reference design artifact — none exists for Masters' own screens today. This blocks only the *visual* layer; field shape, validation, and behavior above are fully specified independent of it.

## Section 9 — Non-Functional Requirements

| ID | Area | Requirement |
|---|---|---|
| NFR-01 | Accessibility | WCAG 2.1 AA on every Masters screen — full keyboard operability, labeled form inputs, 4.5:1 text contrast (3:1 large text/UI components), visible focus indicators. Checked via `eslint-plugin-jsx-a11y` at write-time and `@axe-core/playwright` in e2e tests. |
| NFR-02 | Security | No sensitive configuration hardcoded; no PII or credentials in logs (User/Reset Password flows especially); `@ControllerAdvice` curates every error response — no raw exception message or stack trace reaches an API client. |
| NFR-03 | Performance | No Masters-specific numeric target beyond the framework's standard list-view pagination — no custom performance engineering commissioned for this module. |

*No Masters-specific NFR baseline beyond the project's own governing constitution was requested or confirmed — inheriting that baseline, rather than inventing module-specific numeric targets, was the explicit stakeholder answer when this question was raised.*

## Section 10 — Non-Goals

The following are explicitly out of scope for this PRD (see §3.2 for citations):

- Settings-level configuration of any kind — Payroll Groups, Payroll Settings, User Rights Management, Salary Head Group rate/formula, DA rate settings, Branch-level Wage/PF/ESI/WF/Bonus.
- Activity and Evaluation Factor masters — no descriptive evidence exists to build against.
- New Employee Attribute / Employee Attribute Value field-level work — the Employee module's existing mechanism already covers this.
- The License Agreement master — confirmed not needed.
- Defining what permission right type gates search/refresh/print/circle-with-slash/star/Verify — owned by `SystemManagement_BRD.md`'s own open question (OQ-01).

## Section 11 — Risks

| Severity | Risk | Mitigation |
|---|---|---|
| CRITICAL | Basic Salary deactivation exposure — removing the System Defined lock (FR-029) means Basic Salary can be toggled Inactive by HR Admin or Super Admin, reachable directly through Status Update (FR-056 lists "Salary Head"), with no remaining safeguard: FR-057's assignment-block doesn't cleanly apply to Salary Head. This is a knowingly accepted risk, not an oversight — the stakeholder was shown this consequence before confirming the removal. | No replacement safeguard was requested. If one becomes necessary, the natural candidates are a name-based special case ("block deactivating any record named Basic Salary") or extending FR-057's assignment model to cover Salary Head — neither is built today. |
| HIGH | Action-rail permission-type mapping is incomplete for 5+ icon/action types (search, refresh, print, circle-with-slash, star, Verify) — see OQ-01. Building permission-gating against a guessed right type now risks having to rebuild it once `SystemManagement_BRD.md`'s own question resolves. | Ship these per FR-009's safe-default pattern (visible, disabled, no permission check attempted) until OQ-01 closes. |
| HIGH | A pre-existing data specification (`reference/Payroll_DataSpec_AllModules_v1.docx`, written before this BRD's screenshot-driven evidence was gathered) models Department as **hierarchical** (`parent_department_id`), Designation and Company with **no Authorization/maker-checker state at all**, and Salary Head as **owned per Salary Head Group** rather than one shared flat master. All three directly contradict this PRD's confirmed requirements (FR-015, FR-005, FR-027–029). Building against either source without reconciling the other first will produce a spec that silently contradicts one of them. | Reconcile explicitly before spec/implementation — see OQ-02. Do not treat the older data spec as authoritative over this BRD/PRD's screenshot-and-stakeholder-confirmed evidence, or vice versa, without a decision. |
| MEDIUM | The shared State lookup (FR-035) spans two masters built independently in earlier passes of this PRD. If DA Centre's and Reports and Letters' screens are implemented before the shared-table decision is wired through, there's a real risk of two divergent tables shipping instead of one. | Implement the shared lookup table first, then both screens against it — not the other way around. |

## Section 12 — Edge Cases

This section documents known boundary conditions the implementation must handle correctly. None are invented — each traces to a specific confirmed requirement above.

**12.1 Record lifecycle & action-rail state — FR-005, FR-006, FR-010**

| EC | Edge Case | Expected Behaviour |
|---|---|---|
| EC-001 | A user with full Add/Edit/Delete rights views a record whose real gating reason is undefined function (circle-with-slash/star) rather than missing permission | The icon stays disabled regardless of that user's rights — FR-009's reason (undefined function) is independent of, and not overridden by, FR-008's permission layer. |
| EC-002 | An `ENTRY`-state record is referenced from another screen before being Verified | The reference attempt is rejected; the record must reach `VERIFIED` first. [MR-062] |
| EC-003 | A Verified record's trash icon is clicked | No-op — the icon is visibly present but disabled; only Status Update's deactivate path can act on a Verified record. |

**12.2 Salary Head — System Defined removal — FR-029, R-01 (Section 11)**

| EC | Edge Case | Expected Behaviour |
|---|---|---|
| EC-004 | Someone attempts to edit or delete Basic Salary through the standard UI | Rejected, exactly as for any other Salary Head component — no special-case exception exists anywhere. |
| EC-005 | Someone attempts to toggle Basic Salary to Inactive via Status Update | **Succeeds** — this is the accepted, unmitigated risk in R-01. Not a bug; a confirmed, knowingly-accepted consequence. |

**12.3 Reports and Letters — field composition — FR-036, FR-037**

| EC | Edge Case | Expected Behaviour |
|---|---|---|
| EC-006 | A developer assumes every Payroll master needs a Code field, per the generic baseline | Reports and Letters is the one confirmed exception — no Code field is built, and none should be added. |
| EC-007 | Toggling between Report and Letter type | The remaining field set does not change — confirmed by 8-screenshot coverage across both toggle states. |

**12.4 Organisation masters — field pattern variance — FR-044, FR-048, FR-049**

| EC | Edge Case | Expected Behaviour |
|---|---|---|
| EC-008 | Address field rendering differs between Company and Branch/Location | Company gets 3 stacked lines; Branch and Location get a single text field — a genuine, confirmed difference, not a transcription error. |
| EC-009 | Branch's Mobile Number field | Presumed present (matching Company's field set) but never directly visible in either submitted screenshot — flagged as an inference, not treated as equally confirmed as Location's directly-visible Mobile Number. |

**12.5 Location List's Advanced Search — FR-053**

| EC | Edge Case | Expected Behaviour |
|---|---|---|
| EC-010 | Location carries both a Company and a Branch parent dropdown, but a developer assumes the list filter mirrors both | Only Company filters — no Branch filter exists, confirmed twice (once drafted with a Branch filter, then explicitly reversed by the stakeholder). |

**12.6 Shared State lookup — FR-035**

| EC | Edge Case | Expected Behaviour |
|---|---|---|
| EC-011 | A new State value is added through DA Centre's lookup management | That same value is immediately available on Reports and Letters' State dropdown — one table, not two. |

## Section 13 — Success Metrics

Each metric ties to a goal in Section 2 and is verifiable by an automated test, not a subjective judgment call. Where the confirmed evidence doesn't support a numeric business target (e.g. a load/throughput figure), none is invented here — see Section 9's note on NFR baseline.

| ID | Goal | Metric | Target / Verification |
|---|---|---|---|
| SM-01 | G-1 | No duplicate master identity per company | Zero records of the same type share a Code within one company — enforced by a UNIQUE constraint and confirmed by an automated constraint test. |
| SM-02 | G-2 | No hard-delete path exists | Zero API endpoints permanently remove a master record — confirmed by a contract test asserting only a status-flag change occurs on any "remove" action. |
| SM-03 | G-3 | Screen-shape exceptions are explicit, not accidental | Every confirmed field-shape exception (Company/Branch/Location's panel structure, User's 4-line card, Reports and Letters' missing Code field, Department's missing Description) has a corresponding automated UI test asserting that exact shape — not the generic default. |
| SM-04 | G-4 | Action-rail behavior matches the model exactly | For every screen type in FR-007's inventory, an automated test confirms the icon set rendered matches exactly — no extra, no missing, no icon leaking from another screen type. |
| SM-05 | G-5 | Full backward traceability | Every FR/NFR/EC number in this document resolves to a real `Masters_BRD.md` requirement number (scripted check, not eyeballed) — this PRD's own validation pass confirms zero orphan citations. |
| SM-06 | G-6 | No duplicated reference data across module boundaries | DA Centre's and Reports and Letters' State fields read from one shared table (SM-035's own data) — zero divergence between the two screens' available values at any point in time. |

## Section 14 — Dependencies

- **`SystemManagement_BRD.md` (Settings module)** — Salary Head Group's rate/formula configuration (FR-028); DA rate settings (FR-034); Branch-level Wage/PF/ESI/WF/Bonus (FR-067); User Group Rights and Location Group Rights' assignment mechanism, including the still-open §13.2 Q8 this PRD's own OQ-01 depends on (FR-008); Location And Group Rights Matching screen (FR-050's cross-reference).
- **`AttendanceLeave_BRD.md`** — the actual leave-rule values (quantum, carry-forward, expiry) that Attendance and Leave's identity records (FR-023–026) feed into; this module stops at identity, per FR-068.
- **Employee module** — consumes every Payroll and Organisation master as reference data; triggers User auto-provisioning on employee verification (FR-058); supplies the existing dynamic-attribute mechanism that Employee Attribute/Value rely on instead of new Masters-level work.
- **`reference/Payroll_DataSpec_AllModules_v1.docx`** — a pre-existing, independently-written data specification that partially overlaps this module's scope (Company, Branch, Department, Designation, Salary Head/Salary Head Group) and conflicts with it in four specific places (see R-01's sibling risk in Section 11, and OQ-02). Must be reconciled, not simply layered on top of, before implementation begins.
- **`MUZPAYROLL_UI_SDD_v4_7.docx`** — exists, but scoped entirely to Employee Screen; contains no visual design reference for any Masters screen (Section 8).

## Section 15 — Open Questions

Masters-module scope only. Questions genuinely owned by a different module's own document are not duplicated here — they're cited, not re-litigated.

| OQ | Severity | Blocks | Question |
|---|---|---|---|
| OQ-01 | HIGH | FR-008 | Which right type (if any, beyond the three `SystemManagement_BRD.md` SM-092 confirms — Add, Edit, Delete) gates each of: search, refresh, print, circle-with-slash, star, and Verify? This cannot be resolved inside this PRD or its source BRD — it depends on `SystemManagement_BRD.md` resolving its own §13.2 Q8 ("Is Add/Edit/Delete the complete permission model, given how many workflows are approval-based?"), which remains open there. Until it closes, these five-plus icon/action types ship per FR-009's safe-default pattern rather than a guessed mapping. |
| OQ-02 | HIGH | FR-015, FR-005, FR-027–029 | How should `reference/Payroll_DataSpec_AllModules_v1.docx`'s pre-existing data model for Department (hierarchical), Designation/Company (no Authorization state), and Salary Head/Salary Head Group (per-group-owned components) be reconciled against this BRD/PRD's screenshot-and-stakeholder-confirmed structure, which directly contradicts all three? Neither source should be assumed authoritative over the other without an explicit decision — see R-01's sibling entry in Section 11. |
| OQ-03 | MEDIUM | FR-073 | Is a new Employee Attribute Value explicitly linked to its parent Employee Attribute via a field on the Attribute Value edit modal itself, or through a different creation entry point (e.g. an "Add Value" action reached from within the parent Attribute's own screen), or some other mechanism? The submitted screenshot of the create form shows no Attribute dropdown, though the list view's Advanced Search panel confirms the relationship exists at the filtering level. Genuinely owned by this module — not a cross-module dependency like OQ-01/OQ-02 — but unresolved by the evidence supplied so far. |

---

*This document restructures the Masters module's PRD into the same section shape as `MUZPAYROLL_PRD_v3_7_EmployeeScreen.docx` — the PRD that fed the `001-employee-screen` spec — so it can feed a Masters spec the same way. Every FR/NFR/EC number traces to a `Masters_BRD.md` requirement; nothing here goes beyond what that document confirms. Three open questions remain: two owned by a different module's own document, one (OQ-03) a genuine evidence gap within this module's own scope, surfaced by screenshot evidence that also corrected two earlier exclusions (Activity, Evaluation Factor) and one retracted requirement (MR-042, Employee Attribute/Value) — none invented here to pad this one out.*

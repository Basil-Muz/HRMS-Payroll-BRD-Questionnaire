# PAYROLL APPLICATION · Rebuilt from Legacy .NET

## Data Specification — Masters Module — Normalised Entity Definitions

| Field | Value |
|---|---|
| Version | 1.0 · extends `Payroll_DataSpec_AllModules_v1_1.docx` (2026-07-20, CR-01–CR-19) for the Masters module's own entities |
| Purpose | Define every Masters entity, column, type, constraint, and relationship before a single line of Masters-module code is written |
| Source PRD | `Masters_PRD.md` (`HRMS-Payroll-BRD-Questionnaire/BRD/PRD/`) — 75 FR items, every one traced to `Masters_BRD.md` MR-010–MR-090 |
| Backend | Java 21 · Spring Boot 4.x · Spring Data JPA · MySQL 8 · Flyway · Maven (per the governing constitution; AllModules v1.1 pre-dates the constitution's Java 21/Spring Boot 4.x mandate — this spec follows the constitution) |
| Frontend | React 18 + Vite · Tailwind CSS |
| API Style | REST JSON under `/api/v1/` · DTOs mandatory — entities never exposed directly |
| Identity | **Corrected — see RC-06.** AllModules v1.1's CR-01 ("Identity is external. No local users table.") is superseded: the Employee Screen's own `spec.md` (Clarifications, Session 2026-07-23) proved that premise false three days later and built `PayrollUserAccount` + `PayrollLoginController` as a real local login system. Masters' own User master (`Masters_BRD.md` §8.1, screenshot-confirmed) is the data source for that same system. This spec defines `payroll_user_accounts` as a real local table with real FK actor columns, not an external, FK-less BIGINT. |
| Fetch Default | LAZY on all relationships. EAGER only when documented explicitly. |
| `@ManyToMany` | PROHIBITED (constitution §V). Use join entities. |
| Native SQL | PROHIBITED. Derived methods → `@Query` JPQL → Specifications. |
| Base class | Every entity inherits `MuzirisAbstractEntity`: `id BIGINT PK`, `company_id BIGINT`, `created_by BIGINT`, `created_at DATETIME`, `updated_by BIGINT`, `updated_at DATETIME`, `is_deleted BOOLEAN DEFAULT false`, `version BIGINT DEFAULT 0`. |
| Masters mixin | Every entity below additionally carries: `is_verified BOOLEAN NOT NULL DEFAULT false`, `verified_at DATETIME NULL`, `verified_by BIGINT NULL FK → payroll_user_accounts.id`, `is_active BOOLEAN NOT NULL DEFAULT true`. [`Masters_BRD.md` MR-004 — every master record carries an `ENTRY`/`VERIFIED` state; display label is derived: `is_verified=false` → `ENTRY`, `is_verified=true` → `VERIFIED <verified_at>`. `is_active` is distinct from the inherited `is_deleted` — Masters records are deactivated, never soft-deleted (FR-065); `is_deleted` stays unused for this module's own tables.] Per-table sections below list only each table's own columns beyond this shared mixin and the base class — not repeated per table, matching AllModules' own CR-15 convention. |

---

## Reconciliation Notes

AllModules v1.1 already defines six entities this module also needs (`companies`, `branches`, `departments`, `designations`, `locations`, `salary_head_groups`/`salary_components`). Three of those six conflict directly with `Masters_BRD.md`'s screenshot-and-stakeholder-confirmed structure. This section states each conflict and which source governs, rather than letting a spec silently pick one without saying so — the same discipline `Masters_PRD.md`'s own OQ-02 already flagged as needing this exact resolution.

| # | Entity | AllModules v1.1 says | `Masters_BRD.md` confirms | Governs |
|---|---|---|---|---|
| RC-01 | `departments` | `parent_department_id` — hierarchical, self-referential | MR-012: flat list, no parent/hierarchy field at all, confirmed from screenshot | **Masters_BRD.md.** `parent_department_id` is removed, not merely unused — see V-M04. |
| RC-02 | `designations` | `designation_title`, `designation_level` only — no Authorization state anywhere | MR-004 (universal): every master record carries `ENTRY`/`VERIFIED`; MR-010: Code, Name, Short Name, Description also confirmed, none present in AllModules' version | **Masters_BRD.md.** `designation_level` is dropped — it was never confirmed by any BRD evidence, only carried forward from AllModules' own earlier, independently-written draft. |
| RC-03 | `locations` | `branch_id` nullable — "a location need not belong to a branch"; no Company field, no Address/Contact panels, no Authorization state | MR-055: Location's screen shows both a Company dropdown AND a Branch dropdown as real, populated fields — Company → Branch → Location is a required hierarchy, not optional; plus Address/Contact panels and Authorization, screenshot-confirmed | **Masters_BRD.md.** `branch_id` becomes `NOT NULL`; `company_id` becomes an explicit confirmed field, not merely the inherited base-class tenant column. |
| RC-04 | `salary_components` (Salary Head) | Child of `salary_head_groups` — each group owns its own component rows, codes unique *per group* | MR-031/MR-084: Salary Head is one shared, flat, 30-component master; Settings' Salary Head Group screen applies rate/formula *to* that shared list — the ownership direction runs the opposite way | **Masters_BRD.md**, reconciled rather than deleted — see RC-05. AllModules' `salary_components` table is renamed/repurposed as `salary_head_group_components`, a join between the new shared `salary_heads` master and `salary_head_groups`, carrying the per-group rate/formula. Nothing from AllModules' formula/sequencing columns is discarded — they move to the join table, which is where Settings' own confirmed behavior (MR-031) says they actually belong. |
| RC-05 | `salary_head_groups` | Unaffected directly by RC-04 | MR-031 confirms Salary Head Group is a Settings-scope concept, out of this module's own build (FR-028) | **Out of scope for this module.** `salary_head_groups` and `salary_head_group_components` are defined here only because Masters' own `advance_types.recovery_head_id` and the renamed join table both FK into this area — the Settings module owns their full specification. |
| RC-06 | Identity (`verified_by`, `created_by`, `updated_by` across every AllModules table) | External platform, BIGINT with no FK (CR-01) | Superseded by `spec.md`'s own 2026-07-23 correction (see front matter) | **`spec.md`'s later correction**, for every Masters table defined here. `payroll_user_accounts` is defined below as a real table; Masters' own actor columns (`verified_by`, and `created_by`/`updated_by` once this correction is applied project-wide) FK into it. |

---

## Entity Levels (extends AllModules v1.1's own numbering)

| Level | New/corrected Masters entities | Depends on |
|---|---|---|
| 1 — Standalone | `companies` *(corrected, RC extends AllModules)* | Nothing |
| 2 — Company children | `branches` *(corrected)*, `departments` *(corrected, RC-01)*, `designations` *(corrected, RC-02)*, `locations` *(corrected, RC-03)*, `job_grades`, `government_job_grades`, `employee_types`, `attendance_leave_categories`, `attendance_leave_display_types`, `attendance_leave_codes`, `salary_heads` *(new)*, `salary_head_sub_types`, `advance_types`, `states`, `da_centres`, `acts`, `reports_and_letters`, `reminder_categories`, `reminder_items`, `projects`, `user_types`, `payroll_user_accounts` *(reinstated, RC-06)*, `employee_attributes` *(new)*, `employee_attribute_data_types` *(new lookup)*, `employee_attribute_values` *(new, parent-link FK provisional — see 2.25)*, `activities` *(new)*, `evaluation_factors` *(new)* | `companies` |
| 2 — Company children (join) | `designation_departments` (join, FR-012) | `designations`, `departments` |
| 3 — Branch / group children | `salary_head_group_components` *(renamed from `salary_components`, RC-04/05)* | `branches`, `salary_head_groups`, `salary_heads` |

---

## Level 1 — Standalone Masters

### 1.1 `companies` — corrected

**Columns beyond base class + Masters mixin:**

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `company_name` | VARCHAR(200) | NO | — | NOT NULL · UNIQUE · *(kept from AllModules v1.1)* | FR-044 |
| `company_code` | VARCHAR(20) | NO | — | NOT NULL · UNIQUE · *(kept from AllModules v1.1)* | FR-044 |
| `short_name` | VARCHAR(30) | NO | — | NOT NULL — **new**, not in AllModules v1.1 | FR-044 |
| `image_url` | VARCHAR(500) | YES | NULL | Company-specific — Branch and Location do NOT get this column | FR-044 |
| `address_line1/2/3` | VARCHAR(255) each | YES | NULL | Three stacked lines, no individual sub-labels confirmed — Company's own pattern, distinct from Branch/Location's single line | FR-044 |
| `country`, `state`, `district`, `place`, `pincode` | VARCHAR(100)/VARCHAR(10) | YES | NULL | | FR-044 |
| `landline_number`, `mobile_number`, `email` | VARCHAR(20)/VARCHAR(20)/VARCHAR(150) | YES | NULL | | FR-044 |
| `amend_number` | INT | NO | 0 | Amendment/revision counter, incremented on each re-Verify after an amendment — read-only to the end user | FR-047 |

*`registered_address`, `gstin`, `pan`, and the `employee_code_prefix`/`pad_length`/`start` seed-time columns already in AllModules v1.1 are retained as-is — not independently confirmed or denied by `Masters_BRD.md`, and outside this module's own scope either way.*

---

## Level 2 — Company Children

### 2.1 `branches` — corrected

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `branch_name`, `branch_code` | VARCHAR(200)/VARCHAR(20) | NO | — | NOT NULL · UNIQUE per company *(kept)* | FR-048 |
| `short_name` | VARCHAR(30) | NO | — | **new** | FR-048 |
| `address` | VARCHAR(255) | YES | NULL | **Single line** — confirmed different from Company's 3-line pattern, not a transcription error | FR-048 |
| `country`, `state`, `district`, `place`, `pincode` | — | YES | NULL | | FR-048 |
| `landline_number`, `email` | — | YES | NULL | Directly confirmed from screenshots | FR-048 |
| `mobile_number` | VARCHAR(20) | YES | NULL | Presumed present (matches Company's field set) but never directly visible in either submitted screenshot — flagged as inference, not equally confirmed | FR-048 |
| `amend_number` | INT | NO | 0 | | FR-047 |

*No `image_url` column — confirmed Company-specific only (FR-044).*

### 2.2 `departments` — corrected (RC-01)

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `department_name` | VARCHAR(200) | NO | — | NOT NULL · UNIQUE per company (LOWER) *(kept)* | FR-014 |
| `department_code` | VARCHAR(20) | NO | — | NOT NULL · UNIQUE per company — **corrected**: AllModules v1.1 had this nullable/optional, but MR-011 confirms Code as a core, mandatory field for Department, same as every other master; FR-014's only confirmed exception for this master is the missing Description field, not an optional Code | FR-011, FR-014 |
| `short_name` | VARCHAR(30) | NO | — | **new** | FR-014 |

*~~`parent_department_id`~~ — **removed**, not merely unused. MR-012 confirms Department is a flat list with no hierarchy field of any kind; see RC-01, V-M04. No Description column exists either — the only confirmed master without one.*

### 2.3 `designations` — corrected (RC-02)

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `designation_title` | VARCHAR(200) | NO | — | NOT NULL · UNIQUE per company (LOWER) — this *is* the Name field *(kept)* | FR-011 |
| `designation_code` | VARCHAR(20) | NO | — | NOT NULL · UNIQUE per company — **new**, this is the Code field AllModules never had | FR-011 |
| `short_name` | VARCHAR(30) | NO | — | **new** | FR-011 |
| `description` | VARCHAR(500) | YES | NULL | **new** | FR-011 |

*~~`designation_level`~~ — **dropped**. Never confirmed by any BRD evidence; it was only ever an assumption carried forward from AllModules' own v1.0 draft, written before the screenshot evidence existed. See RC-02.*

### 2.3a `designation_departments` — new join (FR-012)

| Field Name | Type | Null? | Constraint / Notes |
|---|---|---|---|
| `designation_id` | BIGINT | NO | FK → `designations.id` |
| `department_id` | BIGINT | NO | FK → `departments.id` |

PRIMARY KEY (`designation_id`, `department_id`). A Designation links to zero, one, or several Departments — never required to be company-wide, never restricted to exactly one. No `@ManyToMany` annotation — a real join entity, per the constitution's §V ban.

### 2.4 `locations` — corrected (RC-03)

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `company_id` | BIGINT | NO | — | FK → `companies.id` · **new as an explicit field** — previously only implicit via the base class; MR-055 confirms it's a real, visible dropdown on this screen | FR-049 |
| `branch_id` | BIGINT | **NO** | — | FK → `branches.id` · **changed from NULLABLE in AllModules v1.1** — MR-055 confirms Branch is a required dropdown, filtered to the selected Company, not optional | FR-049 |
| `location_name`, `location_code` | VARCHAR(200)/VARCHAR(20) | NO | — | NOT NULL · UNIQUE per company *(kept, now treated as Name/Code)* | FR-049 |
| `short_name` | VARCHAR(30) | NO | — | **new** | FR-049 |
| `address` | VARCHAR(255) | YES | NULL | Single line, matching Branch's pattern | FR-049 |
| `country`, `state`, `district`, `place`, `pincode` | — | YES | NULL | | FR-049 |
| `landline_number`, `mobile_number`, `email` | — | YES | NULL | All three directly confirmed from screenshot | FR-049 |
| `amend_number` | INT | NO | 0 | | FR-047 |

*No Location Group field — that assignment happens from the (Settings-scope) Location Group screen itself, confirmed absent from this master's own edit screen. [FR-050, MR-068, MR-076]*

### 2.5 `job_grades` — new

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name`, `short_name` | VARCHAR(20)/VARCHAR(100)/VARCHAR(30) | NO | — | | FR-016 |
| `description` | VARCHAR(500) | YES | NULL | | FR-016 |
| `min_salary`, `max_salary` | DECIMAL(12,2) | YES | NULL | Optional banding — no cross-field ordering rule confirmed | FR-017 |
| `active_date` | DATE | NO | — | | FR-016 |

### 2.6 `government_job_grades` — new

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name`, `short_name` | VARCHAR(20)/VARCHAR(100)/VARCHAR(30) | NO | — | | FR-018 |
| `description` | VARCHAR(500) | YES | NULL | | FR-018 |
| `active_date` | DATE | NO | — | | FR-018 |

### 2.7 `employee_types` — new

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name`, `short_name` | — | NO | — | | FR-020 |
| `description` | VARCHAR(500) | YES | NULL | | FR-020 |
| `active_date` | DATE | NO | — | | FR-020 |

Seed data: `PER`/Permanent, `PRO`/Probationer, `TRA`/Trainee, `APP`/Apprentice — Apprentice is a fixed contract type, Probationer a lifecycle phase within the Permanent track; "Regular" is never a distinct value, only "Permanent." [FR-021, FR-022]

### 2.8 `attendance_leave_categories` — new lookup

| Field Name | Type | Null? | Constraint / Notes | Source |
|---|---|---|---|---|
| `code`, `name` | VARCHAR(20)/VARCHAR(100) | NO | Genuine admin-manageable lookup, not a hardcoded enum | FR-024 |

Seed data (10 values): On Duty, Annual Leave, Casual Leave, Compensatory Off, Sick Leave, Parenting Leave, Holiday, Loss of Pay, Weekly Off, Other Leaves. Determines payroll treatment of a code (e.g. "On Duty" counts as working regardless of office/remote/travel).

### 2.9 `attendance_leave_display_types` — new lookup

| Field Name | Type | Null? | Constraint / Notes | Source |
|---|---|---|---|---|
| `code`, `name` | VARCHAR(20)/VARCHAR(100) | NO | Genuine lookup — only "Include in reports" observed, not hardcoded to it | FR-025 |

### 2.10 `attendance_leave_codes` — new

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name`, `short_name` | — | NO | — | | FR-023 |
| `category_id` | BIGINT | NO | — | FK → `attendance_leave_categories.id` | FR-024 |
| `description` | VARCHAR(500) | YES | NULL | | FR-023 |
| `full_day_color` | VARCHAR(7) | NO | — | Hex colour, swatch picker with custom-colour option | FR-023 |
| `display_type_id` | BIGINT | NO | — | FK → `attendance_leave_display_types.id` | FR-025 |
| `active_date` | DATE | NO | — | | FR-023 |

*No `half_day_color` column — confirmed absent; the list cards each show one colour-coded badge, not two. See V-M10.*

Seed data (12 codes): P, LOP, EL, H, OH, CO, OD, ML, RD, COH, SCO, T, each with its own colour. [FR-026]

### 2.11 `salary_heads` — new (shared flat master, RC-04)

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name`, `short_name` | VARCHAR(20)/VARCHAR(100)/VARCHAR(30) | NO | — | UNIQUE per company | FR-027 |
| `description` | VARCHAR(500) | YES | NULL | | FR-027 |
| `order_in_report` | INT | NO | — | | FR-027 |
| `sub_type_id` | BIGINT | NO | — | FK → `salary_head_sub_types.id` | FR-030 |
| `active_date` | DATE | NO | — | | FR-027 |

*No `system_defined` flag — observed in the legacy screenshot on Basic Salary, explicitly not carried into this build (RC-04, V-M05). No rate/formula column of any kind — that configuration lives in Settings' `salary_head_group_components` join (below), per MR-031. Seed data: the 30 confirmed components (ADV, BASIC, BON, CCA, …).*

### 2.12 `salary_head_sub_types` — new lookup

| Field Name | Type | Null? | Constraint / Notes | Source |
|---|---|---|---|---|
| `code`, `name` | — | NO | Genuine lookup — only "Gross Salary" observed | FR-030 |

### 2.13 `advance_types` — new

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name`, `short_name` | — | NO | — | | FR-031 |
| `recovery_head_id` | BIGINT | NO | — | FK → `salary_heads.id` — dropdown populated exclusively from Salary Head records, never free text | FR-031 |
| `description` | VARCHAR(500) | YES | NULL | | FR-031 |
| `max_amount` | DECIMAL(12,2) | YES | NULL | Phase 1: field only, no enforcement | FR-032 |
| `max_installments` | INT | YES | NULL | Phase 1: field only, no enforcement | FR-032 |
| `interest_rate` | DECIMAL(5,2) | YES | NULL | 0% hardcoded for Salary Advance; configurable for loan-type advances — Phase 1: field only | FR-032 |
| `eligibility_criteria` | VARCHAR(500) | YES | NULL | e.g. confirmed-employees-only — Phase 1: field only | FR-032 |
| `active_date` | DATE | NO | — | | FR-031 |

### 2.14 `states` — new shared lookup (FR-035)

| Field Name | Type | Null? | Constraint / Notes | Source |
|---|---|---|---|---|
| `code`, `name` | VARCHAR(10)/VARCHAR(100) | NO | Shared by `da_centres` and `reports_and_letters` — one table, not two. Adding a value via either screen's lookup management makes it available to both. | FR-035 |

### 2.15 `da_centres` — new

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name`, `short_name` | — | NO | — | | FR-033 |
| `state_id` | BIGINT | NO | — | FK → `states.id` (shared lookup) | FR-035 |
| `description` | VARCHAR(500) | YES | NULL | | FR-033 |
| `order` | INT | NO | — | | FR-033 |
| `active_date` | DATE | NO | — | | FR-033 |

*No rate column — the DA rate is defined through System Management's DA settings screens, not here. [FR-034]*

### 2.16 `acts` — new lookup

| Field Name | Type | Null? | Constraint / Notes | Source |
|---|---|---|---|---|
| `code`, `name` | — | NO | Genuine admin-manageable lookup — no specific values confirmed yet | FR-038 |

### 2.17 `reports_and_letters` — new

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `type` | ENUM('REPORT','LETTER') | NO | — | | FR-036 |
| `is_statutory` | BOOLEAN | NO | false | | FR-036 |
| `name`, `short_name` | — | NO | — | | FR-036 |
| `upload_file_url` | VARCHAR(500) | NO | — | | FR-036 |
| `act_id` | BIGINT | NO | — | FK → `acts.id` | FR-038 |
| `state_id` | BIGINT | NO | — | FK → `states.id` (shared lookup, FR-035) | FR-035, FR-036 |
| `submission_month`, `submission_day` | — | NO | — | | FR-036 |
| `description` | VARCHAR(500) | YES | NULL | | FR-036 |
| `active_date` | DATE | NO | — | | FR-036 |

*No `code` column — the sole Payroll master without one, confirmed across 8 screenshots. No `category`, `effective_date`, `uploaded_by`, or company/branch tag column — all four were text-derived assumptions, disproven by screenshot. [FR-036, FR-037]*

### 2.18 `reminder_categories` — new lookup, backend-managed only (FR-040)

| Field Name | Type | Null? | Constraint / Notes | Source |
|---|---|---|---|---|
| `code`, `name` | — | NO | Seeded with Asset, Checklist. **No service-layer create/update/delete endpoint is exposed for this table** — new values are inserted only via a Flyway migration, never through a screen. See V-M07. | FR-040 |

### 2.19 `reminder_items` — new

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name`, `short_name` | — | NO | — | | FR-039 |
| `category_id` | BIGINT | NO | — | FK → `reminder_categories.id` | FR-040 |
| `data_type` | ENUM('TEXT','NUMERIC','YES_NO') | NO | — | Hardcoded enum, not a lookup table — exactly 3 values confirmed, no extensibility signal | FR-041 |
| `description` | VARCHAR(500) | YES | NULL | | FR-039 |
| `is_automated` | BOOLEAN | NO | false | true for the 4 predefined event types (birthday, probation end, document expiry, work anniversary); false for ad-hoc, HR-Admin-authored reminders | FR-042 |
| `active_date` | DATE | NO | — | | FR-039 |

### 2.20 `projects` — new

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name`, `short_name` | — | NO | — | | FR-043 |
| `description` | VARCHAR(500) | YES | NULL | | FR-043 |
| `active_date` | DATE | NO | — | | FR-043 |

*No additional fields of any kind — no dates beyond Active Date, no manager link.*

### 2.21 `user_types` — new lookup (FR-059)

| Field Name | Type | Null? | Constraint / Notes | Source |
|---|---|---|---|---|
| `code`, `name` | — | NO | | FR-059 |

### 2.22 `payroll_user_accounts` — reinstated (RC-06)

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `user_code_local_part` | VARCHAR(50) | NO | — | NOT NULL · UNIQUE per company — the part the user types; never contains `@` | FR-059, FR-060 |
| `user_name` | VARCHAR(200) | NO | — | | FR-059 |
| `user_type_id` | BIGINT | NO | — | FK → `user_types.id` | FR-059 |
| `mobile_no`, `email` | — | NO | — | | FR-059 |
| `password_hash` | VARCHAR(255) | NO | — | bcrypt. Policy enforced at the service layer: min 5 chars, ≥1 digit, ≥1 letter, ≥1 special char from `@./#-$_%:*&` | FR-062 |
| `force_password_change` | BOOLEAN | NO | false | "Change password on next login" checkbox | FR-059 |
| `employee_id` | BIGINT | YES | NULL | FK → `employees.id` — set when auto-provisioned on employee verification; NULL for a manually-created User | FR-058 |
| `active_date` | DATE | NO | — | | FR-059 |

The full login identifier is derived at the service layer as `{user_code_local_part}@MUZIRIS` — never accepted as typed input, never stored with the suffix. [FR-060, V-M09]

### 2.23 `employee_attributes` — new ("Attribute")

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name` | VARCHAR(20)/VARCHAR(100) | NO | — | UNIQUE per company | FR-069 |
| `sort_order` | INT | NO | — | Confirmed on screen and on the list card; no stated ordering rule beyond display sequence | FR-069 |
| `data_type_id` | BIGINT | NO | — | FK → `employee_attribute_data_types.id` (2.24) — confirmed as a dropdown, but no value list was opened in the submitted screenshot | FR-069 |
| `description` | VARCHAR(500) | YES | NULL | | FR-069 |
| `is_mandatory` | BOOLEAN | NO | false | "Mandatory Yes/No" checkbox | FR-069 |
| `active_date` | DATE | NO | — | | FR-069 |

*No `short_name` column — confirmed absent, unlike every other Payroll master's core field set. See V-M11.*

### 2.24 `employee_attribute_data_types` — new lookup

| Field Name | Type | Null? | Constraint / Notes | Source |
|---|---|---|---|---|
| `code`, `name` | — | NO | Genuine lookup — confirmed as a dropdown on the Attribute edit screen, but no value list was opened in the submitted screenshot, so no seed values are confirmed yet. Do not invent plausible-sounding values (e.g. Text/Numeric/Date) without evidence. | FR-069 |

### 2.25 `employee_attribute_values` — new ("Attribute Value")

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name` | VARCHAR(20)/VARCHAR(100) | NO | — | UNIQUE per company | FR-071 |
| `description` | VARCHAR(500) | YES | NULL | | FR-071 |
| `active_date` | DATE | NO | — | | FR-071 |
| `employee_attribute_id` | BIGINT | **BLOCKED — see note** | — | FK → `employee_attributes.id` | FR-073 (OQ-03) |

*No `short_name`, `sort_order`, or `data_type_id` column — a simpler field set than its parent Attribute master. **The `employee_attribute_id` column is provisional, not confirmed.** The Advanced Search panel on Attribute Value's list view confirms a parent-Attribute relationship exists at the filtering level, so a column of this shape is the most reasonable schema — but the submitted create-form screenshot shows no Attribute field, so whether this FK is actually set from the edit modal itself, from a different creation entry point, or some other mechanism entirely is unresolved (`Masters_PRD.md` OQ-03). Do not finalize this column's nullability or write path until OQ-03 closes — treat it as a placeholder shape, not a confirmed one. See V-M12.*

### 2.26 `activities` — new

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name`, `short_name` | VARCHAR(20)/VARCHAR(100)/VARCHAR(30) | NO | — | | FR-074 |
| `description` | VARCHAR(500) | YES | NULL | | FR-074 |
| `active_date` | DATE | NO | — | | FR-074 |

*The standard generic baseline — no master-specific fields beyond it.*

### 2.27 `evaluation_factors` — new

| Field Name | Type | Null? | Default | Constraint / Notes | Source |
|---|---|---|---|---|---|
| `code`, `name`, `short_name` | VARCHAR(20)/VARCHAR(100)/VARCHAR(30) | NO | — | | FR-075 |
| `description` | VARCHAR(500) | YES | NULL | | FR-075 |
| `active_date` | DATE | NO | — | | FR-075 |

*Identical shape to `activities` (2.26) — the standard generic baseline, no master-specific fields.*

---

## Level 3 — Branch / Group Children

### 3.1 `salary_head_group_components` — renamed/repurposed from AllModules' `salary_components` (RC-04, RC-05)

**Out of this module's own build scope** — defined here only because it's the join every Masters-level FK into Settings' Salary Head Group concept resolves through.

| Field Name | Type | Null? | Constraint / Notes |
|---|---|---|---|
| `salary_head_group_id` | BIGINT | NO | FK → `salary_head_groups.id` *(Settings-scope table, unchanged from AllModules v1.1)* |
| `salary_head_id` | BIGINT | NO | **New** — FK → `salary_heads.id` (the shared Masters-level master). Replaces AllModules' own `component_name`/`component_code` columns, which duplicated what the shared master now owns. |
| `formula_type`, `sequence_order`, … | *(unchanged from AllModules v1.1's existing `salary_components` columns, minus the now-redundant name/code pair)* | | Carries the per-group rate/formula, consistent with MR-031: the rate never lives on the Masters-level `salary_heads` record. |

UNIQUE (`salary_head_group_id`, `salary_head_id`) — a Salary Head Group may configure a given Salary Head at most once.

---

## Cross-Cutting Operations (not entities)

- **Status Update** — a service-layer query + action spanning every table above (and others outside this module): select target master + Active/Inactive filter → list matching `is_active` records → toggle `is_active`. Not its own table, the same way AllModules treats `generateSerialNo` as a service convention rather than a table. [FR-055, FR-056]
- **Reset Password** — an action against `payroll_user_accounts.password_hash`, not a separate table: self-service "forgot password," or an HR Admin/Super Admin admin-override reset. [FR-062, FR-063]

---

## Cross-Cutting Validation Rules

*Numbered independently of AllModules v1.1's own V-01–V-18 (different document); enforced in the service layer, not only the DB schema.*

| Rule ID | Tables | Rule | HTTP Response |
|---|---|---|---|
| V-M01 | Every table above | A record cannot be referenced by another entity while `is_verified = false`. | 400: "This record must be verified before it can be used." |
| V-M02 | Every table above | `code` and `name` (or their table-specific equivalents, e.g. `designation_title`) become immutable once `is_verified = true` — change requires deactivating the record and creating a new one. | 400: "Code and Name cannot be changed on a verified record." |
| V-M03 | Every table above | No hard delete — only `is_active` toggles via Status Update. The inherited `is_deleted` column is never set `true` for a Masters record. | — (no delete endpoint exists) |
| V-M04 | `departments` | No `parent_department_id` column exists — enforced at the schema level, not just the service layer (RC-01). | — |
| V-M05 | `salary_heads` | No record — Basic Salary included — is editable or deletable through the normal UI by any role once created; only `is_active` may change. **Not gated by V-M06.** | 400: "Salary Head components cannot be edited or deleted once created." |
| V-M06 | `designations`, `departments`, `job_grades`, `government_job_grades`, `employee_types`, `attendance_leave_codes`, `advance_types`, `da_centres`, `reports_and_letters`, `reminder_items`, `projects`, `companies`, `branches`, `locations` | Deactivation (`is_active → false`) is blocked while ≥1 employee record currently references this master. **Does not apply to `salary_heads`** — no per-employee assignment relationship exists for that table. | 409: "This record is still in use and cannot be deactivated." |
| V-M07 | `reminder_categories` | No create/update/delete endpoint exists for this table — new values arrive only via Flyway migration. | — (no such endpoint exists) |
| V-M08 | `da_centres.state_id`, `reports_and_letters.state_id` | Both FK to the same `states` table — never an independent, per-table State list. | — |
| V-M09 | `payroll_user_accounts.user_code_local_part` | Rejects any value containing `@` — the full login identifier is derived server-side, never accepted as input. | 400: "User Code cannot contain '@'." |
| V-M10 | `attendance_leave_codes` | No `half_day_color` column exists — `full_day_color` is the only confirmed colour field. | — |
| V-M11 | `employee_attributes` | No `short_name` column exists — confirmed absent from the edit screen, unlike every other Payroll master. | — |
| V-M12 | `employee_attribute_values` | The `employee_attribute_id` FK's write path is not yet confirmed — **do not implement a create/update endpoint for this table until `Masters_PRD.md` OQ-03 closes.** Building against a guessed mechanism risks a schema or API shape that has to be redone once the real one is confirmed. | — (blocked, no endpoint yet) |

---

## API DTO Summary

DTOs are mandatory; entities are never returned directly. Given the volume (22 new/corrected entities), this section states the shared pattern once rather than repeating it per table — each entity above gets its own `{Entity}CreateRequestDTO`, `{Entity}UpdateRequestDTO`, and `{Entity}ResponseDTO`, following this shape:

| DTO | Direction | Key Fields / Notes |
|---|---|---|
| `{Entity}CreateRequestDTO` | Request | Every column in the table above except the base class, the Masters mixin, and any FK resolved server-side (`company_id` always from JWT, never from the request body). |
| `{Entity}ResponseDTO` | Response | Every column, plus the derived display label for `is_verified`/`verified_at` (`ENTRY` vs `VERIFIED <date>`), plus `amend_number` where present. |
| `{Entity}UpdateRequestDTO` | Request | Rejected entirely once `is_verified = true` (V-M02) — this DTO only reaches the service layer for an `ENTRY`-state record. |

---

*End of Data Specification — 28 new/corrected Masters entities across Levels 1–3 (extending AllModules v1.1's own 8-level scheme), plus 2 join/junction entities (1 new — `designation_departments`; 1 renamed/repurposed — `salary_head_group_components`), 12 cross-cutting validation rules, 6 explicit reconciliations against the pre-existing AllModules v1.1 spec. Every column traces to a `Masters_PRD.md` FR number, itself traced to a `Masters_BRD.md` MR number — nothing here goes beyond what those two documents confirm. One column (`employee_attribute_values.employee_attribute_id`) is explicitly marked provisional pending `Masters_PRD.md` OQ-03, not silently finalized ahead of the evidence.*

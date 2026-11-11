# MUZPAYROLL — Masters Module UI Specification

| Field | Value |
|---|---|
| Source PRD | `Masters_PRD.md` — 75 FR items, every one traced to `Masters_BRD.md` |
| Design tokens | `/frontend/tailwind.config.js`, `/frontend/src/styles/global.css` + `mockup.css` — the project's only real, already-implemented design-token and component-class source. No Masters-specific mockup, wireframe, or `screen.png` exists anywhere in `reference/` — every file there (`MUZPAYROLL_UI_SDD_v4_7.docx`, `MuzHR_List_Workspace_v25.html`, every `stitch_html_web_page_design/*` folder, `Login_payroll/`) is scoped to Employee Screen or Login, confirmed by direct inspection, not assumed. |
| Shared components reused as-is | `Modal.tsx`, `AppShell.tsx`, `Sidebar.tsx` (`frontend/src/features/shell/`, `frontend/src/components/shared/`) |
| Shared components — new, required | `AuthorizationBadge`, `ActionRail`, `DocumentsInfoGrid`, `AdvancedSearchPanel` — none exist yet; specified in §3 below, built from the same tokens/CSS classes as everything else, not invented from scratch |
| Status | DRAFT. Every token and CSS class cited below is real and already live in `/frontend`. Masters' own screen *composition* (which fields sit where, in what order) is **not** independently confirmed by a wireframe — it is derived from `Masters_BRD.md`'s screenshot-confirmed field lists and the generic layout rules `Masters_PRD.md` already states (FR-001–FR-003). That derivation is this document's own work, not a traced mockup — flagged explicitly in §7, not silently presented as equivalent to one. |

---

## 1. Design Tokens (cited, not invented)

Every value below is copied verbatim from `/frontend/tailwind.config.js` and `/frontend/src/styles/global.css` — the same tokens Employee Screen already ships with. Masters introduces **zero** new colours, radii, shadows, or font choices.

**Colour** (`tailwind.config.js`):

| Token | Value | Use in Masters |
|---|---|---|
| `primary` / `primary-dark` / `primary-light` / `primary-xlight` | `#4F46E5` / `#3730A3` / `#EEF2FF` / `#C7D2FE` | Primary actions (Save, Verify), active nav state |
| `success` / `success-light` | `#059669` / `#D1FAE5` | `VERIFIED` and `Active` badges |
| `warning` / `warning-light` | `#C05213` (WCAG-corrected, not the mockup's failing `#D97706`) / `#FEF3C7` | — not currently needed by any confirmed Masters state |
| `danger` / `danger-light` | `#DC2626` / `#FEE2E2` | `Inactive` badge, destructive action rail icons (trash) |
| `info` / `info-light` | `#2563EB` / `#DBEAFE` | `ENTRY` badge (a neutral "not yet actioned" state, not success/danger) |
| `page-bg` / `surface` / `subtle` / `border` | `#F1F5F9` / `#FFFFFF` / `#F8FAFC` / `#E2E8F0` | Page background, card/modal surfaces, subtle fills, dividers — identical to Employee Screen |
| `text-primary` / `text-secondary` / `text-muted` | `#0F172A` / `#334155` / `#475569` (WCAG AA-corrected) | Field labels, body text, helper text |
| `sidebar-bg` | `#1E1B4B` | Sidebar background — Masters' new nav group renders inside the existing sidebar, not a new one |

**Typography:** `Inter, system-ui, sans-serif` (`fontFamily.sans`) — identical across every Masters screen, no exceptions.

**Radius / Shadow:** `borderRadius.sm/md/lg/xl/full` (4/8/12/16/9999px), `boxShadow.card/card-md/modal` — Masters' cards use `card`, modals use `modal` + the existing `animation: modal-in`, exactly as Employee Screen's own cards and `Modal.tsx` already do.

**Dark mode:** the nine structural CSS variables in `global.css`'s `:root`/`.dark` blocks (`--page`, `--surface`, `--subtle`, `--border`, `--border-s`, `--tp`, `--ts`, `--tm`, `--tl`) apply unchanged — Masters never redefines them, per constitution §IV's single-entry-point rule.

---

## 2. Reused Shared Components

- **`AppShell.tsx` / `Sidebar.tsx`** — Masters screens render inside the existing shell. No new shell is built. Masters needs a **new Sidebar nav group** (see §2.1) — the existing "Settings" group (`company-settings`, `roles-access` — `Sidebar.tsx` lines 45–48) has no `to:` route behind either item yet and is a Settings-module placeholder, not Masters; Masters gets its own group, not a repurposing of that stub.
- **`Modal.tsx`** — reused directly, unmodified, for every generic Payroll-master edit screen (FR-003). Its `title`/`onClose`/`children`/`footer`/`widthClass` props are sufficient; Masters needs no new modal shell.
- **`mockup.css` classes, reused directly:** `.tile` / `.tile-grid` (list view's default card/tile grid, FR-001), `.data-table` (List view-mode), `.view-toggle` (Grid/List/Tree switch, FR-001), `.toggle` / `.toggle-row` / `.toggle-label` (Status Update's Active/Inactive radio, FR-055), `.badge` / `.code-tag` (Code display with verification checkmark, FR-002), `.filter-bar` (Advanced Search panels, FR-052/053), `.drop-zone*` (Reports and Letters' Upload File, FR-036; Documents Info's File Upload column, FR-045), `.conflict-banner` (optimistic-lock conflicts, via the existing `ConflictBanner.tsx`), `.toast*` (save/verify/error feedback), `.btn-primary/secondary/danger/success/ghost/sm/add` (every button Masters needs, including the action rail's non-icon actions where applicable), `.empty-state` (Company's empty Documents Info grid, FR-045; Status Update before Option+Status are selected, FR-055), `.subnav` / `.subnav-group` / `.subnav-glabel` / `.subnav-sep` (the new Sidebar group's internal grouping, §2.1).

### 2.1 New Sidebar navigation

A new top-level group, **"Masters"**, inserted after "Employee List"/"Create Employee" and before "Payroll" (matching the BRD's own module ordering — Masters is reference data, read before Payroll runs against it):

```
Masters
├── Payroll Masters            (subnav-glabel)
│   ├── Designation
│   ├── Department
│   ├── Job Grade
│   ├── Government Job Grade
│   ├── Employee Type
│   ├── Attendance and Leave
│   ├── Salary Head
│   ├── Advance Type
│   ├── DA Centre
│   ├── Reports and Letters
│   ├── Reminder Item
│   ├── Project
│   ├── Attribute
│   ├── Attribute Value
│   ├── Activity
│   └── Evaluation Factor
├── Organisation                (subnav-glabel)
│   ├── Company
│   ├── Branch
│   └── Location
├── Status Update
└── User Rights                 (subnav-glabel)
    ├── User
    └── Reset Password
```

Each leaf gets its own route under `/masters/*` (e.g. `/masters/designation`, `/masters/company`), following the existing `{ key, label, icon, to }` shape `Sidebar.tsx` already uses for Employee List/Create.

---

## 3. New Shared Components Required

None of these exist in `/frontend` today. Each is specified here using only tokens/classes already confirmed in §1–§2 — no new colour, radius, or shadow is introduced by any of them.

### 3.1 `AuthorizationBadge` — new, parallel to `StatusBadge.tsx`

`StatusBadge.tsx` is hardcoded to `EmployeeStatusValue` (`DRAFT`/`PROBATION`/`CONFIRMED`/…) — it cannot represent Masters' own `ENTRY`/`VERIFIED` state (MR-004/FR-005) without corrupting its type. Masters gets its own component, built the **same way**: a `data-status`-keyed badge, colour-authoritative via `global.css`, icon present only to satisfy WCAG 1.4.1 (colour is never the only signal).

```ts
export type AuthorizationStatus = 'ENTRY' | 'VERIFIED'
// ENTRY   → info token (#2563EB / #DBEAFE)   — "not yet actioned," not a failure state
// VERIFIED → success token (#059669 / #D1FAE5) — matches StatusBadge's own CONFIRMED pairing
```

New `global.css` rules, following the exact pattern already there for `[data-status='CONFIRMED']` etc.:

```css
.status-badge[data-status='ENTRY']    { color: #1e40af; background-color: #DBEAFE; }
.status-badge[data-status='VERIFIED'] { color: #065f46; background-color: #D1FAE5; }
```

(`VERIFIED`'s pair is copied directly from `CONFIRMED`'s existing, already-WCAG-checked values — not a new colour decision.)

### 3.2 `ActiveStatusBadge` — new, reuses the `.toggle` visual language

Masters' Active/Inactive state (FR-055's Status Update filter, the `is_active` column in `Masters_DataSpec.md`) is a second, independent badge from Authorization — a record can be `VERIFIED` **and** `Inactive` simultaneously. Built the same `data-status` way:

```css
.status-badge[data-status='ACTIVE']   { color: #065f46; background-color: #D1FAE5; } /* reuses success pair */
.status-badge[data-status='INACTIVE'] { color: #991b1b; background-color: #FEE2E2; } /* reuses danger pair, matches RESIGNED's existing values */
```

### 3.3 `ActionRail` — new (FR-007/FR-008/FR-009/FR-010)

The one genuinely new interaction pattern Masters introduces — Employee Screen has no equivalent "per-screen-type icon inventory, individually permission-gated" component.

```ts
type ActionRailIcon = 'add' | 'save' | 'search' | 'circle-slash' | 'trash' | 'star' | 'refresh' | 'print'

// FR-007's confirmed inventory per screen type — the ONLY five shapes that exist:
const SCREEN_ICON_SETS: Record<ScreenType, ActionRailIcon[]> = {
  genericList:    ['add', 'search', 'circle-slash', 'trash', 'star'],
  companyEdit:    ['save', 'search', 'circle-slash', 'trash', 'refresh', 'print'],
  companyList:    ['save', 'search', 'circle-slash', 'trash', 'print'],
  statusUpdate:   ['search', 'circle-slash', 'trash', 'refresh'],
  resetPassword:  ['search', 'circle-slash', 'trash', 'refresh', 'print'],
}
```

Rendering rule (FR-008/FR-010, non-negotiable): **every icon in a screen's set always renders.** Only its `disabled` prop varies, driven by:
1. The current user's permission for that icon's mapped right type (Delete→trash, Add/Edit→save — the only two confirmed mappings; every other icon ships `disabled` unconditionally until `SystemManagement_BRD.md`'s own §13.2 Q8 resolves — `Masters_PRD.md` OQ-01).
2. Record state: trash is additionally disabled once `is_verified = true` (FR-010) — never hidden.
3. `circle-with-slash`/`star`: disabled unconditionally in Phase 1 regardless of (1) or (2) — their function is undefined, not permission-gated (FR-009).

Visual treatment: icon buttons use the existing `.btn-ghost`/`.btn-sm` sizing with `primary`/`text-muted` colour depending on enabled state, and `cursor-not-allowed` + 40% opacity when disabled — no new token, just the existing disabled-state convention already implicit in `.btn-*`'s own styling.

### 3.4 `DocumentsInfoGrid` — new (FR-045, shared across Company/Branch/Location)

A repeatable grid: `#`, Document Type, Document, Document No, Document Expiry, File Upload, File Download, Remarks — built on `.data-table` + `.drop-zone` (for the upload/download cells) + `.empty-state` (Company's own screenshot showed this empty; Branch/Location showed a populated default row — both are valid render states of the *same* component, per `Masters_BRD.md` MR-067). One component, instantiated three times (Company/Branch/Location edit screens), never three separate implementations.

### 3.5 `AdvancedSearchPanel` — new (FR-052/FR-053)

A right-side slide-in panel (`.ws-panel` provides the slide-in/backdrop mechanics already built for Employee's own workspace panels) containing: a Company dropdown (Branch List, Location List) and an Apply button — **Location List renders only this one field**, never a second Branch filter (FR-053 — confirmed twice, once drafted with a Branch filter and explicitly reversed). Company List gets no instance of this component at all (FR-051 — Advanced Search confirmed absent, not merely unbuilt).

---

## 4. Layout Patterns

### 4.1 Generic Payroll Master List View (FR-001, FR-002)

`.tile-grid` of `.tile` cards by default, `.view-toggle` switching to `.data-table` (List) or a tree render (Tree — no existing Tree component in `/frontend` today; flagged as a genuine build gap in §7, not assumed solved by the toggle existing). Each card/row: Code (`.code-tag` + `AuthorizationBadge` + last-modified date) → Name → Short Name → Description — **except** Department/Company/Branch/Location (stop at Short Name, no Description slot rendered) and User (Code → Name → Mobile Number → Email, a materially different card, not the same component with hidden fields).

### 4.2 Generic Payroll Master Edit Modal (FR-003, FR-004)

`Modal.tsx`, default `widthClass`, containing: Code, Name, Short Name, Description, Active Date, `AuthorizationBadge` (read-only once set), plus each master's own fields per §5 below. Field validation per FR-004 (Code ≤20 alphanumeric+hyphen, Name ≤100, Short Name ≤30, Description ≤500) renders inline, standard React Hook Form + Yup pattern (`global.css`/`tailwind.config.js` supply the error-state colour: `danger` token, not a new one).

### 4.3 Organisation Master Full Page (Company/Branch/Location — FR-044/048/049)

Not a modal — a routed page, matching the confirmed exception in FR-003. Two tabs: **General Info** (three panels — General Info / Address / Contact Info, side by side or stacked per viewport, using `.subnav`-style tab switching) and **Documents Info** (`DocumentsInfoGrid`, §3.4). `amend_number` + `verified_at` render as a small revision-history row beneath the Authorization badge (FR-047), read-only.

### 4.4 Status Update (FR-055, FR-056)

A single search-first page: Option dropdown (22-value list, FR-056) + `.toggle-row` Active/Inactive filter + Apply — `.empty-state` renders until both are selected and applied, per FR-055's explicit no-default-view rule. Results below render as `.data-table`, each row's deactivate action gated by V-M06's employee-assignment check (`Masters_DataSpec.md`) surfaced as a `.toast-error` on rejection, not a silent no-op.

### 4.5 User / Reset Password (FR-059–063)

User: the generic modal (§4.2) with User Code's local-part-only input (no `@` accepted, client-side pattern mirrors FR-060's server-side rule), User Type dropdown, Password field using the existing password-policy inline-validation pattern (if Employee Screen's own password/field-validation components exist, reuse them — otherwise a new `PasswordPolicyHint` component listing the four rules live, same visual language as FR-004's validation). Reset Password: a standalone (non-modal) form — User Code picker (reuses `EmployeePicker.tsx`'s pattern if applicable, or a simpler User-scoped equivalent), New Password, Confirm Password, Reset button.

---

## 5. Per-Master Screen Composition

*Each entry composes §1–§4's pieces; nothing here introduces a new token or component beyond what §3 already specified. All citations are to `Masters_PRD.md` FR numbers.*

| Master | Shape | Notable composition |
|---|---|---|
| Designation | §4.2 modal | + multi-select Department picker (FR-012) |
| Department | §4.2 modal | No Description slot rendered at all (FR-014) |
| Job Grade | §4.2 modal | + optional Min/Max Salary numeric inputs (FR-017) |
| Government Job Grade | §4.2 modal | Standard |
| Employee Type | §4.2 modal | Standard; seed data renders Permanent/Probationer/Trainee/Apprentice |
| Attendance and Leave | §4.2 modal | + Category dropdown (manageable lookup), Full Day Color swatch picker, Display Type dropdown — no Half Day Color input anywhere (FR-023–026) |
| Salary Head | §4.2 modal, 3 tabs (Allowance/Deduction/Comp Contribution) | No System Defined indicator anywhere — removed, not hidden (FR-027, FR-029) |
| Advance Type | §4.2 modal | Recovery Head dropdown populated only from Salary Head records (FR-031) |
| DA Centre | §4.2 modal | State dropdown — same shared lookup component instance as Reports and Letters (FR-035) |
| Reports and Letters | §4.2 modal | **No Code field rendered** (FR-036); Report/Letter toggle + Statutory checkbox at the top; `.drop-zone` for Upload File |
| Reminder Item | §4.2 modal | Category dropdown has no "manage values" affordance anywhere in this UI — intentionally (FR-040) |
| Project | §4.2 modal | Minimal — no fields beyond the generic set (FR-043) |
| Employee Attribute ("Attribute" on screen) | §4.2 modal, **no Short Name slot** | Code, Name, Sort Order, DataType dropdown, Description, Mandatory Yes/No checkbox — the only Payroll master with Sort Order/Mandatory fields. List card is 4-line: Code/Name/Sort Order/Description (FR-069, FR-070) |
| Employee Attribute Value ("Attribute Value" on screen) | §4.2 modal, **no Short Name slot** | Code, Name, Description only — the simplest field set in the module. `AdvancedSearchPanel` instance filters by parent Attribute. **The edit modal's own parent-link field is not built yet — blocked on OQ-03** (FR-071–073); do not add an Attribute dropdown to this modal until that resolves |
| Activity | §4.2 modal | Standard — same shape as Government Job Grade/Project (FR-074) |
| Evaluation Factor | §4.2 modal | Standard — identical shape to Activity (FR-075) |
| Company | §4.3 full page | `image_url` upload control in General Info panel — Company-only (FR-044) |
| Branch | §4.3 full page | Single-line Address (not 3-line like Company) (FR-048) |
| Location | §4.3 full page | Company **and** Branch dropdowns both rendered and required (FR-049) |
| Company List | §4.1 list | No `AdvancedSearchPanel` instance at all (FR-051) |
| Branch List | §4.1 list | `AdvancedSearchPanel` with Company field only (FR-052) |
| Location List | §4.1 list | `AdvancedSearchPanel` with Company field only — **not** Company+Branch (FR-053) |
| Status Update | §4.4 | Sole cross-master utility page |
| User | §4.2 modal (4-field card, not 3) | Card: Code/Name/Mobile/Email, no Short Name/Description anywhere (FR-061) |
| Reset Password | §4.5 standalone form | Not a modal — its own routed page |

---

## 6. Accessibility

Inherits `Masters_PRD.md` NFR-01 unchanged: WCAG 2.1 AA on every screen above, keyboard operability on `ActionRail`'s icon buttons specifically (each needs a real `aria-label`, not an icon alone — e.g. "Delete Designation," not just "trash"), `AuthorizationBadge`/`ActiveStatusBadge` carry both colour and an icon/text label (never colour-only, matching `StatusBadge.tsx`'s own existing rationale), and every `Modal.tsx` instance inherits that component's already-built focus-trap and Escape-to-close behaviour for free.

---

## 7. Known Gaps — not silently resolved

- **No Tree view component exists anywhere in `/frontend` today.** FR-001 confirms Grid/List/Tree as the three view modes, but only Grid (`.tile-grid`) and List (`.data-table`) have a real, already-built equivalent. Tree is a genuine new-build item, not a composition of existing pieces — flagged, not assumed solved by `.view-toggle` existing.
- **No Masters-specific wireframe or mockup exists anywhere in `reference/`.** Every layout decision in §4–§5 is this document's own composition of confirmed tokens, confirmed components, and `Masters_BRD.md`'s screenshot-confirmed field lists — not a traced pixel-for-pixel reference the way Employee Screen's own `v25.html` is. Exact panel proportions, breakpoint behaviour, and spacing within the 3-panel Organisation layout (§4.3) are this document's reasonable composition, not independently confirmed.
- **`PasswordPolicyHint` and a User-scoped picker (§4.5)** are named provisionally — if Employee Screen's own codebase already has an equivalent component for either, that should be reused instead of building a new one; this wasn't verified against the full component tree, only against `components/shared/`'s own five files.
- **OQ-01 (icon-to-right-type mapping) and OQ-02 (data-model reconciliation)**, both still open in `Masters_PRD.md`, are inherited here unresolved — `ActionRail`'s disabled-state logic for 5+ icon types (§3.3) ships against the Phase-1 safe default, not a guessed permission mapping, for the same reason stated there.
- **OQ-03 (Employee Attribute Value's parent-link mechanism)** is also inherited unresolved — §5's row for that master explicitly withholds an Attribute dropdown from the edit modal until it closes, rather than guessing at a field that might not match the real mechanism.
- **Naming**: the legacy screens' own on-screen titles are "Attribute" and "Attribute Value," not "Employee Attribute"/"Employee Attribute Value" — the same kind of landing-page-vs-screen-title mismatch `Masters_BRD.md` already notes for Reminder Item ("Employee Reminders" on screen) and Reports and Letters ("Reports & Letters" in the numbered list). §2.1's Sidebar labels use the on-screen titles; §5 and the BRD/PRD use the fuller names for requirement tracking.

---

*Every colour, font, radius, shadow, and CSS class cited in this document already exists in `/frontend/tailwind.config.js`, `/frontend/src/styles/global.css`, or `mockup.css` — verified by direct inspection, not assumed. Four new shared components are specified (§3), built from those same primitives. Two genuine gaps (Tree view, no Masters-specific mockup) are named rather than papered over.*

# Masters (System Management → Masters → Payroll)

## About this document

The consolidated BRD's own text for Masters (see `07_System_Management.md`) is too thin to run a
meaningful Gap Analysis on — it lists master names with one line of description each and no field-level
detail. Since Masters is basic, already-built configuration data (not new business logic) and 21
screenshots of the live screens are available in the **Masters Screens** folder, this document was built
directly from those screenshots instead of waiting on a fresh BRD pass. Settings (Payroll Groups,
Payroll Settings, User Rights Management) is being handled separately — the Product Manager has agreed
to prepare a fresh BRD for that part.

No screenshots are embedded here — this is a text description of what each screen shows, field by
field, plus the sample data visible in the screenshots.

**Update:** This document originally covered only the 16 Payroll-section masters (screenshots were
available for 10 of them). It has since been expanded to also cover the **Organization Masters**
(Company, Branch, Location, Company List, Branch List, Location List, License Agreement), the
**System Management-level Status Update** master, and the **User Rights masters** (User, Reset
Password) — none of which had screenshots available. For these, the source is
**`MuzPayroll_Masters_Settings_PRDEXTRACTION (4).docx`**, a citation-disciplined extraction document
that cites page numbers from the original 102-page consolidated PRD for every claim and explicitly
records "no screenshot found" rather than guessing where evidence doesn't exist. That same discipline
is carried into the new sections below: every claim is either a direct quote/paraphrase with a page
citation, or an explicit statement that no such detail exists anywhere in the source material.

**Second update:** For every screen where no field-level detail exists in either source, a
**"Fields (global standard)" / "Grid (global standard)"** block has been added — a draft based on how
this kind of screen is normally built in payroll/HRMS systems generally, not on anything found in the
BRD or PRD. These are clearly bracketed and labelled "global standard" wherever they appear, are kept
separate from the sourced content, and are meant to give BRD Finalization a concrete starting point to
put in front of the PM rather than a blank page — every one of them must be confirmed, corrected, or
rejected by the PM before it goes into the Gap Analysis proper.

Navigation path: **System Management → Masters → Payroll** (this section also covers
**System Management → Masters → Organization** and **System Management → Masters → User Rights** —
see the sections below the Payroll masters).

## The 16 masters

The Masters landing page shows 16 tiles under the Payroll section:

Designation, Department, Job Grade, Govt. Job Grade, Employee Type, Attendance and Leave, Salary Head,
Advance Type, Reports and Letters, DA Centre, Reminder Item, Employee Attribute, Employee Attribute
Value, Project, Activity, Evaluation Factor.

Screenshots were provided for **10 of the 16** (full list + edit-screen detail below). The remaining
**6 — Reports and Letters, Reminder Item, Employee Attribute, Employee Attribute Value, Activity, and
Evaluation Factor — have no screenshot.** Of those six, **Reports and Letters** and **Reminder Item**
now have PRD text detail (page-cited purpose text and a cross-reference in the Authorization User
Allocation grid) pulled from the PRD extraction document — see "Payroll masters with no screenshot"
below — but still no field-level, entry-form, or list-screen documentation anywhere in either source.
The other four (Employee Attribute, Employee Attribute Value, Activity, Evaluation Factor) don't
appear anywhere in the original consolidated BRD text either — they were only discovered from the
landing-page screenshot, and remain out of scope for this pass. All six are called out again in Open
Questions below.

## Common pattern across every master

Every master screen observed follows the same shell:

- **List view** — a card/tile grid by default, with icons (top right of the list) to switch between
  Grid, List, and Tree views. A search box ("Search here...") sits next to those toggles.
- **Card layout** — each tile shows, top to bottom: Code (with a check-mark and last-modified date on
  the same line), Name, Short Name, and Description.
- **Right-hand action rail** — every list screen has a vertical strip of icons on the far right
  (roughly: an add/new icon, a search icon, a circle-with-slash icon, a trash icon, and a star/favourite
  icon). Their exact behaviour isn't confirmed from the screenshots — see Open Questions.
- **Edit screen** — clicking a card opens a modal with a consistent core field set: **Code, Name, Short
  Name, Description, Active Date, Authorization**, plus master-specific fields layered on top (detailed
  per master below). The modal is closed with a green save icon or a red cancel/deactivate icon.
- **Authorization / maker-checker state** — the Authorization field shows either `ENTRY` (freshly
  created, not yet approved) or `VERIFIED <date>` (approved, with the approval date). This looks like the
  same maker-checker pattern already documented for employee records (see Employee Bulk Verification in
  `02_Employee_Management.md`) — worth confirming it's one shared, system-wide mechanism rather than a
  separate one for masters.

## Masters confirmed from screenshots

### 1. Designation
Fields: Code, Name, Short Name, Description, Active Date, Authorization.
Sample records: AFO / Admin Executive - Front Office, AMT / Assistant Manager - Technical, AMPR /
Assistant Manager - Projects, AMQA / Assistant Manager - QA, ABC / Associate - Business Consulting, ARC
/ Associate - Client Relations, AFC / Associate Finance Consulting, BA / Business Analyst, CTA / Chief
Technical Architect, CRITIN / Co-ordinator - IT Infrastructure, DADM / Director - Administration, DA /
Data Analyst, DEV / DevOps Engineer, DS / Domain Specialist, DVR / Driver, DE / Executive - DO..., EHR /
Executive - HR, EITIN / Engineer - IT Infrastructure, ENQA / Engineer - QA, EQA / Executive QA, GM /
General Manager, and more — a long, flat list of every job title in the company.

### 2. Department
Fields: Code, Name, Short Name, Active Date, Authorization. **No Description field** (the only
confirmed master without one).
Sample records: ADMIN / Administration, BCQ / Business Consulting, DES / Designing, ENT / Enterprise, FC
/ Finance Consulting, HK / House Keeping, HR / Human Resources, MAR / Marketing, QA / Quality Assurance,
SYS / Systems, TECH / Technical.

### 3. Job Grade
Fields: Code, Name, Short Name, Description, Active Date, Authorization.
Sample records: A1/Assistants, E1/Junior Executives - Level 1, E2/Junior Executives - Level 2,
E3/Executives Level 1, E4/Executives Level 2, E5/Senior Executives, M1/Junior Management,
M2/Middle Management - Level 1, M3/Middle Management - Level 2, M4/Middle Management - Level 3,
T1/Top Management.

### 4. Govt. Job Grade
Fields: Code, Name, Short Name, Description, Active Date, Authorization.
Sample records: A/Grade A - Senior Manager, B/Grade B - Middle Manager, C/Grade C - Junior Manager,
D/Grade D - Senior Executive, E/Grade E - Executive, F/Grade F - Junior Executive, G/Grade G -
Assistants, H/Grade H - House Keeping, I/Grade I - Cleaner.
This is the "minimum wages by government grade" reference the main BRD's Minimum Wages Group setting
reads from (see `07_System_Management.md`).

### 5. Employee Type
Fields: Code, Name, Short Name, Description, Active Date, Authorization.
Records: PER/Permanent, PRO/Probationer, TRA/Trainee.
The main BRD flags a new "Apprentice" category that isn't in this master yet — worth checking whether
it needs to be added here.

### 6. Attendance and Leave
This one carries more fields than the rest:
Code, Name, Short Name, **Category** (dropdown — only "On Duty" was visible), Description, **Full Day
Color** (a swatch picker with a "more…" custom-color option and a live preview bar), **Display Type**
(dropdown — "Include in reports" was visible), Active Date, Authorization.
Sample records, each with its own color already assigned: P/Present, LOP/Loss of Pay, EL/Leave, H/Holiday,
OH/Optional Holiday, CO/Compensatory Off, OD/Off Day, ML/Maternity Leave, RD/Rest Day, COH/Holiday
Compensatory Off, SCO/Sunday Compensatory Off, T/Travel (Hartal/Bandh/Strike).
This is directly relevant to the Attendance & Leave Management module's "color-coded cells… color
mapping must match master leave/attendance heads" requirement — this master is that color source.

### 7. Salary Head
The edit screen has three tabs — **Allowance** / **Deduction** / **Comp Contribution** — matching the
three salary-head categories described in the main BRD's Salary Head Group setting.
Fields: Code, Name, Short Name, Description, **Order in Report**, **Sub Type** (dropdown — "Gross
Salary" was visible), Active Date, Authorization, and a **"System Defined"** flag shown on Basic Salary.
Sample records (30 seen): ADV/Advance Recovery, BASIC/Basic Salary, BON/Bonus, CCA/City Compensatory
Allowance, COENCASH/CompOff Encashment, CON/Conveyance Allowance, DA/Dearness Allowance, EREF/EPF
Employer Share, ERPFS/EPS Employer Share, ESI/ESI Employee Share, ERESI/ESI Employer Share, FLD/Field
Allowance, HRA/House Rent Allowance, LENCASH/Leave Encashment, LTA/Leave Travel Allowance,
ELENCASH/Leaves Encashment, MED/Medical Allowance, OTHA/Other Allowance, OTH/Other Deductions,
PF/PF Employee Share, EPF/PF Employer Share, PSN/Position Allowance, PT/Profession Tax,
ROUNDING/Rounding, TDS/Tax Deductible at Source, TRA/Travelling Allowance, WASH/Washing Allowance.

### 8. Advance Type
Fields: Code, Name, Short Name, **Recovery Head** (dropdown, linked to a Salary Head record —
"Advance Recovery" was visible), Description, Active Date, Authorization.
Records: SAL/Salary Advance, TRA/Travel Advance.
This is the master-level link the main BRD describes under "Advance Recovery Salary Head (Salary
Integration)" — Recovery Head is where an Advance Type is tied to its Salary Head.

### 9. DA Centre
Fields: Code, Name, **State** (dropdown — "Kerala" was visible), Short Name, Description, **Order**,
Active Date, Authorization.
Only one record: EKM/Ernakulam — confirms the main BRD's note that Muziris currently uses only the
Ernakulam DA Centre.

### 10. Project
Fields: Code, Name, Short Name, Description, Active Date, Authorization.
Records: ACC/Accounts, ADMIN/Admin, AGRO/Agroms, ENT/Enterprise, HCIS, HSKP/Housekeeping, HR,
JUEL/JuelIS, MARK/Marketing, MRETAIL, OTHERS, PAYROLL, RETAILS, SYST/Systems — these are Muziris's
actual internal projects/products.

## Payroll masters with no screenshot: Reports and Letters, Reminder Item

Both of these are named on the Masters/Payroll landing page (screenshot, p. 64) but neither has its own
entry-form or list-screen screenshot anywhere in either source document. What follows is everything
the PRD extraction document could find for them.

### 11. Reports and Letters
**Purpose:** "Any statutory or important reports and letters can be uploaded to the system and can be
retrieved for future reference." (p. 72, item 11 of the Masters/Payroll Section list.)

**Naming variance:** the tile is labelled "Reports and Letters" (p. 64), while the numbered list item on
p. 72 reads "11. Reports & Letters" (with an ampersand). Both forms appear in the PRD; neither source
reconciles them.

**Fields / Grid:** no entry-form screenshot, field list, dropdown list, grid/table structure,
action/button labels, business rules, validations, or effective-date behaviour were found anywhere in
the PRD for this screen.

**Fields (global standard) — drafted, not sourced from the BRD/PRD, pending PM verification:**
Follows the common master pattern (Code, Name, Short Name, Description, Active Date, Authorization)
plus, typical of a statutory-document repository screen: **Category/Type** (dropdown — e.g. Statutory
Report, Circular, Letter, Certificate), **Applicable Financial Year/Period**, **File Upload** (the
actual report/letter document — PDF/image/doc), **Issue Date**, and a list/grid view with columns
Document Name, Category, Period, Uploaded Date, Uploaded By, and a View/Download action.

**Usage in other screens:** the Authorization User Allocation grid (p. 101) lists "Reports and Letters"
as a Payroll-module Master option, with an authorization User assigned to it.

**Source references:** pp. 64, 72, 101.

**Status: still missing.** Beyond the one-line purpose text, the tile, and the authorization-grid row,
nothing about this screen's actual fields or behaviour exists in either source — this needs a
walkthrough or a screenshot from the live system before it can go into a spec.

### 12. Reminder Item (aka "Employee Reminders")
**Purpose:** no descriptive text exists anywhere for this item. The Masters/Payroll Section list's item
12 reads only "12. Employee Reminders" with no sentence following it (p. 72) — every other item in that
list (1–11) has at least one line of description; this one doesn't.

**Naming variance:** the Masters tile grid (p. 64) labels the tile "Reminder Item," while the
Masters/Payroll Section text (p. 72) labels the same list position "12. Employee Reminders." Nothing in
the PRD reconciles these two names — both are preserved here as separately stated.

**Fields / Grid:** no entry-form screenshot, field list, dropdown list, grid/table structure, business
rule, validation, or effective-date behaviour is stated anywhere for it.

**Fields (global standard) — drafted, not sourced from the BRD/PRD, pending PM verification:**
Follows the common master pattern (Code, Name, Short Name, Description, Active Date, Authorization)
plus, typical of an HR reminder-configuration screen: **Reminder Type** (dropdown — e.g. Birthday, Work
Anniversary, Probation Confirmation Due, Document/License Expiry, Contract Renewal), **Trigger Date
Source** (which employee-record date field it reads from, e.g. Date of Birth, Date of Joining,
Probation End Date), **Lead Time** (days before the trigger date to fire the reminder), **Recipient**
(dropdown/multi-select — Employee, Reporting Manager, HR, All), **Notification Mode** (Email / SMS /
In-app), and **Recurrence** (One-time / Annual).

**Usage in other screens:** the Authorization User Allocation grid (p. 101) lists "Reminder Item" as a
Payroll-module Master option (using the tile-grid's wording), with an authorization User assigned.

**Source references:** pp. 64, 72, 101.

**Status: still missing — the sparsest of all 12 requested screens.** It appears only three times in
the entire 102-page PRD (the bare tile, the bare list heading, and the authorization-grid row), with no
purpose sentence, no field, no business rule, and no confirmation of what a "reminder" actually is,
what triggers it, or who it's shown to.

## Organization Masters (System Management → Masters → Organization)

This is a separate tile grid from the 16 Payroll masters above, reached via
**System Management → Masters → Organization**. None of its 7 items have an entry-form or list-screen
screenshot anywhere in either source document — the Organization Masters section of the PRD (p. 72)
presents each one only as a one-line text description. Several of them (Company, Branch, Location) do
have rich *indirect* documentation, because they're used as dropdown fields or settings scopes
elsewhere in the system — that's captured per item below.

### 1. Company
**Purpose:** "Company can be created using this master screen" (p. 72, item 1).

**Fields:** none found. No entry-form or list-screen screenshot for the Company master itself exists
anywhere in the PRD (confirmed by direct inspection of p. 72, which shows the whole Organization
Masters list as plain text — unlike the Payroll Masters section, where each master has its own
dedicated screenshot). No field names (Code, Name, or otherwise) for Company are stated anywhere.

**Fields (global standard) — drafted, not sourced from the BRD/PRD, pending PM verification:**
Follows the common master pattern (Code, Name, Short Name, Description, Active Date, Authorization)
plus, typical of a Company-master screen in an Indian statutory-compliant payroll system: **Legal/
Registered Name**, **Registered Address**, **CIN** (Corporate Identification Number), **PAN**, **TAN**,
**GSTIN**, **Logo Upload**, **Primary Contact** (name/phone/email), **Financial Year Start Month**, and
**Currency**.

**Usage in other modules:** the Payroll Settings screen (System Management/Settings/Payroll) "has
options to define parameters for company and branch" (p. 90). Under company settings there are General
settings (Leave Year Start Month = "JANUARY," i.e. a Jan–Dec leave year) and Wage settings (Minimum
Wages Group = "IT INDUSTRY," DA Industry Group = "DA - S & CE," DA Centre = "ERNAKULAM"). Note this is
company-level *configuration*, not the Company master's own create/edit fields.

**Source references:** p. 72, p. 90, p. 91.

**Status: still missing.** No field-level detail for the Company master's own screen exists in either
source.

### 2. Branch
**Purpose:** "Different branches of the company can be created" (p. 72, item 2).

**Fields:** none found for the Branch master's own create/edit screen. The Organization Masters section
(p. 72) gives only the one-line purpose text above.

**Fields (global standard) — drafted, not sourced from the BRD/PRD, pending PM verification:**
Follows the common master pattern (Code, Name, Short Name, Description, Active Date, Authorization)
plus, typical of a Branch-master screen: **Company** (link to the parent Company master), **Branch
Address**, **Branch Type** (dropdown — e.g. Head Office, Regional Office, Site), **Contact Person /
Phone / Email**, and **GSTIN** (if the branch has its own GST registration). Note this is separate from
— and feeds into — the already well-documented Branch-level Settings (General/Wage/PF/ESI/WF/Bonus)
captured above.

**Usage as a field in other screens** (9 places, all using "Branch" as a dropdown, sample value
"Muziris Softech (P) Ltd" where a sample is shown): the Login Credentials panel on the Employee
Management and Attendance & Leave Management home screens (pp. 2, 21); the Employee screen's "2.3
Location" tab (p. 6); the Employee List search filter (p. 18); the Employee Time Sheet Upload search
filter (pp. 23–24); the Muster Roll search filter (p. 25); the Payroll Process search filter (p. 43);
the Incentive Settings search panel (p. 96); and the Location And Group Rights Matching/Mapping grid
(p. 100).

**Usage in other modules — Branch-level Settings (well documented, 6 sections, all under Payroll
Settings, pp. 91–94):**
- **General settings:** Acts List (sample: "Contract Labour Act, Employees Provident Fund and..."),
  Establishment Number (123456789), LIN (1832278697).
- **Wage settings (20 parameters):** Wage Calculation Type ("Month Days"), No. of month days, Minimum
  Wages Group, DA Industry Group, DA Centre, CCA Applicable ("No"), Minimum CCA, Salary Head Group,
  Profession Tax Group, Attendance & Leave Group, Holiday Group, Off Day Group, Shift Group, Advance
  maximum limit, Advance warning limit, Salary payment date, Full day working hours, Half day working
  hours, Off day settings applicable, Time sheet applicable. ("Amendment can be done only on first day
  of a month.")
- **PF settings:** Establishment Number (KRKCH0021208000), PF rate of company contribution (12%), Rate
  of EPS contribution (8.33%), Wage ceiling – PF Limit (15000), EPS Age limit (58), Maximum company
  contribution amount to PF (1800), PF rate of employee contribution (% — blank in the screenshot, no
  sample value given).
- **ESI settings:** Establishment Number, Employee contribution (0.75%), Employer contribution (3.25%),
  Wage ceiling – ESI limit (21000).
- **WF (Welfare Fund) settings:** Establishment Number, Employee contribution amount (0), Employer
  contribution amount (0).
- **Bonus settings:** Minimum Bonus % (8.33), Maximum Bonus % (20), Minimum Bonus Calculation Amount
  (7000), Maximum Amount for Bonus Eligibility (21000), Minimum working days for bonus eligibility (30).
  ("Amendment can be done only on first day of the corresponding financial year.")

This Branch-level Settings detail is rich, but it's the *configuration scope* for an already-created
branch — not the Branch master's own Code/Name/etc. fields.

**Source references:** p. 2, p. 6, p. 18, p. 21, pp. 23–24, p. 25, p. 43, p. 72, pp. 90–94, p. 96, p. 100.

**Status: still missing.** The Branch master's own field list (Code, Name, etc.) is not documented
anywhere — only its downstream usage and its Settings scope are.

### 3. Location
**Purpose:** "If a branch has different locations, that can be created using this" (p. 72, item 3).

**Fields:** none found for the Location master's own create/edit screen — only the one-line purpose
text on p. 72.

**Fields (global standard) — drafted, not sourced from the BRD/PRD, pending PM verification:**
Follows the common master pattern (Code, Name, Short Name, Description, Active Date, Authorization)
plus, typical of a Location-master screen: **Branch** (link to the parent Branch master), **State**,
**City**, **Pincode**, and **Full Address**.

**Usage as a field in other screens** (sample value "Ernakulam" where shown): the Employee screen's
"2.3 Location" tab (field: "Location: The office location where the employee works," p. 6); the Login
Credentials panel on two module home screens (pp. 2, 21); the Employee List search filter (p. 18); the
Employee Time Sheet Upload search filter (pp. 23–24); the Muster Roll filter options (p. 25); the
Payroll Process search filter (p. 43); the Incentive Settings search panel (p. 96).

**Important open ambiguity — two other, separately-named screens use the word "Location" and are NOT
confirmed to be the same as this master:**
- **Location Group** (System Management/Settings/User Rights, item 2): "Location groups are created
  and attach employees to it. This is important when a company has different locations and rights need
  to be given based on working locations" (p. 97) — has its own example record (Code "EKM", Name "EKM",
  Description "ERNAKULAM").
- **Location And Group Rights Matching / Mapping** (System Management/Settings/User Rights, item 6):
  "Through this, the location of the company and the location group is mapped" (p. 100) — its results
  grid has columns Branch, Location, Location Group (sample row: "Muziris Softech (P) Ltd" /
  "Ernakulam" / "EKM").

Neither source states that these are derived from, or otherwise directly tied to, the Location master
described here — they're named and described as separate screens, and that separation is preserved
rather than assumed away.

**Source references:** p. 2, p. 6, p. 18, p. 21, pp. 23–24, p. 25, p. 43, p. 72, p. 96, p. 97, p. 100.

**Status: still missing.** The Location master's own field list is not documented; the relationship
between Location, Location Group, and Location And Group Rights Matching is a genuine open question
(carried into Open Questions below), not settled fact.

### 4. Company List
**Purpose:** "List of companies created can be viewed in the list" (p. 72, item 4).

**Fields:** none found. No list-screen screenshot (column headings, filters, etc.) exists anywhere in
the PRD — only the one-line purpose text.

**Grid (global standard) — drafted, not sourced from the BRD/PRD, pending PM verification:** a
read-only view of the Company master, in the same card/tile-or-list shell as the Payroll masters
(see "Common pattern across every master" above): columns Code, Name, Short Name, PAN/GSTIN, Active
Date, Status (Active/Inactive); search box; no create/edit action here (that happens on the Company
master screen itself).

**Source references:** p. 72.

**Status: still missing** — entirely, beyond the global-standard draft above.

### 5. Branch List
**Purpose:** "List of branches of the company can be viewed" (p. 72, item 5).

**Fields:** none found — same as Company List, only the one-line purpose text, no list-screen detail
anywhere.

**Grid (global standard) — drafted, not sourced from the BRD/PRD, pending PM verification:** a
read-only view of the Branch master: columns Code, Name, Short Name, Company, Branch Type, Active
Date, Status; filter by Company; search box; view-only (no create/edit here).

**Source references:** p. 72.

**Status: still missing** — entirely, beyond the global-standard draft above.

### 6. Location List
**Purpose:** "List of various locations can be viewed" (p. 72, item 6).

**Fields:** none found — same pattern, only the one-line purpose text.

**Grid (global standard) — drafted, not sourced from the BRD/PRD, pending PM verification:** a
read-only view of the Location master: columns Code, Name, Short Name, Branch, State/City, Active
Date, Status; filter by Branch; search box; view-only (no create/edit here).

**Source references:** p. 72.

**Status: still missing** — entirely, beyond the global-standard draft above.

### 7. License Agreement
**Purpose:** none. This is the only one of the 7 Organization Masters with **no descriptive sentence at
all** — the PRD list reads "7. License Agreement" and moves straight to the next heading (confirmed by
direct inspection of p. 72).

**Possible (unconfirmed) cross-reference:** a separate settings screen, "9. Company Allocation"
(System Management/Settings/User Rights, item 9), is described only as "This was created for Norms.
Not used in Muziris" (p. 102). That same screen contains a data grid headed **"License Agreement
Details"** with columns User Code, User Name, and Company (Company column blank in the sample rows).
Neither source states that this grid is the "License Agreement" master named on p. 72 — it surfaces
only inside an unrelated, explicitly-unused screen, so the two are recorded here as separate PRD facts
without asserting a link.

**Purpose / Fields (global standard) — drafted, not sourced from the BRD/PRD, pending PM
verification:** since even the purpose line is missing, this is the most speculative of the 12 drafts.
Presumed purpose: tracking statutory/contractual license agreements the company holds (e.g. Shops &
Establishment license, trade license, software/vendor license agreements) so renewal dates aren't
missed. Follows the common master pattern (Code, Name, Short Name, Description, Active Date,
Authorization) plus, typical of a license/contract-tracking screen: **License Type** (dropdown — e.g.
Statutory License, Trade License, Software License), **License/Registration Number**, **Issuing
Authority**, **Issue Date**, **Expiry Date**, **Renewal Reminder (days before expiry)**, **Document
Upload** (scanned copy), and **Status** (Active / Expired / Renewed).

**Source references:** p. 72, p. 102.

**Status: still missing, and the thinnest of all 12 requested screens** — not even a one-line purpose
statement exists for it as its own master; the global-standard draft above should be treated as the
least certain of the twelve and given priority for PM confirmation.

## Masters named but not confirmed (no screenshot provided)

These four appear on the Masters landing page but have no accompanying screenshot, so their fields are
unknown, and they are out of scope for this pass (not among the 12 screens requested):

- **Employee Attribute**
- **Employee Attribute Value**
- **Activity**
- **Evaluation Factor**

## Status Update (System Management → Masters, not under Payroll or Organization)

This sits directly under **System Management → Masters** — not nested under Payroll or Organization —
and applies across all masters.

**Purpose:** "Masters that are created can be deactivated if that becomes redundant using this option."
(p. 72, item 1 under "System Management/Masters.")

**Fields:** none found. No entry-form or list-screen screenshot exists anywhere in the PRD; the only
content for this screen is the purpose text and the grid description below.

**Grid/Table:** "List of active/inactive masters and active/inactive dates can be viewed." (p. 72.)

**Fields (global standard) — drafted, not sourced from the BRD/PRD, pending PM verification:** a
cross-master utility screen: **Master** (dropdown — which master the record belongs to, e.g.
Designation, Department, Branch), **Record** (the specific Code/Name being deactivated), **Status**
(toggle Active/Inactive), **Effective Date** of the status change, and **Reason** (free text, optional).
Grid columns: Master, Code, Name, Status, Active Date, Inactive Date. Deactivating a record likely
follows the same maker-checker (Authorization ENTRY/VERIFIED) pattern as every other master.

**Source references:** p. 72.

**Status: mostly missing.** We know its purpose and roughly what the list shows (active/inactive
masters + dates), but there's no field list, no screenshot, and no confirmation of how it relates to
the unlabeled action-rail icons already flagged in Open Question 3 below (is one of those icons what
triggers a Status Update, or is this a fully separate screen?).

## User Rights Masters (System Management → Masters → User Rights)

Two more items sit under this same landing area, separate from both the Payroll and Organization tile
grids.

### User
**Purpose:** "All the users of the system are listed out in this. New employee users can be created
also if not generated automatically." (p. 72, item 1 under "System Management/Masters/User Rights.")

**Fields:** no entry-form or list-screen screenshot for the User master's own create/edit screen exists
anywhere in the PRD. The only field-level detail available comes from *other* screens that reference or
generate a user record, not this screen itself:
- The Employee screen (Personal Information → 1.1 General) has a "Generate user" checkbox: "User is
  automatically generated when employee is created" (p. 3).
- The Employee screen's Actions Available list includes "Verification: Finalizes the record and
  triggers creation of official login credentials" (p. 17), alongside Save as Draft, Cancel, and
  Amend actions. Neither source explicitly confirms these "official login credentials" are the same
  User record documented here — but no other mechanism for creating employee login credentials is
  described anywhere in the PRD, so this is recorded as a probable (not confirmed) cross-reference.
- **Employee and User Linking** (System Management/Settings/User Rights — a *Settings*-section
  location, distinct from this Masters/User Rights location): "Through this, employee user generated
  while creating an employee is linked to the employee manually. Normally this happens while employee
  creation itself." (p. 101.)

**Fields (global standard) — drafted, not sourced from the BRD/PRD, pending PM verification:** the
master's own create/edit screen, for the "if not generated automatically" manual-creation path,
presumed to follow the common pattern (Code/User ID, Name, Short Name, Description, Active Date,
Authorization) plus: **Employee** (link, if tied to an existing employee record), **Username**,
**Email**, **Mobile Number**, **User Group** (link — see User Group under Settings), **Location Group**
(link — see Location Group under Settings), **Initial/Temporary Password**, **Status** (Active /
Inactive / Locked), and **Last Login Date** (read-only, list view).

**Source references:** p. 3, p. 17, p. 72, p. 101.

**Status: still missing.** We know users are auto-generated on employee creation and can apparently
also be created directly ("if not generated automatically"), but the User master's own screen — its
field list, how a user is manually created, how it's edited — has no documentation anywhere.

### Reset Password
**Purpose:** "User password can be reset and new password can be assigned using this master." (p. 72,
item 2 under "System Management/Masters/User Rights.")

**Fields:** none found. No entry-form or list-screen screenshot exists anywhere in the PRD — the only
content for this screen is the one-line purpose text above.

**Fields (global standard) — drafted, not sourced from the BRD/PRD, pending PM verification:**
**User** (search/select, link to the User master), **New Password**, **Confirm Password**, **Force
password change on next login** (checkbox), **Notify user** (checkbox — send new credentials by
email/SMS), and **Remarks** (optional, free text — reason for reset).

**Source references:** p. 72.

**Status: still missing** — entirely, beyond the one-line description and the global-standard draft
above.

## Open questions for BRD Finalization

1. Four masters (Employee Attribute, Employee Attribute Value, Activity, Evaluation Factor) have no
   screenshot and no PRD text detail at all — need either screenshots or a walkthrough to document
   their fields before they can be built. (Reports and Letters and Reminder Item, previously grouped
   with these, now have PRD text detail — see item 10 below and their own sections above.)
2. **Employee Attribute / Employee Attribute Value** don't appear anywhere in the original BRD text —
   only found via the landing-page screenshot. The Employee Management BRD has an open new-requirement
   note asking for a "dynamic" way to add employee parameters (e.g. physically-challenged status) so
   more can be added later without a code change. Is this Employee Attribute / Employee Attribute Value
   pair *the* mechanism that already implements that? If so, the Employee Management module's open
   item may already be solved and just needs documenting, not building.
3. What do the three unlabeled icons in the list screen's right-hand action rail actually do (beyond
   presumed add/search)? Specifically: is one of them a hard delete, and is another a
   deactivate/reactivate toggle distinct from the "Status Update" screen already documented under
   System Management?
4. Every master's Authorization field shows `ENTRY` or `VERIFIED <date>` — confirm: is verification
   mandatory before a master record can be used elsewhere in the system (e.g. can an unverified
   Designation be assigned to an employee)? Who is authorized to verify masters, and is it the same
   authorization mechanism as Employee record verification?
5. Salary Head shows a **"System Defined"** flag on Basic Salary. Which Salary Heads are system-defined
   and locked (can't be edited/deleted) versus user-created and fully editable?
6. Attendance and Leave's **Category** dropdown only showed "On Duty" — what's the full list of
   categories, and what does each one drive downstream (payroll processing? reporting? both)? Is there
   a separate Half Day color, or does Full Day Color apply to half-day entries too?
7. Is Advance Type → Recovery Head the only cross-master link, or do other masters also reference each
   other the same way (e.g. does Designation reference Job Grade, or Department reference Location)?
8. DA Centre has an **Order** field and Salary Head has an **Order in Report** field — do other masters
   (Designation, Department, Job Grade, etc.) have similar ordering fields that weren't visible in the
   screenshots, and what report(s) do they control the sequence of?
9. Department is the only confirmed master with no Description field — confirm this is intentional
   and not an inconsistency to fix.
10. **Reports and Letters** and **Reminder Item** have no field-level detail in any available source
    (BRD text, 21 screenshots, or the PRD extraction document) — need a screenshot or a walkthrough of
    the live screens before either can be specced. Their naming is also inconsistent between the tile
    grid and the numbered list text (see their sections above) — confirm the correct/final name for each.
11. **Company, Company List, Branch List, and Location List** have zero field-level or list-screen
    documentation in any source — need screenshots or a walkthrough of the live screens.
12. **Branch and Location** have no documentation for their own master screens either, but do have rich
    *indirect* documentation (as dropdown fields elsewhere, and — for Branch — as a Settings scope).
    Confirm whether "Location" (Organization Master) and "Location Group" / "Location And Group Rights
    Matching" (separate Settings screens) are related, and if so, how — the PRD never states this
    explicitly.
13. **License Agreement** has no descriptive text at all — need to confirm with the business what this
    screen is even for, and whether the "License Agreement Details" grid found inside the (explicitly
    unused) "Company Allocation" settings screen is related to it or is coincidental naming.
14. **Status Update** — confirm how it relates to the unlabeled action-rail icons already flagged in
    Open Question 3 (is Status Update a separate screen, or is it what one of those icons triggers?).
15. **User** — confirm whether "Verification" on the Employee screen (which "triggers creation of
    official login credentials") and the auto-generated user from "Generate user" are the same User
    record documented here, and document how a User is created/edited *manually* (the BRD only
    describes automatic generation and linking, not a manual create/edit flow).
16. **Reset Password** has no detail beyond its one-line purpose — confirm what "new password" entry
    looks like (does the admin set it, or does the system generate/email one?) and whether there are
    any password-complexity rules to capture.
17. **All "(global standard)" drafted field lists** (Reports and Letters, Reminder Item, Company,
    Branch, Location, Company List, Branch List, Location List, License Agreement, Status Update, User,
    Reset Password) need a dedicated PM review pass before Gap Analysis: confirm which fields are
    correct as drafted, which need to change, and which don't apply to Muziris at all.

---
*Built from the 21 screenshots in the "Masters Screens" folder (Payroll masters 1–10), plus
`MuzPayroll_Masters_Settings_PRDEXTRACTION (4).docx` (Reports and Letters, Reminder Item, the 7
Organization Masters, Status Update, User, and Reset Password) — analyzed directly since the
consolidated BRD's own Masters section did not have enough detail to run Gap Analysis on. No
screenshots are reproduced here, text description only. Feeds into the Phase 1 BRD Finalization Gap
Analysis step for the Masters module.*

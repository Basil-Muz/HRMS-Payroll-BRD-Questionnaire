# MUZPAYROLL — Masters Module: Remaining Open Questions

Question, the stakeholder's answer, and the issue with that answer, for each of the 3 items (of 22) still open after the first answer batch.

**Source:** `MUZPAYROLL_Masters_BRD_Answers.docx` (submitted by Nisha Varghese) · `Masters_BRD_Questionnaire.html` · `Masters_BRD.md`

---

## Question 1 — Salary Head: Who Can Create and Edit an Ordinary (Non-System-Defined) Component?

**Question (as submitted):** Who has permission to create, edit, or delete Salary Head components? The BRD confirms a "System Defined" flag exists on at least Basic Salary, implying some records are locked.

- **A)** Super Admin only — HR Admin can view and assign salary structures to employees, but cannot create or edit them
- **B)** HR Admin can create and edit non-System-Defined salary heads; Super Admin can do everything HR Admin can, plus edit/delete System Defined records
- **C)** HR Admin creates; only Super Admin can delete; editing existing components requires Super Admin approval

**Answer the stakeholder gave:**
> Certain components like Basic salary are marked as system defined as they are part of minimum wages and so shall not be edited or deleted.

**Issue with this answer:** This answers *why* the exception exists (statutory minimum-wage compliance — already recorded as `MR-032`), but not *who* has create/edit permission in the general case. The question asked about permission; the answer only described the locked exception.

**Who should resolve it:** Same stakeholder — just the narrower remaining question (who edits components that are NOT System Defined).

---

## Question 2 — License Agreement: What Does This Screen Do?

**Question (as submitted):** The BRD lists License Agreement under Organisation Masters but gives no description at all — the only one of the Organisation Masters with zero purpose text of any kind. What is this screen for?

- **A)** Read-only display — HR Admin or Super Admin can view the MUZPAYROLL software licence terms; no data entry; no database table needed
- **B)** Module licensing — shows which MUZPAYROLL modules are licensed to this company (Payroll active, Attendance not licensed); determines which screens are visible
- **C)** Document upload — HR Admin uploads or acknowledges a company-specific licence document as part of company setup

**Answer the stakeholder gave:**
> Can leave it

**Issue with this answer:** This phrase supports two different instructions: (1) "leave it [as an open question]" — defer the decision, or (2) "leave it [the screen] as is" — build it minimally since it's low priority. These lead to opposite outcomes, so it can't be recorded either way without guessing.

**Who should resolve it:** Same stakeholder — a one-word disambiguation ("defer" or "build minimal"), plus which original option (A/B/C) if building minimal.

---

## Question 3 — Branch-Level Settings: Confirm This Belongs in the Deferred Settings BRD, Not Here

**Question (as submitted):** This BRD states Settings (Payroll Groups, Payroll Settings, User Rights Management) is being handled in a separate BRD pass. But the Branch section of this same document then documents, in full, six sections of Branch-level Settings (General, Wage — 20 parameters, PF, ESI, WF, Bonus). Should this content be removed from the Masters PRD and left entirely to the separate Settings BRD, or is Branch-level Settings intentionally part of Masters scope after all?

- **A)** Remove it — Branch-level Settings content moves entirely to the separate Settings BRD; this document keeps only Branch's own master fields once confirmed, with a cross-reference note instead of the full detail
- **B)** Keep it here — Branch-level Settings is intentionally part of Masters scope (Branch is a Masters entity, inseparable from its configuration); the original scope statement should be corrected instead
- **C)** Split it — keep the cross-reference and a one-line summary here, but move the full 30-parameter detail to the Settings BRD to avoid duplicating source-of-truth content across two documents

**Answer the stakeholder gave:**
> Not sure where to keep it.

**Issue with this answer:** This is the stakeholder explicitly stating uncertainty, not a phrase to interpret or narrow — there is nothing in the answer to build a requirement from.

**Who should resolve it:** Escalate — this is a cross-BRD scope decision (Masters vs. the deferred Settings BRD), not a Masters-specific question. Per `07_Masters.md`, that's the Product Manager who originally directed Settings to be deferred.

---

## Summary

| # | Question | Core problem | Who should resolve it |
|---|---|---|---|
| 1 | Salary Head create/edit | Answer covered the exception, not the rule | Same stakeholder — just the narrower remaining question |
| 2 | License Agreement purpose | "Can leave it" has two incompatible readings | Same stakeholder — one-word disambiguation |
| 3 | Branch-Level Settings scope | Explicit "not sure" | Escalate — cross-BRD scope decision, not Masters-specific |

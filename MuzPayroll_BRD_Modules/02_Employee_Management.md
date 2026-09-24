# Employee Management

## Employee Management Module

The Employee Management Module serves as the foundation of the Payroll portal by maintaining a centralized, up-to-date record of all employees. It provides HR, managers, and employees controlled access to essential information, ensuring accuracy, transparency, and efficient administration throughout the employee life cycle.

**Key Features of the Employee Management module:**

Adding New Employees: HR personnel can easily add new employees into the system, capturing all essential details like personal information, official job roles, and compensation structure.

Managing Employee Data: The portal allows HR to seamlessly update and manage ongoing changes in employee profiles. This includes tracking promotions, salary adjustments, job role changes, and personal updates.

Ensuring Compliance: The system ensures that employee data is managed in line with internal policies and external regulations. HR can ensure that all necessary documentation is collected, verified, and stored securely.

Managing the Entire Employment Life-cycle: The portal supports the full employee life-cycle—from on-boarding to off-boarding. HR can track milestones such as employment status changes, employee’s departure from the organization etc ensuring that every stage is well-documented and managed.

## Features List

Employee

Employee List

Employee Upload

Employee Bulk Verification

## Employee Screen

The "Employee" screen allows authorized HR/Admin users to onboard new employees into the portal seamlessly. This screen captures essential employee information in a structured format to initialize their profile, payroll, attendance, and workflow eligibility.

**Key Fields:**

Personal Information

This section collects the basic personal details of the employee, crucial for identification and record-keeping.

#### 1.1  General

Photo: The employee’s photo is uploaded for visual identification.

Generate user - User is automatically generated when employee is created.

Employee Code: A unique employee ID is manually entered for each employee. Automatic generation is not activated now.

> **Open item flagged in BRD:** New requirement: Auto generation of employee id is required

Name: Full legal name of the employee as in Aadhar card.

Gender: Gender specification (Male/Female/Other).

Date of Birth: The employee's date of birth as in aadhar card.

Actual DOB - For birthday wishes

Marital Status - Choose from drop down (Unmarried, Married, Divorced, Widowed)

Nationality - Choose from drop down (List of nations)

Religion - Choose from drop down (List of religions)

Blood group - Choose from drop down (Blood group list)

> **Open item flagged in BRD:** New requirement - Need provision to mention whether an employee is physically challenged and the type of disability. Currently it’s managed through employee attribute allocation. Such new parameters may come in the future also. So, keep it dynamic so that all such parameters can be added in the employee screen.

#### 1.2 Address

Permanent Address: This section records the employee's permanent residence address for mailing and official purposes.

Present Address: The current address the employee is residing at (if different from the permanent address).

#### 1.3 Contact

Mobile Number: Employee’s personal mobile contact number for communication.

Email Address: Personal email address.

Emergency Contact: The name and contact details of the person to contact in case of emergency.

#### 2. Official Information

This section contains detailed official and employment-related information, including employment status, job roles, salary, and statutory details.

#### 2.1 General

Date of Joining (DOJ): The official start date of the employee with the organization as per offer letter to be entered.

Notice period - To be entered as per the offer letter

Father/Husband - Name to be entered. For gents father’s name, for unmarried women - father & married women - husband

Work Type: Specifies the mode of work (work from home, work from office)

Official Contact Information - Company email, mobile number

Resignation/Relieving - Date of resignation, date of relieving, relieving type (this relieving type is required for PF exit file. So a list of statutory & organizational exit reasons should be available), exit interview feedback etc can be entered

#### 2.2 Promotion/Demotion

Employee Type: Whether the employee is on probation or is a confirmed employee or trainee or in whatever status as per organization policy. On joining most of the employees will be on probation for a period mentioned in their offer letter. On completion of the period, if their performance is satisfactory, their employment will be confirmed. Currently we have a new type called “Apprentice”. They are trainees not employees but have a probability to be converted as employees anytime during or after their apprenticeship period.

> **Open item flagged in BRD:** New requirement - Need provision to cover apprenticeship trainees in the new system. They are not employees but can be converted to employment after apprenticeship period.

Promotion/Demotion Details: This includes government job grade, organization job grade and organization designation and appraisal month. These information can be amended when an employee is promoted or demoted.

Government Job Grade - This is published by government for different industries and for different category of employees. This is required for defining minimum wages of employees.

Organization Job Grade - Job grades as per the organization hierarchy to classify different roles in different departments and fix compensation and benefits.

Organization Designation - Need all the designations in the organization.

Appraisal Month: The month when the employee’s performance is evaluated for potential promotion or salary review. This is entered based on date of joining.

#### 2.3 Location

Location: The office location where the employee works.

Department: The department to which the employee belongs.

Project: The project the employee is assigned to.

Reporting Head & Person: Name of the  supervisor & team lead to whom the employee reports. Two levels of reporting is in place.

> **Open item flagged in BRD:** New requirement - Need provision to enter Team name under Project

#### 2.4 Job Profile

Job Description of the employee can be recorded.

#### 2.5 Salary

Monthly/Daily - Type of salary calculation

Salary Head Group: This section allows HR to select the employee’s salary head group defined through settings screen. A table with the allowances, deductions and company contributions attached to the specified salary group will be displayed and the amount can be entered in it.

There are different category of employees as far as salary processing is concerned. 1. Employees covered under PF & ESI 2. Employees covered under PF but not ESI 3. Employees not covered under both PF & ESI. Depending upon this, their allowances and deductions will be different.

Statutory Information - PF & ESI numbers, Nominee and calculation details can be entered. For PF, the employer and employee PF percentage is statutorily 12%. If the percentage of contribution needs to be changed, that can be done here. Also voluntary PF contribution amount can be entered here. Also, the maximum statutory PF contribution amount can be entered. At present it is Rs. 1,800 (12% of 15,000). Even if the 12% of PF gross goes above Rs. 1,800, the statutory contribution will be limited to Rs. 1,800 using this.

## Salary Structure & Process

Muziris follows the cost to company (CTC) concept. CTC consist of gross salary plus employer contributions to PF and ESI currently. Components like welfare fund contribution, or employer contribution towards any applicable labour law can be included in the future. Payroll period is from first of the month to last day of the month. Certain companies process payroll from 25th of a month to next month 25th to ensure that salary is credited by end of the month to employee accounts.

Gross Salary & Allowances - Gross salary consist of different allowances including Basic, DA, HRA, Travelling Allowance, Bonus etc. In Muziris, Baisc + DA is a single component. Allowances can be added or removed from the organization salary structure time to time depending upon organization policy change or changes that happen in labour laws and income tax rules.

Currently all the allowances in Muziris are fixed amounts. Allowances like DA can be variable according to the price index published by government in regular intervals. Many companies have variable DA.

All allowances except position allowance and washing allowance are given to all employees. Washing allowance is given to ESI covered employees only and Position allowance is given to ESI exempted employees only.

Basic, DA and CCA are mandatory components in the salary structure and form part of minimum wages.

Bonus is an allowance that is included to cover the bonus liability.

HRA and LTA has TDS implications as employees can claim exemption on these allowances in the old regime.

> **Open item flagged in BRD:** New requirement - Need a new option to generate salary split ups by giving formulas to define the allowances. For example - Basic shall be 40% of Gross Salary or HRA shall be 50% of Basic.

Deductions - Deductions can be statutory or general. Statutory deductions are employee contributions to PF and ESI, profession tax and TDS.

Employee PF Contribution - Statutory Employee contribution to PF is 12% of PF Gross limited to a maximum contribution of Rs. 1,800/-. PF Gross is a component derived by Muziris to ensure that PF contribution is not limited to 12% of Basic + DA which can attract PF legal proceedings in the future if basic + Da is less than Rs. 15,000/-. This is calculated by adding other allowances to Basic + DA to make the amount equal to Rs. 15,000/-. (This is done because PF ceiling for statutory contribution is Rs. 15,000/- and if Basic + DA is less than 15,000 and there are other allowances that makes gross salary above 15,000/-, contribution needs to be paid on minimum 15,000/- statutorily.) HRA and Bonus can be exempted from being added to calculate the PF gross as these two are excluded from the purview of PF provided these allowances shall not be greater than 20% of Basic plus DA.

Apart from statutory contribution, employees can make voluntary pf contribution at a maximum of 100% of Basic plus DA.

Employee ESI Contribution - Employee ESI contribution is calculated at 0.75% of Gross salary. But washing allowance can be exempted from Gross Salary. In order to be eligible for ESI coverage, Gross salary shall be less than or equal to 21,000/-. ESI has two contribution periods. April to September and October to March. If the gross salary increases and crosses 21,000/- due to an increment in between a contribution period, ESI coverage needs to be continued till the end of the ongoing contribution period and contribution needs to be paid on the new gross salary - washing allowance.

> **Open item flagged in BRD:** New requirement - Need a reminder when the employee gross salary is above Rs. 21,000/- (ESI statutory ceiling) and employee is not made out of coverage in ESI during payroll process in April & October months.

> **Open item flagged in BRD:** New requirement If an employee has both:

Out of Coverage  in August

Resigned/Relieved (REL) in September 30
 Then in October's ESI report, only RELIEVED should appear — not "Out of Coverage".

Profession Tax - Profession Tax is a state-level tax levied on individuals earning income through employment, profession, trade, or business. It is applicable in many Indian states and is governed by the respective state laws. For salaried employees, the employer is responsible for deducting the profession tax from salaries and remitting it to the state government. Profession tax needs to be paid on half yearly salary. Employer has to make the payment to the government for April to September on or before August 31st and for October to March on or before February 28th. When doing the payment actual salary for first 5 months are considered and 6th month salary needs to be estimated as profession tax due date is one month before the close of half yearly period. In Muziris, deduction from employee salary is made on August and February. Certain companies follow monthly deduction. Gross Salary is considered for the calculation of profession tax.

When an employee is relieved except on March and September, half yearly profession tax till that month needs to be deducted from salary.

**Profession tax slab is given below:**

| Half-Yearly Income Slab | Half-Yearly Professional Tax Rate |
| --- | --- |
| Up to Rs.11,999 | Not Applicable |
| Rs.12,000 to Rs 17,999 | Rs 320 (Rs.640 Per Annum) |
| Rs.18,000 to Rs 29,999 | Rs 450 (Rs.900 Per Annum) |
| Rs.30,000 to Rs 44,999 | Rs 600 (Rs.900 Per Annum) |
| Rs.45,000 to Rs 99,999 | Rs 750 (Rs.1500 Per Annum) |
| Rs.1,00,000 to Rs 1,24,999 | Rs.1000 (Rs.2,000 Per Annum) |
| Rs.1,25,000 onwards | Rs.1,250 (Rs.2,500 Per Annum) |

> **Open item flagged in BRD:** New requirement  Monthly PT Deduction:

PT should be deducted every month instead of a one-time deduction at the end of the half-year.

The total PT amount for the 6-month period should be divided equally across 6 months.

In the 6th (last) month, any rounding adjustment (excess or shortfall) must be applied to ensure exact deduction.

Panchayat:
First Period: Sep 1 – Feb 28 → Deduction ends in February
Second Period: Mar 1 – Aug 31 → Deduction ends in August

Municipality/Corporation:
First Period: Oct 1 – Mar 31 → Deduction ends in March
Second Period: Apr 1 – Sep 30 → Deduction ends in September

TDS (Tax deducted at source) - At present, payroll application does not include automated TDS calculation. It needs to be incorporated in the new solution. Now, the TDS amount given from the accounts department is fed to the payroll system through a Monthly Allowances & Deductions screen.

> **Open item flagged in BRD:** New requirement - Need an option to calculate TDS deduction in the new system.

Employer Contributions

Employer PF Contribution - Rate of Employer PF contribution is same as employee PF contribution (12% of PF Gross). Employer has no liability to contribute voluntarily above the statutory contribution even if the employee does so. But if the employer wishes to do so, it’s permitted.

> **Open item flagged in BRD:** New requirement - Need provision to enter Employer voluntary PF contribution.

> **Open item flagged in BRD:** New requirement - Employees and Employers should have the option to contribute:

Based on statutory limit (12% of ₹15,000 = ₹1,800)

On full PF salary (e.g., 12% of actual PF salary)

Fixed contribution or  voluntary PF(e.g., ₹2,000 )

**This applies to both:**

Employee PF Contribution

Employer PF Contribution

Employer ESI Contribution - Rate of employer ESI contribution is 3.25% of Gross Salary - Washing Allowance. All other rules remain same as in employee contribution.

#### 2.6 Shift

Shift Type: Specifies the shift of employee - If different employees work in different shifts, they can be grouped and rules like the start and end time of shift and working hours etc can be defined. Currently we have general day shift in most projects. But in a major project, there are 3 shifts for support teams. 1. 9 AM to 5.30 PM 2. 2 PM to 10.30 PM 3. 10 PM to 6.30 AM

For general shift, there is a flexible timing. Login time can be from 8.30 AM to 10 AM and log off time can be from 5 PM to 6.30 PM. Total login hours should be 8.30 hrs. Out of this, 1 hour is break time. So productive hours shall be 7.30 hrs

> **Open item flagged in BRD:** New requirement - It would be good if we can track the login and log out time and connect to time sheet.

Each shift must have an associated break duration (in minutes or HH:MM format).
This break time is to be automatically deducted from the total shift duration when calculating net working hours.

#### 2.7 Off-day

Through this tab, both Holiday and Off day groups of an employee can be attached.

Holiday: This is a provision to define the holidays available for an employee. Currently the holiday list published for a year is applicable for all employees. There are 11 listed holidays in a year.

> **Open item flagged in BRD:** New requirement

At present, holidays are mapped at the branch level only.

All departments and employees under a branch share the same holiday group, which is insufficient for cases where:
Different departments (e.g., bakery vs office) follow different holiday rules.
Specific religious holidays apply only to select employees (e.g., Ramzan for Muslims only).

Off Day: Off days can be defined through this. In Muziris, different employee groups will have different off days. General group will have offs on all Sundays and any two Saturdays - either 1st & 3rd or 2nd & 4th. Project support teams will get off days equivalent to the above criteria but not necessarily on Saturdays and Sundays. It can be on any week days. Admin & housekeeping staff have off only on Sundays.

#### 2.8 Leave

Leave Group: This is an option to define leaves eligible for employees. A confirmed employee is eligible for 24 earned leaves in a leave year that starts on January and ends on December. A probationer is eligible for 12 leaves in a leave year.

> **Open item flagged in BRD:** New requirement Automatically allocate leaves to employees each month or year, based on the leave rules defined in the Leave Group structure (monthly or yearly basis), without manual intervention.

Apart from this, employees are eligible for 2 optional holidays in a year. Optional holidays are basically holidays not listed in the holiday list. They can be availed as leaves in connection with any national or local festivals. For employees in the payroll on January 01st, 2 optional holidays will be credited. Those who join after Jan 01st and till July 01st, 1 optional holiday will be awarded. If joining date is after July 01st, they are not eligible for optional holidays of that leave year.

Maternity Leave - Female employees are eligible for 182 days of maternity leave for their first two deliveries. After that, eligibility is only for 90 days. Currently, if the maternity leave crosses over a year, there is no provision to allocate it in one shot.

> **Open item flagged in BRD:** New requirement - Need a provision to allocate maternity leave that crosses over a year in one single entry.

Compensatory Off - Employees are eligible for compensatory offs that can be used as leaves when they work overtime. There are different types of comp offs currently in order to meet the different requirements in projects.

#### 2.9 Payment

Mode of Payment: Whether the employee is paid via Bank Transfer or Cash.

Bank Account Details: Details such as bank name, account number, and IFSC code for salary transfer.

> **Open item flagged in BRD:** New requirement To enable or disable WPS (Wage Protection System) applicability directly in the Employee Payment Information, without mapping through Employee Attribute Allocation.

#### 3. Qualification

This section records the employee’s educational background, including details of academic qualifications.

Educational Details: The employee's educational qualifications, institution name, year of passing, and relevant certifications.

#### 4. Career History

This section tracks the employee's previous work experience, providing a complete career history.

Previous Employment: Information about past employers, job titles, dates of joining, dates of relieving & salary

#### 5. Documents

This section is dedicated to KYC (Know Your Customer) documentation, ensuring the HR team has verified essential identity documents.

Aadhar/PAN/Passport etc details: Employee’s KYC number, Name, expiry date and upload scanned copy of the document.

#### 6. Family Details

This section collects family-related information of employees.

Family Members: Details of the employee's immediate family, including parents, spouse, children, and dependents, with their names, relationship to the employee, DOB and other details.

**Actions Available:**

Save as Draft: Allows partial entry to be saved and completed later.

Verification: Finalizes the record and triggers creation of official login credentials.

Cancel: Exit without saving changes.

Create a new amend whenever there is a change in the already fed information. Amendment date shall be first of the month.

## Employee List

The "Employee List" screen provides a centralized, real-time directory of all employees in the organization. Designed for HR and managerial users, this screen offers quick access to essential employee details and supports filtering, searching, and navigation to individual profiles for deeper information.

### Key Features:

Search & Filter Options:
Users can search employees by name, ID, designation, department, or location. Filters support narrowing down by employment status, joining date, gender etc.

Displays employee records in tiled and tabular format.

Download the required information of chosen employees into an excel

## Employee Upload

The Employee Upload feature allows HR/Admin users to add multiple employee records to the HRMS portal in bulk through a structured Excel file. This is especially useful during mass on-boarding, data migration from legacy systems, initial implementation of the HRMS or during bulk amendments.

### Key Features:

Bulk Upload via Template: Users can download a predefined Excel/CSV template for different sections in the employee screen. Excel sheets are available for personal, contact info, official, relieving, statutory, salary and payment sections separately.

Validation on upload: System automatically validates invalid formats, wrong payroll groups and lot more crucial data. Error messages are displayed for any failed rows, with a downloadable error log.

Preview before import: Users can preview the list of employees for confirmation before final submission.

Auto creation of employee profiles: Once validated, employee records are created automatically and listed in the Employee Directory.

Download of existing employee profiles: Current employee profile sections can be downloaded and modified and uploaded during amendments.

> **Open item flagged in BRD:** New requirement To simplify bulk employee creation and salary updates for companies where one person manages all branches, by allowing:

Single upload of Employee Master data (personal + official)
Single upload of salary increment data for employees across multiple branches

## Employee Bulk Verification

The Employee Bulk Verification feature enables HR/Admin users to efficiently review and validate multiple employee records uploaded through the bulk upload process. This ensures that only clean, accurate, and approved data is activated within the system, maintaining data integrity across the HRMS.

### Key Features:

Pending Verification List:
Displays a list of all newly uploaded employee records awaiting verification.

Bulk Verification: Approve selected/all verified records in one click.


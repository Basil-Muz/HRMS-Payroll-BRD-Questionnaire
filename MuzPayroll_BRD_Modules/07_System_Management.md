# System Management

> **Superseded:** The Masters section below is the original, too-thin BRD text. A proper Masters BRD,
> built from the live screen screenshots, now lives in [`07_Masters.md`](./07_Masters.md) — use that one.
> The Settings and User Rights Management content further down this file still stands for now, but the
> Product Manager has agreed to prepare a fresh BRD for Settings, which will supersede it too.

## Masters

System Management/Masters/Payroll Section

The Masters section within System Management is used to define the criteria and features that guide how various components are configured in Muzpayroll. The Payroll Master section enables HR department to set up and maintain the essential reference data for payroll processing. This document outlines the key factors included in the Payroll Mater section.

Key Features of the System Management/Masters/Payroll Section:

This section is comprised of several masters that define core payroll criteria.

Designation

Used to define the various designations within the company across all levels and hierarchy.

Department

Defines all the departments currently existing in the company.

Job Grade

Represents the job grades in the organization across all departments.

Government Job Grade

Defines the job grade as assigned by the government to different industry sectors.

Employee Type

Specifies the categories of employees. Currently, there are three types:
- Permanent
- Probationer
- Trainee

Attendance and Leave

Establishes the various attributes related to attendance and leave. For example:

- Present (P)

- Compensatory Off (CO)

- LOP (Loss of Pay)

- Holiday (H)

Other attributes as defined in the system.

Salary Head

Defines the various components of the salary structure, which include:

- Basic Salary, Bonus, HRA, ESI, PF, etc.

It encompasses allowances, deductions, and company contributions.

Advance Type

Specifies the types of advances available, such as:

- Salary Advance

- Loans

DA Centre

Refers to the dearness allowance center allocated by the Kerala government for multiple locations. (For Muzpayroll, only Ernakulam is included in the DA Centre.)

Projects

To create the project teams currently available in the company

Reports & Letters

Any statutory or important reports and letters can be uploaded to the system and can be retrieved for future reference.

Employee Reminders

System Management/Masters/Organization

Company

Company can be created using this master screen

Branch

Different branches of the company can be created

Location

If a branch has different locations, that can be created using this

Company List

List of companies created can be viewed in the list

Branch List

List of branches of the company can be viewed

Location List

List of various locations can be viewed

License Agreement

System Management/Masters

Status Update

Masters that are created can be deactivated if that becomes redundant using this option. List of active/inactive masters and active/inactive dates can be viewed.

System Management/Masters/User Rights

User

All the users of the system are listed out in this. New employee users can be created also if not generated automatically.

Reset Password

User password can be reset and new password can be assigned using this master.

## System Management - Settings - Prd

The Settings section in the payroll solution is the foundational configuration area that allows payroll administrators to define, customize, and control how the payroll system operates. Properly setting up this module ensures that the payroll process runs smoothly, aligns with company policies, and complies with statutory regulations.

## Payroll Group

Payroll groups can be created for different purposes or core functions in payroll processing. Here are the identified purposes:

Minimum Wages - As Muziris belongs to the IT industry, a minimum wages group called IT industry is created.

DA Industry Group - Certain companies follow variable DA system. In that case, DA given to employees is calculated monthly on the basis of the price index published by government in regular intervals. DA calculation is based on the below mentioned method. As Muziris is classified as Shops & Establishment, a DA group called Shops is created to define the DA rules. Anytime we go for variable DA, this process can be utilized.

Attendance & Leave - Muziris has two classifications as far as leave eligibility in concerned. Leaves applicable for confirmed employees and probationers. More categories might be defined in the future. Two groups named Confirmed and Probationer is created currently.

Holiday - Muziris holidays are applicable for all employees. So one group named General is created

Shift - One group named General is created. But more groups with specific rules might be needed in the future as certain project supports teams are working in 3 shifts including night shift.

Off Day - Currently different employee groups have different off days. Depending on that, three groups are created. 1. Off Day Group 1 & 3 - Employees with Sundays and first and third Saturdays are added to this group. 2. Off Day Group 2 & 4 - Employees with Sundays and second and fourth Saturdays are added to this group. 3. Off Day Sunday - Employees with off days only on Sundays are added to this group.

Salary Head - Depending upon PF & ESI coverage, payroll groups are created and employees are added. Employees with Only PF, Both PF & ESI, No PF and ESI are grouped through this.

Profession Tax - Only one group called general is created as profession tax rules are same for all employees.

It is mandatory that groups are created for all purposes even if there is only one group that’s common for all employees.

## Minimum Wages Group

Rules applicable for each group created under Payroll group purpose “minimum wages” as per the minimum wages act are defined through this option. All the govt job grades that are defined through the masters screen “Govt Job Grade” are listed out here and minimum wages applicable for each grade needs to be entered and verified. This minimum wages data is accessed for different processes including bonus process, where the bonus calculation is dependent on the minimum wages also. Whenever govt. modifies the minimum wages, the changes can be updated by creating a new amendment.

Need a provision to cross check the salary of an employee with the minimum wages defined here when a new employee is created or employee salary is amended. This is to ensure that the employee basic plus DA is above the  specified minimum wages.

## Da Base Point And Rate Settings

DA base point and rate is defined for the already created DA group though this option. As Muziris is categorized under Shops & Commercial Establishments, DA base point and rate for shops is entered here. If a company has branches in different states of India and if the DA base point and rate varies in different states, that also can be defined by choosing the state. Wage type whether monthly or daily also has to be chosen.

## Da Index Settings

In a state there will be many DA centers. In Kerala, there are 17 DA centers. Price index for all the DA centers can be entered through this settings screen. If more states, need with different DA centers need to be added, that also can be done.

We have defined only DA center Ernakulam as we have presence only here and our payroll is also processed under Ernakulam center.

## Attendance & Leave Group

Two groups named Confirmed and Probationer was created under payroll group settings screen. Now it’s time to define the rules for these groups - which all leaves are applicable for these groups, quantum of leaves, when they are credited, which all leaves have carry forward and encashment, expiry date of leaves etc.

In Muziris all leaves are applicable to every employees. Only difference is the quantum of earned leaves. For confirmed employees, there are 24 earned leaves in a year and for probationers there are 12 earned leaves. Other leaves are optional holidays, maternity leave, loss of pay and compensatory offs. Under compensatory offs, there are holiday comp offs, Sunday comp offs and rest days.

## Holiday & Off Day Group

Holidays in a current leave year can be defined through this settings screen at the beginning of the year. It has a tile view and a list view. Entry is done through the list view screen.

Off days can all be defined through this settings screen for each group created through Payroll group settings screen. Here also, the list view screen is used to make the entry. There is a set off day option through which the off days ( Sundays and Saturdays) can be set as per the group. This is a very good feature of this system.

Both holidays and off days should be defined as on 01st day of the leave year.

## Shift Group

Different shifts and shift timings can be defined through this settings screen. Apart from creating the shift, it doesn’t seem to have any implications elsewhere in the system.

We have create a general shift and two shift timings are attached to it. One for all employees except housekeeping staff. Second one is the housekeeping timings.

## Salary Head Group

Different salary head groups were created using payroll group settings screen. Here we define the different allowances, deductions and company contributions attached to each group.

Allowances are defined if they are fixed, variable or calculated by a given formula. In the rules section, there is provision to set the formula - by selecting the allowances to be considered and the percentage. Certain allowances which are not included in the gross salary are defined as internally calculated. A rounding factor also needs to be given as loss of pay calculation may result in recurring decimal amounts.

Deductions can be statutory or general. Deductions like PF and ESI are set as calculated and the calculation formula needs to be entered in the rules section. Profession tax deduction is internally calculated by fetching the details given in the profession tax group. TDS deduction is set as variable as TDS calculation is not currently covered in payroll solution. TDS calculator needs to be included in the new system.

Company contributions to PF and ESI also need to be calculated. Formula to be entered in the rules section.

## Profession Tax Group

Profession tax slab for the General group created has to be entered here based on which half yearly profession tax calculation will happen.

## Payroll Settings

This is a settings screen through which certain payroll related parameters are defined. It has options to define parameters for company and branch.

Under company settings, there are general and wage settings.

Under general settings, the leave year is defined. Currently, the leave year start month is given as January, as Muziris follows a leave year from January to December.

Under wage settings, there is provision to attach the minimum wages group, DA industry group and DA center for the company.

Under Branch settings, there are 6 sections:

General settings - Provision to attach the act and laws applicable to the branch, enter the establishment number and LIN.

Wage settings - Many wage related parameters applicable to the establishment are defined here:

Wage Calculation Type - Month Days

No. Of month days

Minimum wages group - Attach the applicable group

DA industry group - Attach the applicable group

Da center - Attach the applicable group

CCA Applicable

Minimum CCA

Salary Head group - Attach the applicable group

Profession Tax group - Attach the applicable group

Attendance & Leave group - Attach the applicable group

Holiday Group - Attach the applicable group

Off Day group - Attach the applicable group

Shift group - Attach the applicable group

Advance maximum limit

Advance warning limit

Salary payment date

Full day working hours

Half day working hours

Off day settings applicable

Time sheet applicable

PF settings

Establishment Number

PF Rate of company contribution (%)

Rate of EPS contribution (%)

Wage ceiling - PF Limit

EPS Age limit

Maximum company contribution amount to PF

PF rate of employee contribution (%)

ESI settings

Establishment Number

Employee contribution (%)

Employer contribution (%)

Wage ceiling - ESI limit

WF settings (Welfare Fund)

Establishment Number

Employee contribution amount

Employer contribution amount

Bonus Settings

Minimum Bonus (%)

Maximum Bonus (%)

Minimum Bonus Calculation Amount

Maximum Amount for Bonus Eligibility

Minimum working days for bonus eligibility

As this system is defined as a statutorily compliant system, all the labour laws should be covered to position it as intended.

## Act Abstract

This is a settings screen through which, a brief description about each labour law/act applicable to the establishment can be entered and stored in the system.

## Report Definition

This is a settings screen through which the allowances and deductions that should appear in a particular report can be chosen.

## Incentives Settings

Through this settings screen, incentives declared for different employees can be entered. Details like incentive amount, start date and end date, credit frequency and payout frequency can be entered. Certain incentives are credited and paid out every month but certain incentives are credited every month but pay out happens half yearly.

## User Rights Management

User rights to the payroll solution is defined through the settings in the User rights management module.

## User Group

User groups are created like Employees, HRD, Team Leads etc are created so that employees can be grouped and rights be given.

## Location Group

Location groups are created and attach employees to it. This is important when a company has different locations and rights need to be given based on working locations.

## User Group Rights

Rights are assigned to the user groups created. Rights can be assigned separately to employer portal and employee portal. It can be defined which user groups shall be given rights to which all screens/options in the employer/employee portals. Add/Edit/Delete rights can be assigned.

## Location Group Rights

Here the rights to users belonging to different locations are assigned for both portals.

## User Settings

Through this settings screen, each employee can be mapped to the user and location groups and in turn the employee gets access to the assigned modules/options. More than one group can be attached to give access to more options depending upon their roles.

## Location And Group Rights Matching

Through this, the location of the company and the location group is mapped.

## Authorization User Allocation

Through this, verification/authorization rights of options can be assigned to employees, who ever is responsible.

## Employee And User Linking

Through this, employee user generated while creating an employee is linked to the employee manually. Normally this happens while employee creation itself.

## Company Allocation

This was created for Norms. Not used in Muziris.


> **Note:** The BRD lists "Database Back Up" as a sub-item of System Management, but the document does not describe it anywhere in the body (no trigger/schedule/restore flow given). Treat Database Back Up as an open item for BRD Finalization.

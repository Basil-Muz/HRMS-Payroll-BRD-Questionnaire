# Attendance & Leave Management

## Attendance And Leave Management Module

The Attendance and Leave Management Module forms a core part of the Payroll solution. It facilitates accurate tracking of employee working hours, systematic leave management, and seamless conversion of time sheets into official attendance records. This module ensures transparency, policy compliance, and operational efficiency in workforce management.

Key Features of the Attendance and Leave Management module:

Time sheet Upload: HR can fetch time sheet entries submitted by employees for any selected month, department, or employee group.

Level-wise Data Handling: Time sheets of senior management (Level 1) are automated while those of other employees (Level 2) are manually entered by employees in their employee portal are viewable.

Data Conversion to Attendance: Saved time sheets are directly converted to attendance.

Overtime & Short Time Calculation: Automatically identifies work hours that exceed or fall short of daily expected hours (7:30 hrs).

Leave Adjustment: Enables correction of incorrect leave entries through a structured deletion/update method.

## Features List

Employee Time Sheet Upload

Muster Roll

Attendance Conflict Management

Varying Weekly Off Allocation

Varying Shift Allocation

Compensatory Off Entry

Holiday Compensatory Off Entry

Leave Allocation/Deallocation

Leave Encashment

Leave Year End Process

## Employee Time Sheet Upload

This screen is used to fetch, review, and manage time sheet entries submitted by employees. Authorized users can view data month-wise and department-wise and save for further processing.

**Actions Available:**

Cancel: Exit the screen without saving changes.

Refresh: Reload the current screen data.

Proceed: Move to the next screen or stage in the process.

Apply: Implement filters & move to the next screen.

**Key Features:**

Month/Department Filter: Enables HR to filter employee time sheet data based on selected months, departments, or date range.

Level 1 (Senior Management): Time sheets are automatically populated when Level 1 is pressed.

Level 2 (Other Employees): Time sheets entered by employees in their employee portal are fetched when Level 2 is pressed.

Remove Upload: Allows deletion of time sheet upload done by supervisors for selected employees to allow for any correction that may be required.

Save: Once reviewed, data can be saved. Saved time sheets will be used in further attendance processing.

> **Open item flagged in BRD:** New requirement - Currently employees enter their working hours in the time sheet on their own. Data is not fetched from any other tools like biometric punching or some login tools. If any such tools recording time data can be integrated to Muzpayroll, then the time sheet will be more authentic.

## 2. Muster Roll

This screen converts saved time sheet data into official attendance records. It offers multiple filters to monitor, adjust, and confirm employee attendance and leave information.

**Filter Options:**

Employee

Leave Group Confirmed / Probationer

Gender

Department

Location

Specific Date Range

#### 2.1  Time Sheet

Displays month wise time sheet data saved from the Employee Time sheet Upload screen.

Total hours of each employee is shown.

Total working days is also shown.

When clicked on the employee name, a pop up is opened that shows the leave balance of the employee as on that month.

Time sheet is saved once again to populate data into Attendance/Leave section in the muster roll.

#### 2.2 Attendance/Leave

Entries of 7:30 hrs/day are marked as Present

Additional leave data is fetched from the Leave Application Module.

Data is available in table form for final verification.

**Shows the final attendance status including:**

P - Present

L - Leave

LOP - Loss of Pay

H - Holiday

OD - Off Day etc.

This is the official record that determines payroll implications.

Here also when clicked on the employee name, a pop up is opened that shows the leave balance of the employee as on that month.

Total LOP days and working days of each employee is shown.

When a particular employee row is highlighted, their weekly attendance summary is shown towards the bottom of the screen.

#### 2.3 Over Time

Over time working hours of each employee is displayed in this tab.

Total overtime in a month also is displayed against each employee

This record helps to identify employees who do overtime regularly and are overstretched.

#### 2.4 Short Time

Displays instances of employees working less than 7:30 hrs/day.

These under-time records help HR evaluate regular and unauthorized time shortages.

**Set Option (Correction Tool):**

Used to delete or update incorrect leave/attendance entries:

- Choose Set

- Select Dates

- Choose Leave Group

- Add '-' (hyphen) in the attendance field

- Click Set to delete the saved muster roll

Day Filter:  Specific  day or entire range

Leave Group : Confirmed, Probationer

Set option can be used for all/one employee

> **Open item flagged in BRD:** New requirement from Norms

**Multiple Attendance Input Sources:**

Supports: Biometric, Mobile App Punch (In/Out).

Punching data processed using custom rules.

**Holiday and Off-Day Integration:**

In real-life scenarios like Hartal, sudden strikes,the holiday is declared after the muster roll is already entered/saved.
If you add the holiday later, the system does not reflect NFH status correctly.

**Attendance Display:**

**Color-coded cells for:**

Leave, OD, NFH, OT, Short Time, etc.

Color mapping must match master leave/attendance heads.

**OT and Short Time Enhancements:**

Allow OT marking on OD/Leave days.

Include color in OT and ST

## 3.Attendance Conflict Management

After saving the muster roll, next process is to check for attendance conflicts. This is an option that lists out irregular time sheet entries. It shows if an employee has entered working hours on an Off day or a holiday. This happens when the employee is asked to do overtime on those days due to work exigencies. Any other irregularities are also tracked and rectified to ensure smooth attendance processing.

## 4.Varying Weekly Off Allocation

This option is used to allocate varying weekly off for a particular employee or a group of employees. In the employee screen, fixed off day has to be unchecked and then the system allows to allocate weekly off days on a monthly basis as per the requirement. But if it is on a permanent basis, it can be set through the common off day group itself.

> **Open item flagged in BRD:** New requirement from Norms

Fix conflict when employee master is fixed off, but leave group is varying off.

System must correctly apply off day status instead of showing LOP.

## 5.Varying Shift Allocation

Through this option, if an employee has varying shifts, that can be allocated. For this, the fixed shift option needs to be unchecked in the employee screen. Currently, this has no implications elsewhere in the payroll system which means it’s not connected to the attendance management process.

> **Open item flagged in BRD:** New requirements from Norms

**Auto Shift Reallocation:**

When shift modified, re-update the entire rotation plan for the employee.

Maintain detailed shift change logs.

**Bulk Shift Upload:**

**Upload shift plan via Excel with:**

Employee ID, Shift Code, Date, In-Time, Out-Time.

Auto update rotation + attendance impact.

**Color-coded Shift Screen:**

**Use different colors to mark:**

Applied Leave, OD, NFH, OT, Short Time.

Color codes must match master settings.

**Punching Based on Shift Duration:**

Mark attendance only using punch vs. shift time validation.

Restrict manual overrides unless authorized.

## 6.Compensatory Off Entry

Overtime hours entered by employees through the employee portal goes through recommendation and sanctioning process by the concerned supervisors. After sanctioning the applications reach the compensatory off entry screen in the employer portal for the approval of HR. This is basically to keep track of the total overtime in a month. So only view and approval is activated for this screen. Previously approved comp offs also can be viewed. This is available for selected employees, departments and for selected period of time. Need sorting for projects and comp off types also.

## 7.Holiday Compensatory Off Entry

As per Muziris holiday policy, if a listed holiday coincides with an off Saturday of an employee, he/she will be eligible for a holiday compensatory off. This will credited in to employees leave account in the month of that particular holiday. List of all eligible employees is shown and crediting is done on a select all and save. This holiday comp off has to be availed in that leave year itself. It has no encashment of carry forward to next year.

## 8.Leave Allocation/Deallocation

The Leave Allocation/Deallocation option under the Attendance & Leave Management module allows the HR Manager to allocate or deallocate leaves to employees based on different scenarios. Leave allocation is carried out based on specific transaction types, and the interface provides functionality tailored to each type. Each transaction type has distinct logic, rules, and date applicability for allocation.

**Transaction types:**

#### 1. Employee Joining

#### 2. Yearly Opening

#### 3. Promotion Leave

#### 4. Special Leave

#### 1. Employee Joining

This transaction type is used to allocate Earned Leaves (EL) and Optional Holidays (OH) to newly joined employees.

**Key Features:**

**Leave Types available for allocation:**

- Earned Leave (EL)

- Optional Holiday (OH)

Applicable Date (for Optional Holiday): Last day of the month

Earned Leave Allocation Date is the employee’s Date of Joining

The employee drop-down, lists only those who have the exact joining date entered in their profile

As per the company policy:
    - Confirmed employees are eligible for 2 Earned Leaves a month (24 EL a year)

- Probationers are eligible for 1 Earned Leave a month (12 EL a year)

- If an employee joins after 5th of any month they are not eligible for EL in that particular month during their joining.

- 2 OH for employees joining on Jan 1st

- 1 OH for those who join from Jan2nd to July 1st

- 0 for those who join after July 1st

Leave Count is be entered manually

If multiple employees joined in the same month, leave allocation must be performed individually by selecting their specific joining dates.

**New Requirements:**

Allow selection of start and end dates for a month to fetch a list of all employees who joined in that range

Enable multi-select or select all to allocate leaves to multiple employees in one go

Auto-populate the leave count based on the data pulled from the Employee Screen:

- Employee Type

- Joining Date

Yearly Opening

To allocate Earned Leaves and Optional Holidays to employees at the beginning of a new leave year.

**Key Features:**

Applicable Date: 1st January

**Leave Types allocated:**

- Earned Leave (EL)

- Optional Holiday (OH)

**Automatic leave population:**

- Confirmed Employees: 24 Earned Leaves a year

- Probationers: 12 Earned Leaves a a year

- Optional Holiday: 2 OH for employees in muster roll on Jan 1st

> **Open item flagged in BRD:** New Requirements

Edit option to modify populated leave values

Option to hold/recall/delete leaves in specific cases

- Even if full leaves for a year is allocated in the year beginning, if an employee takes a long leave of a month or more, proportional number of leaves must be deallocated from employees leave account.

- Similarly when an employee goes on Maternity leave, she will be eligible for maternity leave only. Earned Leave will not be credited for those 6 months. So if EL was already allocated during year beginning, it has to be deallocated.

- Another instance is employee resignation. Employees on notice period will have only 1 EL per month during the 3-month period. Allow deallocation of leaves for employees on notice period

#### 3. Promotion Leave

To allocate Earned Leave when an employee's status changes from Probationer to Confirmed.

**Key Features:**

Applicable Date: Beginning of the month

Employees current number of EL & OH can be viewed

Confirmed employees are eligible for 2 earned leaves a month, that is 24 leaves a year.

The  additional leave count needs to be entered manually

> **Open item flagged in BRD:** New Requirement - Auto-populate the additional leave count based on the data pulled from the Employee Screen. Below parameters are to be verified for this:

- Employee Type

- Joining Date

#### 4. Special Leave

To allocate special leave type, currently the available leave is maternity leave

**Key Features:**

Select the employee

Enter Date From and Date To

Leave Count: Needs to be entered manually

The leave can be allocated only for that particular leave year

If the maternity period continues to next year the maternity leave needs to be allocated at  the beginning of the next leave year.

> **Open item flagged in BRD:** New Requirement - There needs to be an option to allocate maternity leave that crosses to the following year in one entry.

**Auto Monthly Leave Allocation:**

Auto-allocate leaves (e.g., CL) at the start of each month.

## 9.Leave Encashment

This screen facilitates the encashment of eligible leaves. In Muziris, this is generally used for comp off encashment as encashment is allowed only for comp offs. Leave type and employee can be chosen from the search screen. Leave encashment screen shows the details of all comp offs available for that employee. For encashment, salary (CTC) of that employee on the comp off date is considered. So if an employee request for encashment of comp offs he earned in May 2025, the formula will be

(Salary (CTC) in May 2025/No. of days in May 2025) * No. Of comp offs to be encashed

Previous encashments can be viewed through show entered data option.

> **Open item flagged in BRD:** New requirement - This facility can be modified and make available in the employee portal so that employee can initiate the encashment process. And it needs to come to employer portal only for approval of the request.

## 10.Leave Year End Process

This is done at the end of the leave year to close out the current year's leave and prepare for the new leave year. Through this process, the unused carry forward leaves are transferred to the next year and non carry forward leaves are lapsed. As per Muziris policy, out of the total earned leave balance only two leaves get carry forward to the next year. If earned leave balance is less than 2, the available balance is transferred and check for optional holiday balance. If there is balance, the remaining leave is transferred from that. To sum up, two leaves will be transferred from the total balance of earned leaves and optional holidays.

When the screen is accessed, the list of employees and their leaves that are transferred are displayed and the process is done by select all and save. Apart from earned leaves and optional holidays, all compensatory offs are carry forward to next year. No carry forward for Sunday comp off, holiday comp off, rest day etc.

> **Open item flagged in BRD:** New requirement from Norms

**Auto Carry Forward of Leaves:**

Carry forward eligible leaves monthly or yearly automatically.

**Respect accumulation limit:**

If exceeded, stop carry forward and alert admin.

No manual processing needed.


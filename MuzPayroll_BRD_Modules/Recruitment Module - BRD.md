# **Business Requirements Document (BRD)** 

## **Recruitment Module – HRMS** 

**Document Owner:** HR Department 

**Business Owner:** HR 

**Module:** Recruitment 

**Purpose:** To define the business requirements for digitizing and managing the organization's end-to-end recruitment process. 

## **1. Purpose of the Recruitment Module** 

The Recruitment Module is intended to provide a centralized system for managing the complete recruitment lifecycle, starting from identification of a manpower requirement through candidate selection, offer release and joining. 

Currently, recruitment activities may involve emails, spreadsheets, resumes stored in different locations, manual follow-ups and separate communication with hiring managers. The HRMS should bring these activities together into a structured process. 

The module should provide **visibility, accountability and consistency** at every stage of recruitment. 

## **2. Objectives** 

The Recruitment Module should help the organization to: 

1. Standardize the recruitment process. 

2. Ensure that recruitment happens only against an approved manpower requirement. 

3. Provide clear visibility of open positions and their current status. 

4. Maintain a centralized candidate database. 

5. Track candidates throughout the recruitment lifecycle. 

6. Ensure timely interview scheduling and feedback. 

7. Reduce manual follow-ups between HR, interviewers and hiring managers. 

8. Maintain recruitment history for future reference. 

9. Track recruitment sources and effectiveness. 

10. Provide management with meaningful recruitment reports and dashboards. 

11. Reduce recruitment turnaround time. 

12. Improve the candidate experience through timely communication. 

## **3. Scope** 

The module should cover the following areas: 

### **A. Manpower Requirement** 

- Raising manpower requisitions 

- Defining the requirement - 

- New position/replacement 

- Hiring justification 

- Approval 

### **B. Recruitment** 

- Creating job openings 

- Candidate sourcing 

- Candidate database 

- Resume/application management 

- Screening and shortlisting 

### **C. Interview** 

- Interview scheduling 

- Interview panel allocation 

- Interview rounds 

- Interview evaluation 

- Feedback 

### **D. Selection** 

- Candidate selection 

- Salary/CTC discussion 

- Offer approval 

- Offer release 

- Offer acceptance/rejection 

### **E. Joining** 

- Joining confirmation 

- Expected joining date 

- Actual joining 

- Candidate dropout tracking 

- Position closure 

### **F. Reporting** 

- Recruitment pipeline 

- Open positions 

- Recruitment source 

- Time-to-hire 

- Offer status 

- Joining status 

- Recruiter/recruitment activity 

## **4. Users of the Module** 

|**User**|**Main Responsibility**|
|---|---|
|HR|Overall recruitment management|
|Recruiter|Candidate sourcing, screening and coordination|
|Department/Project Head|Raise manpower requirement and participate in<br>selection|
|Hiring Manager|Define requirement and evaluate candidates|
|Interview Panel|Conduct interview and provide feedback|
|Management|Approve manpower/offer wherever applicable|
|Employee|Employee referral, if enabled|



The system should provide **different levels of access depending on the user's role** . For example, an interviewer should not necessarily have access to confidential salary or offer information. 

## **5. Overall Recruitment Process** 

The desired business flow is: 

### **Manpower Requirement** 

**Approval** 

**Job Opening Created** 

**Candidate Sourcing** 

**Application/Resume Received** 

**Screening Shortlisting** 

**Interview** 

**Evaluation & Feedback** 

**Selection** 

**Salary Discussion / Approval** 

**Offer** 

**Offer Acceptance** 

**Joining** 

**Position Closure** 

Not every recruitment may follow exactly the same number of stages. The process should allow different interview rounds depending on the position. 

## **6. Manpower Requisition** 

### **6.1 Purpose** 

The manpower requisition is the formal request raised by a department for hiring an employee. 

Recruitment should normally begin only after the required approvals are obtained. 

The requisition should capture sufficient information for HR to understand **what resource is required, why it is required and when it is required** . 

## **6.2 Types of Requirement** 

The requester should be able to identify whether the requirement is: 

- New Position 

- Replacement 

- Additional Resource 

- Temporary/Contract Resource 

- Other 

### **Replacement** 

A replacement requirement is raised when an existing position becomes vacant due to resignation, termination, transfer, promotion, etc. 

The system should preferably allow the requester to identify the employee being replaced. 

### **New Position** 

A new position is created when the organization does not currently have the required position/resource. 

## **7. Manpower Requisition Fields** 

The requisition should contain, at minimum: 

|**Field**|**Description**|
|---|---|
|Request Date|Date on which requirement is raised|
|Requesting Department|Department requiring the resource|
|Requesting Manager|Person raising the requirement|
|Position/Designation|Position to be recruited|
|Number of Openings|Number of employees required|
|Requirement Type|New/Replacement/Additional etc.|
|Replacement Employee|Existing employee being replaced, if<br>applicable|
|Reason for Replacement|Reason for vacancy|
|Justification|Business reason for hiring|
|Required Skills|Skills required for the position|
|Experience|Required experience|
|Qualification|Educationalqualification|
|Employment Type|Permanent/Contract/Other|
|Work Location|Location of the position|
|Reporting Manager|Person to whom employee will report|
|Expected Joining Date|When the resource is required|
|Priority|Normal/Urgent/Critical|
|Budget/CTC Range|Expected compensation range|
|Job Description|Details of responsibilities|
|Additional Remarks|Other relevant information|



## **8. Justification** 

The **Justification** field should explain why the organization needs to hire the resource. 

It should not simply say: 

"Need one developer." 

Instead, it should explain the business requirement. 

### **Example – Replacement** 

"Replacement required for the Senior Developer who resigned. The position is required to continue ongoing project activities without impacting delivery." 

### **Example – New Position** 

"Additional resource required due to increased project workload and 

new client implementation requirements." 

### **Example – Urgent Requirement** 

"Resource required urgently to meet the committed project delivery 

timeline." 

The justification should be visible to the approving authorities. 

## **9. Approval Workflow** 

The system should support an approval process for manpower requisitions. 

The exact approval hierarchy should be configurable according to organizational policy. 

For example: 

### **Requesting Manager → Department Head → HR → Management** 

The workflow may differ depending on: 

- Department 

- Position 

- Salary range 

- New/replacement requirement 

- Urgency 

- Organization policy 

### **Approval actions** 

- Approver should be able to: 

- Approve 

- Reject 

- Send Back for Clarification 

Where appropriate, comments should be recorded. 

The system should maintain the **approval history** . 

## **10. Job Opening** 

Once the manpower requirement is approved, HR should be able to create/open the recruitment position. 

The job opening should be linked to the approved manpower requisition. 

### **Job Opening Information** 

- Job title 

- Department 

- Number of vacancies 

- Job description 

- Required skills 

- Experience 

- Qualification 

- Location 

- Employment type 

- Salary/CTC range 

- Hiring manager 

- Recruiter 

- Expected joining date 

- Priority 

- Opening date 

- Closing date/status 

This avoids HR having to enter the same information again. 

## **11. Job Posting Management** 

HR should be able to manage where and how a position is advertised. 

Possible sources include: 

- Company career page 

- Employee referral 

- Job portals 

- LinkedIn 

- Recruitment agencies 

- Consultants 

- Direct applications 

- Internal sourcing 

- Existing candidate database 

The system should capture the **source of every candidate** . 

This is important because HR should be able to determine which recruitment sources are actually effective. 

## **12. Candidate Database** 

The candidate database should act as a centralized repository of candidates. 

A candidate should ideally have **one profile** , even if the candidate applies for multiple positions. 

The system should help prevent unnecessary duplicate candidate records. 

### **Candidate Information** 

### **Personal** 

- Candidate name 

- Mobile number 

- Email 

- Location 

### **Professional** 

- Current organization 

- Current designation 

- Total experience 

- Relevant experience 

- Current CTC 

- Expected CTC 

- Notice period 

- Skills 

- Qualification 

### **Recruitment Information** 

- Source 

- Referred by 

- Position applied for 

- Recruiter 

- Date applied 

- Current status 

### **Documents** 

- Resume 

- Other relevant documents 

## **13. Resume/Application Management** 

This area should allow HR to manage resumes received for an opening. 

The system should allow HR to: 

- Upload resumes 

- View resumes 

- Associate resume with candidate 

- Shortlist candidates 

- Reject candidates 

- Add screening comments 

- Move candidates to the next stage 

The purpose is to make screening easier and avoid maintaining separate Excel lists. 

## **14. Resume Tracking vs Candidate Tracking** 

These two should **not necessarily be treated as two separate modules** . 

### **Resume/Application Tracking** 

Focuses on the application during the initial screening stage. 

Example: 

**Received → Under Screening → Shortlisted → Rejected** 

### **Candidate Tracking** 

Follows the candidate through the complete recruitment process. 

Example: 

### **Applied → Shortlisted → Technical Interview → HR Interview → Selected →** 

### **Offered → Joined** 

Therefore, in the HRMS, it would be better to have **one candidate recruitment lifecycle** , with screening as one of its stages. 

## **15. Candidate Screening** 

HR should be able to evaluate candidates against the job requirement before scheduling interviews. 

Screening may include: 

- Qualification 

- Experience 

- Required skills 

- Relevant industry experience 

- Current CTC 

- Expected CTC 

- Notice period 

- Location 

- Communication 

- Other job-specific criteria 

- HR should be able to record screening remarks. 

### **Example** 

"Technically suitable. Expected CTC within range. Notice period acceptable. Shortlist for technical interview." 

## **16. Candidate Status** 

The system should maintain a clear status for every candidate. 

Suggested statuses: 

- Applied 

- Under Screening 

- Shortlisted 

- Interview Scheduled 

- Interview Completed 

- Selected 

- On Hold 

- Rejected 

- Offer in Progress 

- Offer Released 

- Offer Accepted 

- Offer Declined 

- Joined 

- Candidate Withdrawn 

- No Show 

- Position Closed 

The organization should be able to configure statuses according to its recruitment process. 

## **17. Interview Management** 

HR should be able to schedule interviews for shortlisted candidates. 

### **Information to be captured** 

- Candidate 

- Position 

- Interview round 

- Interview date 

- Interview time 

- Interviewer/panel 

- Interview type 

- Location/meeting details 

- Remarks 

### **Interview Types** 

For example: 

- HR Interview 

- Technical Interview 

- Managerial Interview 

- Client Interview 

- Final Interview 

The system should support **multiple rounds for the same candidate** . It should also support written tests, machine tests, group discussions etc. 

## **18. Interview Scheduling** 

The system should help HR coordinate interviews between candidates and interviewers. 

HR should be able to: 

- Schedule interview 

- Reschedule interview 

- Cancel interview 

- Assign interviewer 

- Record interview outcome 

- Send notification/reminder 

Interview history should remain available against the candidate. 

## **19. Interview Evaluation & Feedback** 

After an interview, the interviewer should provide feedback in the HRMS. 

The purpose is to avoid feedback being lost in emails or informal communication. 

### **Evaluation could include:** 

|**Parameter**|**Rating/Feedback**|
|---|---|
|Technical Knowledge||
|Relevant Experience||
|Problem Solving||
|Communication||
|Attitude||
|Role Suitability||



Overall Assessment 

The exact parameters may vary by role. 

### **Final Recommendation** 

The interviewer may select: 

- Strongly Recommended 

- Recommended 

- Hold 

- Not Recommended 

The interviewer should also have a comments field. 

## **20. Selection** 

Once all required interviews are completed, HR/hiring authority should be able to record the final selection decision. 

The selection decision should consider: 

- Interview feedback 

- Candidate suitability 

- Expected CTC 

- Notice period 

- Position requirement 

- Hiring manager recommendation 

The system should retain the complete selection history. 

## **21. Offer Management** 

Once a candidate is selected, HR should be able to initiate the offer process. 

The offer information may include: 

- Candidate 

- Designation 

- Department 

- Reporting Manager 

- CTC 

- Salary structure 

- Proposed joining date 

- Work location 

- Employment type 

- Offer validity 

- Other applicable terms 

Where required, the offer should go through an approval process before being released. 

## **22. Offer Status** 

The system should track: 

**Offer Preparation → Approval Pending → Offer Released → Accepted / Declined / Expired** 

This is important because **selection does not necessarily mean joining** . 

For example: 

Candidate selected → Offer released → Offer declined 

This should be visible separately from a rejected candidate. 

## **23. Joining Tracking** 

HR should be able to track selected candidates until their actual date of joining. 

Information should include: 

- Expected joining date 

- Confirmed joining date 

- Actual joining date 

- Joining status 

- Pre-joining communication 

- Candidate withdrawal 

Reason for non-joining, where available 

## **24. Candidate Dropout / No-Show** 

The system should distinguish between: 

- Candidate rejected 

- Candidate withdrew 

- Candidate declined offer 

- Candidate did not join 

- Candidate did not attend interview 

- Position cancelled 

This distinction is important for recruitment analysis. 

For example, **offer decline** and **candidate rejection** are completely different recruitment outcomes. 

## **25. Position Closure** 

A recruitment position should be closed when: 

- Required number of candidates have joined, or 

- Requirement is cancelled, or 

- Position is no longer required. 

- The closure should capture: 

- Closure date 

- Reason 

- Number of positions filled 

- Number of positions cancelled, if applicable 

- A closed position should not continue to appear as an active vacancy. 

## **26. Notifications and Reminders** 

The HRMS should provide notifications for important recruitment activities. 

### **Examples** 

### **Manpower Requisition** 

- Approval pending 

- Request approved 

- Request rejected 

### **Interview** 

- Interview scheduled 

- Interview reminder 

 Feedback pending 

### **Offer** 

- Offer approval pending 

- Offer released 

- Offer acceptance pending 

### **Joining** 

- Upcoming joining 

- Candidate has not confirmed joining 

- Candidate did not join 

Notifications should be configurable based on the activity and user role. 

## **27. Recruitment Dashboard** 

The recruitment dashboard should give HR and management a quick overview of recruitment activity. 

### **Key information could include:** 

- Total open positions 

- New requisitions 

- Pending approvals 

- Candidates under screening 

- Interviews scheduled 

- Feedback pending 

- Candidates selected 

- Offers pending 

- Offers accepted 

- Candidates joining 

- Positions closed 

## **28. Recruitment Reports** 

The system should provide reports such as: 

### **Position-wise** 

- Open positions 

- Filled positions 

- Pending positions 

- Ageing of vacancies 

### **Candidate-wise** 

- Candidate pipeline 

- Candidate status 

- Interview history 

- Offer status 

### **Source-wise** 

- Candidates received by source 

- Shortlisted by source 

- Selected by source 

- Joined by source 

### **Recruitment Performance** 

- Time taken to fill position 

- Time from application to selection 

- Offer acceptance rate 

- Joining ratio 

- Candidate dropout rate 

## **29. Recruitment Source Analysis** 

This is particularly useful for HR. 

For example: 

|**Source**|**Applications**|**Shortlisted**|**Selected**|**Joined**|
|---|---|---|---|---|
|Employee Referral|30|12|5|4|
|LinkedIn|50|8|2|1|
|Job Portal|100|15|4|3|
|Consultant|20|5|3|2|



This helps HR determine which recruitment channels are actually producing results. 

## **30. Recruitment Turnaround Time** 

The system should capture important dates so that HR can measure recruitment efficiency. 

For example: 

**Requisition Date → Approval Date → Position Opened → Candidate Shortlisted → Interview → Selection → Offer → Joining** 

This will allow HR to identify where delays occur. 

## **31. Candidate History** 

A candidate's recruitment history should remain available. 

For example: 

Candidate A 

Applied for Software Developer – June 2026 Rejected after technical interview Applied again for Senior Developer – September 2026 Shortlisted 

Selected 

Offer accepted 

This prevents HR from treating the same candidate as a completely new candidate each time. 

## **32. Employee Referral** 

If employee referral is included in the module, employees should be able to submit candidates. 

The system should capture: 

- Referring employee 

- Candidate name 

- Contact details 

- Position referred for 

- Resume 

- Date of referral 

- Candidate status 

The referral should remain linked to the candidate throughout recruitment. 

## **33. Business Rules** 

The following business rules are recommended: 

1. Recruitment should normally be initiated against an approved manpower requirement. 

2. Every candidate should have a recruitment status. 

3. A candidate should not be unnecessarily duplicated in the candidate database. 

4. Interview feedback should be recorded after each interview round. 

5. A candidate should not be marked as finally selected without completing the required interview process. 

6. Offer release should require applicable approval. 

7. Offer acceptance and joining should be tracked separately. 

8. Candidate rejection and candidate withdrawal should be treated as different statuses. 

9. A filled position should not remain as an open vacancy. 

10. Recruitment history should be retained for future reference. 

11. Confidential compensation information should be visible only to authorized users. 

12. Changes to important recruitment decisions should be traceable. 

## **34. Exceptions / Special Cases** 

The system should accommodate situations such as: 

### **Candidate applies for multiple positions** 

The same candidate should not necessarily require multiple master profiles. 

### **Candidate is put on hold** 

The candidate can remain in the database without being treated as rejected. 

### **Position cancelled** 

Candidates associated with the position should be appropriately updated. 

### **Candidate declines offer** 

The candidate should not be marked as rejected. 

### **Candidate does not join** 

The candidate should be marked as a non-joiner rather than rejected. 

### **Internal candidate** 

Internal applications should be distinguishable from external candidates. 

### **Rehire** 

Previously employed candidates should be identifiable. 

## **35. Data Visibility** 

Different users should see only the information relevant to their role. 

For example: 

### **Interviewer** 

- Candidate profile 

- Resume 

- Job requirement 

- Interview details 

- Evaluation form 

### **Hiring Manager** 

- Candidate details 

- Interview feedback 

- Recruitment status 

### **HR** 

- Complete recruitment information 

### **Management** 

- Relevant recruitment and approval information 

### **Candidate** 

- Only information applicable to the candidate, if a candidate portal is provided. 

## **36. Audit & History** 

The HRMS should maintain recruitment history such as: 

- Who raised the requisition 

- Who approved/rejected it 

- When the position was opened 

- Who changed candidate status 

- Interview feedback 

- Selection decision 

- Offer approval 

- Offer status 

- Joining status 

The objective is to ensure accountability and provide a reliable recruitment record. 

## **37. Success Measures** 

The Recruitment Module should ultimately enable HR to measure: 

- Reduction in recruitment turnaround time 

- Reduction in manual recruitment tracking 

- Faster approval cycle 

- Faster interview feedback 

- Better visibility of open positions 

- Better source effectiveness 

- Offer acceptance rate 

- Joining ratio 

- Vacancy ageing 

- Recruitment workload 

## **38. Recommended Recruitment Status Flow** 

**Applied** 

### **Screening** 

### **Shortlisted** 

### **Interview** 

### **Selected / Rejected / Hold** 

### **Offer** 

### **Offer Accepted / Declined** 

### **Joined / Did Not Join** 

Within **Interview** , the system can have multiple rounds rather than creating a separate overall candidate status for every round. 


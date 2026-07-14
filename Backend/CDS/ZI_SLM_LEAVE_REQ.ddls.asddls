@AbapCatalog.viewEnhancementCategory: [#NONE]
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Leave Request Interface View'

define root view entity ZI_SLM_LEAVE_REQ
  as select from zslm_leave_req

  association [1..1] to ZI_SLM_EMPLOYEE as _Employee
    on $projection.EmployeeId = _Employee.EmployeeId

{
  key leave_id     as LeaveId,

      employee_id  as EmployeeId,

      leave_type   as LeaveType,

      start_date   as StartDate,
      end_date     as EndDate,

      reason       as Reason,

      status       as Status,

      created_by   as CreatedBy,
      created_at   as CreatedAt,
      changed_by   as ChangedBy,
      changed_at   as ChangedAt,

      _Employee 
}

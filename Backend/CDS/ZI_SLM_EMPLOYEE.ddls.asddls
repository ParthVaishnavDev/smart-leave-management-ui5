@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Interface view for employee'
@Metadata.ignorePropagatedAnnotations: true
define view entity ZI_SLM_EMPLOYEE as select from zslm_employee
association [1..1] to ZI_SLM_DEPARTMENT as _Department 
on $projection.DeptId = _Department.DeptId
association [0..*] to ZI_SLM_LEAVE_REQ as _LeaveRequests
    on $projection.EmployeeId = _LeaveRequests.EmployeeId
{
    key employee_id as EmployeeId,
  first_name   as FirstName  ,
  last_name     as LastName,
   email        as Email,  
  dept_id        as DeptId,
  created_by  as CreatedBy,      
  created_at     as CreatedAt,
  changed_by      as ChangedBy,
  changed_at      as ChangedAt ,
  _Department ,
  _LeaveRequests
}

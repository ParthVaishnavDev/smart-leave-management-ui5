@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Consumption View for Smart Leave Management'
@Metadata.allowExtensions: true

define root view entity ZC_SLM_LEAVE_REQ
  provider contract transactional_query
  as projection on ZI_SLM_LEAVE_REQ
{
  key LeaveId,
      EmployeeId,
      LeaveType,
      StartDate,
      EndDate,
      Reason,
      Status,
      CreatedBy,
      CreatedAt,
      ChangedBy,
      ChangedAt
}

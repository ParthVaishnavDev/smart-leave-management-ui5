@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Interface view for department'
@Metadata.ignorePropagatedAnnotations: true
define view entity ZI_SLM_DEPARTMENT as select from zslm_department
{
    
  key dept_id     as DeptId,

      dept_name   as DeptName,

      created_by  as CreatedBy,
      created_at  as CreatedAt,

      changed_by  as ChangedBy,
      changed_at  as ChangedAt

}

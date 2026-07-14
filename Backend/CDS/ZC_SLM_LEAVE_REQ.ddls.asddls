projection;
strict ( 2 );

define behavior for ZC_SLM_LEAVE_REQ
{
  use create;
  use update;
  use delete;

  use action Approve;
  use action Reject;
}

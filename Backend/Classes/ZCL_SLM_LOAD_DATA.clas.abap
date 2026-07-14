CLASS zcl_slm_data_load DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.

    INTERFACES if_oo_adt_classrun .
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS zcl_slm_data_load IMPLEMENTATION.


  METHOD if_oo_adt_classrun~main.

  DATA : lt_dept TYPE TABLE OF zslm_department,
         lt_employee TYPE TABLE OF zslm_employee,
         lt_leave TYPE TABLE OF zslm_leave_req .

  lt_dept = VALUE #(

 ( dept_id = 'D001'
   dept_name = 'Human Resources'
   created_by = sy-uname
   changed_by = sy-uname )

 ( dept_id = 'D002'
   dept_name = 'Information Technology'
   created_by = sy-uname
   changed_by = sy-uname )

 ( dept_id = 'D003'
   dept_name = 'Finance'
   created_by = sy-uname
   changed_by = sy-uname )

 ( dept_id = 'D004'
   dept_name = 'Administration'
   created_by = sy-uname
   changed_by = sy-uname )

).

INSERT zslm_department FROM TABLE @lt_dept.

lt_employee = VALUE #(

 ( employee_id = 'EMP001'
   first_name  = 'Parth'
   last_name   = 'Vaishnav'
   email       = 'parth@company.com'
   dept_id     = 'D002'
   created_by  = sy-uname
   changed_by  = sy-uname )

 ( employee_id = 'EMP002'
   first_name  = 'Rahul'
   last_name   = 'Patel'
   email       = 'rahul@company.com'
   dept_id     = 'D001'
   created_by  = sy-uname
   changed_by  = sy-uname )

 ( employee_id = 'EMP003'
   first_name  = 'Amit'
   last_name   = 'Shah'
   email       = 'amit@company.com'
   dept_id     = 'D003'
   created_by  = sy-uname
   changed_by  = sy-uname )

).
INSERT zslm_employee FROM TABLE @lt_employee .

lt_leave = VALUE #(

 ( leave_id    = 'LV001'
   employee_id = 'EMP001'
   leave_type  = 'CASUAL'
   start_date  = '20260801'
   end_date    = '20260803'
   reason      = 'Family Function'
   status      = 'PENDING'
   created_by  = sy-uname
   changed_by  = sy-uname )

 ( leave_id    = 'LV002'
   employee_id = 'EMP002'
   leave_type  = 'SICK'
   start_date  = '20260810'
   end_date    = '20260812'
   reason      = 'Medical Rest'
   status      = 'APPROVED'
   created_by  = sy-uname
   changed_by  = sy-uname )

 ( leave_id    = 'LV003'
   employee_id = 'EMP003'
   leave_type  = 'ANNUAL'
   start_date  = '20260820'
   end_date    = '20260825'
   reason      = 'Vacation'
   status      = 'REJECTED'
   created_by  = sy-uname
   changed_by  = sy-uname )

).

INSERT zslm_leave_req FROM TABLE @lt_leave.

out->write( 'Sample data loaded successfully' ).


  ENDMETHOD.
ENDCLASS.

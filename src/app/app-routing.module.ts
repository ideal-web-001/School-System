import { ApplicationInitStatus, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminDashboardComponent } from './dashboard/admin/admin-dashboard/admin-dashboard.component';
import { AdminLibrarianComponent } from './dashboard/admin/admin-librarian/admin-librarian.component';
import { ManageLibrarianComponent } from './dashboard/admin/admin-librarian/manage-librarian/manage-librarian.component';
import { AdminStudentComponent } from './dashboard/admin/admin-student/admin-student.component';
import { ManageStudentComponent } from './dashboard/admin/admin-student/manage-student/manage-student.component';
import { AdminTeacherComponent } from './dashboard/admin/admin-teacher/admin-teacher.component';
import { ManageTeacherComponent } from './dashboard/admin/admin-teacher/manage-teacher/manage-teacher.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { ApplicationComponent } from './dashboard/admin/application/application.component';
import { ManageApplicationComponent } from './dashboard/admin/application/manage-application/manage-application.component';
import { ClassComponent } from './dashboard/admin/class/class.component';
import { ManageClassComponent } from './dashboard/admin/class/manage-class/manage-class.component';
import { ExpenseComponent } from './dashboard/admin/expense/expense.component';
import { ManageExpenseComponent } from './dashboard/admin/expense/manage-expense/manage-expense.component';
import { FeeComponent } from './dashboard/admin/fee/fee.component';
import { ManageFeeComponent } from './dashboard/admin/fee/manage-fee/manage-fee.component';
import { ManageNotificationComponent } from './dashboard/admin/notification/manage-notification/manage-notification.component';
import { NotificationComponent } from './dashboard/admin/notification/notification.component';
import { ManageSalaryComponent } from './dashboard/admin/salary/manage-salary/manage-salary.component';
import { SalaryComponent } from './dashboard/admin/salary/salary.component';
import { SettingComponent } from './dashboard/admin/setting/setting.component';
import { ManageStaffComponent } from './dashboard/admin/staff/manage-staff/manage-staff.component';
import { StaffComponent } from './dashboard/admin/staff/staff.component';
import { ManageSubjectComponent } from './dashboard/admin/subject/manage-subject/manage-subject.component';
import { SubjectComponent } from './dashboard/admin/subject/subject.component';
import { LibrApplicationComponent } from './dashboard/librarian/libr-application/libr-application.component';
import { ManageLibrApplicationComponent } from './dashboard/librarian/libr-application/manage-libr-application/manage-libr-application.component';
import { LibrBookTransactionComponent } from './dashboard/librarian/libr-book-transaction/libr-book-transaction.component';
import { ManageBookTransactionComponent } from './dashboard/librarian/libr-book-transaction/manage-book-transaction/manage-book-transaction.component';
import { LibrBooksComponent } from './dashboard/librarian/libr-books/libr-books.component';
import { ManageBooksComponent } from './dashboard/librarian/libr-books/manage-books/manage-books.component';
import { LibrDashboardComponent } from './dashboard/librarian/libr-dashboard/libr-dashboard.component';
import { LibrLibrarydetailsComponent } from './dashboard/librarian/libr-librarydetails/libr-librarydetails.component';
import { ManageLibrarydetailsComponent } from './dashboard/librarian/libr-librarydetails/manage-librarydetails/manage-librarydetails.component';
import { LibrNotificationComponent } from './dashboard/librarian/libr-notification/libr-notification.component';
import { LibrSalarydetailsComponent } from './dashboard/librarian/libr-salarydetails/libr-salarydetails.component';
import { LibrarianComponent } from './dashboard/librarian/librarian.component';
import { AddstdApplicationComponent } from './dashboard/student/std-application/addstd-application/addstd-application.component';
import { StdApplicationComponent } from './dashboard/student/std-application/std-application.component';
import { StdDashboardComponent } from './dashboard/student/std-dashboard/std-dashboard.component';
import { StdExamComponent } from './dashboard/student/std-exam/std-exam.component';
import { StdFeedetailsComponent } from './dashboard/student/std-feedetails/std-feedetails.component';
import { StdLibrarydetailsComponent } from './dashboard/student/std-librarydetails/std-librarydetails.component';
import { StdNotificationComponent } from './dashboard/student/std-notification/std-notification.component';
import { StudentComponent } from './dashboard/student/student.component';
import { TeacherComponent } from './dashboard/teacher/teacher.component';
import { AddthApplicationComponent } from './dashboard/teacher/th-application/addth-application/addth-application.component';
import { ThApplicationComponent } from './dashboard/teacher/th-application/th-application.component';
import { ThDashboardComponent } from './dashboard/teacher/th-dashboard/th-dashboard.component';
import { ThExamComponent } from './dashboard/teacher/th-exam/th-exam.component';
import { ThLibrarydetailsComponent } from './dashboard/teacher/th-librarydetails/th-librarydetails.component';
import { ThLogoutComponent } from './dashboard/teacher/th-logout/th-logout.component';
import { ThNotificationComponent } from './dashboard/teacher/th-notification/th-notification.component';
import { ThQuestionsComponent } from './dashboard/teacher/th-questions/th-questions.component';
import { ThSalaryComponent } from './dashboard/teacher/th-salary/th-salary.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'admin',component:AdminComponent,
    children:[
      {path:'',redirectTo:'admin-dashboard',pathMatch:'full'},
      {path:'admin-dashboard',component:AdminDashboardComponent},
      {path:'admin-student',component:AdminStudentComponent},
      {path:'admin-teacher',component:AdminTeacherComponent},
      {path:'admin-librarian',component:AdminLibrarianComponent},
      {path:'staff',component:StaffComponent},
      {path:'class',component:ClassComponent},
      {path:'subject',component:SubjectComponent},
      {path:'fee',component:FeeComponent},
      {path:'salary',component:SalaryComponent},
      {path:'notification',component:NotificationComponent},
      {path:'application',component:ApplicationComponent},
      {path:'setting',component:SettingComponent},
      {path:'expense',component:ExpenseComponent},
      {path:'logout',component:AdminDashboardComponent},
      // forms
      {path:"manage-librarian",component:ManageLibrarianComponent},
      {path:"edit_librarian/:id",component:ManageLibrarianComponent},
      {path:"manage-student",component:ManageStudentComponent},
      {path:"edit-student/:id",component:ManageStudentComponent},
      {path:"manage-teacher",component:ManageTeacherComponent}, 
      {path:"update-teacher/:id",component:ManageTeacherComponent}, 
      {path:"edit-teacher/:id",component:ManageTeacherComponent}, 
      {path:"manage-application/:id",component:ManageApplicationComponent},
      {path:"manage-class",component:ManageClassComponent},
      {path:"edit-class/:id",component:ManageClassComponent},
      {path:"manage-fee",component:ManageFeeComponent},
      {path:"manage-notification",component:ManageNotificationComponent},
      {path:"manage-salary",component:ManageSalaryComponent},
      {path:"manage-staff",component:ManageStaffComponent},
      {path:"update-staff/:staff_id",component:ManageStaffComponent},
      {path:"manage-subject",component:ManageSubjectComponent},
      {path:"manage-expense",component:ManageExpenseComponent},
      {path:"edit-expense/:id",component:ManageExpenseComponent}

    ]
  },
  
  {path:"librarian",component:LibrarianComponent,
    children:[
      {path:'',redirectTo:'libr-dashboard',pathMatch:'full'},
      {path:'libr-dashboard',component:LibrDashboardComponent},
      {path:'libr-salarydetails',component:LibrSalarydetailsComponent},
      {path:'libr-library-details',component:LibrLibrarydetailsComponent},
      {path:'libr-books',component:LibrBooksComponent},
      {path:'view_books',component:LibrBooksComponent},
      {path:'libr-book-transaction',component:LibrBookTransactionComponent},
      {path:'libr-book-transaction/:id',component:LibrBookTransactionComponent},
      {path:'libr-application',component:LibrApplicationComponent},
      {path:'view_librn_application',component:LibrApplicationComponent},
      {path:'libr-notification',component:LibrNotificationComponent},
      {path:'manage-libr-application',component:ManageLibrApplicationComponent},
      {path:'manage-books',component:ManageBooksComponent},
      {path:'edit_books/:id',component:ManageBooksComponent},
      {path:'manage-librarydetails',component:ManageLibrarydetailsComponent},
      {path:'edit_librarydetails/:id',component:ManageLibrarydetailsComponent},
      {path:'manage-book-transaction',component:ManageBookTransactionComponent},
      {path:'edit-book-tran/:id',component:ManageBookTransactionComponent},
    ]
    
},
  {path:"student",component:StudentComponent,
    children:[
      {path:'',redirectTo:'std-dashboard',pathMatch:'full'},
      {path:'std-dashboard',component:StdDashboardComponent},
      {path:'std-feedetails',component:StdFeedetailsComponent},
      {path:'std-librarydetails',component:StdLibrarydetailsComponent},
      {path:'std-application',component:StdApplicationComponent},
      {path:'std-notification',component:StdNotificationComponent},
      {path:'std-exam',component:StdExamComponent},
      {path:'addstd-application',component:AddstdApplicationComponent},
      {path:'viewstd-application/:id',component:AddstdApplicationComponent},
    ]
},
  {path:'teacher',component:TeacherComponent,
    children:[
      {path:'',redirectTo:'th-dashboard',pathMatch:'full'},
      {path:'th-dashboard',component:ThDashboardComponent},
      {path:'th-salary',component:ThSalaryComponent},
      {path:'th-application',component:ThApplicationComponent},
      {path:'th-notification',component:ThNotificationComponent},
      {path:'th-exam',component:ThExamComponent},
      {path:'th-librarydetails',component:ThLibrarydetailsComponent},
      {path:'th-questions',component:ThQuestionsComponent},
      {path:'addth-application',component:AddthApplicationComponent},
      {path:'th-logout',component:ThLogoutComponent}
    ]
},
  {path:'**',component:PagenotfoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewportComponent } from './viewport/viewport.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { StudentComponent } from './dashboard/student/student.component';
import { LibrarianComponent } from './dashboard/librarian/librarian.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StaffComponent } from './dashboard/admin/staff/staff.component';
import { AdminDashboardComponent } from './dashboard/admin/admin-dashboard/admin-dashboard.component';
import { ClassComponent } from './dashboard/admin/class/class.component';
import { SubjectComponent } from './dashboard/admin/subject/subject.component';
import { FeeComponent } from './dashboard/admin/fee/fee.component';
import { SalaryComponent } from './dashboard/admin/salary/salary.component';
import { NotificationComponent } from './dashboard/admin/notification/notification.component';
import { LogoutComponent } from './dashboard/admin/logout/logout.component';
import { ApplicationComponent } from './dashboard/admin/application/application.component';
import { AdminStudentComponent } from './dashboard/admin/admin-student/admin-student.component';
import { AdminTeacherComponent } from './dashboard/admin/admin-teacher/admin-teacher.component';
import { AdminLibrarianComponent } from './dashboard/admin/admin-librarian/admin-librarian.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { LibrDashboardComponent } from './dashboard/librarian/libr-dashboard/libr-dashboard.component';
import { LibrSalarydetailsComponent } from './dashboard/librarian/libr-salarydetails/libr-salarydetails.component';
import { LibrLibrarydetailsComponent } from './dashboard/librarian/libr-librarydetails/libr-librarydetails.component';
import { LibrBooksComponent } from './dashboard/librarian/libr-books/libr-books.component';
import { LibrApplicationComponent } from './dashboard/librarian/libr-application/libr-application.component';
import { LibrNotificationComponent } from './dashboard/librarian/libr-notification/libr-notification.component';
import { StdDashboardComponent } from './dashboard/student/std-dashboard/std-dashboard.component';
import { StdFeedetailsComponent } from './dashboard/student/std-feedetails/std-feedetails.component';
import { StdLibrarydetailsComponent } from './dashboard/student/std-librarydetails/std-librarydetails.component';
import { StdApplicationComponent } from './dashboard/student/std-application/std-application.component';
import { StdExamComponent } from './dashboard/student/std-exam/std-exam.component';
import { StdNotificationComponent } from './dashboard/student/std-notification/std-notification.component';
import { TeacherComponent } from './dashboard/teacher/teacher.component';
import { ThDashboardComponent } from './dashboard/teacher/th-dashboard/th-dashboard.component';
import { ThSalaryComponent } from './dashboard/teacher/th-salary/th-salary.component';
import { ThLibrarydetailsComponent } from './dashboard/teacher/th-librarydetails/th-librarydetails.component';
import { ThExamComponent } from './dashboard/teacher/th-exam/th-exam.component';
import { ThApplicationComponent } from './dashboard/teacher/th-application/th-application.component';
import { ThNotificationComponent } from './dashboard/teacher/th-notification/th-notification.component';
import { ManageStudentComponent } from './dashboard/admin/admin-student/manage-student/manage-student.component';
import { ManageTeacherComponent } from './dashboard/admin/admin-teacher/manage-teacher/manage-teacher.component';
import { ManageApplicationComponent } from './dashboard/admin/application/manage-application/manage-application.component';
import { ManageClassComponent } from './dashboard/admin/class/manage-class/manage-class.component';
import { ManageFeeComponent } from './dashboard/admin/fee/manage-fee/manage-fee.component';
import { SettingComponent } from './dashboard/admin/setting/setting.component';
import { ManageLibrarianComponent } from './dashboard/admin/admin-librarian/manage-librarian/manage-librarian.component';
import { ManageStaffComponent } from './dashboard/admin/staff/manage-staff/manage-staff.component';
import { ManageSubjectComponent } from './dashboard/admin/subject/manage-subject/manage-subject.component';
import { ManageSalaryComponent } from './dashboard/admin/salary/manage-salary/manage-salary.component';
import { ManageNotificationComponent } from './dashboard/admin/notification/manage-notification/manage-notification.component';
import { ManageLibrarydetailsComponent } from './dashboard/librarian/libr-librarydetails/manage-librarydetails/manage-librarydetails.component';
import { ManageBooksComponent } from './dashboard/librarian/libr-books/manage-books/manage-books.component';
import { ManageLibrApplicationComponent } from './dashboard/librarian/libr-application/manage-libr-application/manage-libr-application.component';
import { ThQuestionsComponent } from './dashboard/teacher/th-questions/th-questions.component';
import {MatSelectModule} from '@angular/material/select';
import { AddthApplicationComponent } from './dashboard/teacher/th-application/addth-application/addth-application.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddstdApplicationComponent } from './dashboard/student/std-application/addstd-application/addstd-application.component';
import { ThLogoutComponent } from './dashboard/teacher/th-logout/th-logout.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { LibrBookTransactionComponent } from './dashboard/librarian/libr-book-transaction/libr-book-transaction.component';
import { ManageBookTransactionComponent } from './dashboard/librarian/libr-book-transaction/manage-book-transaction/manage-book-transaction.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ExpenseComponent } from './dashboard/admin/expense/expense.component';
import { ManageExpenseComponent } from './dashboard/admin/expense/manage-expense/manage-expense.component';
import { DatePipe } from '@angular/common';
import { DeleteboxComponent } from './deletebox/deletebox.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewportComponent,
    AboutComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    LoginComponent,
    SliderComponent,
    PagenotfoundComponent,
    ForgotpasswordComponent,
    AdminComponent,
    StudentComponent,
    LibrarianComponent,
    StaffComponent,
    AdminDashboardComponent,
    ClassComponent,
    SubjectComponent,
    FeeComponent,
    SalaryComponent,
    NotificationComponent,
    LogoutComponent,
    ApplicationComponent,
    AdminStudentComponent,
    AdminTeacherComponent,
    AdminLibrarianComponent,
    LibrDashboardComponent,
    LibrSalarydetailsComponent,
    LibrLibrarydetailsComponent,
    LibrBooksComponent,
    LibrApplicationComponent,
    LibrNotificationComponent,
    StdDashboardComponent,
    StdFeedetailsComponent,
    StdLibrarydetailsComponent,
    StdApplicationComponent,
    StdExamComponent,
    StdNotificationComponent,
    TeacherComponent,
    ThDashboardComponent,
    ThSalaryComponent,
    ThLibrarydetailsComponent,
    ThExamComponent,
    ThApplicationComponent,
    ThNotificationComponent,
    ManageStudentComponent,
    ManageTeacherComponent,
    ManageApplicationComponent,
    ManageClassComponent,
    ManageFeeComponent,
    ManageLibrarianComponent,
    ManageStaffComponent,
    ManageSubjectComponent,
    ManageSalaryComponent,
    ManageNotificationComponent,
    SettingComponent,
    ManageLibrarydetailsComponent,
    ManageBooksComponent,
    ManageLibrApplicationComponent,
    ThQuestionsComponent,
    AddthApplicationComponent,
    AddstdApplicationComponent,
    ThLogoutComponent,
    LibrBookTransactionComponent,
    ManageBookTransactionComponent,
    ExpenseComponent,
    ManageExpenseComponent,
    DeleteboxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

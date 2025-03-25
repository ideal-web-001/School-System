import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost/api/';
  constructor(
    private http: HttpClient
  ) { }
  // book getting data from data bas
  get_book() {
    return this.http.get(this.baseUrl + 'bookdataget.php');
  }
  get_single_book(bookid:any) {
    return this.http.get(this.baseUrl + 'bookdataget.php?book_id='+bookid);
  }
  post_book(data: any) {
    return this.http.post(this.baseUrl + 'booksforminsert.php', data);
  }
  put_book(data: any) {
    return this.http.put(this.baseUrl + 'update_book.php', data);
  }
  // endingg......

  // library geting data from database
  get_library() {
    return this.http.get(this.baseUrl + 'libraryget.php');
  }
  get_single_library(libraryid:any) {
    return this.http.get(this.baseUrl + 'libraryget.php?library_id='+libraryid);
  }
  post_library(data: any) {
    return this.http.post(this.baseUrl + 'libraryinsert.php', data);
  }
  put_library(data: any) {
    return this.http.put(this.baseUrl + 'update_library.php', data);
  }
  // endingg......

  //book transaction database api
  get_book_tran() {
    return this.http.get(this.baseUrl + 'booktransactionget.php');
  }
  post_book_tran(data: any) {
    return this.http.post(this.baseUrl + 'booktransactioninsert.php', data);
  }
  get_single_tran(tranid:any) {
    return this.http.get(this.baseUrl + 'booktransactionget.php?tran_id='+tranid);
  }
  put_book_tran(data: any) {
    return this.http.put(this.baseUrl + 'update_booktran.php', data);
  }
  // endingg......

  //application database api
  get_librnapplication() {
    return this.http.get(this.baseUrl + 'application_view.php');
  }
  post_librnapplication(data: any) {
    return this.http.post(this.baseUrl + 'application_insert.php', data);
  }
  // endingg......

  //student getting database api
  get_student() {
    return this.http.get(this.baseUrl + 'std_view.php');
  }
  get_single_student(sid:any){
    return this.http.get(this.baseUrl+'std_view.php?sid='+sid);
  }

  post_std(data: any) {
    // console.log(Array.from(data.entries()))
    return this.http.post(this.baseUrl +'std_formdata_insert.php', data);
  }

  put_std(data:any){
    // console.log(Array.from(data.entries()))
    return this.http.post(this.baseUrl + 'std_formdata_update.php',data);
  }
   delete_std(std_id:any){
    return this.http.get(this.baseUrl + 'std_delete.php?sid='+std_id);
   }

  // endingg......


  //student getting database api
  get_fee() {
    return this.http.get(this.baseUrl + 'fee_recp_view.php');
  }
  get_single_std_fee(std_id:any) {
    console.log(std_id)
    return this.http.get(this.baseUrl + 'fee_recp_view.php?std_id='+std_id);
  }
  post_fee(data: any) {
    return this.http.post(this.baseUrl + 'fee_recp_insert.php', data);
  }
count_std(data:any){
    return this.http.post(this.baseUrl + 'student_count.php',data)
  }

  // endingg......

  //  notice getting data from database
  get_notice() {
    return this.http.get(this.baseUrl + "notification_view_tbl.php");
  }
  post_notice(data:any){
    return this.http.post(this.baseUrl+'notification_insert_tbl.php',data)
  }
  // endingg......
  // class module function........
  get_class() {
    return this.http.get(this.baseUrl + 'class_view.php');
  }
  post_class(data:any){
    return this.http.post(this.baseUrl+'class_insert.php',data);
  }
  // end class module function....

  // subject module function......
  get_subject() {
    return this.http.get(this.baseUrl + 'subject_view.php');
  }
  post_subject(data:any){
    return this.http.post(this.baseUrl + 'subject_insert.php', data);
  }
  // end subject module function...

  // slalary module function.....
  get_salary() {
    return this.http.get(this.baseUrl + 'salary_view.php');
  }
  post_salary(data:any) {
    return this.http.post(this.baseUrl + 'salary_insert.php',data);
  }
  // end salary module function.

  // staff module function......
  
  get_staff() {
    return this.http.get(this.baseUrl + 'staff_view.php');
  }
  post_staff(data:any){
    return this.http.post(this.baseUrl + 'staff_insert.php',data);
  }
  get_single_staff(staffid:any){
    return this.http.get(this.baseUrl +'staff_view.php?staff_id='+ staffid);
   
  }
  put_staff(data:any){
      return this.http.put(this.baseUrl+'staff_update.php',data);
  }
  // end staff module function.....
  // teacher module function....
  get_teacher() {
    return this.http.get(this.baseUrl + 'teacher_view.php');
  }
  get_single_teacher(tid:any){
    return this.http.get(this.baseUrl + 'teacher_view.php?tid='+tid); 
  }
  post_teacher(data:any){
    return this.http.post(this.baseUrl + 'teacher_formdata_insert.php',data);
  }
  put_teacher(data:any){
    // console.log(Array.from(data.entries()))
    return this.http.post(this.baseUrl + 'teacher_formdata_update.php',data);
    }
  deleteTeacher(t_id:any){
 return this.http.get(this.baseUrl + 'teacher_delete.php?tid='+t_id)
  }
 
  // end  theacher module.... 
  // expense module function.....
  get_expense() {
    return this.http.get(this.baseUrl + 'expense_view.php');
  }

  get_employee() {
    return this.http.get(this.baseUrl + 'employee_view.php');
  }
  get_employee_by_id(emp_id:any) {
    return this.http.get(this.baseUrl + 'employee_view.php?emp_id='+emp_id);
  }
  post_expense(data:any){
    return this.http.post(this.baseUrl + 'expense_insert.php',data);
  }
  get_single_expense(expid:any){
    return this.http.get(this.baseUrl+'expense_view.php?expid='+expid);
  }
  put_expense(data: any){
    return this.http.put(this.baseUrl +'expense_update.php',data)
  }
  // end expense module...
  
  //getting data from database start
  get_librarian() {
    return this.http.get(this.baseUrl + 'view_librarian.php');
  }
  post_librarian(data:any){
    // console.log(Array.from(data.entries()))
    return this.http.post(this.baseUrl + 'insert_formdata_librarian.php',data);
  }
  get_single_librarian(librnid:any) {
    return this.http.get(this.baseUrl + 'view_librarian.php?librn_id='+librnid);
  }
  put_librarian(data: any) {
    return this.http.post(this.baseUrl + 'update_formdata_librarian.php',data);
  }
  delete_librarian(librnid:any){
    return this.http.get(this.baseUrl + "delete_librarian.php?librnid=" +librnid)
  }
  //getting data from database end here
//applicatio data view
//  for admin
  get_application() {
    return this.http.get(this.baseUrl + 'std_appli_view.php');
  }
  get_single_application(apid:any) {
    return this.http.get(this.baseUrl + 'admin_appli_view.php?appli_id='+apid);
  }
  put_application(data:any){
    return this.http.put(this.baseUrl +'application_update.php',data)
  }
  //  end.................
// for student
  get_single_std_application(std_id:any) {
    return this.http.get(this.baseUrl + 'std_appli_view.php?std_id='+std_id);
  }
  post_appli(data:any){
    return this.http.post(this.baseUrl + 'application_insert.php',data);

  }
//  end...................

  // for login
  do_login(data:any){
    return this.http.post(this.baseUrl + 'login.php', data);
  }
  get_single_class(classid:any){
    console.log(classid)
    return this.http.get(this.baseUrl + 'class_view.php?class_id='+classid)
  }
  put_class(data:any){
    return this.http.put(this.baseUrl +'class_update.php',data )
  }
  update_fee(data:any){
    return this.http.put(this.baseUrl + 'std_fee_update.php',data)
  }
}
//  end...........
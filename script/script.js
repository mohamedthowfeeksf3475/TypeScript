"use strict";
exports.__esModule = true;
var autoIncrement = 100;
var EautoIncremnt = 200;
var userDetails = /** @class */ (function () {
    function userDetails(tempName, tempAge, tempMobileNumber) {
        autoIncrement++;
        this.userId = "U" + autoIncrement.toString;
        this.userName = tempName;
        this.userAge = tempAge;
        this.userMobileNumber = tempMobileNumber;
    }
    return userDetails;
}());
var CourseDetails = /** @class */ (function () {
    function CourseDetails(autoIncrement, tempID, EautoIncrement, tempCourseName, tempRequiredDays) {
        this.userId = tempID;
        this.EnrollmentId = "E" + toString[EautoIncrement];
        this.CourseName = tempCourseName;
        this.RequiredDays = tempRequiredDays;
    }
    return CourseDetails;
}());
var UsersInformation = new Array();
var CourseEnrollmentInformation = new Array();
function NewUserRegistrationDisplay() {
    document.getElementById("signUp").style.display = "block";
    document.getElementById("mainPortal").style.display = "none";
}
function LogInDisplay() {
    document.getElementById("logIn").style.display = "block";
    document.getElementById("mainPortal").style.display = "none";
}
function MenuListDisplay() {
    document.getElementById("menuList").style.display = "block";
    document.getElementById("logIn").style.display = "none";
}
function CoursePickingDisplay() {
    document.getElementById("coursePicking").style.display = "block";
    document.getElementById("menuList").style.display = "none";
}
function courseSubmitDisplay() {
    document.getElementById("coursePicking").style.display = "none";
    document.getElementById("mainPortal").style.display = "block";
}
function getNewUserDetails(autoIncrement) {
    var tempName = document.getElementById("username").value;
    var tempAge = document.getElementById("userAge").value;
    var tempMobileNumber = document.getElementById("PhoneNumber").value;
    alert(autoIncrement);
    var Storeddetails = new userDetails(tempName, toString[tempAge], toString[tempMobileNumber]);
    UsersInformation.push(Storeddetails);
    alert("Registration Successful. your User Id is " + Storeddetails.userId);
    document.getElementById("signUp").style.display = "none";
    document.getElementById("logIn").style.display = "block";
}

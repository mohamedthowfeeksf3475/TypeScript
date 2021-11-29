export{}
let autoIncrement:number=100;
let EautoIncremnt:number=200;
class userDetails{
    userId:string
    userName:string
    userAge:number
    userMobileNumber:number
    
    constructor (tempName:string,tempAge:number,tempMobileNumber:number)
    {
        autoIncrement++
        this.userId="U"+autoIncrement.toString;
        this.userName=tempName;
        this.userAge=tempAge;
        this.userMobileNumber=tempMobileNumber;
    }
}

class CourseDetails{
    
    userId:string
    EnrollmentId:string
    CourseName:string
    RequiredDays:number
    constructor(autoIncrement:number,tempID:string,EautoIncrement:number,tempCourseName:string,tempRequiredDays:number)
    {
        EautoIncremnt++
        this.userId=tempID;
        this.EnrollmentId="E"+toString[EautoIncrement];
        this.CourseName=tempCourseName;
        this.RequiredDays=tempRequiredDays;

    }
}

let UsersInformation:Array<userDetails>=new Array<userDetails>();

let CourseEnrollmentInformation:Array<CourseDetails>=new Array<CourseDetails>();



function NewUserRegistrationDisplay()
{
    (document.getElementById("signUp") as HTMLInputElement).style.display="block";
    (document.getElementById("mainPortal") as HTMLInputElement).style.display="none";

}

function LogInDisplay()
{
    (document.getElementById("logIn") as HTMLInputElement).style.display="block";
    (document.getElementById("mainPortal") as HTMLInputElement).style.display="none";

}


function MenuListDisplay()
{
    (document.getElementById("menuList") as HTMLInputElement).style.display="block";
    (document.getElementById("logIn") as HTMLInputElement).style.display="none";

}

function CoursePickingDisplay()
{
    (document.getElementById("coursePicking") as HTMLInputElement).style.display="block";
    (document.getElementById("menuList") as HTMLInputElement).style.display="none";

}

function courseSubmitDisplay()
{
    (document.getElementById("coursePicking") as HTMLInputElement).style.display="none";
    (document.getElementById("mainPortal") as HTMLInputElement).style.display="block";

}

function getNewUserDetails(autoIncrement)
{
    let tempName=(document.getElementById("username") as HTMLInputElement).value;
    let tempAge=(document.getElementById("userAge") as HTMLInputElement).value;
    let tempMobileNumber=(document.getElementById("PhoneNumber") as HTMLInputElement).value;
    alert(autoIncrement)
    let Storeddetails=new userDetails(tempName,toString[tempAge],toString[tempMobileNumber]);
    UsersInformation.push(Storeddetails);
    alert("Registration Successful. your User Id is "+Storeddetails.userId);
    (document.getElementById("signUp") as HTMLInputElement).style.display="none";
    (document.getElementById("logIn") as HTMLInputElement).style.display="block";
}


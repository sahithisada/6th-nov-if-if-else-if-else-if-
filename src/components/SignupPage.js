import React, { useRef } from "react";

function SignupPage() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  let firstNameSpanRef = useRef();
  let lastNameSpanRef = useRef();
  let emailSpanRef = useRef();
  let passwordSpanRef = useRef();

  let marksInputRef= useRef();

  let maleRBRef = useRef();
  let femaleRBRef = useRef();
  let selectedGender;
  let salutation;
  let maritalStatus;

  let labelResultRef = useRef();
  let stateSelectRef = useRef();

  let languagesKnown ={tel:"False", hin:"False", eng:"False", mal:"False", tam:"False", kan:"False"} ;
  

  let onCreateAccount = () => {
    if (selectedGender == "Male") {
      salutation = "Mr.";
    } else {
      if (maritalStatus == "single") {
        salutation = "Ms.";
      } else {
        salutation = "Mrs.";
      }
    }
    console.log(languagesKnown)
    labelResultRef.current.innerHTML =
      `${salutation} ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} 
      from ${stateSelectRef.current.value}, Your account has been created and you know the mentioned
       languages:  ${languagesKnown.tel==true? "Telugu":""}
       ${languagesKnown.hin==true? "Hindi":""} 
       ${languagesKnown.eng==true? "English":""}
        ${languagesKnown.mal==true? "Malayalam":"."} 
       ${languagesKnown.tam==true? "Tamil":""}
       ${languagesKnown.kan==true? "Kannada":""}`;
    };

    let nameRegex = /^[A-Za-z\s]{2,30}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 

  let validateName = (inputRef, spanRef) => {
    let nameResult = nameRegex.test(inputRef.current.value);
    if (nameResult == true) {
      spanRef.current.innerHTML = "Valid";
    } else {
      spanRef.current.innerHTML = "Invalid";
    }
  };

  let validateEmail = (inputRef, spanRef) => {
    let emailResult = emailRegex.test(inputRef.current.value);
    if (emailResult == true) {
      spanRef.current.innerHTML = "Valid";
    } else {
      spanRef.current.innerHTML = "Invalid";
    }
  };

  let validatePassword = (inputRef, spanRef) => {
    let passwordResult = passwordRegex.test(inputRef.current.value);
    if (passwordResult == true) {
      spanRef.current.innerHTML = "Valid";
    } else {
      spanRef.current.innerHTML = "Invalid";
    }
  };

  return (
    <div>
      <form>
        
        <h1>SignUp Form</h1>
        <hr></hr>

    <div>
        <label>Email</label>
        <input
            ref={emailInputRef}
            onChange={() => {
            validateEmail(emailInputRef, emailSpanRef);
        }}
        ></input>
    <span ref={emailSpanRef}></span>
    </div>

    <div>
        <label>Password</label>
        <input
            ref={passwordInputRef}
            onChange={() => {
            validatePassword(passwordInputRef, passwordSpanRef);
            }}
        ></input>
    <span ref={passwordSpanRef}></span>
    </div>


<div>
  <label>First Name</label>
  <input
    ref={firstNameInputRef}
    onChange={() => {
      validateName(firstNameInputRef, firstNameSpanRef);
    }}
  ></input>
  <span ref={firstNameSpanRef}></span>
</div>

<div>
  <label>Last Name</label>
  <input
    ref={lastNameInputRef}
    onChange={() => {
      validateName(lastNameInputRef, lastNameSpanRef);
    }}
  ></input>
  <span ref={lastNameSpanRef}></span>
</div>

<div>
  <label>Marital Status</label>
  <input
    type="radio" name="status"
    onClick={(eventObject) => {
      if (eventObject.target.checked == true) {
        maritalStatus = "single";
      }
    }}
  ></input>
  <label style={{ width: "auto" }}>Single</label>
  <input
    type="radio" name="status"
    onClick={(eventobject) => {
      if (eventobject.target.checked == true) {
        maritalStatus = "Married";
      }
    }}
  ></input>
  <label style={{ width: "auto" }}>Married</label>
</div>

<div>
  <label>Gender</label>
  <input
    type="radio" name="gender" ref={maleRBRef}
    onClick={() => {
      if (maleRBRef.current.checked == true) {
        selectedGender = "Male";
      }
    }}
  ></input>
  <label style={{ width: "auto" }}>Male</label>
  <input
    type="radio" name="gender" ref={femaleRBRef}
    onClick={() => {
      if (femaleRBRef.current.checked == true) {
        selectedGender = "Female";
      }
    }}
  ></input>
  <label style={{ width: "auto" }}>Female</label>
</div>

<div>
  <label>Age</label>
  <input type="number"></input>
</div>

<div>
  <label>State</label>
  <select ref={stateSelectRef}>
    <option>Select State</option>
    <option>Andhra Pradesh</option>
    <option>Assam</option>
    <option>Arunachal Pradesh</option>
    <option>Bihar</option>
    <option>Chhattisgarh</option>
    <option>Goa</option>
    <option>Gujarat</option>
    <option>Haryana</option>
    <option>Himachal Pradesh</option>
    <option>Jharkhand</option>
    <option>Karnataka</option>
    <option>Kerala</option>
    <option>Madhya Pradesh</option>
    <option>Maharashtra</option>
    <option>Manipur</option>
    <option>Meghalaya</option>
    <option>Mizoram</option>
    <option>Nagaland</option>
    <option>Odisha</option>
    <option>Punjab</option>
    <option>Rajasthan</option>
    <option>Sikkim</option>
    <option>Tamil Nadu</option>
    <option>Telangana</option>
    <option>Tripura</option>
    <option>Uttar Pradesh</option>
    <option>Uttarakhand</option>
    <option>West Bengal</option>

    <option></option>
  </select>
</div>

<div>
  <label>Languages</label>
  <input type="checkbox"
  onChange={(e)=>{
    languagesKnown.eng=e.target.checked;
  }}
  ></input>
  <label style={{width:"auto"}}>English</label>
  <input type="checkbox"
   onChange={(e)=>{
    languagesKnown.hin=e.target.checked;
  }}
  ></input>
  <label style={{width:"auto"}}>Hindi</label>
  <input type="checkbox"
   onChange={(e)=>{
    languagesKnown.tel=e.target.checked;
  }}
  ></input>
  <label style={{width:"auto"}}>Telugu</label>
  <input type="checkbox"
   onChange={(e)=>{
    languagesKnown.kan=e.target.checked;
  }}
  ></input>
  <label style={{width:"auto"}}>kannada</label>
  <input type="checkbox"
  
  onChange={(e)=>{
    languagesKnown.tam=e.target.checked;
  }}></input>
  <label style={{width:"auto"}}>Tamil</label>
  <input type="checkbox"
   onChange={(e)=>{
    languagesKnown.mal=e.target.checked;
  }}
  ></input>
  <label style={{width:"auto"}}>Malayalam</label>
</div>

<div>
  <label>Marks</label>
  <input ref={marksInputRef}
  onChange={()=>{
    let marks= (marksInputRef.current.value);
    if(marks<=32)
    {
      console.log(`F`)
    }
    else if(marks>33 && marks<=50){
      console.log(`P`)
    }
    else if(marks>51 && marks<=55){
      console.log(`C`)
    }
    else if(marks>56 && marks<=60){
        console.log(`B`)
      }
    else if(marks>61 && marks<=70){
        console.log(`B+`)
      }
    else if(marks>71 && marks<=80){
        console.log(`A`)
      }
    else if(marks>=81 && marks<=90){
      console.log(`A+`)
    }
    else if(marks>=91 && marks<=100){
      console.log(`O`)
    }
    else{
      console.log(`Invalid Marks`)
    }
  }}
  ></input>

</div>

<div>
  <button
    type="button"
    onClick={() => {
      onCreateAccount();
    }}
  >
    Sign Up
  </button>
</div>
<label style={{width:"500px"}} ref={labelResultRef}></label>
        
        
      </form>
    </div>
  );
}

export default SignupPage;
function validation(){
    let Fname=document.getElementById('fn').value;
    let Lname=document.getElementById('ln').value;
    let bdate=document.getElementById('bd').value;
    let email=document.getElementById('em').value;
    let confirmEmail=document.getElementById('confem').value;
    let password=document.getElementById('pass').value;
    let confPassword=document.getElementById('confpass').value;

    let CHFname=/^[a-zA-Z]{3-12}$/;
    let CHLname=/^[a-zA-Z]{3-12}$/;
    let CHbdate=/^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}$/;
    let CHemail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let CHpassword=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#])[a-zA-Z0-9!@&]{6-12}$/;


    if (CHFname.test(Fname)){
        document.getElementById('fnsms').innerHTML='is valid';

        
    }
    else {
        document.getElementById('fnsms').innerHTML='is Not valid'
    }

    





}

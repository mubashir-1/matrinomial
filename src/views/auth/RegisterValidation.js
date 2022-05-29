

export const RegisterValidation = (user) => {

let error={}

if (!user.name.trim()) {
    error.name = "Name required"
}else if(!/^[A-Za-z ]{3,16}$/i.test(user.name)){
    error.name = "Name should be 3 or more characters and shouldnt include any num, special character!"
}

if(!user.email.trim()){
    error.email="email required"
}else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(user.email)){
    error.email="Invalid email"
}
if(!user.password){
    error.password="password required"
}else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(user.password)){
    error.password="password need to be more than 8 or more alphanumeric characters"
}else if(user.password.length<8){
    error.password="password need to be more than 8 or more characters"
}
    return error;
       
}

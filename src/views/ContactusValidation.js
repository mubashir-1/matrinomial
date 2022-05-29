

export const ContactusValidation = (user) => {

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
    
    if (!user.message.trim()) {
        error.message = "message required"
    }

    return error;
}

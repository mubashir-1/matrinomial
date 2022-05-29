

export const MainFormValidation = (user) => {

    let error = {}



    if (!user.name.trim()) {
        error.name = "name required"
    } else if (!/^(?![\s.]+$)[a-zA-Z\s.]*$/i.test(user.name)) {
        error.name = "name should only include alphabet"
    }

    if (!user.testGender.trim()) {
        error.testGender = "gender required"
    }

    if (!user.number.trim()) {
        error.number = "number required"
    }
    if (!user.testMarital.trim()) {
        error.testMarital = "Marital required"
    }
    if (!user.testReligion.trim()) {
        error.testReligion = "Religion required"
    }

    if (!user.testCast.trim()) {
        error.testCast = "Cast required"
    }
    if (!user.height.trim()) {
        error.height = "height required"
    }
    if (!user.bio.trim()) {
        error.bio = "bio required"
    } else if (!/^(?![\s.]+$)[a-zA-Z0-9\s.]{20,}$/i.test(user.bio)) {

        error.bio = "Bio should be more than 20 words"
    }
    if (!user.Qualification.trim()) {
        error.Qualification = "Qualification required"
    }
    if (!user.University.trim()) {
        error.University = "University required"
    }
    if (!user.Occupation.trim()) {
        error.Occupation = "Occupation required"
    }
    if (!user.Salary.trim()) {
        error.Salary = "Salary required"
    }
    if (!user.twitter.trim()) {
        error.twitter = "twitter required"
    }
    if (!user.fb.trim()) {
        error.fb = "facebook required"
    }
    if (!user.Instagram.trim()) {
        error.Instagram = "Instagram required"
    }


    if (!user.email.trim()) {
        error.email = "email required"
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(user.email)) {
        error.email = "Invalid email"
    }


    return error;
}




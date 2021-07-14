import Get from "../get";

export default async function checkNewUser(login, password, ip, dataBaseTarget, passRegex) {

    try {

        //check if login already exist

        const listLoginInDb = await Get({login: login}, dataBaseTarget);
        
        if(listLoginInDb.length !== 0) return {error: true, message: "User Already Exist"};
        
        //check if connection IP have more than 3 count

        const listIpInDb = await Get({ip: ip}, dataBaseTarget);

        if(listIpInDb.length >= 3) return {error: true, message: "This IP getToo many count"};

        //check if password match with regex

        if(!passRegex.test(password)) return {error: true, message: "Password is not valid"};

        return {error: false}


    }catch(err){
        console.log(err)
    }
}
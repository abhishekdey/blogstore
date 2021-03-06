const { useState, useEffect } = require("react");
const axios = require("axios");
const { fakeAuth, userDetails } = require("../constants/app.constant");

const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    const [data, setResult] = useState([]);

    useEffect(
        async () => {
            try {
                const result = await axios.get(userDetails);
                // axios.post    axios.get(userDetails).then((response) => console.log(response))
                setResult(result.data);
            } catch (err) {
                console.log(err);
            }
        }, []);

    const signin = (cb) => {
        const validUser = true;
        return validUser && fakeAuth.authenticate(() => {
            setUser("user");
            //setTimeout(() =>{setUser("uerererfffser"); console.log("uerererseeer")}, 5*1000);
            cb();
        })
    }

    const signout = cb => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        })
    }

    const getUserDetails = () => {
        return data;
    }

    return {
        user, signin, signout, getUserDetails
    };
}

export default useProvideAuth;
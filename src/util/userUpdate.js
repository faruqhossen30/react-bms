import axios from "./axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const token = cookies.get('_auth');

const UserUpdate = (signIn) =>{
    axios.get(`http://127.0.0.1:8000/api/user`)
        .then((res) => {
            signIn(
                {
                    token: cookies.get('_auth'),
                    expiresIn: 12345,
                    tokenType: "Bearer",
                    authState: res.data,
                }
            );
        });
};

export default UserUpdate;
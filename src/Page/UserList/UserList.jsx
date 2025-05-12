import "./UserList.css";
import { UserCard } from "../../Component/components";
import { useEffect, useState } from "react";


export default function UserList(){
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        fetch("/user.json")
            .then(result => result.json())
            .then(data => setListUser(data))
            .catch(error => console.log(error));
    }, []);


    return (
        <div className="user-list">
            {
                listUser.map((user, index) => (
                    <UserCard user={user} key={index}/>
                ))
            }
        </div>
    )
}
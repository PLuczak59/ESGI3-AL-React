import "./UserList.css";
import { UserCard } from "../../Component/components";
import listUser from "../../assets/user.json";


export default function UserList(){
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
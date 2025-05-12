import "./Profile.css";
import { User, UpdateUser } from '../../Component/components';

function Profile({user}) {
    return (
        <>
            <User user={user} />
            <br />
            <UpdateUser user={user} />
        </>
    );
}

export default Profile;
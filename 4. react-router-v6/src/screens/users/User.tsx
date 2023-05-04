import { Link, Outlet, useParams } from 'react-router-dom';
import { users } from '../../db';

const User = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>
        User with ID {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet />
      <p>Outlet을 렌더링해야 followers가 화면에 렌더링된다.</p>
    </div>
  );
};

export default User;

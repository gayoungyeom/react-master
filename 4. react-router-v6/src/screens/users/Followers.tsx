import { useOutletContext } from 'react-router-dom';

interface FollowersContext {
  nameOfMyUser: string;
}

const Followers = () => {
  const { nameOfMyUser } = useOutletContext<FollowersContext>();
  return <h1>Here are {nameOfMyUser}'s followers</h1>;
};

export default Followers;

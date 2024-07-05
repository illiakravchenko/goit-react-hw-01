import userData from "../userData.json";
import Profile from "./Profile/Profile";

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
    </>
  );
};

export default App;

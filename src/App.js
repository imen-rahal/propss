import Profile from "./profile/Profile";
import image from "./profile/logo.jpg";

function App() {
  const showAlert = (name) => alert(name);
  const user = {
    fullNAME: "Imen RAHAL",
    bio: "Developpeur Web",
    profession: `je suis étudiante chercheuse en Méthodes Quantitatives.`,
  };
  return (
    <div className="App">
      <Profile user={user}
       showname={showAlert}>
        <img src={image} alt="myPhoto" />
      </Profile>
    </div>
  );
}

export default App;
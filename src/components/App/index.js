import Articles from "../Articles/articles";
import LoginButton from "../Login/login";
import LogoutButton from "../Logout/logout";
import Profile from "../UserProfile/userprofile";
import css from './App.module.css'


function App() {
  
  return (
    <div className={css.App}>
      <div className={css.LogButtons}>
      <LoginButton />
      <LogoutButton />
      </div>
      <Profile />
      <div className={css.articles}>
      <Articles />
      </div>
    </div>
  );
}

export default App;

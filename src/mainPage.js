import { useNavigate } from 'react-router-dom';
import NavBar from './navBar'
import Hero from './hero'
const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar/>
      <Hero/>

    </div>
  );
};

export default MainPage;

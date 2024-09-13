import {Header, Menu, Hero, HeroDivider, Home, TopRestaurants} from "./component";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TopDishes from "./component/TopDishes";


function App() {


    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/menu" element={<Menu/>}/>
                {/* Add other routes here */}
            </Routes>
            <Hero/>
            <HeroDivider/>
            <Home/>
            <TopRestaurants/>
            <TopDishes/>
        </Router>

    )
}

export default App

import {Header, Menu, Hero, HeroDivider, Home, TopRestaurants, TopDishes} from "./component";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


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

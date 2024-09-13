import {Header, Menu, Hero, HeroDivider, Home} from "./component";
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
        </Router>

    )
}

export default App

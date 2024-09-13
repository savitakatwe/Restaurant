import {Header, Menu, Hero, HeroDivider} from "./component";
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
        </Router>

    )
}

export default App

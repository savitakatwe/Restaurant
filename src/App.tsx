import {Header, Menu} from "./component";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hero from "./component/Hero/Hero.tsx";


function App() {


    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/menu" element={<Menu/>}/>
                {/* Add other routes here */}
            </Routes>
            <Hero/>
        </Router>

    )
}

export default App

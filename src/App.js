import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import GloabalStyle from "./components/GlobalStyle";
import { Route, Switch, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <Nav />
            <GloabalStyle />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname } >
                    <Route path="/" exact>
                        <AboutUs />
                    </Route>
                    <Route path="/work" exact>
                        <OurWork />
                    </Route>
                    <Route path="/work/:id">
                        <MovieDetail />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                    <Route path="/:id">
                        <h1>404: Page not found</h1>
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;

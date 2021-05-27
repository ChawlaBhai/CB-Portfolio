import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import GloabalStyle from "./components/GlobalStyle";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Nav />
            <GloabalStyle />
            <Switch>
                <Route path="/" exact>
                    <AboutUs />
                </Route>
                <Route path="/work">
                    <OurWork />
                </Route>
                <Route path="/contact">
                    <ContactUs />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

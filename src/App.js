<<<<<<< HEAD
import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Checkout from './components/Checkout/Checkout';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/checkout" component={Checkout} />
                </div>
            </Router>
            <div className="container">
                <footer>
                    <small>
                        made by <a href="https://github.com/JBurruss">James Burruss</a>, source code available on <a href="https://github.com/JBurruss/mrmaille">github</a>
                    </small>
                </footer>
            </div>
        </div >
    );
}

export default App;
=======
import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Checkout from './components/Checkout/Checkout';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/checkout" component={Checkout} />
                </div>
            </Router>
            <div className="container">
                <footer>
                    <small>
                        made by <a href="https://github.com/JBurruss">James Burruss</a>, source code available on <a href="https://github.com/JBurruss/mrmaille">github</a>
                    </small>
                </footer>
            </div>
        </div >
    );
}

export default App;
>>>>>>> cd4669b8141510027fe01c1b67ce1f368804ba21

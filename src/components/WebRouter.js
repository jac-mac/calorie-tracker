import Foods from './FoodItemPage/Foods'
import Login from './LoginPage/Login'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

export default function WebRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/foods'>Food List</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login Page</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path='/foods'>
                        <Foods />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/'>
                        Home
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
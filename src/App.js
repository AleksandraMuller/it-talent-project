import './App.css';
import StartPage from './pages/StartPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WhiteBoardPage from './pages/WhiteBoardPage';
import history from '../src/pages/history';
import HappyThoughts from './pages/HappyThoughts';
import ChattPage from './pages/ChattPage';

function App() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={StartPage} />
				<Route exact path="/whiteboard" component={WhiteBoardPage} />
				<Route exact path="/happythoughts" component={HappyThoughts} />
				<Route exact path="/chatt" component={ChattPage} />
			</Switch>
		</Router>
	);
}

export default App;

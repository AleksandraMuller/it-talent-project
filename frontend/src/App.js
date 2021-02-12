import StartPage from './pages/StartPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Whiteboard from './KonvaComponents/Whiteboard';
import history from '../src/pages/history';
import HappyThoughts from './pages/HappyThoughts';
import ChattPage from './pages/ChattPage';
import QuotePage from './pages/QuotePage';
import StickyNotes from './pages/StickyNotes';

function App() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={StartPage} />
				<Route exact path="/whiteboard" component={Whiteboard} />
				<Route exact path="/happythoughts" component={HappyThoughts} />
				<Route exact path="/chatt" component={QuotePage} />
				<Route exact path="/stickies" component={StickyNotes} />
			</Switch>
		</Router>
	);
}

export default App;

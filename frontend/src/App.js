import StartPage from './pages/StartPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Whiteboard from './KonvaComponents/Whiteboard';
import history from '../src/pages/history';
import HappyThoughts from './pages/HappyThoughts';
import SoundsPage from './pages/SoundsPage';
import ChattPage from './pages/ChattPage';
import QuotePage from './pages/QuotePage';
import StickyNotes from './pages/StickyNotes';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//apollo client setup

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	credentials: 'same-origin',
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Switch>
					<Route exact path='/' component={StartPage} />
					<Route exact path='/whiteboard' component={Whiteboard} />
					<Route exact path='/happythoughts' component={HappyThoughts} />
					<Route exact path='/chatt' component={ChattPage} />
					<Route exact path='/stickies' component={StickyNotes} />
					<Route exact path='/quote-generator' component={QuotePage} />
					<Route exact path='/developer-sounds' component={SoundsPage} />
				</Switch>
			</Router>
		</ApolloProvider>
	);
};

export default App;

import StartPage from './pages/StartPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Whiteboard from './KonvaComponents/Whiteboard';
import history from '../src/pages/history';
import HappyThoughts from './pages/HappyThoughts';
import ChattPage from './pages/ChattPage';
import QuotePage from './pages/QuotePage';
import StickyNotes from './pages/StickyNotes';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//apollo client setup

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router history={history}>
				<Switch>
					<Route exact path='/' component={StartPage} />
					<Route exact path='/whiteboard' component={Whiteboard} />
					<Route exact path='/happythoughts' component={HappyThoughts} />
					<Route exact path='/chatt' component={ChattPage} />
					<Route exact path='/stickies' component={StickyNotes} />
					<Route exact path='/quote-generator' component={QuotePage} />
				</Switch>
			</Router>
		</ApolloProvider>
	);
};

export default App;

import StartPage from './pages/StartPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Whiteboard from './KonvaComponents/Whiteboard';
import HappyThoughts from './pages/HappyThoughts';
import ScreenShots from './KonvaComponents/ScreenShots';
import SoundsPage from './pages/SoundsPage';
import QuotePage from './pages/QuotePage';
import StickyNotes from './pages/StickyNotes';
import FirstPage from './pages/FirstPage';
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
					<Route exact path='/' component={FirstPage} />
					<Route exact path='/startpage' component={StartPage} />
					<Route exact path='/whiteboard' component={Whiteboard} />
					<Route exact path='/happythoughts' component={HappyThoughts} />
					<Route exact path='/stickies' component={StickyNotes} />
					<Route exact path='/quote-generator' component={QuotePage} />
					<Route exact path='/developer-sounds' component={SoundsPage} />
					<Route exact path='/screenshots' component={ScreenShots} />
				</Switch>
			</Router>
		</ApolloProvider>
	);
};

export default App;

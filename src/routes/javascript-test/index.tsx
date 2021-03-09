// Vendors
import React from 'react';
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';

// Routes
import End from './end';
import Start from './start';
import Detail from './detail';

interface IProps extends RouteComponentProps {

}

function JavascriptTest ({ match }: IProps) {

	return (
		<Switch>
			<Route path={`${match.url}/end`}             render={props => <End    {...props} basePath={match.url} />} />
			<Route path={`${match.url}/detail/:test_id`} render={props => <Detail {...props} basePath={match.url} />} />
			<Route path={match.url}                      render={props => <Start  {...props} basePath={match.url} />} />
			<Route render={() => <Redirect to={match.url} />} />
		</Switch>
	);

}

export default JavascriptTest;

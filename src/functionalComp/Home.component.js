import {
	Route,
	Link,
	Switch
} from "react-router-dom";
import { useHistory, BrowserRouter as Router } from 'react-router-dom';

import BlogPage from './BlogPage.component';
import LoginPage from "./LoginPage.component";
import { useAuth } from "./ProvideAuth.component";
import UserPage from './UserPageComp';

export default function HomePage() {
	let history = useHistory();
	let auth = useAuth();

	return (
		<div>
			<div>
				<Router>
					<ul>
						<ListItemLink to="/users" name="users" component="UserPage" />
						<ListItemLink to="/blogs" name="blogs" component="BlogPage" />
					</ul>
				</Router>

				{/* <Switch>
				<Route path="/users">
					<LoginPage />
				</Route>
				<Route path="/blogs">
					<BlogPage />
				</Route>
			   </Switch> */}
			</div>

			<button
				onClick={() => {
					auth.signout(() => history.push("/login"));
				}}
			>Sign out</button>
		</div>
	)

	function ListItemLink({ to, ...rest }) {
		return (
			<Route
				path={to}
				component={rest.component}
				children={({ match }) => (
					<li>
						<Link to={to}>{rest.name}</Link>
					</li>
				)}
				/>
		);
	}
}
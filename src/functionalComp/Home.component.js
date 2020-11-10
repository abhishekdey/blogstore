import {
	Route,
	Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

import BlogPage from './BlogPage.component';
import { useAuth } from "./ProvideAuth.component";
import UserPage from './UserPageComp';

export default function HomePage() {
	let history = useHistory();
	let auth = useAuth();

	return (
		<div>
			<div>
				<ul>
					<li>
						<Link to="/users">User Page</Link>
					</li>
					<li>
						<Link to="/blogs">Blogs Page</Link>
					</li>
				</ul>

				<Route path="/users">
					<UserPage />
				</Route>
				<Route path="/blogs">
					<BlogPage />
				</Route>
			</div>

			<button
				onClick={() => {
					auth.signout(() => history.push("/login"));
				}}
			>Sign out</button>
		</div>
	)
}
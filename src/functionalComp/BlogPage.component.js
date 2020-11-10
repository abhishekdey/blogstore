import axios from "axios";
import { useEffect, useState } from "react"
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import { blogPost } from '../constants/app.constant';
import BloggerDetils from './BloggerDetails.component';

export default function BlogPage() {
  const [blogs, setBlog] = useState([]);
  const { path } = useRouteMatch();

  useEffect(
    async () => {
      try {
        const result = await axios(blogPost);
        setBlog(result.data);
      }
      catch (err) {
      }
    }, []);

  return (
    <div>
      <ul>
        {
          blogs.map((data) =>
            <li>
              <Link details={data} key={data.id} to={`${path}/${data.id}`}>{data.id}</Link>
            </li>
          )
        }
      </ul>
      <Switch>
        <Route path={`${path}/:id`}
          render={() => (
            <BloggerDetils blogs={blogs} />
          )}>
        </Route>
      </Switch>
    </div>
  )
}
import React from "react";
import { Route, Link } from "react-router-dom";

const Breadcrumbs = props => (
	<ul>
		<Route path="/:path" component={BreadcrumbsItem} />
	</ul>
);

const BreadcrumbsItem = ({ match, ...rest }) => {
	return (
		<span>
			<li className={match.isExact ? "breadcrumb-active" : undefined}>
				<Link to={match.url || ""}>{match.url}</Link>
			</li>
			<Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
		</span>
	);
};

export default Breadcrumbs;

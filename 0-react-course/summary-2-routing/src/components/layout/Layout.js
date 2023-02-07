import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css"; // classes will be a JS object containing all the css classes from this file as object properties

// props.children passes forward the children from where this component is used
// So in this case, the MainNavigation component stays at the top of the page, and then the main element contains the <Switch>...</Switch> (from Router) that is used in within the Layout component in App.js
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;

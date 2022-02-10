import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./screens/DashBoard/DashBoard";
import AddPosts from "./screens/AddPosts/AddPosts";
import BlogPost from "./screens/BlogPost/BlogPost";
import Error from "./screens/Errors/Error";
import FormsAndComponents from "./screens/FormsAndComponents/FormsAndComponents";
import Profile from "./screens/Profile/Profile";
import Tables from "./screens/Tables/Tables";
import PageStructure from "./screens/PageStructure";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <PageStructure
            children={<DashBoard />}
            title="DashBoard"
            subtitle="Blog Overview"
          />
        </Route>
        <Route exact path="/add-posts">
          <PageStructure
            children={<AddPosts />}
            title="Add Posts"
            subtitle="Subtitle for Add Posts"
          />
        </Route>
        <Route exact path="/blog-posts">
          <PageStructure
            children={<BlogPost />}
            title="Blog Post"
            subtitle="Subtitle for Blog Post"
          />
        </Route>
        <Route exact path="/form-and-component">
          <PageStructure
            children={<FormsAndComponents />}
            title="Forms And Components"
            subtitle="Subtitle for Forms And Components"
          />
        </Route>
        <Route exact path="/table">
          <PageStructure
            children={<Tables />}
            title="Tables"
            subtitle="Subtitle for Tables"
          />
        </Route>
        <Route exact path="/profile">
          <PageStructure
            children={<Profile />}
            title="Profile"
            subtitle="Subtitle for Profile"
          />
        </Route>
        <Route exact path="/errors">
          <PageStructure
            children={<Error />}
            title="Error"
            subtitle="Subtitle for Error"
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

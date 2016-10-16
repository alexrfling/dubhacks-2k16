//==============================================================================
//
//                               React Elements
//
//==============================================================================

var Project = React.createClass({

  displayName: "Project",

  render: function() {
    var ref = this.props; // don't like writing "this.props" everytime
    return React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-lg-12" },
        React.createElement("div", { className: "panel panel-default" },
          React.createElement("div", { className: "panel-heading" },
            React.createElement("h4", {}, ref.project.name,
              React.createElement("small", {}, ref.project.category)
            ),
            React.createElement("a", { className: "btn btn-social-icon btn-github" },
              React.createElement("i", { className: "fa fa-github" })
            ),
            React.createElement("a", { className: "btn btn-social-icon btn-bitbucket" },
              React.createElement("i", { className: "fa fa-bitbucket" })
            ),
            React.createElement("a", { className: "btn btn-social-icon btn-facebook" },
              React.createElement("i", { className: "fa fa-facebook" })
            ),
            React.createElement("a", { className: "btn btn-social-icon btn-twitter" },
              React.createElement("i", { className: "fa fa-twitter" })
            ),
            React.createElement("a", { className: "btn btn-social-icon btn-linkedin" },
              React.createElement("i", { className: "fa fa-linkedin" })
            )
          ),
          React.createElement("div", { className: "panel-body" },
            React.createElement("dl", {},
              React.createElement("dt", {}, "Summary"),
              React.createElement("dd", {}, ref.project.description),
              React.createElement("dt", {}, "Contributors"),
              React.createElement("dd", {}, "Stats stats stats"),
              React.createElement("dt", {}, "Desired Skills"),
              React.createElement("dd", {}, "Django, React, C++")
            )
          ),
          React.createElement("div", { className: "panel-footer" },
            React.createElement("button", { type: "button", className: "btn btn-primary" }, "Like"),
            React.createElement("button", { type: "button", className: "btn btn-info" }, "Super Like"),
            React.createElement("button", { type: "button", className: "btn btn-success" }, "Recommend"),
            React.createElement("button", { type: "button", className: "btn btn-warning" }, "Save for Later"),
            React.createElement("button", { type: "button", className: "btn btn-danger", onClick: ref.onClick }, "Not Interested")
          )
        )
      )
    );
  }
});

/*var ProjectList = React.createClass({

  displayName: "ProjectList",

  render: function() {
    this.props.projects.map(function(project) {
      // the fields of 'tile' become the props of 'this' in Tile
      return React.createElement(Project, project);
    });
  }
});*/

var App = React.createClass({

  displayName: "App",

  /*discardProject: function (project) {
    this.state.projects.splice(this.state.projects.indexOf(project), 1);

    this.setState({ projects: this.state.projects });
  },*/

  /*getInitialState: function () {
    return {
      projects: this.props.projects.splice(0)
    }
  },*/

  //render: function() {
  //  return React.createElement(ProjectList, { projects: this.props.projects });
  //}
  render: function() {
    var that = this;
    return React.createElement("div", {},
      React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col-lg-12" },
          React.createElement("h1", { className: "page-header" }, "Project Search")
        )
      ),

      this.props.projects.map(function(project) {
        // the fields of 'tile' become the props of 'this' in Tile
        return React.createElement(Project, { onClick: function (project) {
          this.state.projects.splice(this.state.projects.indexOf(project), 1);

          this.setState({ projects: this.state.projects });
        }, project: project });//{ onClick: that.discardProject.bind(null, project) });
      })
    );
    /*if (this.props.projects.length > 0) {
      return React.createElement("div", {},
        this.props.projects.map(function(project) {
          // the fields of 'tile' become the props of 'this' in Tile
          return React.createElement(Project, project);
        });
      );
    } else {
      return React.createElement("h1", {}, "Nothing to show");
    }*/
  }
});

//==============================================================================
//
//                                  App Data
//
//==============================================================================

// given an object with a 'key' and 'stock' field and a nonnegative number,
// returns an object containing all the data needed for generating a Tile
function tileData(datum, index) {
  var imgNum = Math.floor(index % 12 + 1),
      styleNum = Math.floor(index % 6 + 1);
  return {
    name: datum.key,
    description: datum.stock + " in stock",
    imgSrc: "../../static/images/pic" + (imgNum > 9 ? "" : "0") + imgNum + ".jpg",
    imgAlt: "image #" + imgNum,
    link: "item_chart.html#chart",    // useful with real data???
    articleClass: "style" + styleNum, // color on mouseout
    spanClass: "image",               // probably don't need this
    divClass: "content"               // probably don't need this
  };
}

// construct the products from the data array in data.js
var projects =
  [
    {
      name: "Name1",
      category: "Category1",
      description: "Description1",
      hasGitHub: true,
      hasBitBucket: false,
      hasFacebook: true,
      hasTwitter: true,
      hasLinkedIn: true
    }, {
      name: "Name2",
      category: "Category2",
      description: "Description1",
      hasGitHub: false,
      hasBitBucket: true,
      hasFacebook: true,
      hasTwitter: true,
      hasLinkedIn: false
    }, {
      name: "Name3",
      category: "Category3",
      description: "Description3",
      hasGitHub: true,
      hasBitBucket: false,
      hasFacebook: false,
      hasTwitter: true,
      hasLinkedIn: false
    }, {
      name: "Name4",
      category: "Category4",
      description: "Description4",
      hasGitHub: false,
      hasBitBucket: true,
      hasFacebook: true,
      hasTwitter: false,
      hasLinkedIn: false
    }, {
      name: "Name5",
      category: "Category5",
      description: "Description5",
      hasGitHub: true,
      hasBitBucket: false,
      hasFacebook: true,
      hasTwitter: true,
      hasLinkedIn: false
    }
  ];//data.map(tileData);

//==============================================================================
//
//                                App Rendering
//
//==============================================================================

ReactDOM.render(
  React.createElement(App, { projects: projects }),
  document.getElementById("page-wrapper") // renders the app inside #page-wrapper
);

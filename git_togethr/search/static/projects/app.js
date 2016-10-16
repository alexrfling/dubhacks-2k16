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
              React.createElement("dd", {}, "85 total, 56 in your area"),
              React.createElement("dt", {}, "Desired Skills"),
              React.createElement("dd", {}, ref.project.desiredSkills)
            )
          ),
          React.createElement("div", { className: "panel-footer" },
            React.createElement("button", { type: "button", className: "btn btn-primary" }, "Like"),
            React.createElement("button", { type: "button", className: "btn btn-info" }, "Super Like"),
            React.createElement("button", { type: "button", className: "btn btn-success" }, "Recommend"),
            React.createElement("button", { type: "button", className: "btn btn-warning" }, "Save for Later"),
            React.createElement("button", { type: "button", className: "btn btn-danger" }, "Not Interested")
          )
        )
      )
    );
  }
});

var SearchBox = React.createClass({
    doSearch:function(){
        var query=ReactDOM.findDOMNode(this.refs.searchInput).value; // this is the search text
        this.props.doSearch(query);
    },
    render:function(){
        return React.createElement("input", { type: "text", ref: "searchInput", placeholder: "Search Name", value: this.props.query, onChange: this.doSearch });
    }
});

var DisplayTable = React.createClass({
    render:function(){
        //making the rows to display
        var rows=[];
        this.props.data.forEach(function(project) {
          rows.push(
            React.createElement("tr", {},
              React.createElement("td", {}, project.name),
              React.createElement("td", {}, project.description)
            )
          );
        });
        //returning the table
        return(
          React.createElement("table", {},
            React.createElement("thead", {},
              React.createElement("tr", {},
                React.createElement("th", {}, "Name"),
                React.createElement("th", {}, "Description")
              )
            ),
            React.createElement("tbody", {}, rows)
          )
        );
    }
});

var InstantBox = React.createClass({
    doSearch:function(queryText){
        console.log(queryText)
        //get query result
        var queryResult=[];
        this.props.data.forEach(function(project){
            if(project.name.toLowerCase().indexOf(queryText)!=-1)
            queryResult.push(project);
        });

        this.setState({
            query:queryText,
            filteredData: queryResult
        })
    },
    getInitialState:function(){
        return{
            query:'',
            filteredData: this.props.data
        }
    },
    render:function(){
        return (
          React.createElement("div", { className: "InstantBox" },
            React.createElement("h2", {}, "Search"),
            React.createElement(SearchBox, { query: this.state.query, doSearch: this.doSearch }),
            React.createElement(DisplayTable, { data: this.state.filteredData })
          )
        );
    }
});

var App = React.createClass({

  displayName: "App",

  render: function() {
    return React.createElement("div", {},
      React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col-lg-12" },
          React.createElement("h1", { className: "page-header" }, "Project Search"),
          React.createElement(SearchBox, {})
        )
      ),
      this.props.projects.map(function(project) {
        return React.createElement(Project, { onClick: (project) => {
          this.state.projects.splice(this.state.projects.indexOf(project), 1);

          this.setState({ projects: this.state.projects });
        }, project: project });
      })
    );
  }
});

//==============================================================================
//
//                                  App Data
//
//==============================================================================

var projects =
  [
    {
      name: "Awesome Project",
      category: "Healthcare",
      description: "We're doing really cool things in healthcare, and looking for people of any skill level to join us!",
      desiredSkills: "Django, React, C++",
      hasGitHub: true,
      hasBitBucket: false,
      hasFacebook: true,
      hasTwitter: true,
      hasLinkedIn: true
    }, {
      name: "Another Awesome Project",
      category: "Sports",
      description: "Making an iPhone app for sports sports sports SPORTS. Would love to have someone help",
      desiredSkills: "Django, React, C++",
      hasGitHub: false,
      hasBitBucket: true,
      hasFacebook: true,
      hasTwitter: true,
      hasLinkedIn: false
    }, {
      name: "Name3",
      category: "Category3",
      description: "Description3",
      desiredSkills: "Django, React, C++",
      hasGitHub: true,
      hasBitBucket: false,
      hasFacebook: false,
      hasTwitter: true,
      hasLinkedIn: false
    }, {
      name: "Name4",
      category: "Category4",
      description: "Description4",
      desiredSkills: "Django, React, C++",
      hasGitHub: false,
      hasBitBucket: true,
      hasFacebook: true,
      hasTwitter: false,
      hasLinkedIn: false
    }, {
      name: "Name5",
      category: "Category5",
      description: "Description5",
      desiredSkills: "Django, React, C++",
      hasGitHub: true,
      hasBitBucket: false,
      hasFacebook: true,
      hasTwitter: true,
      hasLinkedIn: false
    }
  ];

//==============================================================================
//
//                                App Rendering
//
//==============================================================================

/*ReactDOM.render(
  React.createElement(App, { projects: projects }),
  document.getElementById("page-wrapper") // renders the app inside #page-wrapper
);*/

ReactDOM.render(
  React.createElement(InstantBox, { data: projects }),
  document.getElementById("page-wrapper")
);

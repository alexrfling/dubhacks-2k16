//==============================================================================
//
//                               React Elements
//
//==============================================================================

var Dev = React.createClass({

  displayName: "Dev",

  render: function() {
    var ref = this.props; // don't like writing "this.props" everytime
    return React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-lg-12" },
        React.createElement("div", { className: "panel panel-default" },
          React.createElement("div", { className: "panel-heading" },
            React.createElement("h4", {}, ref.name,
              React.createElement("small", {}, ref.location)
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
              React.createElement("dt", {}, "Bio"),
              React.createElement("dd", {}, ref.description),
              React.createElement("dt", {}, "Skills"),
              React.createElement("dd", {}, ref.skills),
              React.createElement("dt", {}, "Interests"),
              React.createElement("dd", {}, ref.interests)
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

var App = React.createClass({

  displayName: "App",

  render: function() {
    return React.createElement("div", {},
      React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col-lg-12" },
          React.createElement("h1", { className: "page-header" }, "Developer Search")
        )
      ),

      this.props.devs.map(function(dev) {
        return React.createElement(Dev, dev);
      })
    );
  }
});

//==============================================================================
//
//                                  App Data
//
//==============================================================================

var devs =
  [
    {
      name: "Joycie Yu",
      location: "Seattle, WA, United States",
      interests: "Front-end web development, data wrangling",
      skills: "HTML, CSS, R",
      description: "A total baller",
      hasGitHub: true,
      hasBitBucket: false,
      hasFacebook: true,
      hasTwitter: true,
      hasLinkedIn: true
    }, {
      name: "Kevin Kim",
      location: "Seattle, WA, United States",
      interests: "Back-end web development, anything Django",
      skills: "Django, Java",
      description: "Plebian",
      hasGitHub: false,
      hasBitBucket: true,
      hasFacebook: true,
      hasTwitter: true,
      hasLinkedIn: false
    }, {
      name: "Silin Zeng",
      location: "Seattle, WA, United States",
      interests: "Machine learning, artificial intelligence",
      skills: "Swift, JavaScript, Python",
      description: "Swaggy as can be",
      hasGitHub: true,
      hasBitBucket: false,
      hasFacebook: false,
      hasTwitter: true,
      hasLinkedIn: false
    }, {
      name: "Alex Fling",
      location: "Seattle, WA, United States",
      interests: "Looking to get into software engineering",
      skills: "N/A",
      description: "Pretty chill dude",
      hasGitHub: false,
      hasBitBucket: true,
      hasFacebook: true,
      hasTwitter: false,
      hasLinkedIn: false
    }
  ];

//==============================================================================
//
//                                App Rendering
//
//==============================================================================

ReactDOM.render(
  React.createElement(App, { devs: devs }),
  document.getElementById("page-wrapper") // renders the app inside #page-wrapper
);

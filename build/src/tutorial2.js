// tutorial2.js
var CommentList = React.createClass({displayName: "CommentList",
    render: function(){
        return (
React.createElement("div", {className: "commentList"}, 
    "Hello, world! I am a CommentList."
)
        );
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render: function(){
        return (
React.createElement("div", {className: "commentForm"}, 
    "Hello, world! I am CommentForm."
)
        );
    }
});

var MyComponent = React.createClass({displayName: "MyComponent",
    render: function(){
        return (
React.createElement("div", {classNmae: "character"}, "Hello, ", this.props.name, "!")
        );
    }
});

React.render(React.createElement(CommentList, null), document.getElementById('content'));
React.render(React.createElement(CommentForm, null), document.getElementById('content'));
React.render(React.createElement(CommentList, null), document.getElementById('content'));
React.render(React.createElement(MyComponent, {name: "Tyler Durden"}), document.getElementById('content'));

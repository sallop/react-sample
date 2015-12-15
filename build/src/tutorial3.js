// tutorial1.js
var CommentBox = React.createClass({displayName: "CommentBox",
    render: function(){
        return (
            React.createElement("div", {className: "commonBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, null), 
                React.createElement(CommentForm, null)
            )
        );
    }
});

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

//ReactDom.render(
React.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);


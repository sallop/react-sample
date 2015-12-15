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

var CommentForm = React.createClass({displayName: "CommentForm",
    render: function(){
        return (
React.createElement("div", {className: "commentForm"}, 
    "Hello, world! I am CommentForm."
)
        );
    }
});

// tutorial4.js
var Comment = React.createClass({displayName: "Comment",
    render: function(){
        return (
React.createElement("div", {className: "comment"}, 
    React.createElement("h2", {className: "commentAuthor"}, 
        this.props.author
    ), 
    this.props.children
)
        );
    }
});

// tutorial5.js
var CommentList = React.createClass({displayName: "CommentList",
    render: function(){
        return (
React.createElement("div", {className: "commentList"}, 
    React.createElement(Comment, {author: "Tyler Durden"}, "It's only after we've lost everything that we're free to do anything."), 
    React.createElement(Comment, {author: "Narrator"}, "This is your life and it's ending one minute at a time.")
)
);
    }
});

//ReactDom.render(
React.render(
React.createElement(CommentList, null),
    document.getElementById('content')
);


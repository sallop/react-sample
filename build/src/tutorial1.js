// tutorial1.js
var CommentBox = React.createClass({displayName: "CommentBox",
    render: function(){
        return (
            React.createElement("div", {className: "commentBox"}, 
                "Hello, world! I am CommentBox."
            )
        );
    }
});

//ReactDom.render(
React.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);

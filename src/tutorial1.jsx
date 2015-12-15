// tutorial1.js
var CommentBox = React.createClass({
    render: function(){
        return (
            <div className="commentBox">
                Hello, world! I am CommentBox.
            </div>
        );
    }
});

//ReactDom.render(
React.render(
    <CommentBox />,
    document.getElementById('content')
);

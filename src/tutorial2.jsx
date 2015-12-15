// tutorial2.js
var CommentList = React.createClass({
    render: function(){
        return (
<div className="commentList">
    Hello, world! I am a CommentList.
</div>
        );
    }
});

var CommentForm = React.createClass({
    render: function(){
        return (
<div className="commentForm">
    Hello, world! I am CommentForm.
</div>
        );
    }
});

var MyComponent = React.createClass({
    render: function(){
        return (
<div classNmae="character">Hello, {this.props.name}!</div>
        );
    }
});

React.render(<CommentList />, document.getElementById('content'));
React.render(<CommentForm />, document.getElementById('content'));
React.render(<CommentList />, document.getElementById('content'));
React.render(<MyComponent name="Tyler Durden" />, document.getElementById('content'));

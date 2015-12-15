// tutorial1.js
var CommentBox = React.createClass({
    render: function(){
        return (
            <div className="commonBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

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

// tutorial4.js
var Comment = React.createClass({
    render: function(){
        return (
<div className="comment">
    <h2 className="commentAuthor">
        {this.props.author}
    </h2>
    {this.props.children}
</div>
        );
    }
});

//ReactDom.render(
React.render(
<Comment
    author="Tyler Durden"
    children="It's only after we've lost everything that we're free to do anything." />,
    document.getElementById('content')
);


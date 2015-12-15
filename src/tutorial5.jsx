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

// tutorial5.js
var CommentList = React.createClass({
    render: function(){
        return (
<div className="commentList">
    <Comment author="Tyler Durden">It's only after we've lost everything that we're free to do anything.</Comment>
    <Comment author="Narrator">This is your life and it's ending one minute at a time.</Comment>
</div>
);
    }
});

//ReactDom.render(
React.render(
<CommentList />,
    document.getElementById('content')
);


// tutorial6.js
var Comment = React.createClass({
    render: function(){
        return (
<div className="comment">
    <h2 className="commentAuthor">
        {this.props.author}
    </h2>
    { marked(this.props.children.toString()) }
</div>
        );
    }
});

// tutorial5.js
var CommentList = React.createClass({
    render: function(){
        return (
<div className="commentList">
    <Comment author="Tyler Durden">#It's only after we've lost everything that we're free to do anything.</Comment>
    <Comment author="Narrator">##This is your life and it's ending one minute at a time.</Comment>
</div>
);
    }
});

//ReactDom.render(
React.render(
    <CommentList />,
    document.getElementById('content')
);


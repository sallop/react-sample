// tutorial7.js
var Comment = React.createClass({
    rawMarkup: function(){
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    },
    render: function(){
        return (
<div className="comment">
    <h2 className="commentAuthor">
        {this.props.author}
    </h2>
    <span dangerouslySetInnerHTML={ this.rawMarkup() } />
</div>
        );
    }
});

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

React.render(
    <CommentList />,
    document.getElementById('content')
);


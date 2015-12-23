// tutorial13.js
var CommentBox = React.createClass({
    loadCommentsFromServer: function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function(){
        return { data: []};
    },
    componentDidMount: function(){
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.poolInterval);
    },
    render: function(){
        return (
<div className="commentBox">
    <h1>Comments</h1>
    <CommentList data= { this.state.data } />
    <CommentForm />
</div>
        );
    }
});

// tutorial10.js
var CommentList = React.createClass({
    render: function(){
        var commentNodes = this.props.data.map(function(comment){
            return (
<Comment author={comment.author} key={comment.id}>
    {comment.text}
</Comment>
            );
        });
        return (
<div className="commentList">
    {commentNodes}
</div>
        );
    }
});

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

var CommentForm = React.createClass({
    getInitialState: function(){
        return {author: '', text: ''};
    },
    handleAuthorChange: function(e){
        this.setState({author: e.target.value});
    },
    handleTextChange: function(e){
        this.setState({text: e.target.value});
    },
    render: function(){
        return (
            <form className="commentForm">
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.handleAuthorChange}
                    onChange={this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

var data = [
    {id: 1, author: "Pete Hunt"   , text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
    {id: 3, author: "Tyler Durden", text: "Things you own end up own you."}
];

// tutorial11.js
ReactDOM.render(
//<CommentBox url="/tycc_remote/react-sample/build/api/comments.json" pollInterval={2000} />,
<CommentBox url="/tycc_remote/react-sample/build/api/comments" pollInterval={2000} />,
    document.getElementById('content')
);

//ReactDOM.render(
////<CommentBox url="/tycc_remote/react-sample/build/api/comments.json" pollInterval={2000} />,
//<CommentBox url="/tycc_remote/react-sample/build/api/comments" pollInterval={2000} />,
//    document.getElementById('content2')
//);




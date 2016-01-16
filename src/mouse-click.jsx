// tutorial1.js
var Entry = React.createClass({
  handleClick: function(event){
    console.log('handleClick');
    console.log( this.props.id );
    console.log( this.props.team );
    console.log( this.props.fullname );
    console.log( this.props.birthday );
  },
  render: function(){
    return (
      <tr className="christian" onClick={this.handleClick} >
        <td>{this.props.id}</td>
        <td>{this.props.team}</td>
        <td>{this.props.fullname}</td>
        <td>{this.props.christian_name}</td>
        <td>{this.props.birthday}</td>
      </tr>
    );
  }
});

var ChristianTable = React.createClass({
  count: 0,
  loadEntryFromServer: function(){
    $.ajax({
     url: this.props.url,
     dataType: 'json',
     cache: false,
     success: function(items){
       console.log( items );
        this.setState({items: items});
//this.setProps({items: items});
     }.bind(this),
     error: function(xhr, status, err){
       console.error(this.props.url, status, err.toString());
     }.bind(this)
    });
  },
//getDefaultProps: function(){
  getInitialState: function(){
//this.loadEntryFromServer();
    return { items: [] };
  },
//componentDidMount: function(){
  componentWillMount: function(){
    this.loadEntryFromServer();
    if(this.isMounted()){
      this.setState({
        items: items
      });
    }
    console.log( this.props.items );
  },
  render: function(){
//this.loadEntryFromServer();
    console.log( this.items );
    console.log( this.props.items );
    console.log( this.state.items );
//var listItems = this.props.items.map(function(item){
    var listItems = this.state.items.map(function(item){
      console.log( item );
      return (
        <Entry id={item.id} team={item.team} fullname={item.fullname} birthday={item.birthday} />
      );
    });
    return (
      <table border="3">
        <thead>
          <tr>
            <th>ID</th>
            <th>班</th>
            <th>氏名</th>
            <th>洗礼名</th>
            <th>生年月日</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>
    );
  }
});

var CommentBox = React.createClass({
    getInitialState: function(){
      console.log('getInitialState');
      return { liked: false, data: [] };
    },
    render: function(){
//var text = this.state.liked ? 'like' : 'haven\'t liked';
      var text = this.state.liked ? 'liked' : 'haven\'t liked';
      console.log( this.state.data );
//var data = $.parseJSON( this.state.data );
//console.log( data );
        return (
            <div className="commentBox" onClick={this.handleClick}>
              Hello, world!
              This is mouse click event.
              You {text} this. Click to toggle.
              <input type="text" placeholder={text} />
            </div>
        );
    }
});

React.render(
  <ChristianTable url="api/church.json" />,
  document.getElementById('content')
);

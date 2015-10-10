var Map = React.createClass({
  render: function(){
    return(
      <div className="map" ref="map"></div>
    );
    // (<div class="map" ref="map"></div>,
    // document.getElementById('content'))
  },

  _onAddMarker: function() {
    BenchStore.all().map(this._addSingleMarker);

  },
  _addSingleMarker: function (bench) {
    return new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: bench.description
    });
  },

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    BenchStore.addMarkerListener(this._onAddMarker);
  },



});

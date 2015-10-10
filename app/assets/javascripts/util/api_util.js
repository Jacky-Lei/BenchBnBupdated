window.ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      url: "/api/benches",
      // goes to api/benches because that is used as namespace in routes, and just
      // used as a space to hold info from server, serves purpose just for ajax
      // to fetch data from server
      type: "GET",
      // dataType: "JSON",
      success: function(benches){
        ApiActions.receiveAll(benches);
        // this isn't defined yet but you know it's going to have to go to ApiActions as an Action Creator
      }
    });
  }
};

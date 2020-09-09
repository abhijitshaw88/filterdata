const url= 'https://jsonplaceholder.typicode.com/users';
fetch(url).then(function(u){ return u.json();})
.then(function(json){
  data_function(json);
  }
)
function data_function(data){
  // console.log(data);
  function buildtable(data){
      var table=document.getElementById('user-data')
      table.innerHTML=""
      for(var i=0;i < data.length;i++){
        var row=`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].username}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].phone}</td>
                </tr>`
          table.innerHTML +=row;
      }
  }
  buildtable(data);
  // $(“#user_table”) .dataTable();
  // console.log("ok");
  $('#search-input').on('keyup', function(){
    var value= $(this).val()
    // console.log(value);
    var filter=filterdata(value,data);
    buildtable(filter);
  })
  function filterdata(value,data){
    var searchResult=[]
    for(var i=0;i < data.length;i++){
      value=value.toLowerCase();
      var name=data[i].name.toLowerCase();
      if(name.includes(value)){
        searchResult.push(data[i]);
      }
    }
    return searchResult;
  }
}
$(document).ready( function () {
    $('#user_table').DataTable({
      searching: false,
      filter: false,
      ordering: false,
      pageLength: 3
    });
} );

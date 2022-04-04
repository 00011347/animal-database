$("#add_user").submit(function (event) {
  alert("Data inserted successfully!");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  console.log(data);

  var request = {
    url: `/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data updated Successfully");
  });
  window.location.replace("/");
});

$("a.delete").click(function () {
  console.log("delete btn");
  var id = $(this).attr("data-id");

  var request = {
    url: `/api/users/${id}`,
    method: "DELETE",
  };

  if (confirm("Do you really want to DELETE?")) {
    $.ajax(request).done(function (response) {
      alert("Success!");
      location.reload();
    });
  }
});

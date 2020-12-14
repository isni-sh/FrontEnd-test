var planets = ["Jupiter", "Neptune", "Mars", "Venus", "Saturn"];

var searchInput = document.getElementById("search-bar-input"),
  searchResult = document.getElementById("planet-result");

searchInput.addEventListener("focus", (e) => {
  for (i = 0; i < planets.length; i++) {
    var showPlantes = document.createElement("div");
    showPlantes.innerHTML = `
    <table class="table">
    <tr>
      <td>${planets[i]}</td>
    </tr>
</table>
`;
    searchResult.appendChild(showPlantes);
  }

  var filter = searchInput.value.toUpperCase();
  var table = document.getElementsByTagName("table");
  var tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerHTML;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});

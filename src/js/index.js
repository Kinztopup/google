function search() {
  let { value } = document.getElementById("searchInput");

  const baseUrl = "https://google.com/search?q=";

  if (!value) value = "kinztopup";
  location.replace(baseUrl + value);
}

function luck() {
  location.replace("https://kinztopup.com");
}

function toggleFunction() {
  var checkbox = document.getElementById("myCheckbox");
  if (checkbox.checked) {
    document.getElementById(
      "price1"
    ).innerHTML = `<span class="dollar">&dollar;&nbsp;</span><span>19.99</span>`;
    document.getElementById(
      "price2"
    ).innerHTML = `<span class="dollar">&dollar;&nbsp;</span><span>24.99</span>`;
    document.getElementById(
      "price3"
    ).innerHTML = `<span class="dollar">&dollar;&nbsp;</span><span>39.99</span>`;
  } else {
    document.getElementById(
      "price1"
    ).innerHTML = `<span class="dollar">&dollar;&nbsp;</span><span>199.99</span>`;
    document.getElementById(
      "price2"
    ).innerHTML = `<span class="dollar">&dollar;&nbsp;</span><span>249.99</span>`;
    document.getElementById(
      "price3"
    ).innerHTML = `<span class="dollar">&dollar;&nbsp;</span><span>399.99</span>`;
  }
}

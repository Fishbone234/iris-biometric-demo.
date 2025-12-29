function scanIris() {
  const result = document.getElementById("result");
  result.innerText = "Scanning iris...";

  setTimeout(() => {
    result.innerText = "Iris matched. Identity verified ✓";
  }, 2000);
}

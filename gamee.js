const outfitForm = document.getElementById("outfitForm");

outfitForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var selectedOutfit = document.querySelector('input[name="outfit"]:checked').value;
    console.log(selectedOutfit);
    localStorage.setItem("outfit", selectedOutfit);


    if (selectedOutfit === 'repairman') {
      window.location = 'page2.html'; // Redirect to the next page
      
    } else if (selectedOutfit == "clown") {
        console.log("clown");
      window.location = 'page3.html' // Redirect to the skill check page
    } else if (selectedOutfit == "usual") {
        console.log("usual")
        window.location = 'page3.html'
    } else {
        console.log()
    }
  });
var form= document.getElementById("book-form");
form.addEventListener("submit", function(event){
	event.preventDefault();

	var title=document.getElementById("title").value;
	var author=document.getElementById("author").value;
	var isbn=document.getElementById("isbn").value;
	console.log("Title:", title, "Author:", author, "ISBN:", isbn);
})
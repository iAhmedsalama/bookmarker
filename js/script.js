var bookmarkName = document.getElementById("bookmarkName");
var bookmarkUrl = document.getElementById("bookmarkUrl");





if(localStorage.getItem("bookmarksList") == null){
    var bookmarks = [];    

}
else{
    
    bookmarks = JSON.parse( localStorage.getItem("bookmarksList"));
    displayBookmark();

}





function add(){

    
   
    if(checkInput() == true){

        var bookmark = {

            name : bookmarkName.value,
            url : bookmarkUrl.value
        }
    
        bookmarks.push(bookmark);

        localStorage.setItem("bookmarksList", JSON.stringify(bookmarks) );
    
        
        // console.log(bookmark);
    
        clearBookmark();
    
    }

    else{

        window.alert("All inputs required");
    }

    displayBookmark();
    
       
}


function clearBookmark(){

    bookmarkName.value = "";
    bookmarkUrl.value = "";
}




function displayBookmark(){

    var bookmark = ``;

    for(var i=0; i<bookmarks.length; i++)
    {
        bookmark += `

        
           
        <div class="d-flex justify-content-center mb-4">
  
            <h2 class="col-md-4">${bookmarks[i].name}</h2>
    
            <div class="col-md-4 d-flex justify-content-between">
                <a class="btn btn-outline-info " href="http://${bookmarks[i].url}" target="_blank" >visit</a>

                <a class="btn btn-outline-danger" onclick = "deleteBookmark(${i})">Delete</a>
            </div>

        </div>
            

        `
    }

    document.getElementById("bookmarksBody").innerHTML = bookmark;
}



function checkInput(){

   
    if( bookmarkName.value != "" && bookmarkUrl.value != ""){
        return true;
    }  
    else{
        return false;
    }
}

function deleteBookmark(index){

    bookmarks.splice(index, 1);

    localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));

    displayBookmark();


}

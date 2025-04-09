function fetchPostData(){
    return new Promise((resolve) => {
         setTimeout(() => {
            resolve("Post Data fetched")
         }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Rost Data fetched")
        },3000);  
    });
}

async function getBlogData(){
    try{
        console.log("Fetching blog Data");
        const blogData = await fetchPostData();
        const commentData = await fetchCommentData();
        console.log("fetch complete");
    }catch (error){
        console.error("Error fetching blog data", error);
    }
}
getBlogData();
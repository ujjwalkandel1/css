//promises and promise chaining
function fetchData (){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let success = true;
            if(success){
                resolve("Data fetched successfully")
            }else {
                reject("Error Fetching data");
            }
        }, 3000);
    });
}


// let response = getchData();
// console.log(response);

fetchData()
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
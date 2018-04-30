exports.log = (error, title, obj) => {
    if(error){
        console.error(title, obj);
    } else {
        console.log(title, obj);
    }   
}
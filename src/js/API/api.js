class API {
    async getData(url){
        let dataToBeReturned = {};
        await fetch(url).then(
            (response) => {
                return response.json();
            }
        ).then((data) =>{
            dataToBeReturned = data.data;
        })
        return dataToBeReturned;
        //hier pak je de data.json en die geef je ook mee aan de app
    }
}
export const GetData = async() => {
    try {
       const response = await fetch(
            "http://www.omdbapi.com/?i=tt3896198&apikey=c421e41f"
        );
        const data = response.json();
        return data;
    } catch(error) {
        console.log(error);
        
    }
};

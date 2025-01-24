export const GetData = async() => {
    try {
       const response = await fetch(
            "https://www.omdbapi.com/?i=tt3896198&apikey=8c3c945a"
        );
        const data = response.json();
        return data;
    } catch(error) {
        console.log(error);
        
    }
};

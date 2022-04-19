const getDataApi = async () => {
    try {
        const dataApi = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json');
        if(dataApi.ok) {
            const dataResponse = await dataApi.json();
            console.log(dataResponse)
        } else {
        throw new Error('Failed to Request Currency API'); 
        } //* INVESTIGAR if without else y tambien throw new
    } catch (error) {
        console.log(error)
    }
}

getDataApi();
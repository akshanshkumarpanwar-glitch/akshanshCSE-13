const { useEffect } = require("react");

function UseEffect() {
    const [apiData, setApiData] = useState(null);
    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then((response) => response.json())
            .then((apiData) => setApiData(apiData));
    })
    
    useEffect(() => {
        setTimeout(increment, 1000);
    });
    return (
        <>
            
        </>
    )

    useEffect(() => {
        
    });
}
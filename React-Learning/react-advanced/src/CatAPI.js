import {useState, useEffect} from 'react'

export default function CatAPI() {
    const [dataImg, setDataImg] = useState();

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setDataImg(data[0].url);
            });
    }, []);
  
    return (
        <>
            {dataImg && (
                <img
                    src={dataImg}
                    alt="cat image"
                    style={{ width: "500px", marginTop: "50px" }}
                />
            )}
        </>
    )  
}

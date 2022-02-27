import { useEffect, useState } from "react";


function CustomHookBar() {

    const [cocktails, setCocktails] = useState([]);
    useEffect(() => {
        fetch('www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
            .then(r => r.json())
            .then(d => {
                console.log(d)
                setCocktails(d.drinks)
            })
    }, []);


    return (
        [cocktails, setCocktails]
    );
}


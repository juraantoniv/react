import User from "../user/User";
import {useEffect, useState} from "react";


export default function Users() {
    let [users, setUsers] = useState([]);

useEffect(()=>{

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setUsers(value.results);
        });

},[])



    return (<div>
            {users.map((user, index) =>
                (<User item={user} key={index} />)

            )}


        </div>


    );
}
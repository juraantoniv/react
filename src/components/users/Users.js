import User from "../user/User";
import {useEffect, useState} from "react";

 export default function Users() {
    let [users, setUsers] = useState([]);

useEffect(()=>{

    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6')
        .then(value => value.json())
        .then(value => {
            setUsers(value);
        });

},[])



    return (<div>
            {users.map((user, index) =>
                (<User item={user} key={index} />)

            )}


        </div>


    );
}



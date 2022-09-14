
export default function User(props) {
    let {item: user} = props;
    let {key}= props


            return (<div className='one'>

                <h3>{key}<br/>{user.name}</h3>
                <div>{user.status}</div>
                <div>{user.gender}</div>
                <img src={user.image} alt='img_at'/>

            </div>);



}

export default function User(props) {
    let {item: user} = props;


    return (<div className='one'>
        <div>
            <h3>{user.id}<br/>{user.name}</h3>
            <div>{user.status}</div>
            <div>{user.gender}</div>
            <img src={user.image} alt='img_at'/>
        </div>
    </div>);
}
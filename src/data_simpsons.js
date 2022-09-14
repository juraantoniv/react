
export default function Simpsons(props){
    let Bart = 'Bart';
    let Marge_Simpson = 'Marge Simpson'
    let  Homer_Simpson = 'Homer Simpson'
    let  Lisa_Simpson ='Lisa Simpson'
    let  All = 'All'

    return (<div>
        <div className={All}>
        <div className='card'>
            <h3>{Lisa_Simpson}</h3>
            <img src='https://static.simpsonswiki.com/images/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png' alt='Lisa'/>
        </div>
        <div className='card'>
            <h3>{Bart}</h3>
            <img src='https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/200px-Bart_Simpson.png' alt='Bart'/>
        </div>
        <div className='card'>
            <h3>{Marge_Simpson}</h3>
            <img src='https://static.simpsonswiki.com/images/thumb/0/0b/Marge_Simpson.png/250px-Marge_Simpson.png' alt='Merge'/>
        </div>
        <div className='card'>
            <h3>{Homer_Simpson}</h3>
            <img src='https://static.simpsonswiki.com/images/b/bd/Homer_Simpson.png' alt='Homer'/>
        </div>
        </div>
    </div>);
}
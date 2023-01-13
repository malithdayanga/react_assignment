import {Link, useParams} from 'react-router-dom';
import users from './Data';

const SingleUser = () => {
    const {userId} = useParams();
    const user = users.find((user)=> user.id === userId);
    const {image, fname} = user
    return (
        
        
        <section className="">
            
            <div className='back'><Link to="/" className='btn'>Back</Link></div>
            
            <div className='single_section'>
                <img src={image} alt={fname}/>
                <div className='detail'>
                    <h2>First Name : {user.fname}</h2>
                    <h2>Last Name : {user.lname}</h2>
                    <h2>Email : {user.email}</h2>
                </div>
            </div>
            
        </section>
    );
};

export default SingleUser;
import {Link} from 'react-router-dom';
import users from './Data'
import './Style.css'

const Home = () => {

    return (
        <section className="section">
            <div className='home_title'><h2>Web Application Title</h2></div>
            
            <div className='page'>
                <div className='users'>
                    {users.map((user)=>{
                        return <article key={user.id}>
                            <div className='card'>
                                <div className='user_img'><img src={user.image} alt={user.fname}/></div>
                                <h4>First_Name : <Link to={`/${user.id}`}>{user.fname}</Link></h4>
                                <h4>Email :{user.email}</h4> 
                            </div>
                        </article>
                    })}
                </div>
            </div>
        </section>
 
    );
};

export default Home;
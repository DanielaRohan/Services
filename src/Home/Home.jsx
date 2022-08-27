import '../Style/home.scss'
import { Header, Sidebar, Content } from '../Component';

export const Home = function () {
    return (
        <div className="home-page">
           <Header />
           <div className='home-content'>
               <Sidebar />
               <Content />
           </div>
        </div>
    )
}
import './nav.css'
import logo from './../../logo.png'
export default () => {
    return (
        <div className='nav'>
            <div className='nav-section'>
                <img src={logo} alt="logo" className='logo' />
                <div className='nav_search'>
                    <input id='search' type="text" placeholder='Search...' className='search'/>
                    <label htmlFor='search'><i className="bi bi-search "></i></label>
                </div>
            </div>
            <div className='nav-section nav-login'>
                <button className='nav-btn btn-login'>Log in</button>
                <button className='nav-btn btn-register'>Create account</button>
            </div>
        </div>
    )
}
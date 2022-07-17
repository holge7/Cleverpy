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
            <div className='nav-section'>
                <button className='login-btn pink'>Log in</button>
                <button className='login-btn purple'>Create account</button>
            </div>
        </div>
    )
}
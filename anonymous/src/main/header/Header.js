import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
class Header extends React.Component {
    logout = () => {
        localStorage.clear();
        window.location.replace("http://localhost:3000/login");
    }
    render() {
        return (
            <>
                <div className={this.props.myActive ? 'sidebar active1' : 'sidebar'}>
                    <div className="logo_content" >
                        <div className="logo">
                            <NavLink to={'/'} end>
                                <img src='./assets/images/logo.png' alt="..." />
                            </NavLink>
                        </div>
                        <i className='bx bx-menu'
                            onClick={() => this.props.updateActive(!this.props.myActive)}></i>
                    </div>

                    <ul className="nav_list">
                        <li>
                            <NavLink to={'/'} end>
                                <i className='bx bxs-customize'></i>
                                <span className="links_name">Trang chủ</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/profile'} end>
                                <i className="fa-solid fa-person"></i>
                                <span className="links_name">Profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/ai'} end>
                                <i className="fa-solid fa-question"></i>
                                <span className="links_name">Hỏi đáp</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/search'} end>
                                <i className="fas fa-search"></i>
                                <span className="links_name">Tìm kiếm</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/bill'} end>
                                <i className="fa-solid fa-money-bill"></i>
                                <span className="links_name">Chuyển tiền</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/history'} end>
                                <i className="fa-solid fa-clock-rotate-left"></i>
                                <span className="links_name">Lịch sử giao dịch</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/message'} end>
                                <i className="fa-solid fa-message"></i>
                                <span className="links_name">Tin nhắn</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about_us'} end>
                                <i className="fa-solid fa-circle-info"></i>
                                <span className="links_name">Về chúng tôi</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => this.logout()} to='/Login'>
                                <i className='bx bx-log-out  bx-sm' ></i>
                                <span className="links_name">Logo out</span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="logo-out">
                        <label className="switch">
                            <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                            <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
                            <input type="checkbox" className="input" name="changeTheme" />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </>
        );
    }


}

export default Header;
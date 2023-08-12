import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../store/reducers/userReducer';

export const Header = () => {
    const { authorized, user } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = () => {
        !authorized ? navigate('/auth') : dispatch(logout());
    };
    return (
        <div className='flex justify-between w-full px-10 py-4 items-center'>
            <Link to='/' className='text-3xl font-semibold text-orange-500'>
                NSD
            </Link>
            <div className='flex gap-4'>
                {authorized && user?.is_superuser && <Link to='/manager'>Панель менеджера</Link>}
                {authorized && !user?.is_superuser && <Link to='/orders'>Заказы</Link>}
                {authorized && user?.username && <p>{user.username}</p>}
                {!location.pathname.includes('auth') && (
                    <button onClick={handleClick}>{authorized ? 'Выйти' : 'Войти'}</button>
                )}
            </div>
        </div>
    );
};

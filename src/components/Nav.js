import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { setCrumps } from '../store/slice/BreadCrumpSlice';

function Nav({val}) {
  const dispatch = useDispatch();
  const selector = useSelector((state)=> state.breadCrumbs.path[0])
  const clickHandle = (newPath) => {
    dispatch(setCrumps({ path: newPath, operation: 0 }));
  };

  return (
    <li >
        <Link
            onClick={() => clickHandle(val)}
            className={`font-medium text-base ${selector === val ? 'text-blue-600  font-bold drop-shadow' : (val === 'Home' ? 'text-neutral-900 font-bold text-xl drop-shadow' : 'text-neutral-600')} hover:font-bold active:text-orange-300 capitalize`}
            to={val === 'Home' ? "/" : val.toLowerCase()}
        >
            {val}
        </Link>
    </li>
  )
}

export default Nav
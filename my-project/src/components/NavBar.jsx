import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const { currentUser, logout } = useContext(MyContext);
    const nav = useNavigate();

    const handleLogout = () => {
        logout(); // קריאה לפונקציית ההתנתקות מתוך הקונטקסט
        nav("/"); // ניווט לעמוד הבית לאחר ההתנתקות
    };

    return (
        <nav>
            {currentUser?.role === "manager" && <Link to="/users">ניהול משתמשים</Link>}

            {!currentUser ? (
                <>
                    <Link to="/log">
                        <FontAwesomeIcon icon={faUser} style={{ fontSize: '20px' }} />
                    </Link>
                </>
            ) : (
                 <>
                    <Link to="/profile">
                        {currentUser.userName}
                    </Link>
                    <button onClick={handleLogout}>התנתקות</button>
                </>
            )}


        </nav>
    );
}

export default NavBar
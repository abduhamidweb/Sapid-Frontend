const HeaderLink = ({ clas, txt }) => {
    return (
        <>
            <li className="nav-item">
                <a className={clas} aria-current="page" href="#">{txt}</a>
            </li>
        </>
    );
};

export default HeaderLink;
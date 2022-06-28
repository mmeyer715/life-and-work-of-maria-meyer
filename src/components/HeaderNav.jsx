import React from "react";

function HeaderNav({ currentPage, handlePageChange }) {
    const data = [
        {
            href: "#about",
            pageName: "About",
        },
        {
            href: "#portfolio",
            pageName: "Portfolio",
        },
        {
            href: "#contact",
            pageName: "Contact",
        },
        {
            href: "#resume",
            pageName: "Resume",
        },
    ]
    return (
        <header>
            <div className="headerNav">
                <div className="navContainer d-flex flex-row justify-content-between">
                    <div className="navLinks col">
                        <ul className="navBar nav nav-tabs">
                            <li className="myName">
                                <h1>
                                    Maria Meyer
                                </h1>
                            </li>
                            {data.map((fields, index) => {
                                return (
                                    <li key={index} className="nav-item">
                                        <a
                                            href={fields.href}
                                            onClick={() => handlePageChange(fields.pageName)}
                                            className={currentPage === fields.pageName ? "nav-link active" : "nav-link"}
                                        >
                                            {fields.pageName}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default HeaderNav;
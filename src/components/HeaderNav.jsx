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
            <div className="headerNav d-flex flex-row justify-content-between">
                <div className="myName">
                    <h1>
                        Maria Meyer
                    </h1>
                </div>
                <div className="navLinks col">
                    <ul className="navBar nav nav-tabs">
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
        </header >
    )
}

export default HeaderNav;
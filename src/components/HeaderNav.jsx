import React from "react";

function HeaderNav({ currentPage, handlePageChange }) {
    const data = [
        {
            href: '#about-me',
            pageName: 'About',
        },
        {
            href: '#my-work',
            pageName: 'Portfolio',
        },
        {
            href: '#contact-me',
            pageName: 'Contact',
        },
        {
            href: '#resume',
            pageName: 'Resume',
        },
    ]
    return (
        <header className='headerNav'>
            <div className='d-flex justify-content-between'>
                <div className='col-3'>
                    <h1>
                        Maria Meyer
                    </h1>
                </div>
                <div className='col-9'>
                    <ul className='nav nav-tabs'>
                        {data.map((fields, index) => {
                            return (
                                <li key={index} className='nav-item'>
                                    <a
                                        href={fields.href}
                                        onClick={() => handlePageChange(fields.pageName)}
                                        className={currentPage === fields.pageName ? 'nav-link active' : 'nav-link'}
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
import React from 'react'
import {IndexLink, Link} from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({children}) => (
    <div>
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="header-title">CONFERENCE</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <h1>SCB CONFERENCE</h1>
            <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
            {' · '}
            <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
            <div className='page-layout__viewport'>
                {children}
            </div>
        </div>
    </div>
)
PageLayout.propTypes = {
    children: PropTypes.node,
}

export default PageLayout

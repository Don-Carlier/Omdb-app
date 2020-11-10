import React from 'react';
import { 
    Typography,
} from 'antd';
import Link from './Link';
const TextTitle = Typography.Title;
const Header = () => {
    return (
        
        <div>
            <div style={{ textAlign: 'center'}}>
                <TextTitle style={{background: '#333333', color: '#ffffff', paddingTop: '14px',paddingBottom: '14px'}} level={3}>Movies App</TextTitle>
            </div>
          
            <div className="menu ant-layout-content">
                <ul style={{ textAlign: 'center'}} className="ant-menu ant-menu-light ant-menu-root ant-menu-horizontal">
                    <li className="ant-menu-item ant-menu-item-only-child">
                        <Link href="/" className="item">
                            Search
                        </Link>
                    </li>
   
                    <li className="ant-menu-item ant-menu-item-only-child">
                        <Link href="/featured-static" className="item">
                            Featured static
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
import React from 'react'
import { Menu,  Input, } from 'semantic-ui-react'
import City from "../pages/City";
import Position from "../pages/Position";

export default function Categories() {
    return (
        <div>
    
          <Menu vertical>
            <Menu.Item>
              <Input placeholder='Search...' />
            </Menu.Item>
    
            <Menu.Item>
              <Menu.Menu>
    
                <City/>
                <Position/>

              </Menu.Menu>
            </Menu.Item>
    
          </Menu>
    
        </div>
      )
}

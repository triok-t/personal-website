import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
} from './SidebarElements'

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='about' onClick={toggle}>
              Experiences
            </SidebarLink>
            <SidebarLink to='discover' onClick={toggle}>
              Certificated
            </SidebarLink>
            <SidebarLink to='services' onClick={toggle}>
              Skills
            </SidebarLink>
            <SidebarLink to='signup' onClick={toggle}>
              Contact
            </SidebarLink>
          </SidebarMenu>
          {/* <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
          </SideBtnWrap> */}
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar

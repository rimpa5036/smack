import React from 'react'
import "./Menubar.css"
import styled from 'styled-components'
import Logo1 from "./images/logo.svg"
import BarIcon from "./images/bars-solid.svg"
import Add from "./images/plus.png";

const MenuWrap = styled.div`
    border-radius: 0px;
    background: #fdfdfd;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 100px;
    margin: 0 auto;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;

    @media screen and (max-width: 1280px) {
    gap: 40px;
    }
    @media screen and (max-width: 767px) {
    justify-content: flex-start;
    }
`
const HeaderOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
const Imglogo = styled.img`
  cursor: pointer;
  width: 210px;
  z-index: 100;
  position: relative;
`;
const MenuWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 20px;

  &:hover {
    background-color: #f3e4d2;
    cursor: pointer;
  }

  @media screen and (max-width: 1280px){
    padding: 0px 11px;
  }
`;
const MenuTxt = styled.p`
  margin: 0;
  -webkit-text-stroke-color: #454545;
  -webkit-text-stroke-width: 0.01px;
  text-align: center;
  font-family: "Lato";
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  -webkit-font-smoothing: antialiased;

  :hover {
    -webkit-text-stroke-width: 0.3px;
    cursor: pointer;
  }
  @media screen and (max-width: 1280px) {
    padding: 16px 8px;
  }
`;

const Img = styled.img`
  cursor: pointer;
`;


export default function Menubar() {
  return (
    <div>
        <MenuWrap>
            <div>
                <Imglogo src={Logo1} />
            </div>
          
                <HeaderOption>
                        <MenuWrp>
                            <MenuTxt>Menu1</MenuTxt>
                        </MenuWrp>
                        <MenuWrp>
                            <MenuTxt>Menu2</MenuTxt>
                        </MenuWrp>
                        <MenuWrp>
                            <MenuTxt>Menu3</MenuTxt>
                        </MenuWrp>
                        <MenuWrp>
                            <MenuTxt>Menu4</MenuTxt>
                        </MenuWrp>
                </HeaderOption>

        {/* Responsive Header */}
          <nav role="navigation" class="rdt-menu-e rdt-menu-1-e">
            <label for="rdt-menu-e">
              <Img src={BarIcon} style={{ width: "18px" }} />
            </label>
            <input type="checkbox" id="rdt-menu-e"></input>
            <ul className="rdt-icon">
              <li class="rdt-menu-hasdropdown-e">
                <a href="#">
                  Platform
                  <label title="toggle rdt-menu-e" for="about">
                    <Img className="add-icon" src={Add} />
                  </label>
                </a>
                <input type="checkbox" id="about"></input>
                <ul class="rdt-menu-dropdown-e">
                  <li className="rdt-menu-fix-e">
                    About Us
                  </li>
                  <li className="rdt-menu-fix-e">
                    Ideapoke Research Design Platform
                  </li>
                  <li className="rdt-menu-fix-e">
                    Market Opportunity
                  </li>
                  <li className="rdt-menu-fix-e">
                    Business Opportunity
                  </li>
                  <li className="rdt-menu-fix-e">
                    Growth Opportunity
                  </li>
                  <li className="rdt-menu-fix-e">
                    Templates
                  </li>
                </ul>
              </li>
              <li class="menu-hasdropdown-e">
                <a href="#">
                  Solutions
                  <label title="toggle rdt-menu-e" for="platform">
                    <Img className="add-icon" src={Add} />
                  </label>
                </a>
                <input type="checkbox" id="platform"></input>
                <ul class="rdt-menu-dropdown-e menu-scroll-e" id="sl-style-1">
                  <div className="rdt-fix-1-e">By Research Goal</div>
                  <li className="rdt-menu-fix-e">
                    Market Analysis
                  </li>
                  <li className="rdt-menu-fix-e">
                    Technology Analysis
                  </li>
                  <li className="rdt-menu-fix-e">
                    New Business Creation
                  </li>
                  <li className="rdt-menu-fix-e">
                    New Product Development
                  </li>
                  <li className="rdt-menu-fix-e">
                    Application Use Case Analysis
                  </li>
                  <div className="rdt-fix-1-e"> By Team</div>
                  <li className="rdt-menu-fix-e">
                    Corporate and Strategy
                  </li>
                  <li className="rdt-menu-fix-e">
                    R&D and Technology Scouting
                  </li>
                  <li className="rdt-menu-fix-e">
                    Sales and Marketing
                  </li>
                  <li className="rdt-menu-fix-e">
                    CVC and M&A
                  </li>
                  <li className="rdt-menu-fix-e">
                    New Business Development
                  </li>
                  <div className="rdt-fix-1-e">Opportunity Design for</div>
                  <li className="rdt-menu-fix-e">
                    Mobility & Transportation
                  </li>
                  <li className="rdt-menu-fix-e">
                    Advanced Materials and Chemicals
                  </li>
                  <li className="rdt-menu-fix-e">
                    Insurtech and Fintech
                  </li>
                  <li className="rdt-menu-fix-e">
                    Sustainability & Cleantech
                  </li>
                  <li className="rdt-menu-fix-e">
                    Deep Tech
                  </li>
                  <li className="rdt-menu-fix-e">
                    Health & Personal Care
                  </li>
                  <li className="rdt-menu-fix-e">
                    Manufacturing & Industrial
                  </li>
                  <li className="rdt-menu-fix-e">
                    Enterprise and IT
                  </li>
                </ul>
              </li>
              <li class="rdt-menu-hasdropdown-e">
                <a href="#">
                  Resources
                  <label title="toggle rdt-menu-e" for="Resources">
                    <Img className="add-icon" src={Add} />
                  </label>
                </a>
                <input type="checkbox" id="Resources"></input>
                <ul class="rdt-menu-dropdown-e">
                  <div className="rdt-fix-1-e"> Growth Leader Academy</div>

                  <li className="rdt-menu-fix-e">
                    Reports
                  </li>
                  <li className="rdt-menu-fix-e">
                    Whitepaper
                  </li>
                  <li className="rdt-menu-fix-e">
                    Interactive Customer Stories
                  </li>
                  <li className="rdt-menu-fix-e">
                    Case Study
                  </li>
                  <li className="rdt-menu-fix-e">
                    Articles
                  </li>
                </ul>
              </li>
              <li className="rdt-p-e">
                Request a Demo
              </li>
              <li className="rdt-p-e">
                Contact Us
              </li>
              <li className="rdt-p-e">
                Jp
              </li>
              <li className="rdt-p-e">
                Login
              </li>
            </ul>
          </nav>
           
        </MenuWrap>
    </div>
  )
}

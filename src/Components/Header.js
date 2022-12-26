import { Button, Container, Dropdown, Navbar } from "react-bootstrap";

import logo from "./logo1.gif";
import { useState } from "react";

const Header = () => {
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringButton1, setIsHoveringButton1] = useState(false);
  const [isHoveringButton2, setIsHoveringButton2] = useState(false);
  const [isHoveringButton3, setIsHoveringButton3] = useState(false);
  const [isHoveringButton4, setIsHoveringButton4] = useState(false);

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="white" variant="Light">
        <Container style={{ justifyContent: "space-between" }}>
          <Navbar.Brand className="font-face-gm" href="logo">
            <img
              style={{
                display: "flex",
                width: "160px",
                height: "55px",
              }}
              src={logo}
              alt="Logo"
            />
          </Navbar.Brand>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Dropdown className="font-face-gm" autoClose="outside">
              <Dropdown.Toggle
                className="font-face-gm"
                id="dropdown-autoclose-outside"
                onMouseEnter={() => setIsHoveringButton(true)}
                onMouseLeave={() => setIsHoveringButton(false)}
                style={{
                  color: "black",
                  backgroundColor: isHoveringButton
                    ? "RGB(240, 240, 240)"
                    : "white",
                  backgroundColorHovr: "RGB(44, 0, 44)",
                  borderColor: "white",
                  justifyContent: "right",
                  dataToggle: "popover",
                }}
              >
                Why Landing
              </Dropdown.Toggle>

              <Dropdown.Menu className="font-face-gm">
                <Dropdown.Item href="#">How It Works</Dropdown.Item>
                <Dropdown.Item href="#">Member Perks</Dropdown.Item>
                <Dropdown.Item href="#">About</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="font-face-gm" autoClose="outside">
              <Dropdown.Toggle
                className="font-face-gm"
                id="dropdown-autoclose-outside"
                onMouseEnter={() => setIsHoveringButton1(true)}
                onMouseLeave={() => setIsHoveringButton1(false)}
                style={{
                  color: "black",
                  backgroundColor: isHoveringButton1
                    ? "RGB(240, 240, 240)"
                    : "white",
                  borderColor: "White",
                  justifyContent: "right",
                  dataToggle: "popover",
                }}
              >
                Resources
              </Dropdown.Toggle>

              <Dropdown.Menu className="font-face-gm">
                <Dropdown.Item href="#">Blog</Dropdown.Item>
                <Dropdown.Item href="#">FAQ</Dropdown.Item>
                <Dropdown.Item href="#">Refer a Friend</Dropdown.Item>
                <Dropdown.Item href="#">Become a Host</Dropdown.Item>
                <Dropdown.Item href="#">Careers</Dropdown.Item>
                <Dropdown.Item href="#">Contact</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="font-face-gm">
              <Button
                className="font-face-gm"
                onMouseEnter={() => setIsHoveringButton2(true)}
                onMouseLeave={() => setIsHoveringButton2(false)}
                style={{
                  color: "black",
                  backgroundColor: isHoveringButton2
                    ? "RGB(240, 240, 240)"
                    : "white",
                  borderColor: "White",
                }}
              >
                Corporate Housing
              </Button>
              <Button
                className="font-face-gm"
                onMouseEnter={() => setIsHoveringButton3(true)}
                onMouseLeave={() => setIsHoveringButton3(false)}
                style={{
                  color: "black",
                  backgroundColor: isHoveringButton3
                    ? "RGB(240, 240, 240)"
                    : "white",
                  borderColor: "White",
                }}
              >
                List Your Property
              </Button>
            </div>
            <div className="font-face-gm">
              <Button
                className="font-face-gm"
                onMouseEnter={() => setIsHoveringButton4(true)}
                onMouseLeave={() => setIsHoveringButton4(false)}
                style={{
                  color: "black",
                  backgroundColor: isHoveringButton4
                    ? "RGB(225, 225, 225)"
                    : "RGB(240, 240, 240)",
                  borderColor: "RGB(240, 240, 240)",
                }}
              >
                Sign in
              </Button>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;

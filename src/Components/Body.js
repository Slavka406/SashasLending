import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Body = () => {
  return (
    <Container expand="md" className="font-face-gm">
      <Row style={{ height: "640px", display: "flex" }}>
        <Col
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ maxWidth: "68%", marginBottom: "32" }}>
              <h1 style={{ fontSize: "56px" }}>Live without limits</h1>
              <p style={{ fontSize: "20px" }}>
                Discover a new way to rent with flexible leases and
                ready-to-live apartments nationwide.
              </p>
            </div>
            <div
              style={{
                boxShadow:
                  "0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 8px 20px 0 rgba(0, 0, 0, 0.19)",
                position: "absolute",
                textAlign: "center",
                display: "inline-flex",
                alignItems: "center",
                borderColor: "RGB(202,204,205)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "15px",
                padding: "5px",
                paddingRight: "10px",
              }}
            >
              <Form
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Form.Group>
                  <Form.Label
                    style={{
                      paddingRight: "120px",
                    }}
                    borderLeft="6px"
                  >
                    Location
                  </Form.Label>
                  <Form.Control
                    style={{
                      width: "90%",
                      height: "24px",
                      paddingRight: "50px",
                      position: "relative",
                      borderColor: "white",
                    }}
                    borderLeft="6px"
                    type="location"
                    placeholder="Where to?"
                  />
                  <Form.Text className="font-face-gm"></Form.Text>
                </Form.Group>
                <Form.Group
                  className="font-face-gm"
                  controlId="formBasicLocation"
                >
                  <Form.Label
                    style={{
                      paddingRight: "90px",
                    }}
                  >
                    Move-in
                  </Form.Label>
                  <Form.Control
                    style={{
                      width: "90%",
                      height: "24px",
                      borderColor: "white",
                    }}
                    type="location"
                    placeholder="When?"
                  />
                </Form.Group>
                <Form.Group
                  className="font-face-gm"
                  controlId="formBasicLocation"
                >
                  <Form.Label
                    style={{
                      paddingRight: "80px",
                    }}
                  >
                    Move-out
                  </Form.Label>
                  <Form.Control
                    style={{
                      width: "90%",
                      height: "24px",
                      borderColor: "white",
                    }}
                    type="location"
                    placeholder="How-long?"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "RGB(8,120,108)",
                    borderColor: "RGB(8,120,108)",
                    display: "inline-flex",
                    width: "24%",
                    height: "60px",
                    backgroundSize: "100%",
                    fontSize: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "top",
                  }}
                >
                  Find my Landing
                </Button>
              </Form>
            </div>
          </div>
        </Col>
        <Col>d</Col>
      </Row>
    </Container>
  );
};

export default Body;

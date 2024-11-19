import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import LayoutOne from "../../components/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
// import { FcPhone, FcBusinessman, FcVoicemail } from "react-icons/fc";
import { FaUserCircle, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";
import "../../assets/css/MyAccount.css"; // We'll create a custom CSS file for additional styling
import toast from "react-hot-toast";
import { serverLogOut } from "../../helpers/backendFectch";
import { useNavigate } from "react-router-dom";


const MyAccount = () => {
  const authData = useSelector((state) => state.app.authData?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profileImageUrl =
    authData?.profile_image || "https://via.placeholder.com/300";



    useEffect(()=>{
      if(!authData){
        // toast.success("Welcome back, " + authData?.name);
        navigate("/login");
      }
    }
    ,[authData,navigate])
    
  return (
    <div className="my-account-wrapper mt-80">
      <MetaTags>
        <title>Klinsept | My Account</title>
        <meta
          name="description"
          content="User profile and account management page."
        />
      </MetaTags>
      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem>My Account</BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Card className="profile-card shadow-lg">
                <div className="profile-header text-center position-relative">
                  <div className="profile-image-container">
                    <img
                      src={profileImageUrl}
                      alt="Profile"
                      className="profile-image rounded-circle"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300";
                      }}
                    />
                    <Button
                      variant="outline-light"
                      className="edit-profile-btn"
                    >
                      <FaEdit />
                    </Button>
                  </div>
                </div>

                <Card.Body className="pt-5 text-center">
                  <h2 className="mb-3">
                    {authData?.first_name} {authData?.last_name}
                  </h2>
                  <p className="text-muted mb-4">{authData?.email}</p>

                  <Row>
                    <Col md={6}>
                      <Card className="mb-4 info-card">
                        <Card.Body>
                          <h5 className="card-title">
                            <FaUserCircle className="me-2 text-primary" />
                            Personal Information
                          </h5>
                          <div className="info-item">
                            <strong>First Name:</strong>{" "}
                            {authData?.first_name || "N/A"}
                          </div>
                          <div className="info-item">
                            <strong>Last Name:</strong>{" "}
                            {authData?.last_name || "N/A"}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card className="info-card">
                        <Card.Body>
                          <h5 className="card-title">
                            <FaEnvelope className="me-2 text-success" />
                            Contact Information
                          </h5>
                          <div className="info-item">
                            <strong>Email:</strong> {authData?.email || "N/A"}
                          </div>
                          <div className="info-item">
                            <FaPhone className="me-2" />
                            {authData?.phone_number || "N/A"}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Card.Footer>
                    <Button
                      onClick={() => {
                        // toast.error("loggin you out");
                        serverLogOut(dispatch, toast);
                      }}
                      variant="danger"
                      className="w-20"
                    >
                      logout
                    </Button>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </LayoutOne>
    </div>
  );
};

export default MyAccount;

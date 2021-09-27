import React from "react";

import Container from "../../Components/Container/Container";
import FooterDashboard from "../../Components/FooterDashboard/FooterDashboard";
import HeaderDashboard from "../../Components/HeaderDashboard/HeaderDashboard";
import ProfileDate from "../../Components/ProfileDate/ProfileDate";
import TableDash from "../../Components/TableDashboard/TableDash";
import Alert from "../../Components/Alert/Alert";

const Dashoborad = ({ userName, updateUserName, data, isLoading, error }) => {
  return (
    <>
      <Container>
        <HeaderDashboard userName={userName} updateUserName={updateUserName} />
        {error && <Alert />}
        {data && (
          <>
            <ProfileDate data={data} />
            <TableDash data={data} />
          </>
        )}
      </Container>
      <FooterDashboard />
    </>
  );
};

export default Dashoborad;

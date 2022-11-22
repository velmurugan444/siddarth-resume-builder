import React from "react";
import { useState, useEffect } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Finalresume = () => {
  const [list1, setlist1] = useState(false);
  const [list2, setlist2] = useState(false);
  const [list3, setlist3] = useState(false);
  const [list4, setlist4] = useState(false);
  const [linkedin, setlinkedin] = useState(false);
  const [github, setgithub] = useState(false);
  const [twitter, settwitter] = useState(false);
  const [facebook, setfacebook] = useState(false);
  const [instagram, setinstagram] = useState(false);
  const [intrest1, setintrest1] = useState(false);
  const [intrest2, setintrest2] = useState(false);
  const [intrest3, setintrest3] = useState(false);
  const [intrest4, setintrest4] = useState(false);
  const [personalskill1, setpersonalskill1] = useState(false);
  const [personalskill2, setpersonalskill2] = useState(false);
  const [personalskill3, setpersonalskill3] = useState(false);
  const [personalskill4, setpersonalskill4] = useState(false);
  const pdfExportComponent = React.useRef(null);

  const history = useHistory();
  const prevStep = () => {
    history.push("/step4");
  };
  useEffect(() => {
    if (!localStorage.getItem("skill3")) {
      setlist1(true);
    }
    if (!localStorage.getItem("skill4")) {
      setlist2(true);
    }
    if (!localStorage.getItem("skill5")) {
      setlist3(true);
    }
    if (!localStorage.getItem("skill6")) {
      setlist4(true);
    }
    if (!localStorage.getItem("intrest3")) {
      setintrest1(true);
    }
    if (!localStorage.getItem("intrest4")) {
      setintrest2(true);
    }
    if (!localStorage.getItem("intrest5")) {
      setintrest3(true);
    }
    if (!localStorage.getItem("intrest6")) {
      setintrest4(true);
    }

    if (!localStorage.getItem("personalskill3")) {
      setpersonalskill1(true);
    }
    if (!localStorage.getItem("personalskill4")) {
      setpersonalskill2(true);
    }
    if (!localStorage.getItem("personalskill5")) {
      setpersonalskill3(true);
    }
    if (!localStorage.getItem("personalskill6")) {
      setpersonalskill4(true);
    }

    if (!localStorage.getItem("github")) {
      setgithub(true);
    }
    if (!localStorage.getItem("twitter")) {
      settwitter(true);
    }
    if (!localStorage.getItem("facebook")) {
      setfacebook(true);
    }
    if (!localStorage.getItem("instagram")) {
      setinstagram(true);
    }
    if (!localStorage.getItem("linkedin")) {
      setlinkedin(true);
    }
  }, []);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "-" + dd + "-" + yyyy;
  return (
    <div>
      <div>
        <div className="btncontainer">
          <button
            style={{
              marginTop: "2%",
              backgroundColor: "lightblue",
              border: "none",
              color: "white",
              padding: "4px 4px",
              cursor: "pointer",
              fontSize: "15px",
              marginLeft: "90%"
            }}
            onClick={() => {
              if (pdfExportComponent.current) {
                pdfExportComponent.current.save();
                localStorage.clear();
              }
            }}
          >
            <i class="fa fa-download" /> Download
          </button>
        </div>
        <PDFExport paperSize="A4" margin="1cm" ref={pdfExportComponent}>
          <div
            className="maincontainer"
            style={{ width: "100%", marginLeft: "0", marginTop: "-3%" }}
          >
            <div className="output">
              <div
                className="container"
                style={{ marginLeft: "0%", marginTop: "0%" }}
              >
                <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {localStorage.getItem("firstname") +
                    "\n" +
                    localStorage.getItem("lastname")}
                </h1>
                <h1 style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {localStorage.getItem("collegequalification") +
                    "\n" +
                    localStorage.getItem("collegedescription")}
                </h1>
                <div className="container">
                  <p style={{ fontSize: "11px", width: "25%" }}>
                    {localStorage.getItem("address")}
                  </p>
                </div>
                <div style={{ marginTop: "-1.5%" }}>
                  <p style={{ fontSize: "12px", display: "inline-block" }}>
                    <b>Contact: </b>
                  </p>
                  <p style={{ display: "inline-block", fontSize: "11px" }}>
                    {"\n" + localStorage.getItem("phonenumber")}
                  </p>
                </div>
                <div style={{ marginTop: "-2.2%" }}>
                  <p style={{ fontSize: "12px", display: "inline-block" }}>
                    <b>Email: </b>
                  </p>
                  <p style={{ display: "inline-block", fontSize: "11px" }}>
                    {"\n" + localStorage.getItem("email")}
                  </p>
                </div>
                <div style={{ marginTop: "-1.6%", fontSize: "11px" }}>
                  {" "}<p style={linkedin ? { display: "none" } : {}}>
                    <b>Linked in:</b>
                    {"\n" + localStorage.getItem("linkedin")}
                  </p>
                </div>
                <div style={{ marginTop: "-1.6%", fontSize: "11px" }}>
                  {" "}<p style={github ? { display: "none" } : {}}>
                    <b>Github:</b>
                    {"\n" + localStorage.getItem("github")}
                  </p>
                </div>
                <div style={{ marginTop: "-1.6%", fontSize: "11px" }}>
                  {" "}<p style={facebook ? { display: "none" } : {}}>
                    <b>Facebook:</b>
                    {"\n" + localStorage.getItem("facebook")}
                  </p>
                </div>
                <div style={{ marginTop: "-1.6%", fontSize: "11px" }}>
                  {" "}<p style={twitter ? { display: "none" } : {}}>
                    <b>Twitter:</b>
                    {"\n" + localStorage.getItem("twitter")}
                  </p>
                </div>
                <div style={{ marginTop: "-1.6%", fontSize: "11px" }}>
                  {" "}<p style={instagram ? { display: "none" } : {}}>
                    <b>Instagram:</b>
                    {"\n" + localStorage.getItem("instagram")}
                  </p>
                </div>
                <br />
                <h1
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    display: "inline-block"
                  }}
                >
                  CAREER OBJECTIVE:
                </h1>
                <div style={{ display: "inline-block" }}>
                  <div className="container" style={{ width: "100%" }}>
                    <p style={{ display: "inline-block", fontSize: "11px" }}>
                      {localStorage.getItem("careerobjective")}
                    </p>
                  </div>
                </div>
                <br />
                <h1
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    display: "inline-block"
                  }}
                >
                  BASIC ACADAMIC CREDENTIALS:
                </h1>
                <br />
                <br />
                <table style={{ width: "100%", fontSize: "11px" }}>
                  <tbody>
                    <tr style={{ fontSize: "12px" }}>
                      <th>Qualification</th>
                      <th>Board/Institution</th>
                      <th>Year</th>
                      <th>Percentage</th>
                    </tr>
                    <tr style={{ fontSize: "11px" }}>
                      <td>
                        {localStorage.getItem("collegequalification") +
                          "(" +
                          localStorage.getItem("collegedescription") +
                          ")"}
                      </td>
                      <td>
                        {localStorage.getItem("collegename")}
                      </td>
                      <td>
                        {localStorage.getItem("collegedate")}
                      </td>
                      <td>
                        {localStorage.getItem("collegecgpa")}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "11px" }}>
                      <td>
                        {localStorage.getItem("hscschoolqualification")}
                      </td>
                      <td>
                        {localStorage.getItem("hscschoolname")}
                      </td>
                      <td>
                        {localStorage.getItem("hscschooldate")}
                      </td>
                      <td>
                        {localStorage.getItem("hscschoolpercentage")}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "11px" }}>
                      <td>
                        {localStorage.getItem("sslcschoolqualification")}
                      </td>
                      <td>
                        {localStorage.getItem("sslcschoolname")}
                      </td>
                      <td>
                        {localStorage.getItem("sslcschooldate")}
                      </td>
                      <td>
                        {localStorage.getItem("sslcschoolpercentage")}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />

                <h1
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    display: "inline-block"
                  }}
                >
                  {localStorage.getItem("skill1") ? "TECHNICAL SKILLS:" : ""}
                </h1>
                <br />
                <div
                  className="container"
                  style={{ marginLeft: "2%", fontSize: "11px" }}
                >
                  <li>
                    {localStorage.getItem("skill1")}
                  </li>
                  <li>
                    {localStorage.getItem("skill2")}
                  </li>
                  <li style={list1 ? { display: "none" } : {}}>
                    {localStorage.getItem("skill3")}
                  </li>
                  <li style={list2 ? { display: "none" } : {}}>
                    {localStorage.getItem("skill4")}
                  </li>
                  <li style={list3 ? { display: "none" } : {}}>
                    {localStorage.getItem("skill5")}
                  </li>
                  <li style={list4 ? { display: "none" } : {}}>
                    {localStorage.getItem("skill6")}
                  </li>
                </div>
                <br />
                <h1
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    display: "inline-block"
                  }}
                >
                  AREA OF INTREST:
                </h1>
                <br />
                <div
                  className="container"
                  style={{ marginLeft: "2%", fontSize: "11px" }}
                >
                  <li>
                    {localStorage.getItem("intrest1")}
                  </li>
                  <li>
                    {localStorage.getItem("intrest2")}
                  </li>
                  <li style={intrest1 ? { display: "none" } : {}}>
                    {localStorage.getItem("intrest3")}
                  </li>
                  <li style={intrest2 ? { display: "none" } : {}}>
                    {localStorage.getItem("intrest4")}
                  </li>
                  <li style={intrest3 ? { display: "none" } : {}}>
                    {localStorage.getItem("intrest5")}
                  </li>
                  <li style={intrest4 ? { display: "none" } : {}}>
                    {localStorage.getItem("intrest6")}
                  </li>
                </div>
                <br />

                <h1
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    display: "inline-block"
                  }}
                >
                  PERSONAL SKILLS:
                </h1>
                <br />
                <div
                  className="container"
                  style={{ marginLeft: "0%", fontSize: "11px" }}
                >
                  <li>
                    {localStorage.getItem("personalskill1")}
                  </li>
                  <li>
                    {localStorage.getItem("personalskill2")}
                  </li>
                  <li style={personalskill1 ? { display: "none" } : {}}>
                    {localStorage.getItem("personalskill3")}
                  </li>
                  <li style={personalskill2 ? { display: "none" } : {}}>
                    {localStorage.getItem("personalskill4")}
                  </li>
                  <li style={personalskill3 ? { display: "none" } : {}}>
                    {localStorage.getItem("personalskill5")}
                  </li>
                  <li style={personalskill4 ? { display: "none" } : {}}>
                    {localStorage.getItem("personalskill6")}
                  </li>
                </div>
                <br />
                <h1
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    display: "inline-block"
                  }}
                >
                  PERSONAL DETAILS:
                </h1>
                <br />
                <div
                  className="container"
                  style={{ marginLeft: "0%", fontSize: "11px" }}
                >
                  <p>
                    <b>Father Name :</b>
                    {"\n" + localStorage.getItem("fathername")}
                  </p>
                  <p>
                    <b>Date of Birth :</b>
                    {"\n" + localStorage.getItem("dateofbirth")}
                  </p>
                  <p>
                    <b>Gender :</b>
                    {"\n" + localStorage.getItem("gender")}
                  </p>
                  <p>
                    <b>Marital Status :</b>
                    {"\n" + localStorage.getItem("maritalstatus")}
                  </p>
                  <p>
                    <b>Nationality :</b>
                    {"\n" + localStorage.getItem("nationality")}
                  </p>
                  <p>
                    <b>Language Proficiency :</b>
                    {"\n" + localStorage.getItem("languageproficiency")}
                  </p>
                </div>
                <br />
                <h1
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    display: "inline-block"
                  }}
                >
                  DECLARATION:
                </h1>
                <p style={{ fontSize: "11px" }}>
                  I hereby declare that the above given information is true to
                  the best of my knowledge.
                </p>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ display: "inline-block", fontSize: "11px" }}>
                    <b>Place:</b>
                    {localStorage.getItem("place")}
                  </p>
                  <p
                    style={{
                      marginLeft: "0%",
                      display: "inline-block",
                      fontSize: "11px"
                    }}
                  >
                    <b>
                      ({localStorage.getItem("firstname") +
                        "\n" +
                        localStorage.getItem("lastname")})
                    </b>
                  </p>
                </div>
                <p style={{ fontSize: "11px" }}>
                  <b>Date:</b> {today}
                </p>
              </div>
            </div>
          </div>
        </PDFExport>
      </div>
      <div className="btnContainer">
        <Link onClick={prevStep}>Back</Link>
      </div>
    </div>
  );
};

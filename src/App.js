import React, { useEffect, useState } from "react";
import "./App.css";
import playbazaar from "./playbazaar.png";

function App() {
  const [currentDateTime, setCurrentDateTime] = useState("");
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now
        .toISOString()
        .replace("T", " ")
        .split(".")[0]; // "YYYY-MM-DD HH:MM:SS"
      setCurrentDateTime(formattedDateTime);
    };

    // Update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Set the current date/time on component load
    updateDateTime();

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  const printChart = () => {
    const printContents = document.getElementById("printableArea").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload to restore the original content
  };

  return (
    <div className="App">
      <div className="blue-border-container">
        <div>
          {/* seo meta*/}
          <title>
            {" "}
            ► Play Bazaar : Play Bazzar | Play Bajar | Play Bazar | Play Bazaar
            Chart 2023-24| satta king
          </title>
          {/*  <centre><p>India<abbr title="Play Bazaar">'s</abbr> No.1 Satta Result Site</p> </centre> */}
          <meta
            name="Description"
            content="play bazaar, play bazar, प्ले बाजार, play bajar, play bazzar, satta king chart, satta king, satta king result, dl bazaar, satta king delhi, play bazaar chart, all play bazaar, delhi bazar satta, Play Bazaar xyz"
          />
          <meta
            name="Keywords"
            content="play bazaar, play bazar, प्ले बाजार, play bajar, play bazzar, satta king chart, satta king, satta king result, dl bazaar, satta king delhi, play bazaar chart, all play bazaar, delhi bazar satta, Play Bazaar xyz"
          />

          <meta name="robots" content="no index, no follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="1 Minute" />
          <meta
            name="google-site-verification"
            content="wrBoxQ7WUHHte34iy-ecDePGmXOBFQUGWIG7YXIDdeI"
          />
          <meta name="author" content="Play Bazaar" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="canonical" href="https://www.playbazaar.xyz" />
          <meta httpEquiv="cache-control" content="no-cache" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content={-1} />
          <meta name="language" content="EN" />
          <meta name="Classification" content="Play Bazaar" />
          <meta name="copyright" content="https://www.playbazaar.xyz/" />
          <meta name="document-classification" content="Play Bazaar" />
          <meta name="document-type" content="Public" />
          <meta name="document-distribution" content="Global" />
          <meta name="author" content="Play Bazaar" />
          <meta
            name="DC.title"
            content="Play Bazaar, Satta king, Satta-King, Satta Bazzar, Satta Bazaar, Satta Bajar, Play Bazzar, Play Bazaar, Play Bajar, Satta Result Chart, Black satta, Satta Result"
          />
          {/*  <meta http-equiv="refresh" content="30; url =https://www.playbazzar.xyz/index.php" />  */}
          {/*End seo meta */}
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n\t\t\t.time {\n\t\t\t\tfont-size: 8px;\n\t\t\t\tfont-weight: 600;\n\t\t\t}\n\n\t\t\t.panel-signin,\n\t\t\t.panel-signup {\n\t\t\t\tmargin: 22px auto 0 auto;\n\t\t\t}\n\t\t",
            }}
          />
          {/* Google Tag Manager (noscript) */}
          <noscript>
            &lt;iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CSFD83"
            height="0" width="0"
            style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          {/* Google Tag Manager */}
          {/* End Google Tag Manager */}
          {/* Your custom scripts */}
          <div className>
            <section>
              <div id="UpdatePanel1">
                <div className="panel panel-signin" style={{ width: "98%" }}>
                  <div className="panel-body" style={{ padding: "25px" }}>
                    <div className="logo text-center">
                      <img
                        src={playbazaar}
                        alt="Play Bazaar"
                        width="30%"
                        height
                      />
                    </div>
                    <div className="container">
                      <div className="container-fluid">
                        <div className="col-md-2  col-xs-2   grad1"></div>
                      </div>
                      <br />
                    </div>
                    <h4 className="text-center mb5">Monthly Result Chart</h4>
                    <h4 className="text-center mb5" id="liveDatetime">
                      {currentDateTime}
                    </h4>
                    <h4 className="text-center mb5" id="liveDatetime" />
                    <div className="mb30" />
                    <div className="row" style={{ "margin-bottom": "0px" }}>
                      <form action="index.php" id="showResult" method="post">
                        <div className="col-sm-1">
                          {/*Change Code */}
                          <select
                            name="dd_month"
                            id="dd_month"
                            className="form-control"
                            style={{ width: "150px" }}
                          >
                            <option value={1}>January</option>
                            <option value={2}>February</option>
                            <option value={3}>March</option>
                            <option value={4}>April</option>
                            <option value={5}>May</option>
                            <option value={6}>June</option>
                            <option value={7}>July</option>
                            <option value={8}>August</option>
                            <option value={9}>September</option>
                            <option value={10} selected="selected">
                              October
                            </option>
                            <option value={11}>November</option>
                            <option value={12}>December</option>
                          </select>
                        </div>
                        <div className="col-sm-2">
                          <div className="input-group mb15">
                            <select
                              name="dd_year"
                              id="dd_year"
                              className="form-control"
                            >
                              <option value={2020}>2020</option>
                              <option value={2021}>2021</option>
                              <option value={2022}>2022</option>
                              <option value={2023}>2023</option>
                              <option selected="selected" value={2024}>
                                2024
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-1">
                          <div className="input-group mb15">
                            <button
                              name="bt_showresult"
                              id="bt_showresult"
                              className="btn btn-success"
                            >
                              Show Results
                            </button>
                          </div>
                          {/* input-group */}
                        </div>
                      </form>
                      <div className="col-sm-6">
                        <div className="input-group mb15">
                          <input
                            type="button"
                            onclick={printChart}
                            defaultValue="Print Chart"
                            className="btn btn-warning"
                            style={{ "margin-left": "10px" }}
                          />
                          <input
                            type="button"
                            onclick="isLoggedIn ? null : openLoginDialog()"
                            defaultValue="Login"
                            className="btn btn-primary"
                            style={{ "margin-left": "10px" }}
                          />
                        </div>
                      </div>

                      {/* input-group */}
                    </div>
                    <div
                      className
                      style={{
                        "-webkit-text-align": "right",
                        "text-align": "right",
                      }}
                    >
                      {" "}
                    </div>
                    <br />
                    <div className="row"> </div>
                    <div id="printableArea" style={{ overflow: "auto" }}>
                      <table
                        className="table table-striped table-bordered responsive"
                        cellSpacing={0}
                        rules="all"
                        border={0}
                        id="gvtable"
                        style={{
                          width: "100%",
                          "border-collapse": "collapse",
                          "font-size": "14px",
                          color: "#6C7682",
                        }}
                      >
                        <thead>
                          <tr>
                            <th scope="col">Game</th>
                            {/* Automatically generating column headers for 31 days */}
                            <th scope="col">1</th>
                            <th scope="col">2</th>
                            <th scope="col">3</th>
                            <th scope="col">4</th>
                            <th scope="col">5</th>
                            <th scope="col">6</th>
                            <th scope="col">7</th>
                            <th scope="col">8</th>
                            <th scope="col">9</th>
                            <th scope="col">10</th>
                            <th scope="col">11</th>
                            <th scope="col">12</th>
                            <th scope="col">13</th>
                            <th scope="col">14</th>
                            <th scope="col">15</th>
                            <th scope="col">16</th>
                            <th scope="col">17</th>
                            <th scope="col">18</th>
                            <th scope="col">19</th>
                            <th scope="col">20</th>
                            <th scope="col">21</th>
                            <th scope="col">22</th>
                            <th scope="col">23</th>
                            <th scope="col">24</th>
                            <th scope="col">25</th>
                            <th scope="col">26</th>
                            <th scope="col">27</th>
                            <th scope="col">28</th>
                            <th scope="col">29</th>
                            <th scope="col">30</th>
                            <th scope="col">31</th>
                          </tr>
                          <tr>
                            <td>
                              <span className="gname">Disawar</span> <br />
                              {/*	<span class="time">04:30 am</span> */}
                            </td>
                            <td />
                            <td>24</td>
                            <td>76</td>
                            <td>89</td>
                            <td>30</td>
                            <td>75</td>
                            <td>47</td>
                            <td>65</td>
                            <td>30</td>
                            <td>80</td>
                            <td>43</td>
                            <td>06</td>
                            <td>uy</td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                        </thead>
                        <tbody id="table-body">
                          {/* Rows will be dynamically added here based on data */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <p>...Paid Advertisment...</p>
                    <div
                      style={{
                        "background-color": "#18C2E5",
                        color: "#000",
                        "font-weight": "bold",
                        "font-style": "bold",
                        "font-size": "meduim",
                        "-webkit-text-decoration": "none",
                        "text-decoration": "none",
                        "border-width": "3px",
                        "border-color": "#000",
                        "border-style": "outset",
                        margin: "3px",
                        padding: "10px",
                        "border-radius": "10px",
                        "-webkit-text-align": "center",
                        "text-align": "center",
                      }}
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n\t\t\t\t\t\t\t\tp2 {\n\t\t\t\t\t\t\t\t\ttext-shadow: 1px 1px 3px black;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t",
                        }}
                      />
                      <p2 style={{ "font-size": "33px", color: "#FFF701" }}>
                        GOLDY BHAI KTM : ONLINE KHAYIWAAL
                      </p2>
                      <hr />
                      <p style={{ "font-size": "22px", color: "#0D092A" }}>
                        घर पर रह कर ऑनलाइन गेम खेलिए भरोसा आपका जिम्मेदारी हमारी
                        ! <br />
                        नोट - आप यह क्रॉसिंग भी प्ले कर सकते है, रेट 10 का 970
                      </p>
                      <hr />
                      <p style={{ "font-size": "18px", color: "#071BC2" }}>
                        JD-DURGA 2:00PM Last
                        <br /> दिल्ली बज़ार 3:00PM Last
                        <br /> श्री गणेश 4:25PM Last
                        <br />
                        फरीदाबाद 05:55PM Last
                        <br /> गाज़ियाबाद 8:40PM Last
                        <br />
                        गली 11:30PM Last
                        <br /> दिसावर 4:30AM Last
                        <br />
                      </p>
                      <hr />
                      <p style={{ "font-size": "22px", color: "#000" }}>
                        10 मिनट में पेमेंट की गारंटी CALL &amp; WHATSAPP - ☎️
                        8586025782
                      </p>
                      <a href="tel:>+918570844867">
                        <button
                          style={{
                            height: "40px",
                            width: "260px",
                            "background-color": "red",
                            color: "#FFF",
                            border: "solid 1px white",
                            "border-radius": "20px",
                          }}
                        >
                          <font size="4px">
                            <b>CALL NOW</b>
                          </font>
                        </button>
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=+918570844867&text=Cobra%20Bhai%20Apna%20Time%20Table%20aur%20Rate%20Card%20Bhejiye%20Payment%20Kaise%20Karna%20Hai.">
                        <button
                          style={{
                            height: "40px",
                            width: "260px",
                            "background-color": "green",
                            color: "#FFF",
                            border: "solid 1px white",
                            "border-radius": "20px",
                          }}
                        >
                          <font size="4px">
                            <b>WHATSAPP CHAT</b>
                          </font>
                        </button>
                      </a>
                    </div>
                    {/* Login Dialog */}
                    <div
                      id="loginDialog"
                      className="modal"
                      style={{
                        display: "none",
                        position: "fixed",
                        "z-index": "1",
                        left: "0",
                        top: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                        "background-color": "rgba(0,0,0,0.4)",
                      }}
                    >
                      <div
                        className="modal-content"
                        style={{
                          "background-color": "#fefefe",
                          margin: "15% auto",
                          padding: "20px",
                          border: "1px solid #888",
                          width: "300px",
                        }}
                      >
                        <h2>Login</h2>
                        <input
                          type="text"
                          id="username"
                          placeholder="Username"
                          style={{
                            width: "100%",
                            padding: "5px",
                            "margin-bottom": "10px",
                          }}
                        />
                        <input
                          type="text"
                          id="password"
                          placeholder="Password"
                          style={{
                            width: "100%",
                            padding: "5px",
                            "margin-bottom": "10px",
                          }}
                        />
                        <button onclick="login()" className="btn btn-success">
                          Login
                        </button>
                        <button
                          onclick="closeLoginDialog()"
                          className="btn btn-danger"
                          style={{ "margin-left": "10px" }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                    <div
                      className="panel-footer"
                      style={{
                        "-webkit-text-align": "center",
                        "text-align": "center",
                      }}
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html: "\n\t\tfont-size: 14px\n\t",
                        }}
                      />
                      <small>
                        <p />
                        Disclaimer:- PLAYBAZAAR.XYZ : We Follow All Countries
                        Rules The Site is Only For Entertainment Purposes.{" "}
                        <br /> The Site Does Not Promote any Betting Activity.
                        People From Countries Where Gambling is Banned Should
                        Block Our Site immediately.
                        <br /> If you are Not Agreed/satisfied With Our Terms
                        &amp; Conditions Please Quit Right Now. PLAYBAZAAR.XYZ
                        All Rights Reserved Thank you.*{" "}
                      </small>{" "}
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/*googleoff: all--
   <button onclick="myFunction()" class="btn-ref-float" style="bottom:6px;right:5px;position:fixed;z-index:999;background: #22a010;border: none;padding: 7px 15px;color: #fff;border-radius:3px;font-size:16px;border: 1px solid #148005;">Refresh Page</button>
   <!--googleon: all*/}
        </div>
      </div>
    </div>
  );
}

export default App;

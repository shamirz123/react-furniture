import React from "react";
import { TiTick } from "react-icons/ti";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";

function About() {
  return (
    <>
      <div id="about" className="container">
        <div className="about-me ">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-13">
              <div className="about-us-wrapper">
                <div class="d-flex flex-row bd-highlight mb-3">
                  <div class="p-2 bd-highlight">
                    <h4>About Us</h4>
                  </div>
                  <div class="p-2 bd-highlight">
                    <hr
                      style={{
                        border: "2px  solid #FEAB43",
                        width: "5rem",
                        marginTop: "20px",
                        opacity: 1
                      }}
                    />
                  </div>
                </div>
                <p>
                Welcome to Life Standard Furniture, where craftsmanship meets passion. We are more than just a furniture store; we are curators of style and comfort, dedicated to transforming houses into homes. Our journey began with a simple idea: to provide exquisite furniture pieces that inspire and endure.
                </p>

                <button>See More</button>
              </div>
        
            </div>

            <div className="col-lg-6 col-md-12 col-sm-13">
              <div>
                <img src="/assets/img/aboutimg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

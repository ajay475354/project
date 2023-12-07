import "./index.css";

import {
  FaHourglassHalf,
  FaFlask,
  FaDatabase,
  FaRegUser,
  FaCheck,
  FaSuperpowers,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home_bg_container">
      <div className="learn_now_container">
        <div className="details_container">
          <h1 className="learn_now_heading">Learning Matters!</h1>
          <p className="learn_para">
            Continuous learning is essential for professional development and
            career advancement. In today’s rapidly changing job market,
            acquiring new skills and staying updated with industry trends is
            crucial. Learning allows you to adapt to evolving job requirements,
            improve your job performance, and increase your value to employers.
            It opens up new opportunities for career growth and increases your
            employability.
          </p>
          <button className="button_learn">Learn Now</button>
        </div>
      </div>

      {/*......service...........*/}

      <div className="service_container">
        <h1 className="service_head">Lab as service</h1>
        <div className="hr_container">
          <hr className="hr_1" />
          <hr className="hr_2" />
        </div>
        <div className="service_items_container">
          <div className="card_container">
            <FaHourglassHalf className="service_icon" />
            <p className="service_title">Technology Learning Labs</p>
          </div>
          <div className="card_container">
            <FaFlask className="service_icon" />
            <p className="service_title">Technology Learning Labs</p>
          </div>
          <div className="card_container">
            <FaDatabase className="service_icon" />
            <p className="service_title">Technology Learning Labs</p>
          </div>
          <div className="card_container">
            <FaRegUser className="service_icon" />
            <p className="service_title">Technology Learning Labs</p>
          </div>
        </div>
      </div>

      {/*.............reduce.....*/}
      <div className="top_svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#edf1f8"
            fill-opacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,234.7C672,224,768,160,864,149.3C960,139,1056,181,1152,213.3C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="reducer_container">
        <div className="all_details_reducer_container">
          <h1>Reduce cost & Increase Profitability</h1>
          <div className="hr_container">
            <hr className="reduce_hr_1" />
            <hr className="reduce_hr_2" />
          </div>

          <div className="each_one_container">
            <div className="yellow_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">Reduce Infrastructure Cost</p>
          </div>
          <div className="each_one_container">
            <div className="blue_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">Reduce Time-to-Market</p>
          </div>
          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">On-demand Labs</p>
          </div>
          <div className="each_one_container">
            <div className="yellow_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">Access from Any where</p>
          </div>
          <div className="each_one_container">
            <div className="blue_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">Scalability</p>
          </div>
          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">
              Reduce team efforts and focus on growth
            </p>
          </div>
          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">Learning Management System</p>
          </div>
        </div>
        <div className="image_reduce_container">
          <img
            src="https://learnedze.netlify.app/images/reduce-cost.jpg"
            alt="image_reduce"
            className="image_reduce"
          />
        </div>
      </div>
      <div className="bottom_svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#edf1f8"
            fill-opacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,234.7C672,224,768,160,864,149.3C960,139,1056,181,1152,213.3C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/*...............technologies...............*/}

      <div className="technologies_container">
        <div className="all_details_technology_container">
          <h1>Reduce cost & Increase Profitability</h1>
          <div className="hr_container">
            <hr className="reduce_hr_1" />
            <hr className="reduce_hr_2" />
          </div>
          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">Learning Labs for all segments</p>
          </div>
          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">Corporate trainings</p>
          </div>
          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">Partner and Customer Education</p>
          </div>
          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">
              Classroom, Live Online and Self-Paced Trainings
            </p>
          </div>
          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">On-demand Labs</p>
          </div>
          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">Scalable</p>
          </div>
          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">
              Whether you have 10 students or 100 students per session, we
              provide dedicated labs
            </p>
          </div>
          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details">Access from any where</p>
          </div>
        </div>
        <div>
          <img
            src="https://learnedze.netlify.app/images/tech-learn-labs.svg"
            alt=""
            className="image_technology"
          />
        </div>
      </div>

      {/*...............sandbox labs...............*/}
      <div className="labs_container">
        <div className="all_details_lab_container">
          <h1>PoC and Sandbox Labs</h1>
          <div className="hr_container">
            <hr className="reduce_hr_1" />
            <hr className="reduce_hr_2" />
          </div>

          <div className="card_lab_container">
            <div className="icon_lab_container">
              <FaSuperpowers className="super_icon" />
            </div>
            <div>
              <h2>Pre-built topologies</h2>
              <p>
                Integrate with Syslog servers and other monitoring/management
                tools
              </p>
            </div>
          </div>
          <div className="card_lab_container">
            <div className="icon_lab_container">
              <FaSuperpowers className="super_icon" />
            </div>
            <div>
              <h2>Customized topologies</h2>
              <p>Integrate with Public cloud and On-prem environments</p>
            </div>
          </div>
        </div>

        <div className="labs_second_details_container">
          <div className="labs_card">
            <div className="each_one_details_lab">
              <div className="pink_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <div className="details_lab">
                <h1 className="detail_head">
                  Virtual Labs for Proof Of Concept
                </h1>
                <p className="details_p">
                  Tools for generating traffic, latency, packet loss
                </p>
              </div>
            </div>
            <div className="each_one_details_lab">
              <div className="blue_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <div className="details_lab">
                <h1 className="detail_head">Pre-built topologies</h1>
                <p className="details_p">
                  Integrate with Syslog servers and other monitoring/management
                  tools
                </p>
              </div>
            </div>
            <div className="each_one_details_lab">
              <div className="pink_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <div className="details_lab">
                <h1 className="detail_head">
                  Integrate with Syslog servers and other monitoring/management
                  tools
                </h1>
                <p className="details_p">
                  Integrate with Public cloud and On-prem environments
                </p>
              </div>
            </div>
            <div className="each_one_details_lab">
              <div className="blue_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <div className="details_lab">
                <h1 className="detail_head">Test drive</h1>
                <p className="details_p">Demos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*................contact....................*/}
      <div className="contact_bg_container">
        <div className="contact_bg_1_container">
          <div className="contact_bg_2_container">
            <div className="contact_bg_3_container">
              <h1 className="contact_head">Ready to Get Started?</h1>
              <p className="contact_description">
                It’s fast, scalable and easy to use
              </p>
              <button className="contact_details_button">
                Request for Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

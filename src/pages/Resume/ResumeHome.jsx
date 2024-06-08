import "../../tailwind.css";
import { Timeline } from "flowbite-react";
import { FaSuitcase, FaCertificate } from "react-icons/fa6";
import { propTypes } from "react";

const ResumeTimeLine = (props) => {
  ResumeTimeLine.propTypes = {
    time: propTypes,
    industry: propTypes,
    jobs: propTypes,
    desc: propTypes,
    btn: propTypes,
    links: propTypes,
  };

  return (
    <Timeline.Item>
      <Timeline.Point />
      <Timeline.Content
        className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <Timeline.Time>{props.time}</Timeline.Time>
        <h1 className="text-sm font-semibold text-custom-green-darker">
          {props.industry}
        </h1>
        <Timeline.Title className="text-base font-semibold text-custom-green-darker">
          {props.jobs}
        </Timeline.Title>
        <Timeline.Body className="text-sm font-normal text-custom-green-dark">
          {props.desc}
        </Timeline.Body>
        <button
          className="px-3 py-1 font-bold border-2 rounded-full border-custom-green-dark bg-custom-green-dark hover:text-custom-green-dark hover:bg-custom-green-light animate"
          onClick={() => window.open(props.links, "_blank")}
        >
          {props.btn}
        </button>
      </Timeline.Content>
    </Timeline.Item>
  );
};

const ResumeHome = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 pt-20 mb-32">
        <Timeline className="max-[1600px]:w-1/2 max-[1075px]:w-4/5 max-[525px]:w-5/6">
          <Timeline.Item>
            <Timeline.Point icon={FaSuitcase} />
            <h1 className="text-xl font-bold pb-9">Profesional Experience</h1>
          </Timeline.Item>
          <ResumeTimeLine
            time={"March 2022 - May 2023"}
            industry={"Clinic Medika Plaza"}
            jobs={"IT Support / Internship"}
            desc={`Resolving issues with straight-through cables on the server
            alongside the IT Support team. Deploying IP telephones in every
            department within the company, in collaboration with the
            internship team. Addressing file handover issues for laptops, IP
            phones, and cellphones in every department, alongside deploying
            50 new laptops across the company.`}
            btn={"Read More"}
            links={"https://www.linkedin.com/in/mzackyfa/"}
          />
          <ResumeTimeLine
            time={"September 2023 - Present"}
            industry={"Birohmatika"}
            jobs={"Junior Full Stack Developer / Freelancer"}
            desc={`Using Bootstrap and Tailwind to enhance and speed up the website
            development process. Creating an e-commerce website using React
            JS, Express JS, and Tailwind, enabling admin management
            capabilities. Developing an engaging and responsive company
            profile website consisting of 11 pages with excellent
            performance.`}
            btn={"Read More"}
            links={"https://www.linkedin.com/in/mzackyfa/"}
          />

          <Timeline.Item>
            <Timeline.Point icon={FaCertificate} />
            <h1 className="text-xl font-bold pb-9">
              Licence and Certification
            </h1>
          </Timeline.Item>

          <ResumeTimeLine
            time={"March 2024 - March 2027"}
            industry={"Dicoding Indonesia"}
            jobs={"Certificate in Learning Basic JavaScript Programming"}
            desc={`Resolving issues with straight-through cables on the server
            alongside the IT Support team. Deploying IP telephones in every
            department within the company, in collaboration with the
            internship team. Addressing file handover issues for laptops, IP
            phones, and cellphones in every department, alongside deploying
            50 new laptops across the company.`}
            btn={"Read More"}
            links={"https://www.dicoding.com/certificates/1RXY1GG01PVM"}
          />

          <ResumeTimeLine
            time={"March 2024 - March 2027"}
            industry={"Codepolitan"}
            jobs={"Bootstrap CSS Framework Learning Class Certificate"}
            desc={`Using Bootstrap and Tailwind to enhance and speed up the website
            development process. Creating an e-commerce website using React
            JS, Express JS, and Tailwind, enabling admin management
            capabilities. Developing an engaging and responsive company
            profile website consisting of 11 pages with excellent
            performance.`}
            btn={"Read More"}
            links={"https://www.codepolitan.com/c/8WX6M1G/"}
          />

          <ResumeTimeLine
            time={"March 2024 - March 2027"}
            industry={"Codepolitan"}
            jobs={"Basic JQuery Learning Class Certificate"}
            desc={`Using Bootstrap and Tailwind to enhance and speed up the website
            development process. Creating an e-commerce website using React
            JS, Express JS, and Tailwind, enabling admin management
            capabilities. Developing an engaging and responsive company
            profile website consisting of 11 pages with excellent
            performance.`}
            btn={"Read More"}
            links={"https://www.codepolitan.com/c/UJA4QMH/"}
          />

          <ResumeTimeLine
            time={"March 2024 - March 2027"}
            industry={
              "Malikussaleh University Informatics Engineering Student Association"
            }
            jobs={"INTECH National Webinar"}
            desc={`Using Bootstrap and Tailwind to enhance and speed up the website
            development process. Creating an e-commerce website using React
            JS, Express JS, and Tailwind, enabling admin management
            capabilities. Developing an engaging and responsive company
            profile website consisting of 11 pages with excellent
            performance.`}
            btn={"Read More"}
            links={
              "https://www.linkedin.com/in/mzackyfa/details/certifications/1710072275224/single-media-viewer/?type=IMAGE&profileId=ACoAAEV7gpABTjXZtpLyFmw6hsnpr-vhKu8om9A"
            }
          />

          <ResumeTimeLine
            time={"February 2024 - March 2027"}
            industry={"Alibaba Cloud Intelligence Group"}
            jobs={"Alibaba Cloud Learning Class Certificate"}
            desc={`Using Bootstrap and Tailwind to enhance and speed up the website
            development process. Creating an e-commerce website using React
            JS, Express JS, and Tailwind, enabling admin management
            capabilities. Developing an engaging and responsive company
            profile website consisting of 11 pages with excellent
            performance.`}
            btn={"Read More"}
            links={
              "https://www.linkedin.com/in/mzackyfa/details/certifications/1708801386080/single-media-viewer/?profileId=ACoAAEV7gpABTjXZtpLyFmw6hsnpr-vhKu8om9A"
            }
          />

          <ResumeTimeLine
            industry={"Dicoding Indonesia"}
            time={"February 2024 - March 2027"}
            jobs={"Web Programming Basic Learning Class Certificate"}
            desc={`Using Bootstrap and Tailwind to enhance and speed up the website
            development process. Creating an e-commerce website using React
            JS, Express JS, and Tailwind, enabling admin management
            capabilities. Developing an engaging and responsive company
            profile website consisting of 11 pages with excellent
            performance.`}
            btn={"Read More"}
            links={"https://www.dicoding.com/certificates/4EXGKJ48QZRL"}
          />

          <ResumeTimeLine
            industry={"Eduwork"}
            time={"February 2024 - March 2027"}
            jobs={"Javascript Webinar Certificate"}
            desc={`Using Bootstrap and Tailwind to enhance and speed up the website
            development process. Creating an e-commerce website using React
            JS, Express JS, and Tailwind, enabling admin management
            capabilities. Developing an engaging and responsive company
            profile website consisting of 11 pages with excellent
            performance.`}
            btn={"Read More"}
            links={
              "https://www.linkedin.com/in/mzackyfa/details/certifications/1709131092288/single-media-viewer/?profileId=ACoAAEV7gpABTjXZtpLyFmw6hsnpr-vhKu8om9A"
            }
          />

          <ResumeTimeLine
            industry={
              "Gunadarma University Informatics Engineering Student Association"
            }
            time={"February 2024 - March 2027"}
            jobs={"Webinar Web Developer"}
            desc={`Using Bootstrap and Tailwind to enhance and speed up the website
            development process. Creating an e-commerce website using React
            JS, Express JS, and Tailwind, enabling admin management
            capabilities. Developing an engaging and responsive company
            profile website consisting of 11 pages with excellent
            performance.`}
            btn={"Read More"}
            links={
              "https://www.linkedin.com/in/mzackyfa/details/certifications/1708948305733/single-media-viewer/?profileId=ACoAAEV7gpABTjXZtpLyFmw6hsnpr-vhKu8om9A"
            }
          />
          <ResumeTimeLine
            industry={
              "Gunadarma University Informatics Engineering Student Association"
            }
            time={"February 2024 - March 2027"}
            jobs={"Workshop Web Development"}
            desc={`Using Bootstrap and Tailwind to enhance and speed up the website
            development process. Creating an e-commerce website using React
            JS, Express JS, and Tailwind, enabling admin management
            capabilities. Developing an engaging and responsive company
            profile website consisting of 11 pages with excellent
            performance.`}
            btn={"Read More"}
            links={
              "https://www.linkedin.com/in/mzackyfa/details/certifications/1708947464137/single-media-viewer/?profileId=ACoAAEV7gpABTjXZtpLyFmw6hsnpr-vhKu8om9A"
            }
          />

          <ResumeTimeLine
            industry={"Freecodecamp"}
            time={"September 2023 - September 2026"}
            jobs={"Responsive Web Design"}
            desc={`Using Bootstrap and Tailwind to enhance and speed up the website
            development process. Creating an e-commerce website using React
            JS, Express JS, and Tailwind, enabling admin management
            capabilities. Developing an engaging and responsive company
            profile website consisting of 11 pages with excellent
            performance.`}
            btn={"Read More"}
            links={
              "https://www.freecodecamp.org/certification/fcc01553f1b-d1d1-41af-8aab-28668a6ea5f9/responsive-web-design"
            }
          />

          <ResumeTimeLine
            industry={"State Vocational High School 7 Jakarta"}
            time={"Mei 2023 - Mei 2026"}
            jobs={"Computer Engineering Network Qualification Level II"}
            desc={`Using Bootstrap and Tailwind to enhance and speed up the website
            development process. Creating an e-commerce website using React
            JS, Express JS, and Tailwind, enabling admin management
            capabilities. Developing an engaging and responsive company
            profile website consisting of 11 pages with excellent
            performance.`}
            btn={"Read More"}
            links={
              "https://www.linkedin.com/in/mzackyfa/details/certifications/620736128/multiple-media-viewer/?profileId=ACoAAEV7gpABTjXZtpLyFmw6hsnpr-vhKu8om9A&treasuryMediaId=1635547815785"
            }
          />
        </Timeline>
      </div>
    </>
  );
};

export default ResumeHome;

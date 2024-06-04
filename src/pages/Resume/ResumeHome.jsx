import "../../tailwind.css";
import { Timeline } from "flowbite-react";
import { FaSuitcase, FaCertificate } from "react-icons/fa6";

const ResumeHome = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-5 pt-20 mb-32">
        <Timeline className="w-1/2">
          <Timeline.Item>
            <Timeline.Point icon={FaSuitcase} />
            <h1 className="text-xl font-bold pb-9">Professional Experience</h1>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>01 March 2022 - 30 May 2023</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Clinic Medika Plaza
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                IT Support / Internship
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Resolving issues with straight-through cables on the server
                alongside the IT Support team. Deploying IP telephones in every
                department within the company, in collaboration with the
                internship team. Addressing file handover issues for laptops, IP
                phones, and cellphones in every department, alongside deploying
                50 new laptops across the company.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>01 September 2023 - Present</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Birohmatika
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                Junior Full Stack Developer / Freelancer
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Using Bootstrap and Tailwind to enhance and speed up the website
                development process. Creating an e-commerce website using React
                JS, Express JS, and Tailwind, enabling admin management
                capabilities. Developing an engaging and responsive company
                profile website consisting of 11 pages with excellent
                performance.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={FaCertificate} />
            <h1 className="text-xl font-bold pb-9">
              Licence and Certification
            </h1>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>March 2024 - March 2027</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Dicoding Indonesia
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                Certificate in Learning Basic JavaScript Programming
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Resolving issues with straight-through cables on the server
                alongside the IT Support team. Deploying IP telephones in every
                department within the company, in collaboration with the
                internship team. Addressing file handover issues for laptops, IP
                phones, and cellphones in every department, alongside deploying
                50 new laptops across the company.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>March 2024 - March 2027</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Codepolitan
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                Bootstrap CSS Framework Learning Class Certificate
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Using Bootstrap and Tailwind to enhance and speed up the website
                development process. Creating an e-commerce website using React
                JS, Express JS, and Tailwind, enabling admin management
                capabilities. Developing an engaging and responsive company
                profile website consisting of 11 pages with excellent
                performance.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>March 2024 - March 2027</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Codepolitan
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                CSS Basic Learning Class Certificate
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Using Bootstrap and Tailwind to enhance and speed up the website
                development process. Creating an e-commerce website using React
                JS, Express JS, and Tailwind, enabling admin management
                capabilities. Developing an engaging and responsive company
                profile website consisting of 11 pages with excellent
                performance.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>March 2024 - March 2027</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Codepolitan
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                Basic JQuery Learning Class Certificate
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Using Bootstrap and Tailwind to enhance and speed up the website
                development process. Creating an e-commerce website using React
                JS, Express JS, and Tailwind, enabling admin management
                capabilities. Developing an engaging and responsive company
                profile website consisting of 11 pages with excellent
                performance.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>March 2024 - March 2027</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Malikussaleh University Informatics Engineering Student
                Association
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                INTECH National Webinar{" "}
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Using Bootstrap and Tailwind to enhance and speed up the website
                development process. Creating an e-commerce website using React
                JS, Express JS, and Tailwind, enabling admin management
                capabilities. Developing an engaging and responsive company
                profile website consisting of 11 pages with excellent
                performance.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>February 2024 - March 2027</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Alibaba Cloud Intelligence Group
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                Alibaba Cloud Learning Class Certificate
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Using Bootstrap and Tailwind to enhance and speed up the website
                development process. Creating an e-commerce website using React
                JS, Express JS, and Tailwind, enabling admin management
                capabilities. Developing an engaging and responsive company
                profile website consisting of 11 pages with excellent
                performance.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Dicoding Indonesia
              </h1>
              <Timeline.Time>February 2024 - March 2027</Timeline.Time>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                Web Programming Basic Learning Class Certificate
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Using Bootstrap and Tailwind to enhance and speed up the website
                development process. Creating an e-commerce website using React
                JS, Express JS, and Tailwind, enabling admin management
                capabilities. Developing an engaging and responsive company
                profile website consisting of 11 pages with excellent
                performance.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>February 2024 - March 2027</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Eduwork
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                Javascript Webinar Certificate
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Using Bootstrap and Tailwind to enhance and speed up the website
                development process. Creating an e-commerce website using React
                JS, Express JS, and Tailwind, enabling admin management
                capabilities. Developing an engaging and responsive company
                profile website consisting of 11 pages with excellent
                performance.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>February 2024 - March 2027</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Gunadarma University Informatics Engineering Student Association
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                Webinar Web Developer
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Using Bootstrap and Tailwind to enhance and speed up the website
                development process. Creating an e-commerce website using React
                JS, Express JS, and Tailwind, enabling admin management
                capabilities. Developing an engaging and responsive company
                profile website consisting of 11 pages with excellent
                performance.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>February 2024 - March 2027</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Gunadarma University Informatics Engineering Student Association
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                Workshop Web Development
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Using Bootstrap and Tailwind to enhance and speed up the website
                development process. Creating an e-commerce website using React
                JS, Express JS, and Tailwind, enabling admin management
                capabilities. Developing an engaging and responsive company
                profile website consisting of 11 pages with excellent
                performance.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>September 2023 - September 2026</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                Freecodecamp
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                Responsive Web Design
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Using Bootstrap and Tailwind to enhance and speed up the website
                development process. Creating an e-commerce website using React
                JS, Express JS, and Tailwind, enabling admin management
                capabilities. Developing an engaging and responsive company
                profile website consisting of 11 pages with excellent
                performance.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content className="px-5 py-2 border-2 rounded-xl bg-custom-green-light border-custom-green-medium">
              <Timeline.Time>Mei 2023 - Mei 2026</Timeline.Time>
              <h1 className="text-sm font-semibold text-custom-green-darker">
                State Vocational High School 7 Jakarta
              </h1>
              <Timeline.Title className="text-base font-semibold text-custom-green-darker">
                Computer Engineering Network Qualification Level II
              </Timeline.Title>
              <Timeline.Body className="text-sm font-normal text-custom-green-dark">
                Using Bootstrap and Tailwind to enhance and speed up the website
                development process. Creating an e-commerce website using React
                JS, Express JS, and Tailwind, enabling admin management
                capabilities. Developing an engaging and responsive company
                profile website consisting of 11 pages with excellent
                performance.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  );
};

export default ResumeHome;

/* eslint-disable react/prop-types */
const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              This is Engr Fawaz Ismail{" "}
              <span className="text-red-500">Yousef Al-Yousef</span>
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              AGRICULTURE ENGINEER, Specialized in Agriculture Mechanization,
              Head of DACO Landscaping, Roads & Ground Facilities Department
            </p>
          </div>

          {/* Work Experience */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-900 text-center">
              My Work Experience
            </h3>
            <p className="mt-4 text-lg text-center text-gray-600 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              I started my journey as a Project Manager in 2003 with Al-Abaad
              Establishment & Trading, Dammam, K.S.A.
            </p>

            {/* Timeline / Experience Grid */}
            <div className="mt-8 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
              {/* Single Experience Card */}
              <div className="bg-white p-6 rounded-lg shadow-md text-gray-700">
                <h4 className="text-2xl font-bold text-gray-900">
                  Project Manager | 2003 – 2004
                </h4>
                <p className="mt-2 font-bold">
                  Al-Abaad Establishment & Trading, Dammam, K.S.A.
                </p>

                <ExperienceSection
                  title="Key Responsibilities"
                  items={[
                    "Managed operations of Al-Abaad Trad Est projects efficiently.",
                    "Handled major projects including Prince Mohammad Bin Fahad University – Landscaping Contract and all landscaping & maintenance contracts.",
                  ]}
                />

                <ExperienceSection
                  title="Strategy & Planning"
                  items={[
                    "Developed and implemented landscaping delivery strategies for large-scale projects, aligned with master plans and sustainability goals.",
                    "Participated in early-stage landscape design coordination to ensure feasibility and delivery readiness.",
                    "Defined phasing plans, resource allocation, and logistics for landscape implementation.",
                  ]}
                />

                <ExperienceSection
                  title="Project Execution & Oversight"
                  items={[
                    "Led delivery of hard and soft landscaping including planting schemes, green spaces, lawns, trees, water features, irrigation, drainage, and hardscape elements.",
                    "Coordinated with design consultants, contractors, and site engineers to ensure on-time, within-budget execution.",
                    "Reviewed and approved construction and installation methodologies to maintain quality and environmental compliance.",
                  ]}
                />

                <ExperienceSection
                  title="Quality, Health, & Safety"
                  items={[
                    "Enforced strict quality control and HSE standards during site execution.",
                    "Conducted regular site inspections to ensure compliance with design specifications and regulations.",
                    "Ensured proper selection and sourcing of climate-resilient plants and sustainable landscape elements.",
                  ]}
                />

                <ExperienceSection
                  title="Stakeholder Coordination"
                  items={[
                    "Liaised with architects, planners, environmental teams, airport operations, and government authorities for seamless project delivery.",
                    "Managed third-party vendors, suppliers, and landscape contractors including performance evaluation and contract compliance.",
                    "Led stakeholder presentations on project progress, design intent, and delivery timelines.",
                  ]}
                />
              </div>
              {/* second part */}
              <div className="bg-white p-6 rounded-lg shadow-md text-gray-700">
                <h4 className="text-2xl font-bold text-gray-900">
                  CHIEF OF WORKSHOP | 2004 – 2006
                </h4>
                <p className="mt-2 font-bold">
                  UNASCO Ltd, King Fahad International Airport, Ground Handling,
                  Dammam, K.S.A.{" "}
                </p>

                <ExperienceSection
                  title="Key Responsibilities"
                  items={[
                    "General Management of UNASCO Ground Handling Project Workshop at King Fahad International Airport.",
                    "Managed the Operation and Maintenance of all Ground Handling Equipment.",
                    "Prepared and implemented of Maintenance Schedule of all Equipment.",
                    "Supervised and followed up with Equipment that requires maintenance and repair.",
                    "Estimated & requested materials necessary to repair equipment..",
                  ]}
                />

                <ExperienceSection
                  title="Sustainability & Innovation"
                  items={[
                    "Promote the use of native species, low-maintenance design, smart irrigation systems, and sustainable landscaping practices.",
                    "Integrate green infrastructure principles such as bioswales, urban cooling, pollinator-friendly design, and stormwater management.",
                    "Support LEED, Estidama, or other environment certification goals where applicable,Team Leadership",
                    "Lead and manage a team of landscape engineers, horticulturalists, site supervisors, and inspectors.  Provide guidance, mentorship, and performance oversight.",
                    "Build a high-performing, delivery-focused culture within the landscape delivery function.",
                  ]}
                />

                <ExperienceSection
                  title="Project Execution & Oversight"
                  items={[
                    "Led delivery of hard and soft landscaping including planting schemes, green spaces, lawns, trees, water features, irrigation, drainage, and hardscape elements.",
                    "Coordinated with design consultants, contractors, and site engineers to ensure on-time, within-budget execution.",
                    "Reviewed and approved construction and installation methodologies to maintain quality and environmental compliance.",
                  ]}
                />

                <ExperienceSection
                  title="Quality, Health, & Safety"
                  items={[
                    "Enforced strict quality control and HSE standards during site execution.",
                    "Conducted regular site inspections to ensure compliance with design specifications and regulations.",
                    "Ensured proper selection and sourcing of climate-resilient plants and sustainable landscape elements.",
                  ]}
                />

                <ExperienceSection
                  title="Stakeholder Coordination"
                  items={[
                    "Liaised with architects, planners, environmental teams, airport operations, and government authorities for seamless project delivery.",
                    "Managed third-party vendors, suppliers, and landscape contractors including performance evaluation and contract compliance.",
                    "Led stakeholder presentations on project progress, design intent, and delivery timelines.",
                  ]}
                />
              </div>
              {/* thred */}
              <div className="bg-white p-6 rounded-lg shadow-md text-gray-700">
                <h4 className="text-2xl font-bold text-gray-900">
                  LANDSCAPING ENGINEER | 2006 – 2010
                </h4>
                <p className="mt-2 font-bold">
                  Saad Group Co., Al Khobar, K.S.A.{" "}
                </p>

                <ExperienceSection
                  title="Key Responsibilities"
                  items={[
                    "Responsible for the Operation & Maintenance of 24 Greenhouses producing vegetables, indoor plants & seasonal flowers.",
                    "Preparation of Weekly & Monthly Reports.",
                    "Identify, Analyze & Recommend solutions for to solve any plant problems.",
                    "Supervision of more than 1,500 Manpower that includes Foremen & Laborers.",
                    "Management of Field Heavy Equipment including Mowers, Tractors, Trucks & Power Equipment.",
                  ]}
                />
              </div>
              {/* fourth prt */}
              <div className="bg-white p-6 rounded-lg shadow-md text-gray-700">
                <h4 className="text-2xl font-bold text-gray-900">
                  HEAD OF LANDSIDE FACILITIES DEPARTMENT | 2010 – Present
                </h4>
                <p className="mt-2 font-bold">Dammam Airport, K.S.A. </p>

                <ExperienceSection
                  title="Key Responsibilities"
                  items={[
                    "Handling the responsibility of Committee Head for Operation & Maintenance Contracts multiple times..",
                    "Managing DAMMAM AIRPORT Landside Facilities which include.",
                    "Landscaping & Irrigation",
                    "	Nursery Operation & Maintenance",
                    "Waste Management",
                    "Street Lighting",
                    "Roads & Grounds (including Roads, Fence, Signage & Traffic Signals),",
                    "Enforcing the KFIA Quality & Safety Standard to Contractors and Subcontractors",
                    "Ensuring the compliance in Contractual obligation of every Contractors & Subcontractors.",
                    "	Manpower, Equipment, Reports, Quality Assurance & Safety.",
                    "Proposing/Planning & Initiating improvement on KFIA Landside Facilities Department.",
                    "Following up & reviewing Daily, Weekly, & Monthly Progress Reports.",
                    "Overall management of more than 350 Manpower, including Management & Project Operations.",
                  ]}
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Subcomponent for experience sections
const ExperienceSection = ({ title, items }) => (
  <section className="mt-6">
    <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
    <ul className="list-disc list-inside mt-2 space-y-1">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </section>
);

export default About;

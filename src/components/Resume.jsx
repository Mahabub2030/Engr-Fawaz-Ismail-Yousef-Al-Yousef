import { FaStar } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timeline } from "./Data";

const Resume = () => {
  // Example general skills list
    const skills = [
    "Landscaping",
    "Stakeholder Management",
    "Interpersonal Skills",
    "Landscape Design",
    "Landscape Architecture",
    "Budget Management",
    "Urban Planning",
    "Stakeholder Engagement",
    "Landscape Maintenance",
    "Budgeting"
  ];
  return (
    <div className='md:rounded-xl bg-gray-300 md:m-7 flex-1 p-7 text-black'>
      <div className='mt-7'>
        <VerticalTimeline>
          {timeline.map((t, i) => {
            const contentStyle =
              i === 0
                ? { background: '', color: '#000' }
                : undefined;
            const arrowStyle =
              i === 0
                ? { borderRight: '7px solid rgb(33, 150, 243)' }
                : undefined;

            return (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={contentStyle}
                contentArrowStyle={arrowStyle}
                date={t.date}
                {...t.icon}
              >
                {t.title ? (
                  <>
                    <h3 className="vertical-timeline-element-title">{t.title}</h3>
                    {t.subtitle && (
                      <h4 className="vertical-timeline-element-subtitle">
                        {t.subtitle}
                      </h4>
                    )}
                    {t.desc && <p>{t.desc}</p>}
                  </>
                ) : undefined}
              </VerticalTimelineElement>
            );
          })}

          {/* --- General Skills Section --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--skills"
            icon={<FaStar className="text-white" />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="Skills"
          >
            <h3 className="text-xl  font-semibold mb-3"> More Skills.</h3>
            <ul className="list-disc pl-6 space-y-1">
              {skills.map((skill, index) => (
                <li key={index} className="text-gray-800">{skill}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Resume;

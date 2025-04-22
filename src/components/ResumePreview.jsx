import React, { useRef } from "react";
import "../styles/defaultView.css";
import "../styles/profile.css";
function ResumePreview({ formData, image, printRef }) {
  return (
    <>
      <div ref={printRef} className="pdf-content">
        <div>
          {
          formData.personal && (
            <section className="cv-header">
              <div className="resume-preview">
                {image && (
                  <img src={image} alt="Uploaded" style={{ width: "120px" }} />
                )}
              </div>
              <div>
                <h2 className="cv-header-h2">
                  {formData.personal.fullname
                    ? formData.personal.fullname
                    : "Full Name"}
                </h2>
                <div className="flex-text">
                  <p className="cv-header-p">
                    {formData.personal.email
                      ? formData.personal.email
                      : "Email"}{" "}
                  </p>{" "}
                  |
                  <p className="cv-header-p">
                    {formData.personal.phone
                      ? formData.personal.phone
                      : "Phone"}{" "}
                  </p>{" "}
                  |
                  <p className="cv-header-p">
                    {formData.personal.address
                      ? formData.personal.address
                      : "Address"}{" "}
                  </p>
                </div>
              </div>
            </section>
          )}

          {formData.personal.summary && (
            <section className="cv-summary">
              <h3 className="cv-title-header">Summary</h3>
              <p>
                {formData.personal.summary
                  ? formData.personal.summary
                  : "Your Professional Summary"}
              </p>
            </section>
          )}

          <section className="cv-education">
            <h3 className="cv-title-header">Education</h3>
            {formData.education.map(
              (edu) =>
                edu && (
                  <div className="edu-entry">
                    <div className="flex-text">
                      <h4 className="edu-exp-entry">
                        {edu.degree} - {edu.school}
                      </h4>
                      {/* <p className='text-items'>{edu.school}</p> */}
                    </div>
                    <div className="text-items">
                      <p className="status-fields text-items">
                        {" "}
                        {edu.startDate} - {edu.endDate}
                      </p>
                      <p className="status-fields text-items">{edu.location}</p>
                    </div>
                  </div>
                )
            )}
          </section>

          <section className="cv-experience">
            <h3 className="cv-title-header">Experience</h3>
            {formData.experience.map(
              (exp) =>
                exp && (
                  <div className="exp-entry">
                    <div className="flex-text"></div>
                    <h4 className="edu-exp-entry">
                      {exp.jobTitle} - {exp.company}
                    </h4>
                    <p className="status-fields text-items">
                      {" "}
                      {exp.startDate} - {exp.endDate}
                    </p>
                    <p className="status-fields text-items">{exp.location}</p>

                    <p className="info-fields text-items">{exp.description}</p>
                  </div>
                )
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default ResumePreview;

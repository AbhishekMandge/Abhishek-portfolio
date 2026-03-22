import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Wipro Ltd</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built distributed ETL pipelines handling multi-TB datasets on Azure cloud. Migrated SAS workflows to PySpark, optimizing SQL Server executing times from 3 hours to 30 minutes, and established CI/CD pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Sigmoid India</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architected scalable Azure-based Lakehouse platform. Designed REST API ingestion frameworks for real-time analytics. Automated migration of legacy SQL to DBT models with ChatGPT and reduced runtime via Spark optimizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

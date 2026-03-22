const TechnicalSkills = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '100px 20px', position: 'relative', zIndex: 10 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '25px', transition: 'transform 0.3s' }}>
          <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
            Languages
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Python', 'SQL', 'PySpark', 'SparkSQL', 'PowerShell'].map(skill => (
              <span key={skill} style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '5px 12px', borderRadius: '50px', fontSize: '13px', fontWeight: '500' }}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '25px', transition: 'transform 0.3s' }}>
          <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
            Cloud Platforms
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Azure (ADF)', 'Azure Databricks', 'Azure Synapse', 'Data Lake', 'Logic Apps', 'Azure Batch', 'Azure DevOps', 'Snowflake'].map(skill => (
              <span key={skill} style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '5px 12px', borderRadius: '50px', fontSize: '13px', fontWeight: '500' }}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '25px', transition: 'transform 0.3s' }}>
          <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
            Big Data Tools
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Apache Spark', 'Delta Lake', 'DBT', 'Airflow', 'CI/CD', 'Git', 'REST API Integration'].map(skill => (
              <span key={skill} style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '5px 12px', borderRadius: '50px', fontSize: '13px', fontWeight: '500' }}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '25px', transition: 'transform 0.3s' }}>
          <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
            Databases
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['SQL Server', 'MySQL', 'Cosmos DB'].map(skill => (
              <span key={skill} style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '5px 12px', borderRadius: '50px', fontSize: '13px', fontWeight: '500' }}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={{ gridColumn: '1 / -1', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '25px', transition: 'transform 0.3s' }}>
          <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
            Practices & AI
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['ETL/ELT', 'Data Modeling', 'Lakehouse Architecture', 'Data Governance', 'Data Quality', 'Observability', 'MLOps', 'Agile DevOps', 'Cloud Security', 'AI Agent', 'AI Workflow', 'Claude Code'].map(skill => (
              <span key={skill} style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '5px 12px', borderRadius: '50px', fontSize: '13px', fontWeight: '500' }}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;

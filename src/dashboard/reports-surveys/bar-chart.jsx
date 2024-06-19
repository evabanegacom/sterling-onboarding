import React from 'react';

const CircularBar = ({ segments }) => {
  const total = segments.reduce((sum, { value }) => sum + value, 0);
  const normalizedSegments = segments.map(({ value, color }) => ({
    value: (value / total) * 100,
    color
  }));

  const generateGradient = () => {
    let cumulativeValue = 0;
    return normalizedSegments
      .map(({ value, color }) => {
        const start = cumulativeValue;
        cumulativeValue += value;
        return `${color} ${start}%, ${color} ${cumulativeValue}%`;
      })
      .join(', ');
  };

  const gradient = `conic-gradient(${generateGradient()})`;

  const progressStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: `
      radial-gradient(closest-side, #fff 65%, transparent 65% 100%),
      ${gradient}
    `,
    position: 'relative',
  };

  const totalPercentage = normalizedSegments.reduce((sum, { value }) => sum + value, 0).toFixed(0);

  return (
    <div className='pb-5'>
      <div className="progress-bar" style={progressStyle}>
        <div style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}>
          <span>{totalPercentage/5}%</span>
        </div>
      </div>
    </div>
  );
};

export default CircularBar;

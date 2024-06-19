import React from 'react';

const CircularBar = ({ percentage, beforeBg, statisticsBg }) => {
  const progressValue = percentage > 100 ? 100 : Math.max(0, percentage);

  const generateKeyframes = () => {
    return `@keyframes progress {
      to {
        --progress-value: ${progressValue};
      }
    }`;
  };

  const progressStyle = {
    '--progress-value': progressValue,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: `
      radial-gradient(closest-side, #fff 80%, transparent 80% 100%),
      conic-gradient(${statisticsBg} calc(var(--progress-value) * 1%), ${beforeBg} calc(var(--progress-value) * 1%))
    `,
    position: 'relative',
  };

  const beforeStyle = {
    counterReset: `percentage ${progressValue}`,
    content: `'${progressValue}%'`,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    animation: 'progress 2s forwards',
  };

  return (
    <div className='pb-5'>
      <style>
        {`
          ${generateKeyframes()}
        `}
      </style>
      <div className="progress-bar" style={progressStyle}>
        <div style={beforeStyle} className='flex flex-col'>
            <span className=''>{percentage}%</span>
            <span className='text-sm'>Of all new hires</span>
        </div>
      </div>
    </div>
  );
};

export default CircularBar;

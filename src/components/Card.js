/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';

Card.propTypes = {};

function Card(props) {
  const { index, project } = props;
  const { info, link } = project;
  return (
    <div className="card card-margin">
      <div className="card__header no-border">
        <h5 className="card-title">#Project{index + 1}</h5>
      </div>
      <div className="card__body pt-0">
        <div className="widget-49">
          <div className="widget-49-title-wrapper">
            <div className="widget-49-date-primary">
              <span className="widget-49-date-day">{info.date}</span>
              <span className="widget-49-date-month">{info.month}</span>
            </div>
            <div className="widget-49-meeting-info">
              <span className="widget-49-pro-title">{info.type}</span>
              <span
                className="widget-49-meeting-time"
                style={{ color: '#ff9438' }}
              >
                {info.result}
              </span>
            </div>
          </div>
          <ol className="widget-49-meeting-points">
            {info.detail.map((task, index) => {
              return (
                <li
                  className="widget-49-meeting-item flex flex-row"
                  key={index}
                >
                  <span style={{ fontSize: '1rem' }}>
                    {index + 1}. {task}
                  </span>
                </li>
              );
            })}
            <a href={link} target="_blank" className="btn btn-view mt-2">
              View Source
            </a>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Card;

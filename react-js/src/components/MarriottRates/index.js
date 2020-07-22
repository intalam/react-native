import React, { useStaet, useEffect } from 'react';
import MarriottRewardsMemberRates from './MarriottRewardsMemberRates';
import Login from './Login';

const MarriottRates = (props) => {

  return (
    <section className="mi-sub-section sub-section l-print-fullbleed l-container t-bg-standard-10 l-margin-subsection-bottom-responsive-large l-margin-tile-vertical-default l-padding-subsection-vertical-none">
      <div className=" l-s-col-4 l-m-col-8 l-s-col-last l-m-col-last l-l-col-12 l-xl-col-12 l-l-col-last l-xl-col-last">
        <MarriottRewardsMemberRates />
        <Login />
      </div>
    </section >
  );
};

export default MarriottRates;
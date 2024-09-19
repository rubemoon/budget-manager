import React from 'react';
import { SummaryCardProps } from '../lib/types';

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, change, changeType, lastWeekValue, iconColor }) => {
  return (
    <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
      <div className="inline-flex justify-center items-center">
        <span className={`size-2 inline-block ${iconColor} rounded-full me-2`}></span>
        <span className="text-xs font-semibold uppercase text-gray-600 dark:text-neutral-400">{title}</span>
      </div>

      <div className="text-center">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-neutral-200">
          {value.toFixed(2)}
        </h3>
      </div>

      <dl className="flex justify-center items-center divide-x divide-gray-200 dark:divide-neutral-800">
        <dt className="pe-3">
          <span className={changeType === 'increase' ? 'text-green-600' : 'text-red-600'}>
            <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              {changeType === 'increase' ? (
                <path fillRule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
              ) : (
                <path fillRule="evenodd" d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              )}
            </svg>
            <span className="inline-block text-sm">
              {change.toFixed(2)}%
            </span>
          </span>
          <span className="block text-sm text-gray-500 dark:text-neutral-500">change</span>
        </dt>
        <dd className="text-start ps-3">
          <span className="text-sm font-semibold text-gray-800 dark:text-neutral-200">{lastWeekValue.toFixed(2)}</span>
          <span className="block text-sm text-gray-500 dark:text-neutral-500">last week</span>
        </dd>
      </dl>
    </div>
  );
};

export default SummaryCard;

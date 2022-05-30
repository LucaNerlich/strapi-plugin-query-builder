/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';
import pluginId from '../../pluginId';

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p>
      <EmptyStateLayout/>
    </div>
  );
};

export default memo(HomePage);

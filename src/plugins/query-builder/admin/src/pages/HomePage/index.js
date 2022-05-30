import React, {memo} from 'react';
import {BaseHeaderLayout, Layout} from '@strapi/design-system/Layout';
import {useIntl} from "react-intl";

const HomePage = () => {
  const {formatMessage} = useIntl();

  return (
    <Layout>
      <BaseHeaderLayout
        title={formatMessage({id: 'query-builder.Header.Title'})}
        subtitle={formatMessage({id: 'query-builder.Header.Subline'})}
        as="h2"
      />
    </Layout>
  );
};

export default memo(HomePage);

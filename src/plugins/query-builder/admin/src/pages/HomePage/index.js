import React, {memo} from 'react';
import {BaseHeaderLayout, Layout, ContentLayout} from '@strapi/design-system/Layout';
import {useIntl} from "react-intl";
import { Typography } from '@strapi/design-system/Typography';

const HomePage = () => {
  const {formatMessage} = useIntl();

  return (
    <Layout>
      <BaseHeaderLayout
        title={formatMessage({id: 'query-builder.Header.Title'})}
        subtitle={formatMessage({id: 'query-builder.Header.Subline'})}
        as="h2"
      />
      <ContentLayout>
        <Typography variant="omega">Todos</Typography>
        <Typography variant="omega">Create Custom Endpoint in "server" Part of Plugin that returns strapi.contentTypes</Typography>
        <Typography variant="omega">Hit that endpoint from plugin frontend</Typography>
        <Typography variant="omega">analyse response and build possible Queries</Typography>
        <Typography variant="pi" fontWeight="bold">
          Made with ❤️ by Luca
        </Typography>
      </ContentLayout>
    </Layout>
  );
};

export default memo(HomePage);

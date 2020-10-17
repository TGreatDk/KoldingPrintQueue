import Box from '@material-ui/core/Box/Box';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Box component="span" m={1}></Box>
    </>
  );
}

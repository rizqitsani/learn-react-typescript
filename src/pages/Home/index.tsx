import React from 'react';

import { Box, Grid, Link, VStack } from '@chakra-ui/react';

import { ColorModeSwitcher, Logo, Text } from '../../components';

const Home: React.FC = () => {
  return (
    <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <ColorModeSwitcher justifySelf='flex-end' />
        <VStack spacing={8}>
          <Logo />
          <Text />
          <Link
            color='teal.500'
            href='https://chakra-ui.com'
            fontSize='2xl'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  );
};

export default Home;

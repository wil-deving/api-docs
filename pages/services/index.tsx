
import { Heading, Stack } from '@chakra-ui/react';
import CodeField from './../../components/CodeField'

const Services = () => {
    return (
        <>
           <Stack spacing={4}>
                <Heading as='h3' size='lg'>Servicios API</Heading>
                <Heading as='h4' size='md'>Bisa Seguros y Reaseguros S.A.</Heading>
                <CodeField></CodeField>
            </Stack>
        </>
    )
}

export default Services;
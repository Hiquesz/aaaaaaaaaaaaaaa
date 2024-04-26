import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layoutPagina";
import { Button, Checkbox, Divider, Input, Stack } from '@chakra-ui/react'
import Checker from "../../components/Checker";
import { Heading, Box } from '@chakra-ui/react'
import Caixa from "../../components/Box";
import LayoutBox from "../../components/layoutBox";


export default function Tarefas() {
    const navigate = useNavigate()
    return (
    <Layout>
        <div>
            <Link to ='/'>Ir para Home</Link>
            <Heading as='h1' marginLeft='5px'>Lista de Tarefas</Heading>
            <Divider />
            <Heading as='h2' size='md' marginLeft='5px'>Inserir nova tarefa</Heading>
            <Input placeholder='Digite o título da task' size='sm' width={250} marginLeft='5px' marginTop='5px' fontSize={14}/>
            <Checkbox marginLeft='5px' marginTop='5px'>Realizada?</Checkbox>
            <Button colorScheme='blue' marginLeft='10px' size='sm'>Inserir</Button>
            <Divider marginTop='5px' marginBottom='5px'/>
            <Box alignItems='center' marginLeft='5px' bg='#e8e8e8' color='black'  p={2.5} width={430}>
                Tarefa 1 
                <Button marginLeft={200} colorScheme='red' size='sm'>Pendente</Button>
                <Button marginLeft={1} colorScheme='red' size='sm'>Excluir</Button>
            </Box>
            <Box alignItems='center' marginLeft='5px' bg='#e8e8e8' color='black'marginTop={2}  p={2.5} width={430}>
                Tarefa 2
                <Button marginLeft={200} colorScheme='red' size='sm'>Pendente</Button>
                <Button marginLeft={1} colorScheme='red' size='sm'>Excluir</Button>
            </Box>
            <LayoutBox>
                aaaa
            </LayoutBox>
        </div>
    </Layout>
    )
}

/* <Input backgroundColor='lightgrey' variant='flushed' placeholder='small size' maxWidth={1000} width={250}  
                fontSize={12} border={1} borderRadius={5} boxSizing="border-box" size='sm' /> */

/* marginLeft='5px' bg='#e8e8e8' color='black'  p={4} width={430} */   
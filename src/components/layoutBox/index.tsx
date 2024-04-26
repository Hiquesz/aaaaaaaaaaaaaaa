import { Button, Grid, GridItem, ButtonGroup } from "@chakra-ui/react"
import Caixa from "../Box"

interface Props {
    children: React.ReactNode
}

function LayoutBox(props: Props) {
    const {children} = props
    return (
        <Grid className="box" templateColumns='1fr' templateRows='64px auto 64px'>
            <div>
                <GridItem>
                <Caixa>
                {children}
                <ButtonGroup>
                    <Button marginLeft={200} colorScheme='red' size='sm'>Pendente</Button>
                    <Button marginLeft={1} colorScheme='red' size='sm'>Excluir</Button>
                    </ButtonGroup>
                </Caixa>      
                </GridItem>
            </div>
        </Grid>
    )
}

export default LayoutBox
import { Box } from "@chakra-ui/react"
import React from "react"

type Props = {
    children: React.ReactNode
}

function Caixa({children}:Props) {
    return (
        <Box 
        alignItems='center' 
        marginLeft='5px'
        bg='#e8e8e8'
        color='black'
        p={2.5} width={430}
        >
            {children}
        </Box>
    )
}


export default Caixa
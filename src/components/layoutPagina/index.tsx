import { Grid, GridItem } from "@chakra-ui/react"
import Footer from "../footer"
import Topo from "../header"

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const {children} = props
    return (
        <div className="container">
            <Topo />
            <div className="main">
            {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
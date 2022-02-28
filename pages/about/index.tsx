import React, {FC} from "react";
import Heading from "../../shared/ui/heading/Heading";
import Navbar from '../../shared/ui/navbar/Navbar'

const About: FC = () => {
    return (
        <div>
            <Navbar />
            <Heading text='About' />
            <div>About</div>
        </div>
    )
}

export default About
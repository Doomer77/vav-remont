import React, {FC} from "react";
import Image from "next/image";

const Logo:FC = () => {
    return (
        <Image
            src='/logo.png'
            width={115}
            height={74}
            alt='Vav remont'
        />
    )
}
export default Logo
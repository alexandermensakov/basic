import React from 'react'
import Image from 'next/image'
const index = () => {
    return (
        <div className="grid-element">
            <div>CHROME</div>
            <Image
                src={"/google.svg"}
                alt='hello'
                width={500}
                height={500}
            />
            <div>THIS IS CHROME AND ITS VERY USEFUL      </div>
        </div>
    )
}

export default index
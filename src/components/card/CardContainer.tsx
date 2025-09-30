import { motion } from "motion/react"
import CardComponent from "./CardComponent"


import { Features } from "./cardData"



function CardContainer() {





    return (
        <>
            <div className="container mx-auto p-5 mt-10 ">
              
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">

                    {
                        Features.map((item, index) => (
                            <CardComponent key={item.id} card={item} index={index} />
                        ))
                    }
                </motion.div>

            </div>
        </>
    )
}

export default CardContainer
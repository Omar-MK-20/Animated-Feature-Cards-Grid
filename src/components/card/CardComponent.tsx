import { easeOut, motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import type { FeatureCard } from "./cardData";

function CardComponent({ card }: { card: FeatureCard }) {
    


    return (
        <>
            <motion.div

                className="rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ y: 0, transition: { duration: 0.6 } }}
                whileInView={{ opacity: 1, boxShadow: `7px 19px 44px 1px rgba(0,0,0,0.77)`, scale: 1.03, transition: { duration: 0.6, ease: easeOut } }}
                viewport={{ margin: "-400px 0px -400px 0px" }}
                whileHover={{ boxShadow: `7px 19px 44px 1px rgba(239,177,0,0.77)`, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.99 }}
            >
                <Card className="bg-slate-900 w-full shadow-2xl h-full cursor-pointer">
                    <CardHeader>
                        <CardTitle className="text-white font-extrabold text-lg">{card.title}</CardTitle>
                        <CardAction>{card.icon}</CardAction>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-gray-300 ">{card.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                        <span>
                            {card.accent &&
                                <Badge className="bg-yellow-500">
                                    {card.accent}
                                </Badge>}
                        </span>
                    </CardFooter>
                </Card>
            </motion.div>
        </>
    )
}

export default CardComponent
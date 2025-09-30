import { ArrowDownCircle } from "lucide-react"
import CardContainer from "../components/card/CardContainer"

function Home() {
    return (
        <>

            <div className="pt-30">
                <div className="container mx-auto px-10">

                    <div className="bg-slate-800 rounded-md p-2 flex items-center gap-1 my-0 sticky top-5 justify-center shadow-2xl">
                        <ArrowDownCircle color="white" />
                        <h1 className="text-2xl font-extrabold text-white">See what we can do</h1>
                    </div>

                    <div className="pt-10">

                        <CardContainer />
                        <CardContainer />
                        <CardContainer />


                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
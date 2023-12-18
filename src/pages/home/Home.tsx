import HeaderControls from "../../components/header/HeaderControls";
import './Home.style.css'
import '../../index.css'

export const HomePage = () => {
    return (
        <>
            <HeaderControls />
            <div className="mx-24 mt-10">
                <p className="font-bold text-2xl mb-10 mt-20 qms">Quality Management System</p>
                <p className="text-8xl featured font-bold">Full-featured quality system,<br />
                    business-oriented to achieve <br /> results aligned with QA engineers
                </p>
                <p className="text-3xl mt-10 text-stone-500 featured font-medium">Organize top-level quality control at all stages <br /> of the development and creation of your dream projects.</p>
                <div className="block h-96 bg-stone-400 mt-10 rounded-3xl">.</div>
                <div className="flex justify-center gap-14 text-qms mt-16">
                    <div className="mr-14">
                        <p className="text-3xl font-bold mb-3">Overview</p>
                        <p className="text-2xl mt-5">We have integrated the experience of many quality engineers and made a tool that indicates the exact quality value of your project based on the development management system and the coverage of their checks.</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold mb-3">Approach</p>
                        <p className="text-2xl mt-5">Based on our practical experience, we have created a system that allows you to obtain an assessment of the quality of coverage by inspection of any project of any size. The system is suitable form many areas: Internet technology, device design, manufacturing, aircraft manufacturing, etc.</p>
                    </div>
                </div>

                <div className="flex justify-start gap-20 mt-24">
                    <div className="img-stub bg-red-200">
                    </div>

                    <div>
                        <p className="text-8xl featured font-bold"> Quality is an <br /> indicator <br/> measured in <br />numbers</p>
                        <p className="mt-5 text-3xl text-stone-500">We collect and analyze the <br /> percentage of coverage by test <br /> checks for all the functionality you <br /> have implemented</p>
                        <button className="btn-qms py-3 px-10 mt-10 mb-10"><a href="/free-trial">Get Started</a></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
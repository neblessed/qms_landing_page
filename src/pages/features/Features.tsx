import { RefreshCw } from 'lucide-react';
import "../../index.css"

export const FeaturesPage = () => {
    return (
        <div className="flex justify-center gap-3 mt-96">
            <p className="text-2xl text-qms font-bold">We are working on this page </p>
            <RefreshCw className="animate-spin" />
            <button className="bg-stone-800 rounded-3xl absolute px-10 py-3 mt-12 text-white text-qms font-bold">
                <a href="/">Go to Homepage</a>
            </button>
        </div>
    );

}

export default FeaturesPage;
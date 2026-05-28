import type{ Job } from "../types/Job";

const JobCard = ({job }: {job: Job}) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-indigo-300 transition cursor-pointer">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                    <p className="text-indigo-600 font-medium mt-1">{job.company}</p>
                </div>
                <span className="bg-indigo-50 text-indigo-600 text-sm px-3 py-1 rounded-full"> {job.location} </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {job.skills_required.split(",").map(skill => (
                    <span key={skill} className ="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{skill.trim()}</span>
                ))}
            </div>

            <div className="mt-4 flex justify-between items-center">
                <span className="text-green-600 font-medium text-sm">{job.salary_range}</span>
                <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700">Apply Now</button>
            </div>
        </div>
    )
}
export default JobCard;
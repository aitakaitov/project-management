import noProjectsImage from '../assets/no-projects.png';

function NoProjectPanel({ addProjectCallback }) {
    return (
        <div className="flex flex-col p-16 w-full justify-start items-center">
            <img
                className="object-contain p-4 w-28"
                src={noProjectsImage}
                alt="Pen and a writing pad"
            />
            <h2 className="text-slate-700 text-3xl pb-6">No project selected</h2>
            <p className="text-slate-600 text-lg pb-6">
                Select a project or get started with a new one
            </p>
            <button
                className="bg-slate-800 text-slate-300 rounded p-2 pl-4 pr-4"
                onClick={addProjectCallback}
            >
                New Project
            </button>
        </div>
    );
}

export default NoProjectPanel;

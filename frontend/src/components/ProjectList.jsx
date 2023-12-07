function ProjectList({ projects, activeProjectUUID, selectProjectCallback, addProjectCallback }) {
    return (
        <div className="grid grid-flow-row auto-rows-min gap-4 bg-slate-800 p-4 h-screen rounded-tr-xl">
            <h2 className="text-slate-100 uppercase text-3xl pb-2">Your Projects</h2>
            <button
                className="rounded shadow-sm bg-slate-300 text-slate-800 p-2 2xl:w-1/2 w-full mb-2"
                onClick={addProjectCallback}
            >
                + Add Project
            </button>
            {projects.map((project) => {
                return (
                    <button
                        key={project.uuid}
                        className={`w-full space-y-2 p-2 rounded shadow-sm overflow-hidden whitespace-nowrap ${
                            activeProjectUUID === project.uuid
                                ? 'bg-slate-600 text-slate-100'
                                : 'bg-slate-700 text-slate-200 hover:text-slate-100 hover:bg-slate-600'
                        }`}
                        onClick={() => selectProjectCallback(project.uuid)}
                    >
                        {project.title}
                    </button>
                );
            })}
        </div>
    );
}

export default ProjectList;

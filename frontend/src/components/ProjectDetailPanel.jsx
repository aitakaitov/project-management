import { useRef } from 'react';

function ProjectDetailPanel({
    project,
    deleteProjectCallback,
    addTaskCallback,
    deleteTaskCallback
}) {
    console.log(project);

    const taskRef = useRef();

    function onAddTask() {
        addTaskCallback(taskRef.current.value);
        taskRef.current.value = '';
    }

    return (
        <div className="flex flex-col p-16 w-full">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-semibold text-slate-800">{project.title}</h1>
                <button
                    className="text-slate-800 border rounded p-2 pl-4 pr-4 ml-4 w-40 hover:text-slate-100 hover:bg-slate-800"
                    onClick={() => deleteProjectCallback(project.uuid)}
                >
                    Delete Project
                </button>
            </div>
            <p className="pt-1 text-slate-600">{project.due.toString()}</p>
            <p className="text-slate-800 pt-4 text-xl">{project.description}</p>
            <hr className="border-t border-slate-300 my-4" />
            <h2 className="text-2xl font-semibold text-slate-800">Tasks</h2>
            <div className="flex flex-col pt-2">
                <div className="flex flex-row justify-start pt-2">
                    <input
                        className="rounded border w-1/2 pt-2 pb-2"
                        ref={taskRef}
                    ></input>
                    <button
                        className="border rounded p-2 ml-4 w-40 text-slate-100 bg-slate-800"
                        onClick={() => onAddTask()}
                    >
                        Add Task
                    </button>
                </div>
                {project.tasks.map((task) => {
                    return (
                        <div
                            key={task.uuid}
                            className="flex flex-row justify-start pt-2"
                        >
                            <span className="w-1/2 pt-2 pb-2">{task.name}</span>
                            <button
                                className="border rounded p-2 ml-4 w-40 text-slate-800 hover:text-slate-100 hover:bg-slate-800"
                                onClick={() => deleteTaskCallback(task.uuid)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectDetailPanel;

import { useRef } from 'react';
import Input from './Input';

function AddProjectPanel({ addProjectCallback, cancelAddCallback }) {
    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();

    function createClicked() {
        addProjectCallback({
            title: titleRef.current.value,
            description: titleRef.current.value,
            due: dateRef.current.value,
            tasks: []
        });
    }

    return (
        <div className="flex flex-col p-16 w-full">
            <div className="flex justify-end">
                <button
                    className="bg-slate-800 text-slate-300 rounded p-2 pl-4 pr-4 w-40"
                    onClick={createClicked}
                >
                    Create Project
                </button>
                <button
                    className="text-slate-800 bg-slate-300 rounded p-2 pl-4 pr-4 ml-4 w-40"
                    onClick={cancelAddCallback}
                >
                    Cancel
                </button>
            </div>
            <div className="flex flex-col justify-start gap-4">
                <Input
                    className="rounded outline-1 mt-1 p-1"
                    ref={titleRef}
                    label="title"
                />
                <Input
                    className="rounded outline-1 mt-1 p-1"
                    ref={descRef}
                    label="description"
                    type="textarea"
                />
                <Input
                    className="rounded outline-1 mt-1 w-1/3 p-1"
                    ref={dateRef}
                    label="date due"
                    type="date"
                />
            </div>
        </div>
    );
}

export default AddProjectPanel;

import AddProjectPanel from './components/AddProjectPanel';
import NoProjectPanel from './components/NoProjectPanel';
import ProjectDetailPanel from './components/ProjectDetailPanel';
import ProjectList from './components/ProjectList';
import { useState, useEffect } from 'react';
import { generateUUID } from './utils';
import { ProjectsApi, ApiClient } from '../api/src';
// import { CreateProjectRequest } from '../api/src/model/CreateProjectRequest.js';

const BASE_PATH = 'http://localhost:5195'

function App() {
    const [projects, setProjects] = useState([]);
    const [selectedProjectUUID, setSelectedProjectUUID] = useState(undefined);
    const [currentView, setCurrentView] = useState('no-project');

    useEffect(() => {
        const api = new ApiClient(BASE_PATH);
        const client = new ProjectsApi(api);

        client.projectsGet((err, data, response) => {
            setProjects(data.projects);
            console.log(data.projects)
        })
    }, [])

    function handleSelectProject(uuid) {
        if (selectedProjectUUID === uuid) {
            return;
        }

        setSelectedProjectUUID(uuid);
        setCurrentView('detail-project');
    }

    function handleAddProjectClicked() {
        setCurrentView('new-project');
    }

    function handleNewProject(newProject) {
        if (newProject.title === '') {
            return;
        }

        const api = new ApiClient(BASE_PATH);
        const client = new ProjectsApi(api);

        client.projectsPost({createProjectRequest: 
                    newProject
                },
                (err, data, response) => {
                    newProject.uuid = data.id
                    setProjects((prevProjects) => {
                        const newProjects = [...prevProjects.map((p) => ({ ...p })), newProject];
                        return newProjects;
                    });
            
                    setSelectedProjectUUID(newProject.uuid);
                    setCurrentView('detail-project');
                })
    }

    function backToNoProject() {
        setCurrentView('no-project');
        setSelectedProjectUUID(-1);
    }

    function handleDeleteProject(uuid) {
        const api = new ApiClient(BASE_PATH);
        const client = new ProjectsApi(api);

        client.projectProjectIdDelete(uuid, () => {
            setProjects((prevProjects) => {
                const newProjects = [
                    ...prevProjects.filter((p) => p.uuid !== uuid).map((p) => ({ ...p }))
                ];
                return newProjects;
            });
    
            backToNoProject();
        })     
    }

    function handleAddTask(task) {
        if (task === '') {
            return;
        }

        const taskObj = { name: task };
        const api = new ApiClient(BASE_PATH);
        const client = new ProjectsApi(api);

        client.projectProjectIdPost(selectedProjectUUID, {createTaskRequest: {title: task}}, (err, data, response) => {
            // for some reason here data is null
            data = JSON.parse(response.text);
            taskObj.uuid = data.id;
            setProjects((prevProjects) => {
                const newProjects = prevProjects.map((project) => {
                    if (project.uuid === selectedProjectUUID) {
                        return {
                            ...project,
                            tasks: [...project.tasks.map((t) => ({ ...t })), taskObj]
                        };
                    } else {
                        return project;
                    }
                });
                return newProjects;
            });
        })  
    }

    function handleDeleteTask(uuid) {
        const api = new ApiClient(BASE_PATH);
        const client = new ProjectsApi(api);

        client.projectProjectIdTaskIdDelete(uuid, selectedProjectUUID, () => {
            setProjects((prevProjects) => {
                const newProjects = prevProjects.map((project) => {
                    if (project.uuid === selectedProjectUUID) {
                        return {
                            ...project,
                            tasks: [...project.tasks.filter((t) => t.uuid !== uuid)]
                        };
                    } else {
                        return project;
                    }
                });
    
                return newProjects;
            });
        });
    }

    return (
        <div className="font-sans bg-slate-100">
            <div className="lg:h-10"></div>
            <div className="flex lg:w-2/3">
                <div className="w-2/5">
                    <ProjectList
                        projects={projects}
                        activeProjectUUID={selectedProjectUUID}
                        selectProjectCallback={handleSelectProject}
                        addProjectCallback={handleAddProjectClicked}
                    />
                </div>
                {currentView === 'no-project' && (
                    <NoProjectPanel addProjectCallback={handleAddProjectClicked} />
                )}
                {currentView === 'new-project' && (
                    <AddProjectPanel
                        addProjectCallback={handleNewProject}
                        cancelAddCallback={backToNoProject}
                    />
                )}
                {currentView === 'detail-project' && (
                    <ProjectDetailPanel
                        project={projects.filter((p) => p.uuid === selectedProjectUUID)[0]}
                        deleteProjectCallback={handleDeleteProject}
                        addTaskCallback={handleAddTask}
                        deleteTaskCallback={handleDeleteTask}
                    />
                )}
            </div>
        </div>
    );
}

export default App;

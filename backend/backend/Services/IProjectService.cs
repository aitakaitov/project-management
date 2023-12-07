using backend.Model.Entities;

namespace backend.Services
{
    public interface IProjectService
    {
        public List<Project> GetProjects();

        public Guid AddProject(Project project);

        public bool RemoveProject(Guid projectId);

        public Guid? AddTaskToProject(Model.Entities.Task task, Guid projectId);

        public bool RemoveTaskFromProject(Guid taskId, Guid projectId);
    }
}

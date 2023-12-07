using backend.Model;
using backend.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class ProjectService : IProjectService
    {
        private readonly DatabaseContext context;

        public ProjectService(DatabaseContext context)
        {
            this.context = context;
        }

        public List<Project> GetProjects()
        {
            return context.Projects.OrderBy(p => p.Due).Include(p => p.Tasks).ToList();
        }

        public Guid AddProject(Project project)
        {   
            context.Projects.Add(project);
            context.SaveChanges();

            return (Guid)project.Uuid;
        }

        public bool RemoveProject(Guid projectId)
        {
            var project = context.Projects.Where(p => p.Uuid == projectId).Single();
            if (project == null)
            {
                return false;
            }

            context.Projects.Remove(project);
            context.SaveChanges();
            return true;
        }

        public Guid? AddTaskToProject(Model.Entities.Task task, Guid projectId)
        {
            var project = context.Projects.Where(p => p.Uuid == projectId).Single();
            if (project == null)
            {
                return null;
            }
            project.Tasks.Add(task);
            context.SaveChanges();
            return task.Uuid;
        }

        public bool RemoveTaskFromProject(Guid taskId, Guid projectId)
        {
            var project = context.Projects.Where(p => p.Uuid == projectId).Include(p => p.Tasks).Single();
            if (project == null)
            {
                return false;
            }

            var task = project.Tasks.Where(t => t.Uuid  == taskId).Single();
            if (task == null)
            {
                return false;
            }

            project.Tasks.Remove(task);
            context.SaveChanges();
            return true;
        }
    }
}

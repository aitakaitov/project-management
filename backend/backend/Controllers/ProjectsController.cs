using backend.Schemas;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectService projectService;

        public ProjectsController(IProjectService projectService)
        {
            this.projectService = projectService;
        }

        [HttpGet("/projects")]
        public ProjectList GetProjects()
        {
            return new ProjectList() { Projects = projectService.GetProjects() };
        }

        [HttpPost("/projects")]
        public ActionResult<IdResponse> CreateProject([FromBody] CreateProjectRequest cpRequest)
        {
            var id = projectService.AddProject(new Model.Entities.Project()
            {
                Title = cpRequest.Title,
                Description = cpRequest.Description,
                Due = cpRequest.Due
            });

            return Ok(new IdResponse() { Id = id });
        }

        [HttpDelete("/project/{projectId}")]
        public ActionResult AddTask(Guid projectId)
        {
            bool success = projectService.RemoveProject(projectId);
            if (!success)
            {
                return BadRequest();
            }
            else
            {
                return Ok();
            }
        }

        [HttpPost("/project/{projectId}")]
        public ActionResult<IdResponse> AddTask([FromBody] CreateTaskRequest ctRequest, Guid projectId)
        {
            Guid? uuid = projectService.AddTaskToProject(new Model.Entities.Task { Name = ctRequest.Title, TimeCreated = DateTime.Now }, projectId);
            if (!uuid.HasValue)
            {
                return BadRequest();
            }
            else 
            {
                return Ok(new IdResponse() { Id = uuid.Value });
            }
        }

        [HttpDelete("/project/{projectId}/{taskId}")]
        public ActionResult AddTask(Guid taskId, Guid projectId)
        {
            bool success = projectService.RemoveTaskFromProject(taskId, projectId);
            if (!success)
            {
                return BadRequest();
            }
            else
            {
                return Ok();
            }
        }
    }
}
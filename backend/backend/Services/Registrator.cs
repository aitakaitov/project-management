namespace backend.Services
{
    public class Registrator
    {
        public static void Register(WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<IProjectService, ProjectService>();
        }
    }
}

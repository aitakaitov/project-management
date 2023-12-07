namespace backend.Schemas
{
    public class CreateProjectRequest
    {
        public string Title {  get; set; }
        public string Description { get; set; }
        public DateTime Due { get; set; }
    }
}

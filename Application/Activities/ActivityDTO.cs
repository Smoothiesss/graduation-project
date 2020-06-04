using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Application.Activities
{
    public class ActivityDTO
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public string Address { get; set; }

        public string Category { get; set; }
        public string Venue { get; set; }


        [JsonPropertyName("attendees")]
        public ICollection<AttendeeDTO> UserActivites { get; set;}
    }
}
using System;
using System.Collections.Generic;

namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public string Address { get; set; }

        public string Category { get; set; }
        public string Venue { get; set; }

        public virtual ICollection<UserActivity> UserActivities { get; set; }


    }
}
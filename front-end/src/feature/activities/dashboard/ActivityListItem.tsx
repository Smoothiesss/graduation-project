import React from "react";
import { Item, Button, Segment, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import ActivityStore from "../../../app/stores/activityStore";
import { IActivity } from "../../../app/models/activity";
import { format } from "date-fns";
import ActivityListItemAttendee from "./ActivityListItemAttendee";

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  // const activityStore = useContext(ActivityStore);
  // const { deleteActivity, submitting, target } = activityStore;
  const host = activity.attendees.filter(x => x.isHost)[0];

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              circular
              src={host.image || "/assets/user.png"}
            ></Item.Image>
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>{activity.title}</Item.Header>
              {/* <Item.Meta>{activity.date}</Item.Meta> */}
              <Item.Description>Hosted by {host.displayName}</Item.Description>
              {activity.isHost &&
              <Item.Description>
                <Label
                  basic
                  color="orange"
                  content="You are hosting this activity"
                />
              </Item.Description>}
              {activity.isGoing && !activity.isHost &&
              <Item.Description>
                <Label
                  basic
                  color="green"
                  content="You are going to this activity"
                />
              </Item.Description>}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name="clock" /> {format(activity.date, "h:mm a")}
        <Icon name="marker" /> {activity.venue}, {activity.address}
      </Segment>
      <Segment secondary>
        <ActivityListItemAttendee attendees={activity.attendees} />
      </Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`activities/${activity.id}`}
          floated="right"
          content="View"
          color="blue"
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;

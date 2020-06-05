import React, { useContext, useEffect } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";
import Loading from '../../../app/component/page/Loading'
// import ActivityStore from "../../../app/stores/activityStore";
import { RootStoreContext } from "../../../app/stores/rootStore";

const ActivityDashboard: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { loadActivities, loadingInitial } = rootStore.activityStore;

  useEffect(() => {
    //like componentDidMount
    loadActivities();
  }, [loadActivities]); // empty array to stop useEffect

  // if (loadingInitial) return <Loading />;

  return (
    <Grid style={{
      margin: 'auto',
      width: 1188
    }}>
      <GridColumn width={10}>
        <ActivityList />
      </GridColumn>
      <GridColumn width={9}>
        <h2>Activity filters</h2>
        {/* {activity && !editMode && (
          <ActivityDetail/>
        )}
        {editMode && (
          <ActivityForm
            key={(activity && activity.id) || 0}
            activity={activity!}
          />
        )} */}
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDashboard)

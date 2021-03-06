import React from 'react';
import Grid from "@material-ui/core/Grid";

import ProjectViewer from "./components/projects/ProjectViewer";


const App: React.FC = () => {
  return (
    <div style={{background: "grey", height: window.screen.availHeight}}>
     <Grid container style={{height: "100%"}}>
       <ProjectViewer/>
       {/*<Grid item xs={6} style={{alignItems: "center", display: "inherit"}}>*/}
       {/*  <Paper style={{margin: "auto", padding: 20}}>This page is under construction</Paper>*/}
       {/*</Grid>*/}
       {/*<Grid item xs={6} style={{margin: "auto"}}>*/}
       {/*  <img alt="Truck" style={{height: "40%"}} src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/dumptruck_car_vehicle_storage_container_road.jpg?itok=TWK0CbX_"/>*/}
       {/*</Grid>*/}
     </Grid>
    </div>
  );
};

export default App;

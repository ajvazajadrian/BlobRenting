import React, {Component} from "react";
import Title from "./Title.jsx";


class Home extends Component{

 render(){
     return(
        <Title
        strings={[
          'Computer',
          'Machine',
          'Drill',
          'Bike',
          'Car',
          'Dress',
          'Camera',
          'Printer',
          'Toy',
          'Costume',
          
          
          // 'Some <i>Dress</i> are slanted',
          // 'Some <strong>strings</strong> are bold'
        ]}
      />
     )
 }

}


export default Home;